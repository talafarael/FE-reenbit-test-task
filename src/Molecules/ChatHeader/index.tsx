import { IChat } from "type/IChat";
import "./chatHeader.css"
export interface IChatHeader {
  elem: IChat;
}
export default function CahtHeader({ elem }: IChatHeader) {
  return (
    <div className="flex-center chatHeader">
      {elem.botFirstName}
       {" "}
      {elem.botLastName}
    </div>
  );
}
