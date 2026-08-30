export interface PrivateUsersPUTRequest {
  body: {
    channel_id: string;
    name: string;
    avatar: string;
  }
}