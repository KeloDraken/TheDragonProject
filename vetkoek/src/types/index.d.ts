export interface TagObject {
  name: string;
  posts: number;
}

export interface UserObject {
  object_id?: string;
  username?: string;
  display_name?: string;
  cover_pic?: string;
  profile_pic?: string;
  posts?: number;
  bio?: string;
  is_verified?: boolean | false;
}

export interface PostObject {
  author?: UserObject;
  object_id: string;
  title: string;
  cover_image: string;
  text: string;
  date_created: string;
  datetime_created: string;
  tags: string;
}
