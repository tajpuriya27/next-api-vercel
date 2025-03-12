"use client";
import React, { useEffect } from "react";

const Page = () => {
  const [ip, setIp] = React.useState<string>("fetching ip");
  const [ipFromipify, setIPFromipify] = React.useState<string>(
    "Fetching IP using ipify"
  );

  const fetchIP = async () => {
    try {
      const response = await fetch("https://api.ipify.org");
      console.log("response from ipify.org", response);
      const publicIP = await response.text();
      setIPFromipify(publicIP);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchIP();
    fetch("/api/get-ip", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("endpoint -respone", data);
        setIp(data.ip);
      });
  }, []);

  return (
    <div>
      IP grabbed by our backend {ip}
      <div style={{ margin: "20px" }}>IP grabbed by ipify: {ipFromipify}</div>
    </div>
  );
};

export default Page;
