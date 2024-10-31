//! Client Componentにする。
"use client";

//! 通常のHTMLの <head> タグに相当。　Next.jsのHeadコンポーネントは各ページごとに個別のメタデータやタイトルを設定できる柔軟な方法に。
//! <title>,<meta>,<link>,<script>などが利用可能に。
import Head from "next/head";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Link from "next/link";

const MenuPage = () => {
  return (
    <main
      className="py-[100px] " // ヘッダーの高さに応じたパディングと全高に設定
      style={{
        backgroundImage: "url('/image/backimg1.jpg')", // メインの背景画像
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" flex justify-center bg-white ml-[150px] mr-[138px] px-[10px] pb-[30px] pt-[30px]">
        <div className="w-[180px]  flex items-center justify-center">
          <Link
            className=" flex justify-center items-center  text-[20px] m-[3px] font-bold bg-gray-200 hover:bg-indigo-300 h-[50px] w-[250px]"
            href="http://localhost:3000/Menu"
          >
            もんじゃ
          </Link>
        </div>
        <div className="w-[180px]  flex items-center justify-center">
          <Link
            className=" flex justify-center items-center  text-[20px] m-[3px] font-bold bg-gray-200 hover:bg-indigo-300 h-[50px] w-[250px]"
            href="http://localhost:3000/menu.season"
          >
            季節のオススメ
          </Link>
        </div>
        <div className="flex w-[180px] items-center justify-center">
          <Link
            className=" flex flex-col justify-center items-center  text-[15px] m-[3px] font-bold bg-gray-200 hover:bg-indigo-300 h-[50px] w-[250px]"
            href="http://localhost:3000/menu.okonomiyaki"
          >
            お好み焼き・麺・ご飯
          </Link>
        </div>
        <div className="w-[180px]  flex items-center justify-center">
          <Link
            className=" flex justify-center items-center  text-[20px] m-[3px] font-bold bg-gray-200 hover:bg-indigo-300 h-[50px] w-[250px]"
            href="http://localhost:3000/menu.men"
          >
            トッピング
          </Link>
        </div>
        <div className="w-[180px]  flex items-center justify-center">
          <Link
            className=" flex justify-center items-center  text-[20px] m-[3px] font-bold bg-gray-200 hover:bg-indigo-300 h-[50px] w-[250px]"
            href="http://localhost:3000/menu.ippin"
          >
            鉄板焼き・逸品
          </Link>
        </div>
        <div className="w-[180px]  flex items-center justify-center">
          <Link
            className=" flex justify-center items-center  text-[17px] m-[3px] font-bold bg-gray-200 hover:bg-indigo-300 h-[50px] w-[250px]"
            href="http://localhost:3000/menu.drink"
          >
            ドリンク・デザート
          </Link>
        </div>
      </div>
      <SimpleBar
        className="ml-[150px]"
        style={{
          maxHeight: "80vh",
          width: "80vw",
          overflowY: "auto",
          paddingRight: "15px",
          backgroundColor: "white",
          padding: "20px",
        }}
      >
        <div className="font-bold flex justify-center  text-[20px]">
          ＜トッピング＞
        </div>
        <div className="border-t border-yellow-700 my-4"></div>
        <div className="flex justify-between p-[15px]">
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">チーズ</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">おもち</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">しそ</p>
            <p>220円</p>
          </div>
        </div>
        <div className="flex justify-between p-[15px]">
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">卵</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">麺</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">紅しょうが</p>
            <p>220円</p>
          </div>
        </div>
        <div className="flex justify-between p-[15px]">
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">にんにく</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">ねぎ</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">切りいか</p>
            <p>220円</p>
          </div>
        </div>
        <div className="flex justify-between p-[15px]">
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">コーン</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">バター</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">もやし</p>
            <p>220円</p>
          </div>
        </div>
        <div className="flex justify-between p-[15px]">
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">刻みのり</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">納豆</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">明太子</p>
            <p>220円</p>
          </div>
        </div>
        <div className="flex justify-between p-[15px]">
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">梅干し</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">ニラ</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">特製カレー粉</p>
            <p>220円</p>
          </div>
        </div>
        <div className="flex justify-between p-[15px]">
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">生クリーム</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">青唐醤油漬け</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">ごはん</p>
            <p>220円</p>
          </div>
        </div>
        <div className="flex justify-between p-[15px]">
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">しめじ</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">ジャガイモ</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">キムチ</p>
            <p>220円</p>
          </div>
        </div>
        <div className="flex justify-between p-[15px]">
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">イカの塩辛</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">さつま揚げ</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">九条ネギ</p>
            <p>220円</p>
          </div>
        </div>
        <div className="flex justify-between p-[15px]">
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">豚バラ</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">豚ひき肉</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">鶏ひき肉</p>
            <p>220円</p>
          </div>
        </div>
        <div className="flex justify-between p-[15px]">
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">肉味噌</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">いか</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">タコ</p>
            <p>220円</p>
          </div>
        </div>
        <div className="flex justify-between p-[15px]">
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">えび</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">アサリ</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">ゲソ</p>
            <p>220円</p>
          </div>
        </div>
        <div className="flex justify-between p-[15px]">
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">いか墨</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">ホタテ</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between w-[180px] px-[7px]">
            <p className="font-bold">牛すじ</p>
            <p>220円</p>
          </div>
        </div>
        <div className="flex justify-between p-[15px]">
          <div className="flex justify-between w-[220px] px-[7px]">
            <p className="w-[200px] font-bold">ガーリックバター</p>
            <p className="w-[200px] pl-[25px]">220円</p>
          </div>
        </div>
      </SimpleBar>
      <p className="bg-white ml-[150px] mr-[138px] p-[30px] "></p>
    </main>
  );
};

//? ⬇️の MenuPageはどこと繋がっている？
export default MenuPage;
