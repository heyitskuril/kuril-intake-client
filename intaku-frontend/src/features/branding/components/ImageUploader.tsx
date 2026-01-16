import React, { useState, useRef } from 'react';
import { Button } from '../../../shared/components/UI/Button';
import { Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react';
interface ImageUploaderProps {
  label: string;
  value: string | null;
  onChange: (url: string | null) => void;
  onUpload: (file: File) => Promise<string>;
  accept?: string;
  helperText?: string;
}
export const ImageUploader: React.FC<ImageUploaderProps> = ({
  label,
  value,
  onChange,
  onUpload,
  accept = 'image/*',
  helperText
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setIsUploading(true);
      const url = await onUpload(file);
      onChange(url);
    } catch (error) {
      console.error('Upload failed', error);
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };
  return <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>

      <div className="flex items-start gap-4">
        {value ? <div className="relative group w-32 h-20 bg-gray-100 rounded-lg border border-gray-200 overflow-hidden">
            <img src={value} alt="Preview" className="w-full h-full object-cover" />
            <button onClick={() => onChange(null)} className="absolute top-1 right-1 p-1 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50">
              <X className="w-3 h-3 text-red-500" />
            </button>
          </div> : <div className="w-32 h-20 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
            <ImageIcon className="w-8 h-8" />
          </div>}

        <div className="flex-grow">
          <input type="file" ref={fileInputRef} className="hidden" accept={accept} onChange={handleFileChange} />
          <Button type="button" variant="secondary" size="sm" onClick={() => fileInputRef.current?.click()} isLoading={isUploading} leftIcon={<Upload className="w-4 h-4" />}>
            Upload Image
          </Button>
          {helperText && <p className="mt-2 text-xs text-gray-500">{helperText}</p>}
        </div>
      </div>
    </div>;
};