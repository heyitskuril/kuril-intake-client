export interface Note {
  id: string;
  client_id: string;
  user_id: string;
  note: string;
  created_at: string;
  updated_at: string;
  user?: {
    id: string;
    name: string;
    email: string;
  };
}

export interface CreateNotePayload {
  client_id: string;
  note: string;
}

export interface UpdateNotePayload {
  note: string;
}