"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handleClickHome = () => {
    router.push("/home");
    // alert("Menu button clicked!");
  };

  return <div className="text-white"> 東京文化を世界へ</div>;
};

export default Home;
