import React from 'react';
import { NoteItem } from './NoteItem';
import { NoteForm } from './NoteForm';
import { Loading } from '@shared/components/UI/Loading';
import { Alert } from '@shared/components/UI/Alert';
import { useNotes } from '../hooks/useNotes';
import { notesService } from '../services/notesService';
import { useAuth } from '@features/auth/hooks/useAuth';

interface NotesListProps {
  clientId: string;
}

export const NotesList: React.FC<NotesListProps> = ({ clientId }) => {
  const { notes, loading, error, refetch } = useNotes(clientId);
  const { user } = useAuth();

  const handleAddNote = async (data: { note: string }) => {
    try {
      await notesService.create({ client_id: clientId, note: data.note });
      refetch();
    } catch (err) {
      console.error('Failed to add note:', err);
    }
  };

  const handleDeleteNote = async (noteId: string) => {
    if (!confirm('Are you sure you want to delete this note?')) return;

    try {
      await notesService.delete(noteId);
      refetch();
    } catch (err) {
      console.error('Failed to delete note:', err);
    }
  };

  if (loading) {
    return <Loading message="Loading notes..." />;
  }

  return (
    <div className="space-y-6">
      {user?.role !== 'viewer' && (
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Add Internal Note</h3>
          <NoteForm onSubmit={handleAddNote} />
        </div>
      )}

      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Notes History</h3>
        
        {error && <Alert type="error" message={error} className="mb-4" />}

        {notes.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No notes yet</p>
        ) : (
          <div className="space-y-4">
            {notes.map((note) => (
              <NoteItem
                key={note.id}
                note={note}
                onDelete={handleDeleteNote}
                canEdit={user?.role === 'admin'}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};