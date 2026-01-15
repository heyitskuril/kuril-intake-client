export interface CreateNotePayload {
  client_id: string;
  note: string;
}

export interface UpdateNotePayload {
  note: string;
}