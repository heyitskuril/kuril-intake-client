import { useState, useEffect, useCallback } from 'react';
import { notesService } from '../services/notesService';
import { Note } from '../types/notes.types';

export const useNotes = (clientId: string) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNotes = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await notesService.getByClientId(clientId);
      setNotes(response.data.data?.notes || []);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to fetch notes');
    } finally {
      setLoading(false);
    }
  }, [clientId]);

  useEffect(() => {
    if (clientId) {
      fetchNotes();
    }
  }, [fetchNotes, clientId]);

  return {
    notes,
    loading,
    error,
    refetch: fetchNotes,
  };
};