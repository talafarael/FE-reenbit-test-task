import React, { useState } from "react";
import { IMessageData } from "type/IChat";
import "./itemMessage.css";
import { ContextMenu } from "Atoms/ItemMessageRightClickBar";
interface ItemMessage {
  readonly elem: IMessageData;
  readonly setPoints: React.Dispatch<React.SetStateAction<IPoint>>;
  readonly points: IPoint;
  readonly clicked: boolean;
  readonly setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IPoint {
  x: number;
  y: number;
}
export default function ItemMessage({
  elem,
  points,
  setPoints,
  clicked,
  setClicked,
}: ItemMessage) {
  const handlerClose=()=>{
    setClicked(false)
  }
  return (
    <div
      className={
        elem.idUser == "botUser"
          ? "botContainerMessage"
          : "YourContainerMessage size-message"
      }
      onContextMenu={(e) => {
        e.preventDefault();
        setClicked(true);
        setPoints({
          x: e.pageX,
          y: e.pageY,
        });
      }}
    >
      <div
        className={
          elem.idUser == "botUser" ? "botMessage size-message" : "YourMessaage"
        }
      >
        {elem.message}
      </div>
      {clicked && (
        <ContextMenu top={points.y} left={points.x}>
          <div>change</div>
          <div onClick={()=>handlerClose()}>cancel</div>
        </ContextMenu>
      )}
    </div>
  );
}
