import { useGetUserQuery } from "api/userApi/useGetUserQuery";
import React, { useEffect } from "react";
import { useUserStore } from "store/User";
export default function Home() {
  const token = localStorage.getItem("token");
  const { addUser, user } = useUserStore();
  const { data, error, isLoading } = useGetUserQuery(token!);
  useEffect(() => {
    if (!data) {
      return;
    }
    console.log(data);
    addUser(data.user);
  }, [data]);
  return <div></div>;
}
