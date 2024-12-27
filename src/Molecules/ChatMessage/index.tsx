import React, { useState, useRef, useEffect } from "react";
import { IMessageData } from "type/IChat";
import "./chatMessage.css";
import ItemMessage, { IPoint } from "Atoms/ItemMessage";
interface IChatMessage {
  readonly elem: IMessageData[];
}
export default function ChatMessage({ elem }: IChatMessage) {
  const [clicked, setClicked] = useState<boolean>(false);
  const [points, setPoints] = useState<IPoint>({
    x: 0,
    y: 0,
  });
  const chatRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [elem]);

  return (
    <div
      ref={chatRef}
      className="chatMessage"
      style={{ overflowY: "auto", height: "90vh" }}
    >
      {elem.map((elem) => (
        <ItemMessage
          elem={elem}
          clicked={clicked}
          setClicked={setClicked}
          points={points}
          setPoints={setPoints}
          key={elem._id}
        />
      ))}
    </div>
  );
}
