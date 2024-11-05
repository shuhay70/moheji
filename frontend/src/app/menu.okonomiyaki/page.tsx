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
        <div className="font-bold lg:flex lg:justify-center  text-[20px]">
          ＜お好み焼き＞
        </div>
        <div className="border-t border-yellow-700 lg:my-4"></div>
        <div className="lg:flex lg:justify-between">
          <div className="lg:w-[320px]  lg:px-[6px]">
            <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
              <p className="font-bold">豚玉</p>
              <p>1500円</p>
            </div>
            <div className="lg:flex">
              <p>具材：キャベツ、天かす、桜えび、卵、天生地、豚</p>
            </div>
          </div>
          <div className="lg:w-[350px] lg:px-[6px]">
            <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
              <p className="font-bold">海鮮玉</p>
              <p>1500円</p>
            </div>
            <div className="lg:flex">
              <p>
                具材：キャベツ、天かす、桜えび、卵、天生地、えび、タコ、ホタテ、いか、げそ
              </p>
            </div>
          </div>
          <div className="lg:w-[350px]  lg:px-[6px] ">
            <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
              <p className="font-bold">牛すじ玉</p>
              <p>1500円</p>
            </div>
            <div className="lg:flex">
              <p>
                具材：
                キャベツ、天かす、桜えび、卵、天生地、牛すじ、ごぼう、こんにゃく、
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:justify-between lg:pt-[50px]">
          <div className="lg:w-[350px]  lg:px-[6px]">
            <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
              <p className="font-bold">ミックス玉</p>
              <p>1500円</p>
            </div>
            <div className="lg:flex">
              <p>
                具材：キャベツ、天かす、桜えび、卵、天生地、豚、牛すじ、イカ、
              </p>
            </div>
          </div>
          <div className="lg:w-[350px] lg:px-[6px]">
            <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
              <p className="font-bold">モダン焼き</p>
              <p>1500円</p>
            </div>
            <div className="lg:flex">
              <p>具材：キャベツ、天かす、桜えび、卵、天生地、麺、豚、</p>
            </div>
          </div>
          <div className="lg:w-[350px]  lg:px-[6px] ">
            <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
              <p className="font-bold">天玉</p>
              <p>1500円</p>
            </div>
            <div className="lg:flex">
              <p>具材： キャベツ、天かす、桜えび、卵、天生地、</p>
            </div>
          </div>
        </div>
        <div className="font-bold lg:flex lg:justify-center lg:pt-[90px]  lg:text-[20px] pt-[50px]">
          ＜麺・ご飯＞
        </div>
        <div className="border-t border-yellow-700 lg:my-4"></div>
        <div className="lg:flex  lg:justify-between">
          <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px]">
            <div className="flex justify-between  lg:w-[300px] lg:py-[0px] pb-[8px] pt-[20px]">
              <p className="font-bold">もへじ焼きそば</p>
              <p>1280円</p>
            </div>
            <div className="lg:flex">
              <p>
                具材： 大磯麺、もやし、青梗菜、鷹の爪、キャベツ、にんにく、豚
              </p>
            </div>
          </div>
          <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px]">
            <div className="flex justify-between lg:py-[0px] pb-[8px] pt-[20px]">
              <p className="font-bold">五目ソース焼きそば</p>
              <p>1280円</p>
            </div>
            <div className="lg:flex">
              <p>
                具材： 大磯麺、もやし、キャベツ、紅しょうが、天かす、豚、いか
              </p>
            </div>
          </div>
          <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:py-[0px] pb-[8px] pt-[20px]">
            <div className="flex justify-between">
              <p className="font-bold">オムそば</p>
              <p>1280円</p>
            </div>
            <div className="lg:flex">
              <p>具材： 大磯麺、卵、生クリーム、もやし、キャベツ、豚</p>
            </div>
          </div>
        </div>
        <div className="lg:flex ">
          <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[50px] lg:mr-[28px]">
            <div className="flex justify-between lg:py-[0px] pb-[8px] pt-[20px]">
              <p className="font-bold">海鮮ガーリックライス</p>
              <p>1280円</p>
            </div>
            <div className="lg:flex">
              <p>具材： ご飯、もやし、九条ネギ、イカ、エビ、タコ、ホタテ</p>
            </div>
          </div>
          <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[50px]">
            <div className="flex justify-between lg:py-[0px] pb-[8px] pt-[20px]">
              <p className="font-bold">鉄板オムライス</p>
              <p>1280円</p>
            </div>
            <div className="lg:flex">
              <p>具材： ご飯、卵、生クリーム、玉ねぎ、鶏肉、自家製ケチャップ</p>
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

// //! rafceでひな型作成 and タブ保管⬇️、　その後page.tsxでimportする
// //! Client Componentにする。
// "use client";
// //! Next.jsを使用して、ボタンをクリックしたときにメニューが記載されているページに切り替えるには、next/routerからuseRouterフックを使うのが一般的
// //! 「useRouterフック」を追加し、ボタンがクリックされたときに特定のページに遷移するようにする。　　/menu というページに遷移する場合の実装は次のようになる
// // import { useRouter } from "next/router";//! しかし、⬇⬇️
// //! app ディレクトリで useRouter を使う場合は、必ず next/navigation からインポートし、コンポーネントをクライアントサイドコンポーネントとして指定する必要がある
// import { useRouter } from "next/navigation";

// const Menu = () => {
//   //! useRouterフックを使用
//   const router = useRouter();

//   const handleClick = () => {
//     //! ページの遷移: router.push() を使って、ボタンやリンクのクリックで他のページにプログラム的に移動できる。
//     router.push("/menu");
//     //! ⬆️　　ファイルを新しく作成した時、Next.js のサーバーがまだそのページを認識しておらず、４０４のエラーが出た。　解決策: サーバーを再起動してキャッシュをクリア、npm run devで再起動。
//     // alert("Menu button clicked!");
//   };

//   return (
//     //? buttonをpage.tsxじゃなくコンポーネント内に書く理由は？
//     <button onClick={handleClick} className="menu-button">
//       メニュー
//     </button>
//   );
// };

// export default Menu;
