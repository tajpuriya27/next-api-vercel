"use client";
import React, { useEffect } from "react";

const Page = () => {
  const [ip, setIp] = React.useState<string>("fetching ip");
  useEffect(() => {
    fetch("/api/get-ip", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("endpoint -respone", data);
        setIp(data.ip);
      });
  }, []);

  return <div>Your IP is {ip}</div>;
};

export default Page;
