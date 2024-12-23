import NotAuthorized from "Organisms/NotAuthorized";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const token = localStorage.getItem("token");
  return <section>{token ? <Outlet /> : <NotAuthorized />}</section>;
}
