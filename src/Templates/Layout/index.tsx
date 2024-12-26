import Header from "Organisms/Header";
import MenuChats from "Organisms/MenuChats";
import NotAuthorized from "Organisms/NotAuthorized";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const token = localStorage.getItem("token");
  return (
    <section>
      {token ? (
        <article className="flex-center">
          <MenuChats />
          <Outlet />
        </article>
      ) : (
        <NotAuthorized />
      )}
    </section>
  );
}
