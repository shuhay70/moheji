"use client";

import Head from "next/head";

const TopPage = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('/image/backimg1.jpg')`, // 画像のパスを指定
          backgroundSize: "cover", // 画像をカバーにする
          backgroundPosition: "center", // 画像を中央に配置
          width: "100vw", // ビューポート全体の幅を指定
          height: "100vh", // ビューポート全体の高さを指定
        }}
      ></div>
      {/* <div className="text-white"> 東京文化を世界へ</div>; */}
    </div>
  );
};

export default TopPage;
