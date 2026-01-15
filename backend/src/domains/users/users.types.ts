export interface CreateUserPayload {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface UpdateUserPayload {
  name?: string;
  email?: string;
  password?: string;
  role?: string;
}

export interface UserFilters {
  role?: string;
  search?: string;
  limit?: number;
  offset?: number;
}