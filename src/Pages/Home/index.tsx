import { useGetUserQuery } from "api/userApi/useGetUserQuery";
import "./home.css";
import React, { useEffect } from "react";
import { useUserStore } from "store/User";
import Header from "Organisms/Header";
export default function Home() {
  const token = localStorage.getItem("token");
  const { addUser, user } = useUserStore()

  const { data, error, isLoading } = useGetUserQuery(token!);
  useEffect(() => {
    if (!data) {
      return;
    }
    addUser(data.user);
  }, [data]);

  return (
    <div className="home">
      <Header />

    </div>
  );
}
