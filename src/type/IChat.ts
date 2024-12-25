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
    user: string;
  }