import { useNavHook } from "hook/useNavigation";
import "./notAuthorized.css";
import Button from "Atoms/Button";
import { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export default function NotAuthorized() {
  const navigate = useNavigate();
  const data = [
    {
      title: "Sign up",
      path: "/register",
    },
    {
      title: "Sign in",
      path: "/login",
    },
  ];
  const navigateTo = useNavHook();
  const handlerNav = (path: string) => {
    navigateTo(path);
  };
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const queryParamToken = searchParams.get("token");
    if (queryParamToken) {
      localStorage.setItem("token", queryParamToken);

      const url = new URL(window.location.href);
      url.searchParams.delete("token");
      navigate(url.pathname + url.search);
    }
  }, []);

  return (
    <div className="flex-center-column not-authorized">
      <h1>You are not logged in</h1>
      <p>please log in</p>
      {data.map((elem) => (
        <Button
          key={elem.path}
          title={elem.title}
          func={() => handlerNav(elem.path)}
        />
      ))}
    </div>
  );
}
