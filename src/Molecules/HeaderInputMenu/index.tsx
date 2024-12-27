import { useNavigate } from "react-router-dom";
import "./headerInputMenu.css";
export default function HeaderInputMenu() {
  const navigate = useNavigate();
  const handlerNavCreateChat = () => {
    navigate("/createchat");
  };
  return (
    <div className="headerInputMenu">
      HeaderInputMenu
      <button onClick={() => handlerNavCreateChat()}>add chat</button>
    </div>
  );
}
