import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useNotes } from '../hooks/useNotes';
import { NoteItem } from './NoteItem';
import { NoteForm } from './NoteForm';
import { Loading } from '../../../shared/components/UI/Loading';
interface NotesListProps {
  clientId: string;
}
export const NotesList: React.FC<NotesListProps> = ({
  clientId
}) => {
  const {
    notes,
    isLoading,
    addNote,
    deleteNote
  } = useNotes(clientId);
  return <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare className="w-5 h-5 text-gray-500" />
        <h3 className="text-lg font-semibold text-gray-900">Internal Notes</h3>
        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
          {notes.length}
        </span>
      </div>

      <NoteForm onSubmit={addNote} />

      {isLoading ? <div className="flex justify-center py-8">
          <Loading size="sm" />
        </div> : <div className="space-y-4 flex-1 overflow-y-auto max-h-[600px] pr-2">
          {notes.length === 0 ? <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <p>No notes yet. Add the first note above.</p>
            </div> : notes.map(note => <NoteItem key={note.id} note={note} onDelete={deleteNote} />)}
        </div>}
    </div>;
};