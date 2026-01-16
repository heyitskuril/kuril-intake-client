export interface Note {
  id: string;
  clientId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
export interface CreateNoteDTO {
  clientId: string;
  content: string;
}
export interface UpdateNoteDTO {
  content: string;
}