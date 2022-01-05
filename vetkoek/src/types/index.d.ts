export interface TagObject {
  name: string;
  posts: number;
}

export interface UserObject {
  username: string;
  object_id: string;
}

export interface PostObject {
  author: UserObject;
  object_id: string;
  title: string;
  cover_image: string;
  text: string;
  date_created: string;
  datetime_created: string;
  tags: string;
}
