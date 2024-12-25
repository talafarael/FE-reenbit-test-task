import { useGetUserChatsQuery } from "api/userApi/useGetUserChatsQuery";

export default function MenuChats() {
  const token = localStorage.getItem("token") || "";
  const { data } = useGetUserChatsQuery(token);
  return (
    <div>
      {data?.map((elem) => (
        <div key={elem.botFirstName}>
            <h1>{elem.botFirstName}{elem.botFirstName}</h1>
        </div>
      ))}
    </div>
  );
}
