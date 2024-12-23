import { useNavHook } from "hook/useNavigation";
import "./notAuthorized.css";
import Button from "Atoms/Button";

export default function NotAuthorized() {
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
