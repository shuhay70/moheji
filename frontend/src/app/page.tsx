"use client";
//? サイトが重いのはSSRだから？

import Header from "../components/Header";

//! 28行目。headerに対して固定 (fixed)スタイルを適用し、メインコンテンツをスクロールできるようにする必要があります。また、ヘッダーの高さに応じて、mainの上部にパディングを追加して、ヘッダーとメインコンテンツが重ならないように
//! 28行目。z-10は要素の 重なり順序 (stacking order)を指定。要素が他の要素と重なったとき、どの要素が前面に表示されるかを制御し、値が高いほど、前面に表示される。例えば、z-0 は基準レベルで、z-10 はそれよりも前面に表示されます。

export default function Home() {
  return (
    <main
      className="pt-[200px] h-screen" // ヘッダーの高さに応じたパディングと全高に設定
      style={{
        backgroundImage: "url('/image/backimg1.jpg')", // メインの背景画像
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1>aaa</h1>
    </main>
  );
}
