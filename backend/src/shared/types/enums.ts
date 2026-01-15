export enum UserRole {
  admin = 'admin',
  assistant = 'assistant',
  viewer = 'viewer',
}

export enum ClientStatus {
  new = 'new',
  in_progress = 'in_progress',
  completed = 'completed',
  rejected = 'rejected',
  archived = 'archived',
}

export enum ActivityAction {
  client_created = 'client_created',
  client_updated = 'client_updated',
  status_changed = 'status_changed',
  note_added = 'note_added',
  note_updated = 'note_updated',
  note_deleted = 'note_deleted',
  user_created = 'user_created',
  user_updated = 'user_updated',
  user_deleted = 'user_deleted',
  service_created = 'service_created',
  service_updated = 'service_updated',
  service_deleted = 'service_deleted',
  login = 'login',
  logout = 'logout',
}

export enum FieldType {
  text = 'text',
  textarea = 'textarea',
  email = 'email',
  number = 'number',
  select = 'select',
  radio = 'radio',
  checkbox = 'checkbox',
  date = 'date',
  file = 'file',
}