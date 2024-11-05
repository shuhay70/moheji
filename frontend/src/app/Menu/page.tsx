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
        <div className="lg:flex lg:flex-col  lg:flex lg:justify-center">
          <div className="lg:flex">
            <div className="lg:px-[40px] lg:pb-[30px]">
              <img
                src="/image/backimg1.jpg"
                className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
                alt="mennmochi"
              />
              <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                明太子もちもんじゃ
              </p>
              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                クリーミーなだしが明太子の美味しさと調和する人気NO.1もんじゃ！モッツァレラチーズトッピングを加えると風味が増して更に美味しくなります！！
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                具材：キャベツ、天かす（海老入り）出汁、生クリーム、明太子、おもち
              </p>
            </div>
            <div className="lg:px-[40px] lg:pb-[30px]">
              <img
                src="/image/backimg1.jpg"
                className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
                alt="mennmochi"
              />
              <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                海鮮もんじゃ
              </p>
              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                築地・豊洲で150年続く、水産仲卸直営のもんじゃ店だからこそ出せる最高峰の味です!海鮮は全て築地、豊洲から毎朝仕入れています！
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                具材：キャベツ、天かす（海老入り）出汁、さきいか、イカ、たこ、えび、塩辛、ホタテ
              </p>
            </div>
            <div className="lg:px-[40px] lg:pb-[30px]">
              <img
                src="/image/backimg1.jpg"
                className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
                alt="mennmochi"
              />
              <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                イカ墨もんじゃ
              </p>

              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                良い意味で期待を裏切られた！と一度食べると病みつきになる事請け合いのもんじゃです!モッツァレラチーズトッピングで更に美味しくなります！！
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                具材：キャベツ、天かす（海老入り）出汁、生クリーム、さきいか、イカ墨、げそ、刻みニンニク、にんにくの芽、長ネギ、バター
              </p>
            </div>
          </div>
          <div className="lg:flex">
            <div className="lg:px-[40px] lg:pb-[30px]">
              <img
                src="/image/backimg1.jpg"
                className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
                alt="mennmochi"
              />
              <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                明太子しそもんじゃ
              </p>
              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                大葉の爽やかな風味が、明太子の質の良さを更に引き立て、味わい深くしてくれるもんじゃです！
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                具材：キャベツ、天かす（海老入り）出汁、生クリーム、さきいか、明太子、しそ
              </p>
            </div>
            <div className="lg:px-[40px] lg:pb-[30px]">
              <img
                src="/image/backimg1.jpg"
                className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
                alt="mennmochi"
              />
              <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                豚キムチもんじゃ
              </p>
              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                選りすぐりのキムチと特製ダレが合わさり、定番のもんじゃも一味違う美味しさに仕上がっています！チーズ、ニラ、コーンなどのトッピングもお好みでどうぞ！！{" "}
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                具材：キャベツ、天かす（海老入り）出汁、さきいか、豚、キムチ、ニラ、もやし、刻みニンニク
              </p>
            </div>
            <div className="lg:px-[40px] lg:pb-[30px]">
              <img
                src="/image/backimg1.jpg"
                className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
                alt="mennmochi"
              />
              <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                梅タコ豚のりもんじゃ
              </p>
              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                梅の酸味と豚肉の旨味にタコの食感がアクセントに加わり、海苔と大葉が風味を良くしてくれる、今の季節にピッタリのもんじゃです！
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                具材：キャベツ、天かす（海老入り）出汁、さきいか、豚、タコ、梅、のり、しそ
              </p>
            </div>
          </div>
          <div className="lg:flex">
            <div className="lg:px-[40px] lg:pb-[30px]">
              <img
                src="/image/backimg1.jpg"
                className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
                alt="mennmochi"
              />
              <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                親子もんじゃ
              </p>
              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                鶏肉の旨味と玉ねぎの甘みを、玉子が包み込む、食べていてホッとする和風の味わいのもんじゃです。{" "}
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                具材：キャベツ、天かす（海老入り）出汁、さきいか、鶏ひき肉、玉ねぎ、ネギ、のり、卵
              </p>
            </div>
            <div className="lg:px-[40px] lg:pb-[30px]">
              <img
                src="/image/backimg1.jpg"
                className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
                alt="mennmochi"
              />
              <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                牛すじカレーもんじゃ
              </p>
              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                カレーのスパイシーな風味に、トロトロに煮込まれた牛すじの旨味が合わさりたまらない美味しさです！！{" "}
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                具材：キャベツ、天かす（海老入り）出汁、生クリーム、さきいか、牛すじ、カレー粉、ごぼう、こんにゃく、しめじ
              </p>
            </div>
            <div className="lg:px-[40px] lg:pb-[30px]">
              <img
                src="/image/backimg1.jpg"
                className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
                alt="mennmochi"
              />
              <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                豚ニラたまもんじゃ
              </p>
              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                ニラとニンニクの良い風味が引き立ち、玉子の濃厚な味わいで食欲がどんどん増してくるもんじゃです！{" "}
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                具材：キャベツ、天かす（海老入り）出汁、さきいか、豚、ニラ、にんにく、卵
              </p>
            </div>
          </div>
          <div className="lg:flex">
            <div className="lg:px-[40px] lg:pb-[30px]">
              <img
                src="/image/backimg1.jpg"
                className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
                alt="mennmochi"
              />
              <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                五目もんじゃ
              </p>
              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                海鮮と豚肉、シャキシャキとした野菜が食感の良い贅沢なもんじゃです！
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                具材：キャベツ、天かす（海老入り）出汁、さきいか、豚、鶏肉、げそ、もち、さつま揚げ、麺、紅生姜、コーン
              </p>
            </div>
            <div className="lg:px-[40px] lg:pb-[30px]">
              {/* <img
                src="/image/backimg1.jpg"
                className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
                alt="mennmochi"
              /> */}
              <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                素もんじゃ
              </p>
              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                お好みの具材をトッピングしてお楽しみください！
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                具材：キャベツ、天かす（海老入り）、さきいか、出汁
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
