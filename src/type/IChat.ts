export interface IChat {
  chat: [
    {
      message: string;
      idUser: string;
      time: string;
    }
  ];
  botFirstName: string;
  botLastName: string;
  id: string;
  user: string;
}
export interface IChatsMenu {
  chatsMenuData: IChat[];
}
