import { useState, useEffect, useCallback } from 'react';
import { Note } from '../types/notes.types';
import { notesService } from '../services/notesService';
import { useToast } from '../../../shared/hooks/useToast';
export const useNotes = (clientId: string) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const {
    showToast
  } = useToast();
  const fetchNotes = useCallback(async () => {
    if (!clientId) return;
    try {
      setIsLoading(true);
      const data = await notesService.getNotesByClientId(clientId);
      setNotes(data);
    } catch (err) {
      showToast('Failed to fetch notes', 'error');
    } finally {
      setIsLoading(false);
    }
  }, [clientId, showToast]);
  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);
  const addNote = async (content: string) => {
    try {
      const newNote = await notesService.createNote({
        clientId,
        content
      });
      setNotes(prev => [newNote, ...prev]);
      showToast('Note added successfully', 'success');
      return true;
    } catch (err) {
      showToast('Failed to add note', 'error');
      return false;
    }
  };
  const deleteNote = async (id: string) => {
    try {
      await notesService.deleteNote(id);
      setNotes(prev => prev.filter(n => n.id !== id));
      showToast('Note deleted', 'success');
    } catch (err) {
      showToast('Failed to delete note', 'error');
    }
  };
  return {
    notes,
    isLoading,
    addNote,
    deleteNote
  };
};