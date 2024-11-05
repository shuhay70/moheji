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
        <div className="lg:flex">
          <div className="lg:flex ">
            <img
              src="/image/IMG_3171.jpg"
              className="lg:h-[280px] lg:w-[280px] lg:p-[25px] "
              alt="mennmochi"
            />
            <div>
              <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pt-[30px] py-[15px]">
                イカの丸焼き
              </p>
              <p className="lg:px-[25px] lg:h-[240px] lg:w-[280px] lg:pb-[0px] pb-[15px]">
                いかの丸焼き肝バター。
                豊洲市場直送のするめいかを肝ごと一緒に焼き上げ、
                バターを纏わせて仕上げます。
                濃厚な肝のコクが、憎くなるほどビールと相性抜群なんです。
                いかのプリっとした食感も、鉄板で少し焦げたバターの風味も。
              </p>
            </div>
          </div>
          <div className="lg:flex">
            <img
              src="/image/IMG_3172.jpg"
              className="lg:h-[280px] lg:w-[280px] lg:p-[25px] "
              alt="mennmochi"
            />
            <div>
              <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pt-[30px] py-[15px]">
                牡蠣のバター焼き
              </p>
              <p className="lg:px-[25px] lg:h-[240px] lg:w-[280px] lg:pb-[0px] pb-[15px]">
                毎年冬になると、 この牡蠣と白子を目当てに
                お越しいただくお客様もいるほど 人気の一品！
                市場で目利きが厳選したものを毎朝お店に直送しております。
                ぷりぷりで旨みが濃厚な牡蠣、
                もへじでしか味わえない冬の味覚をどうぞ召し上がり下さい！
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-[1100px] border-t border-gray-300 w-[0px]"></div>
        <div className="lg:flex">
          <div className="lg:flex ">
            <img
              src="/image/IMG_3171.jpg"
              className="lg:h-[280px] lg:w-[280px] lg:p-[25px] "
              alt="mennmochi"
            />
            <div>
              <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pt-[30px] py-[15px]">
                イカの丸焼き
              </p>
              <p className="lg:px-[25px] lg:h-[240px] lg:w-[280px] lg:pb-[0px] pb-[15px]">
                いかの丸焼き肝バター。
                豊洲市場直送のするめいかを肝ごと一緒に焼き上げ、
                バターを纏わせて仕上げます。
                濃厚な肝のコクが、憎くなるほどビールと相性抜群なんです。
                いかのプリっとした食感も、鉄板で少し焦げたバターの風味も。
              </p>
            </div>
          </div>
          <div className="lg:flex ">
            <img
              src="/image/IMG_3172.jpg"
              className="lg:h-[280px] lg:w-[280px] lg:p-[25px] "
              alt="mennmochi"
            />
            <div>
              <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pt-[30px] py-[15px]">
                牡蠣のバター焼き
              </p>
              <p className="lg:px-[25px] lg:h-[240px] lg:w-[280px] lg:pb-[0px] pb-[15px]">
                毎年冬になると、 この牡蠣と白子を目当てに
                お越しいただくお客様もいるほど 人気の一品！
                市場で目利きが厳選したものを毎朝お店に直送しております。
                ぷりぷりで旨みが濃厚な牡蠣、
                もへじでしか味わえない冬の味覚をどうぞ召し上がり下さい！
              </p>
            </div>
          </div>
        </div>
      </SimpleBar>
      <p className="bg-white lg:ml-[150px] lg:mr-[138px] lg:p-[30px] ml-[38px] mr-[40px] p-[30px]"></p>
    </main>
  );
};

//? ⬇️の MenuPageはどこと繋がっている？
export default MenuPage;
