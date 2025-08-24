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

export interface UserDetailResponse {
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
  tweets: Tweet[];
  liked_tweets: Tweet[];
}

export interface UserResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: User[];
}

export interface IsFollowingResponse {
  is_following: boolean;
}

export interface NotificationResponse {
  count: number;
  next: null;
  previous: null;
  results: [
    {
      id: number;
      actor: {
        id: number;
        username: string;
        email: string;
        first_name: string;
        last_name: string;
        bio: string | null;
        profile_picture: string;
        cover_photo: null;
        followers_count: number;
        following_count: number;
      };
      notification_type: string;
      tweet: Tweet | null;
      created_at: string;
      message: string;
    },
  ];
}
export interface Notification {
  id: number;
  actor: {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    bio: string | null;
    profile_picture: string;
    cover_photo: null;
    followers_count: number;
    following_count: number;
  };
  notification_type: string;
  tweet: Tweet | null;
  created_at: string;
  message: string;
}

export interface BookmarksResponse {
  count: number;
  next: null;
  previous: null;
  results: [
    {
      id: number;
      tweet: Tweet;
      created_at: string;
      user: number;
    },
  ];
}
export interface Bookmarks {
  id: number;
  tweet: Tweet;
  created_at: string;
  user: number;
}

export interface CommentsResponse {
  count: number;
  next: null;
  previous: null;
  results: Comment[];
}

export interface Comment {
  id: number;
  user: User;
  content: string;
  created_at: string;
  tweet: number;
}
