import React, { useState } from 'react';
import { Button } from '../../../shared/components/UI/Button';
interface NoteFormProps {
  onSubmit: (content: string) => Promise<boolean>;
}
export const NoteForm: React.FC<NoteFormProps> = ({
  onSubmit
}) => {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    setIsSubmitting(true);
    const success = await onSubmit(content);
    setIsSubmitting(false);
    if (success) {
      setContent('');
    }
  };
  return <form onSubmit={handleSubmit} className="mb-6">
      <div className="relative">
        <textarea className="w-full border border-gray-300 rounded-lg p-3 pr-24 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none text-sm min-h-[80px]" placeholder="Add an internal note..." value={content} onChange={e => setContent(e.target.value)} />
        <div className="absolute bottom-3 right-3">
          <Button size="sm" type="submit" isLoading={isSubmitting} disabled={!content.trim()}>
            Add Note
          </Button>
        </div>
      </div>
    </form>;
};