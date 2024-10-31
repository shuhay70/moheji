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
            お飲み物・デザート
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
          ＜逸品＞
        </div>
        <div className="border-t border-yellow-700 my-4"></div>
        <div className="flex justify-between">
          <div className="w-[320px]  px-[6px]">
            <div className="flex justify-between pb-[10px] pr-[10px]">
              <p className="font-bold">青唐醤油漬け</p>
              <p>1500円</p>
            </div>
            <div className="flex">
              <p>具材：キャベツ、天かす、桜えび、卵、天生地、豚</p>
            </div>
          </div>
          <div className="w-[350px] px-[6px]">
            <div className="flex justify-between pb-[10px] pr-[10px]">
              <p className="font-bold">力士肉味噌きゅうり</p>
              <p>1500円</p>
            </div>
            <div className="flex">
              <p>
                具材：キャベツ、天かす、桜えび、卵、天生地、えび、タコ、ホタテ、いか、げそ
              </p>
            </div>
          </div>
          <div className="w-[350px]  px-[6px] ">
            <div className="flex justify-between pb-[10px] pr-[10px]">
              <p className="font-bold">たたききゅうりの梅わさび和え</p>
              <p>1500円</p>
            </div>
            <div className="flex">
              <p>
                具材：
                キャベツ、天かす、桜えび、卵、天生地、牛すじ、ごぼう、こんにゃく、
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-[50px]">
          <div className="w-[350px]  px-[6px]">
            <div className="flex justify-between pb-[10px] pr-[10px]">
              <p className="font-bold">キムチ</p>
              <p>1500円</p>
            </div>
            <div className="flex">
              <p>
                具材：キャベツ、天かす、桜えび、卵、天生地、豚、牛すじ、イカ、
              </p>
            </div>
          </div>
          <div className="w-[350px] px-[6px]">
            <div className="flex justify-between pb-[10px] pr-[10px]">
              <p className="font-bold">チャンジャ</p>
              <p>1500円</p>
            </div>
            <div className="flex">
              <p>具材：キャベツ、天かす、桜えび、卵、天生地、麺、豚、</p>
            </div>
          </div>
          <div className="w-[350px]  px-[6px] ">
            <div className="flex justify-between pb-[10px] pr-[10px]">
              <p className="font-bold">炙り明太子</p>
              <p>1500円</p>
            </div>
            <div className="flex">
              <p>具材： キャベツ、天かす、桜えび、卵、天生地、</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-[50px]">
          <div className="w-[350px]  px-[6px]">
            <div className="flex justify-between pb-[10px] pr-[10px]">
              <p className="font-bold">こぼれしらす冷奴</p>
              <p>1500円</p>
            </div>
            <div className="flex">
              <p>
                具材：キャベツ、天かす、桜えび、卵、天生地、豚、牛すじ、イカ、
              </p>
            </div>
          </div>
          <div className="w-[350px] px-[6px]">
            <div className="flex justify-between pb-[10px] pr-[10px]">
              <p className="font-bold">もずくとろろ</p>
              <p>1500円</p>
            </div>
            <div className="flex">
              <p>具材：キャベツ、天かす、桜えび、卵、天生地、麺、豚、</p>
            </div>
          </div>
          <div className="w-[350px]  px-[6px] ">
            <div className="flex justify-between pb-[10px] pr-[10px]">
              <p className="font-bold">和牛すじ煮</p>
              <p>1500円</p>
            </div>
            <div className="flex">
              <p>具材： キャベツ、天かす、桜えび、卵、天生地、</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-[50px]">
          <div className="w-[350px]  px-[6px]">
            <div className="flex justify-between pb-[10px] pr-[10px]">
              <p className="font-bold">冷やしトマトと玉ねぎサラダ</p>
              <p>1500円</p>
            </div>
            <div className="flex">
              <p>
                具材：キャベツ、天かす、桜えび、卵、天生地、豚、牛すじ、イカ、
              </p>
            </div>
          </div>
        </div>
        <div className="font-bold flex justify-center pt-[90px]  text-[20px]">
          ＜鉄板焼き＞
        </div>
        <div className="border-t border-yellow-700 my-4"></div>
        <div className="flex  justify-between">
          <div className="flex flex-col w-[350px]  px-[6px]">
            <div className="flex justify-between  w-[300px]">
              <p className="font-bold">にんにくホイル焼き</p>
              <p>1280円</p>
            </div>
            <div className="flex">
              <p>具材： にんにく、ごま油、</p>
            </div>
          </div>
          <div className="flex flex-col w-[350px]  px-[6px]">
            <div className="flex justify-between ">
              <p className="font-bold">塩辛じゃがバター</p>
              <p>1280円</p>
            </div>
            <div className="flex">
              <p>具材： 塩辛、ジャガイモ、バター</p>
            </div>
          </div>
          <div className="flex flex-col w-[350px]  px-[6px]">
            <div className="flex justify-between">
              <p className="font-bold">げそ焼き</p>
              <p>1280円</p>
            </div>
            <div className="flex">
              <p>具材： イカゲソ、もやし、バター</p>
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className="flex flex-col w-[350px]  px-[6px] pt-[50px] mr-[28px]">
            <div className="flex justify-between ">
              <p className="font-bold">きの子盛りバター</p>
              <p>1280円</p>
            </div>
            <div className="flex">
              <p>具材： えのき、しめじ、しいたけ、バター</p>
            </div>
          </div>
          <div className="flex flex-col w-[350px]  px-[6px] pt-[50px]">
            <div className="flex justify-between ">
              <p className="font-bold">鳥軟骨焼き</p>
              <p>1280円</p>
            </div>
            <div className="flex">
              <p>具材：鳥軟骨（ヒザ軟骨・ヤゲン軟骨）、もやし、</p>
            </div>
          </div>
          <div className="flex flex-col w-[390px]  pr-[6px] pt-[50px]  pl-[40px]">
            <div className="flex justify-between">
              <p className="font-bold">鳥もも焼き</p>
              <p>1280円</p>
            </div>
            <div className="flex">
              <p>具材： 鳥もも、長ネギ</p>
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className="flex flex-col w-[350px]  px-[6px] pt-[50px] mr-[28px]">
            <div className="flex justify-between ">
              <p className="font-bold">鳥せせり焼き</p>
              <p>1280円</p>
            </div>
            <div className="flex">
              <p>具材：鳥せせり、もやし、大根おろし</p>
            </div>
          </div>
          <div className="flex flex-col w-[350px]  px-[6px] pt-[50px]">
            <div className="flex justify-between ">
              <p className="font-bold">とん平焼き</p>
              <p>1280円</p>
            </div>
            <div className="flex">
              <p>具材： 豚、天かす、桜えび、九条ネギ、卵</p>
            </div>
          </div>
          <div className="flex flex-col w-[390px]  pr-[6px] pt-[50px]  pl-[40px]">
            <div className="flex justify-between">
              <p className="font-bold">カジキマグロのガーリックステーキ</p>
              <p>1280円</p>
            </div>
            <div className="flex">
              <p>具材： カジキマグロ、もやし、にんにく、大根おろし</p>
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className="flex flex-col w-[350px]  px-[6px] pt-[50px] mr-[28px]">
            <div className="flex justify-between ">
              <p className="font-bold">海鮮アヒージョ（バケット付き）</p>
              <p>1280円</p>
            </div>
            <div className="flex">
              <p>
                具材：イカ、エビ、タコ、ホタテ、チャンジャ、鷹の爪、長ネギ、にんにく、バター、オリーブオイル
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[350px]  px-[6px] pt-[50px] ">
            <div className="flex justify-between">
              <p className="font-bold text-[14px]">
                明太子しいたけアヒージョ（バケット付き）
              </p>
              <p>1280円</p>
            </div>
            <div className="flex">
              <p>具材：明太子、しいたけ、にんにく、バター、オリーブオイル</p>
            </div>
          </div>
          <div className="flex flex-col w-[390px] pr-[6px] pt-[50px]  pl-[40px]">
            <div className="flex justify-between ">
              <p className="font-bold">追加バケット（４つ）</p>
              <p>1280円</p>
            </div>
          </div>
        </div>
      </SimpleBar>
      <p className="bg-white ml-[150px] mr-[138px] p-[30px] "></p>
    </main>
  );
};

//? ⬇️の MenuPageはどこと繋がっている？
export default MenuPage;
