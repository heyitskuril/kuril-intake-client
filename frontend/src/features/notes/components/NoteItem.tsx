import React from 'react';
import { Note } from '../types/notes.types';
import { formatRelativeTime, getInitials } from '@shared/utils/formatters';
import { Trash2, Edit } from 'lucide-react';
import { Button } from '@shared/components/UI/Button';

interface NoteItemProps {
  note: Note;
  onEdit?: (note: Note) => void;
  onDelete?: (noteId: string) => void;
  canEdit?: boolean;
}

export const NoteItem: React.FC<NoteItemProps> = ({ 
  note, 
  onEdit, 
  onDelete,
  canEdit = false 
}) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3 flex-1">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-medium">
              {note.user ? getInitials(note.user.name) : '?'}
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <p className="text-sm font-medium text-gray-900">
                {note.user?.name || 'Unknown User'}
              </p>
              <span className="text-xs text-gray-500">
                {formatRelativeTime(note.created_at)}
              </span>
            </div>
            <p className="mt-1 text-sm text-gray-700 whitespace-pre-wrap">{note.note}</p>
          </div>
        </div>
        
        {canEdit && (
          <div className="flex items-center space-x-2 ml-4">
            {onEdit && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onEdit(note)}
              >
                <Edit className="w-4 h-4" />
              </Button>
            )}
            {onDelete && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onDelete(note.id)}
              >
                <Trash2 className="w-4 h-4 text-red-600" />
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};