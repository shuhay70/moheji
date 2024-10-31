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
            href="http://localhost:3000/Menu"
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
        <div className="flex">
          <div className="flex ">
            <img
              src="/image/IMG_3171.jpg"
              className="h-[280px] w-[280px] p-[25px] "
              alt="mennmochi"
            />
            <div>
              <p className="pl-[25px] p-[15px] font-bold pt-[30px]">
                イカの丸焼き
              </p>
              <p className="px-[25px] h-[240px] w-[280px]">
                いかの丸焼き肝バター。
                豊洲市場直送のするめいかを肝ごと一緒に焼き上げ、
                バターを纏わせて仕上げます。
                濃厚な肝のコクが、憎くなるほどビールと相性抜群なんです。
                いかのプリっとした食感も、鉄板で少し焦げたバターの風味も。
              </p>
            </div>
          </div>
          <div className="flex ">
            <img
              src="/image/IMG_3172.jpg"
              className="h-[280px] w-[280px] p-[25px] "
              alt="mennmochi"
            />
            <div>
              <p className="pl-[25px] p-[15px] font-bold pt-[30px]">
                牡蠣のバター焼き
              </p>
              <p className="px-[25px] h-[240px] w-[280px]">
                毎年冬になると、 この牡蠣と白子を目当てに
                お越しいただくお客様もいるほど 人気の一品！
                市場で目利きが厳選したものを毎朝お店に直送しております。
                ぷりぷりで旨みが濃厚な牡蠣、
                もへじでしか味わえない冬の味覚をどうぞ召し上がり下さい！
              </p>
            </div>
          </div>
        </div>
        <div className="w-[1100px] border-t border-gray-300 "></div>
        <div className="flex">
          <div className="flex ">
            <img
              src="/image/IMG_3171.jpg"
              className="h-[280px] w-[280px] p-[25px] "
              alt="mennmochi"
            />
            <div>
              <p className="pl-[25px] p-[15px] font-bold pt-[30px]">
                イカの丸焼き
              </p>
              <p className="px-[25px] h-[240px] w-[280px]">
                いかの丸焼き肝バター。
                豊洲市場直送のするめいかを肝ごと一緒に焼き上げ、
                バターを纏わせて仕上げます。
                濃厚な肝のコクが、憎くなるほどビールと相性抜群なんです。
                いかのプリっとした食感も、鉄板で少し焦げたバターの風味も。
              </p>
            </div>
          </div>
          <div className="flex ">
            <img
              src="/image/IMG_3172.jpg"
              className="h-[280px] w-[280px] p-[25px] "
              alt="mennmochi"
            />
            <div>
              <p className="pl-[25px] p-[15px] font-bold pt-[30px]">
                牡蠣のバター焼き
              </p>
              <p className="px-[25px] h-[240px] w-[280px]">
                毎年冬になると、 この牡蠣と白子を目当てに
                お越しいただくお客様もいるほど 人気の一品！
                市場で目利きが厳選したものを毎朝お店に直送しております。
                ぷりぷりで旨みが濃厚な牡蠣、
                もへじでしか味わえない冬の味覚をどうぞ召し上がり下さい！
              </p>
            </div>
          </div>
        </div>
        <div className="w-[1100px] border-t border-gray-300 my-[40px]"></div>
      </SimpleBar>
      <p className="bg-white ml-[150px] mr-[138px] p-[30px] "></p>
    </main>
  );
};

//? ⬇️の MenuPageはどこと繋がっている？
export default MenuPage;
