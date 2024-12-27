export interface IChat {
  chat: IMessageData[];
  botFirstName: string;
  botLastName: string;
  id: string;
  user: string;
}
export interface IChatsMenu {
  chatsMenuData: IChat[];
}
export interface IMessageData {
  message: string;
  idUser: string;
  time: string;
  _id: string;
}
