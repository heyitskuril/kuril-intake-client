import { z } from 'zod';

export const createNoteSchema = z.object({
  body: z.object({
    client_id: z.string().uuid('Invalid client ID'),
    note: z.string().min(1, 'Note cannot be empty').max(5000, 'Note is too long'),
  }),
});

export const updateNoteSchema = z.object({
  body: z.object({
    note: z.string().min(1, 'Note cannot be empty').max(5000, 'Note is too long'),
  }),
  params: z.object({
    id: z.string().uuid('Invalid note ID'),
  }),
});

export const getNoteSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid note ID'),
  }),
});

export const listNotesByClientSchema = z.object({
  params: z.object({
    clientId: z.string().uuid('Invalid client ID'),
  }),
});