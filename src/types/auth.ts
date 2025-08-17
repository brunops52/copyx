export interface LoginFormData {
  username_or_email: string;
  password: string;
}
export interface registerFormData {
  username: string;
  password: string;
  confirm_password: string;
  email: string;
  first_name: string;
  last_name: string;
}

export interface TweetFormData {
  content: string;
  image: string | null;
}

export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  bio: string | null;
  profile_picture: string | null;
  cover_photo: string | null;
  followers_count: number;
  following_count: number;
}

export interface AuthResponse {
  access: string;
  refresh: string;
  user: User;
}

export interface Tweet {
    id: number;
    user: {
      id: number;
      username: string;
      email: string;
      first_name: string;
      last_name: string;
      bio: string | null;
      profile_picture: string;
      cover_photo: string | null;
      followers_count: number;
      following_count: number;
    };
    is_liked: boolean;
    is_bookmarked: boolean;
    mentioned_users: User[];
    content: string;
    image: string | null;
    created_at: string;
    likes: any[]; // idem
    mentions: any[];
  }
export interface TweetsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    id: number;
    user: {
      id: number;
      username: string;
      email: string;
      first_name: string;
      last_name: string;
      bio: string | null;
      profile_picture: string;
      cover_photo: string | null;
      followers_count: number;
      following_count: number;
    };
    is_liked: boolean;
    is_bookmarked: boolean;
    mentioned_users: User[];
    content: string;
    image: string | null;
    created_at: string;
    likes: any[]; // idem
    mentions: any[];
  }[];
}
