export interface Video {
  data: Datum[];
  meta: VideoMeta;
}

export interface Datum {
  id: number;
  uuid: string;
  user_id: number;
  type: string;
  thumb_url: string;
  file_url: string;
  description: string;
  music: string;
  is_liked: boolean;
  likes_count: number;
  comments_count: number;
  shares_count: number;
  views_count: number;
  viewable: Viewable;
  allows: Allow[];
  published_at: Date;
  created_at: Date;
  updated_at: Date;
  user: User;
  meta: DatumMeta;
}

export enum Allow {
  Comment = "comment",
}

export interface DatumMeta {
  file_size: number;
  file_format: FileFormat;
  mime_type: MIMEType;
  playtime_string: string;
  playtime_seconds: number;
  bitrate: number;
  video: VideoClass;
}

export enum FileFormat {
  Mp4 = "mp4",
}

export enum MIMEType {
  VideoMp4 = "video/mp4",
}

export interface VideoClass {
  dataformat: Dataformat;
  rotate: number;
  resolution_x: number;
  resolution_y: number;
  fourcc: Fourcc;
  fourcc_lookup: FourccLookup;
  frame_rate: number;
}

export enum Dataformat {
  Quicktime = "quicktime",
}

export enum Fourcc {
  Avc1 = "avc1",
}

export enum FourccLookup {
  H264MPEG4AVC = "H.264/MPEG-4 AVC",
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  nickname: string;
  avatar: string;
  bio: string;
  tick: boolean;
  is_followed: boolean;
  followings_count: number;
  followers_count: number;
  likes_count: number;
  website_url: string;
  facebook_url: string;
  youtube_url: string;
  twitter_url: string;
  instagram_url: string;
}

export enum Viewable {
  Public = "public",
}

export interface VideoMeta {
  pagination: Pagination;
}

export interface Pagination {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
  links: Links;
}

export interface Links {
  next: string;
}
