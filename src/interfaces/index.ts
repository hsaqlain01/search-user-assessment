export interface User {
  id: string;
  first_name: string;
  last_name: string;
  vehicle: string;
  avatar: string;
  country: string;
}

export interface FetchResult<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

export interface FuseResult<T> {
  item: T;
  refIndex: number;
  [key: string]: any; // Additional properties can be included if necessary
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
}

export interface UserListProps {
  users: User[];
}
