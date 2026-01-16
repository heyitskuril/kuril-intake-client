import { Note, CreateNoteDTO, UpdateNoteDTO } from '../types/notes.types';
let MOCK_NOTES: Note[] = [{
  id: '1',
  clientId: '1',
  userId: 'admin',
  userName: 'Admin User',
  userAvatar: 'AU',
  content: 'Initial review looks good. Need to schedule discovery call.',
  createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString()
}, {
  id: '2',
  clientId: '1',
  userId: 'assistant',
  userName: 'Sarah Assistant',
  userAvatar: 'SA',
  content: 'Client sent over the additional requirements document.',
  createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
  updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString()
}];
export const notesService = {
  getNotesByClientId: async (clientId: string): Promise<Note[]> => {
    await new Promise(resolve => setTimeout(resolve, 600));
    return MOCK_NOTES.filter(n => n.clientId === clientId).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },
  createNote: async (data: CreateNoteDTO): Promise<Note> => {
    await new Promise(resolve => setTimeout(resolve, 600));
    const newNote: Note = {
      id: Date.now().toString(),
      clientId: data.clientId,
      userId: 'admin',
      // Mock current user
      userName: 'Admin User',
      userAvatar: 'AU',
      content: data.content,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    MOCK_NOTES.unshift(newNote);
    return newNote;
  },
  deleteNote: async (id: string): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 400));
    MOCK_NOTES = MOCK_NOTES.filter(n => n.id !== id);
  }
};