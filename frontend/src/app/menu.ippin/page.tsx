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
          ＜逸品＞
        </div>
        <div className="border-t border-yellow-700 lg:my-4"></div>
        <div className="lg:flex lg:justify-between">
          <div className="lg:w-[320px]  px-[6px]">
            <div className="flex justify-between pb-[10px] pr-[10px] lg:pt-[0px] pt-[20px]">
              <p className="font-bold">青唐醤油漬け</p>
              <p>1500円</p>
            </div>
            <div className="flex">
              <p>具材：キャベツ、天かす、桜えび、卵、天生地、豚</p>
            </div>
          </div>
          <div className="lg:w-[350px] px-[6px]">
            <div className="flex justify-between pb-[10px] pr-[10px] lg:pt-[0px] pt-[20px]">
              <p className="font-bold">力士肉味噌きゅうり</p>
              <p>1500円</p>
            </div>
            <div className="flex">
              <p>
                具材：キャベツ、天かす、桜えび、卵、天生地、えび、タコ、ホタテ、いか、げそ
              </p>
            </div>
          </div>
          <div className="lg:w-[350px]  px-[6px] ">
            <div className="flex justify-between pb-[10px] pr-[10px] lg:pt-[0px] pt-[20px]">
              <p className="font-bold lg:w-auto w-[170px]">
                たたききゅうりの梅わさび和え
              </p>
              <p className="lg:w-auto w-[60px]">1500円</p>
            </div>
            <div className="flex">
              <p>
                具材：
                キャベツ、天かす、桜えび、卵、天生地、牛すじ、ごぼう、こんにゃく、
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:justify-between lg:pt-[50px]">
          <div className="lg:w-[350px]  px-[6px]">
            <div className="flex justify-between pb-[10px] pr-[10px] lg:pt-[0px] pt-[20px]">
              <p className="font-bold">キムチ</p>
              <p>1500円</p>
            </div>
            <div className="flex">
              <p>
                具材：キャベツ、天かす、桜えび、卵、天生地、豚、牛すじ、イカ、
              </p>
            </div>
          </div>
          <div className="lg:w-[350px] px-[6px]">
            <div className="flex justify-between pb-[10px] pr-[10px] lg:pt-[0px] pt-[20px]">
              <p className="font-bold">チャンジャ</p>
              <p>1500円</p>
            </div>
            <div className="flex">
              <p>具材：キャベツ、天かす、桜えび、卵、天生地、麺、豚、</p>
            </div>
          </div>
          <div className="lg:w-[350px]  px-[6px] ">
            <div className="flex justify-between pb-[10px] pr-[10px] lg:pt-[0px] pt-[20px]">
              <p className="font-bold">炙り明太子</p>
              <p>1500円</p>
            </div>
            <div className="flex">
              <p>具材： キャベツ、天かす、桜えび、卵、天生地、</p>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:justify-between lg:pt-[50px]">
          <div className="lg:w-[350px]  px-[6px]">
            <div className="flex justify-between pb-[10px] pr-[10px] lg:pt-[0px] pt-[20px]">
              <p className="font-bold">こぼれしらす冷奴</p>
              <p>1500円</p>
            </div>
            <div className="flex">
              <p>
                具材：キャベツ、天かす、桜えび、卵、天生地、豚、牛すじ、イカ、
              </p>
            </div>
          </div>
          <div className="lg:w-[350px] px-[6px]">
            <div className="flex justify-between pb-[10px] pr-[10px] lg:pt-[0px] pt-[20px]">
              <p className="font-bold">もずくとろろ</p>
              <p>1500円</p>
            </div>
            <div className="flex">
              <p>具材：キャベツ、天かす、桜えび、卵、天生地、麺、豚、</p>
            </div>
          </div>
          <div className="lg:w-[350px]  px-[6px] ">
            <div className="flex justify-between pb-[10px] pr-[10px] lg:pt-[0px] pt-[20px]">
              <p className="font-bold">和牛すじ煮</p>
              <p>1500円</p>
            </div>
            <div className="flex">
              <p>具材： キャベツ、天かす、桜えび、卵、天生地、</p>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:justify-between lg:pt-[50px]">
          <div className="lg:w-[350px]  px-[6px]">
            <div className="flex justify-between pb-[10px] pr-[10px] lg:pt-[0px] pt-[20px]">
              <p className="font-bold lg:w-auto w-[170px]">
                冷やしトマトと玉ねぎサラダ
              </p>
              <p className="lg:w-auto w-[60px] ">1500円</p>
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
        <div className="border-t border-yellow-700 lg:my-4"></div>
        <div className="lg:flex  lg:justify-between">
          <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px]">
            <div className="flex justify-between  lg:w-[300px] lg:pt-[0px] pt-[20px]">
              <p className="font-bold">にんにくホイル焼き</p>
              <p>1280円</p>
            </div>
            <div className="flex">
              <p>具材： にんにく、ごま油、</p>
            </div>
          </div>
          <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[0px] pt-[20px]">
            <div className="flex justify-between ">
              <p className="font-bold">塩辛じゃがバター</p>
              <p>1280円</p>
            </div>
            <div className="flex">
              <p>具材： 塩辛、ジャガイモ、バター</p>
            </div>
          </div>
          <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[0px] pt-[20px]">
            <div className="flex justify-between">
              <p className="font-bold">げそ焼き</p>
              <p>1280円</p>
            </div>
            <div className="flex">
              <p>具材： イカゲソ、もやし、バター</p>
            </div>
          </div>
        </div>
        <div className="lg:flex ">
          <div className="lg:flex lg:flex-col lg:w-[350px] lg:px-[6px] lg:pt-[50px] lg:mr-[28px] pt-[20px]">
            <div className="flex justify-between ">
              <p className="font-bold">きの子盛りバター</p>
              <p>1280円</p>
            </div>
            <div className="flex">
              <p>具材： えのき、しめじ、しいたけ、バター</p>
            </div>
          </div>
          <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[50px] pt-[20px]">
            <div className="flex justify-between ">
              <p className="font-bold">鳥軟骨焼き</p>
              <p>1280円</p>
            </div>
            <div className="flex">
              <p>具材：鳥軟骨（ヒザ軟骨・ヤゲン軟骨）、もやし、</p>
            </div>
          </div>
          <div className="lg:flex lg:flex-col lg:w-[390px]  lg:pr-[6px] lg:pt-[50px]  lg:pl-[40px] pt-[20px]">
            <div className="flex justify-between">
              <p className="font-bold">鳥もも焼き</p>
              <p>1280円</p>
            </div>
            <div className="flex">
              <p>具材： 鳥もも、長ネギ</p>
            </div>
          </div>
        </div>
        <div className="lg:flex ">
          <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[50px] lg:mr-[28px] pt-[20px]">
            <div className="flex justify-between ">
              <p className="font-bold">鳥せせり焼き</p>
              <p>1280円</p>
            </div>
            <div className="lg:flex">
              <p>具材：鳥せせり、もやし、大根おろし</p>
            </div>
          </div>
          <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[50px] pt-[20px]">
            <div className="flex justify-between ">
              <p className="font-bold">とん平焼き</p>
              <p>1280円</p>
            </div>
            <div className="flex">
              <p>具材： 豚、天かす、桜えび、九条ネギ、卵</p>
            </div>
          </div>
          <div className="lg:flex lg:flex-col lg:w-[390px]  lg:pr-[6px] lg:pt-[50px]  lg:pl-[40px] pt-[20px]">
            <div className="flex justify-between">
              <p className="font-bold lg:w-auto w-[200px]">
                カジキマグロのガーリックステーキ
              </p>
              <p>1280円</p>
            </div>
            <div className="flex">
              <p>具材： カジキマグロ、もやし、にんにく、大根おろし</p>
            </div>
          </div>
        </div>
        <div className="lg:flex ">
          <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[50px] lg:mr-[28px] pt-[20px]">
            <div className="flex justify-between ">
              <div className="flex">
                <p className="font-bold">海鮮アヒージョ</p>
                <p className="font-bold text-[12px] pt-[5px]">
                  （バケット付き）
                </p>
              </div>
              <p>1280円</p>
            </div>
            <div className="flex">
              <p>
                具材：イカ、エビ、タコ、ホタテ、チャンジャ、鷹の爪、長ネギ、にんにく、バター、オリーブオイル
              </p>
            </div>
          </div>
          <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[50px] pt-[20px]">
            <div className="flex justify-between">
              <div className="flex">
                <p className="font-bold lg:text-[14px] text-[13px]">
                  明太子しいたけアヒージョ
                </p>
                <p className="font-bold lg:text-[12px] text-[8px] pt-[4px]">
                  （バケット付き）
                </p>
              </div>
              <p>1280円</p>
            </div>
            <div className="flex">
              <p>具材：明太子、しいたけ、にんにく、バター、オリーブオイル</p>
            </div>
          </div>
          <div className="lg:flex lg:flex-collg:w-[390px] lg:pr-[6px] lg:pt-[50px] lg:pl-[40px] pt-[20px]">
            <div className="flex justify-between ">
              <p className="font-bold">追加バケット（４つ）</p>
              <p>1280円</p>
            </div>
          </div>
        </div>
      </SimpleBar>
      <p className="bg-white lg:ml-[150px] lg:mr-[138px] lg:p-[30px] ml-[38px] mr-[40px] p-[30px]"></p>{" "}
    </main>
  );
};

//? ⬇️の MenuPageはどこと繋がっている？
export default MenuPage;
