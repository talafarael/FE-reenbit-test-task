import React from "react";
import { useChatUseStore } from "store/ChatsUse";

export default function Chat() {
  const { id } = useChatUseStore();
  return <div>index</div>;
}
