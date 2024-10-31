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
          ＜お好み焼き＞
        </div>
        <div className="border-t border-yellow-700 my-4"></div>
        <div className="flex justify-between">
          <div className="w-[320px]  px-[6px]">
            <div className="flex justify-between pb-[10px] pr-[10px]">
              <p className="font-bold">豚玉</p>
              <p>1500円</p>
            </div>
            <div className="flex">
              <p>具材：キャベツ、天かす、桜えび、卵、天生地、豚</p>
            </div>
          </div>
          <div className="w-[350px] px-[6px]">
            <div className="flex justify-between pb-[10px] pr-[10px]">
              <p className="font-bold">海鮮玉</p>
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
              <p className="font-bold">牛すじ玉</p>
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
              <p className="font-bold">ミックス玉</p>
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
              <p className="font-bold">モダン焼き</p>
              <p>1500円</p>
            </div>
            <div className="flex">
              <p>具材：キャベツ、天かす、桜えび、卵、天生地、麺、豚、</p>
            </div>
          </div>
          <div className="w-[350px]  px-[6px] ">
            <div className="flex justify-between pb-[10px] pr-[10px]">
              <p className="font-bold">天玉</p>
              <p>1500円</p>
            </div>
            <div className="flex">
              <p>具材： キャベツ、天かす、桜えび、卵、天生地、</p>
            </div>
          </div>
        </div>
        <div className="font-bold flex justify-center pt-[90px]  text-[20px]">
          ＜麺・ご飯＞
        </div>
        <div className="border-t border-yellow-700 my-4"></div>
        <div className="flex  justify-between">
          <div className="flex flex-col w-[350px]  px-[6px]">
            <div className="flex justify-between  w-[300px]">
              <p className="font-bold">もへじ焼きそば</p>
              <p>1280円</p>
            </div>
            <div className="flex">
              <p>
                具材： 大磯麺、もやし、青梗菜、鷹の爪、キャベツ、にんにく、豚
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[350px]  px-[6px]">
            <div className="flex justify-between ">
              <p className="font-bold">五目ソース焼きそば</p>
              <p>1280円</p>
            </div>
            <div className="flex">
              <p>
                具材： 大磯麺、もやし、キャベツ、紅しょうが、天かす、豚、いか
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[350px]  px-[6px]">
            <div className="flex justify-between">
              <p className="font-bold">オムそば</p>
              <p>1280円</p>
            </div>
            <div className="flex">
              <p>具材： 大磯麺、卵、生クリーム、もやし、キャベツ、豚</p>
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className="flex flex-col w-[350px]  px-[6px] pt-[50px] mr-[28px]">
            <div className="flex justify-between ">
              <p className="font-bold">海鮮ガーリックライス</p>
              <p>1280円</p>
            </div>
            <div className="flex">
              <p>具材： ご飯、もやし、九条ネギ、イカ、エビ、タコ、ホタテ</p>
            </div>
          </div>
          <div className="flex flex-col w-[350px]  px-[6px] pt-[50px]">
            <div className="flex justify-between ">
              <p className="font-bold">鉄板オムライス</p>
              <p>1280円</p>
            </div>
            <div className="flex">
              <p>具材： ご飯、卵、生クリーム、玉ねぎ、鶏肉、自家製ケチャップ</p>
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
