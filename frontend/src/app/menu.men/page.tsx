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
      className="lg:py-[100px] py-[30px]" // ヘッダーの高さに応じたパディングと全高に設定
      style={{
        backgroundImage: "url('/image/backimg1.jpg')", // メインの背景画像
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center bg-white lg:ml-[150px] lg:mr-[138px] lg:px-[10px] lg:pb-[30px] lg:pt-[30px] lg:w-[1152px] w-[312px] ml-[38px] mt-[20px] lg:p-[5px] py-[5px] px-[1px]">
        <div className="lg:w-[180px]  lg:flex lg:items-center lg:justify-center w-[50px]">
          <Link
            className="flex justify-center items-center  lg:text-[20px] lg:m-[3px] font-bold bg-gray-200 hover:bg-indigo-300 lg:h-[50px] lg:w-[250px] mx-[2px] text-[7px] h-[25px]"
            href="http://localhost:3000/Menu"
          >
            もんじゃ
          </Link>
        </div>
        <div className="lg:w-[180px]  lg:flex lg:items-center lg:justify-center w-[50px]">
          <Link
            className=" flex justify-center items-center lg:text-[20px] lg:m-[3px] font-bold bg-gray-200 hover:bg-indigo-300 lg:h-[50px] lg:w-[250px]  mx-[2px] text-[7px] h-[25px]"
            href="Menu/season"
          >
            季節のオススメ
          </Link>
        </div>
        <div className="lg:flex lg:w-[180px] lg:items-center lg:justify-center w-[50px]">
          <Link
            className="flex flex-col justify-center items-center  lg:text-[15px] lg:m-[3px] font-bold bg-gray-200 hover:bg-indigo-300 lg:h-[50px] lg:w-[250px]  mx-[2px] text-[7px] h-[25px]"
            href="http://localhost:3000/menu.okonomiyaki"
          >
            お好み焼き・麺・ご飯
          </Link>
        </div>
        <div className="lg:w-[180px]  lg:flex lg:items-center lg:justify-center w-[50px]">
          <Link
            className="flex flex-col justify-center items-center  lg:text-[15px] lg:m-[3px] font-bold bg-gray-200 hover:bg-indigo-300 lg:h-[50px] lg:w-[250px]  mx-[2px] text-[7px] h-[25px]"
            href="http://localhost:3000/menu.men"
          >
            トッピング
          </Link>
        </div>
        <div className="lg:w-[180px]  lg:flex lg:items-center lg:justify-center w-[50px]">
          <Link
            className="flex flex-col justify-center items-center  lg:text-[15px] lg:m-[3px] font-bold bg-gray-200 hover:bg-indigo-300 lg:h-[50px] lg:w-[250px]  mx-[2px] text-[7px] h-[25px]"
            href="http://localhost:3000/menu.ippin"
          >
            鉄板焼き・逸品
          </Link>
        </div>
        <div className="lg:w-[180px]  lg:flex lg:items-center lg:justify-center w-[50px]">
          <Link
            className="flex flex-col justify-center items-center  lg:text-[15px] lg:m-[3px] font-bold bg-gray-200 hover:bg-indigo-300 lg:h-[50px] lg:w-[250px]  mx-[2px] text-[7px] h-[25px]"
            href="http://localhost:3000/menu.drink"
          >
            ドリンク・デザート
          </Link>
        </div>
      </div>
      <SimpleBar
        className="lg:ml-[150px] ml-[38px] w-[80vw] max-h-[80vh] p-[20px] lg:pr-[15px] bg-white  overflow-y-auto"
        style={
          {
            // maxHeight: "80vh",
            // width: "80vw",
            // overflowY: "auto",
            // paddingRight: "15px",
            // backgroundColor: "white",
            // padding: "20px",
          }
        }
      >
        <div className="font-bold flex justify-center  text-[20px]">
          ＜トッピング＞
        </div>
        <div className="border-t border-yellow-700 lg:my-4"></div>
        <div className="lg:flex lg:justify-between lg:p-[15px]">
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">チーズ</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">おもち</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">しそ</p>
            <p>220円</p>
          </div>
        </div>
        <div className="lg:flex lg:justify-between lg:p-[15px]">
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">卵</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">麺</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">紅しょうが</p>
            <p>220円</p>
          </div>
        </div>
        <div className="lg:flex lg:justify-between lg:p-[15px]">
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">にんにく</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">ねぎ</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">切りいか</p>
            <p>220円</p>
          </div>
        </div>
        <div className="lg:flex lg:justify-between lg:p-[15px]">
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">コーン</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">バター</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">もやし</p>
            <p>220円</p>
          </div>
        </div>
        <div className="lg:flex lg:justify-between lg:p-[15px]">
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">刻みのり</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">納豆</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">明太子</p>
            <p>220円</p>
          </div>
        </div>
        <div className="lg:flex lg:justify-between lg:p-[15px]">
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">梅干し</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">ニラ</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">特製カレー粉</p>
            <p>220円</p>
          </div>
        </div>
        <div className="lg:flex lg:justify-between lg:p-[15px]">
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">生クリーム</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">青唐醤油漬け</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">ごはん</p>
            <p>220円</p>
          </div>
        </div>
        <div className="lg:flex lg:justify-between lg:p-[15px]">
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">しめじ</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">ジャガイモ</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">キムチ</p>
            <p>220円</p>
          </div>
        </div>
        <div className="lg:flex lg:justify-between lg:p-[15px]">
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">イカの塩辛</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">さつま揚げ</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">九条ネギ</p>
            <p>220円</p>
          </div>
        </div>
        <div className="lg:flex lg:justify-between lg:p-[15px]">
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">豚バラ</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">豚ひき肉</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">鶏ひき肉</p>
            <p>220円</p>
          </div>
        </div>
        <div className="lg:flex lg:justify-between lg:p-[15px]">
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">肉味噌</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">いか</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">タコ</p>
            <p>220円</p>
          </div>
        </div>
        <div className="lg:flex lg:justify-between lg:p-[15px]">
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">えび</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">アサリ</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">ゲソ</p>
            <p>220円</p>
          </div>
        </div>
        <div className="lg:flex lg:justify-between lg:p-[15px]">
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">いか墨</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">ホタテ</p>
            <p>220円</p>
          </div>
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="font-bold">牛すじ</p>
            <p>220円</p>
          </div>
        </div>
        <div className="lg:flex lg:justify-between lg:p-[15px]">
          <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
            <p className="lg:w-[200px] font-bold">ガーリックバター</p>
            <p className="lg:w-[200px] pl-[25px]">220円</p>
          </div>
        </div>
      </SimpleBar>
      <p className="bg-white lg:ml-[150px] lg:mr-[138px] lg:p-[30px] ml-[38px] mr-[40px] p-[30px]"></p>{" "}
    </main>
  );
};

//? ⬇️の MenuPageはどこと繋がっている？
export default MenuPage;
