import { useSendEmailQuery } from "api/authApi/useSendEmailQuery";
import CodeInput from "Molecules/CodeInput";
import React, { useEffect } from "react";

export default function TemplateCode() {
  const temporaryJwt = localStorage.getItem("temporaryJwt") ?? "";
  const { data, error, isLoading } = useSendEmailQuery(temporaryJwt);

  useEffect(() => {
    if (error) {
      console.error("Error sending email:", error);
    }
  }, [error]);
  return <CodeInput />;
}
