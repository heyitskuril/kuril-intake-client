import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { MoreHorizontal, Edit2, Trash2 } from 'lucide-react';
import { Note } from '../types/notes.types';
interface NoteItemProps {
  note: Note;
  onDelete: (id: string) => void;
}
export const NoteItem: React.FC<NoteItemProps> = ({
  note,
  onDelete
}) => {
  return <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow group">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xs font-bold">
            {note.userAvatar || 'U'}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{note.userName}</p>
            <p className="text-xs text-gray-500">
              {formatDistanceToNow(new Date(note.createdAt), {
              addSuffix: true
            })}
            </p>
          </div>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
          <button className="p-1 text-gray-400 hover:text-blue-600 rounded">
            <Edit2 className="w-3 h-3" />
          </button>
          <button className="p-1 text-gray-400 hover:text-red-600 rounded" onClick={() => onDelete(note.id)}>
            <Trash2 className="w-3 h-3" />
          </button>
        </div>
      </div>
      <div className="text-sm text-gray-700 pl-10">{note.content}</div>
    </div>;
};