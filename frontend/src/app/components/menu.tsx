//! rafceでひな型作成 and タブ保管⬇️、　その後page.tsxでimportする
//! Client Componentにする。
"use client";
//! Next.jsを使用して、ボタンをクリックしたときにメニューが記載されているページに切り替えるには、next/routerからuseRouterフックを使うのが一般的
//! 「useRouterフック」を追加し、ボタンがクリックされたときに特定のページに遷移するようにする。　　/menu というページに遷移する場合の実装は次のようになる
// import { useRouter } from "next/router";//! しかし、⬇⬇️
//! app ディレクトリで useRouter を使う場合は、必ず next/navigation からインポートし、コンポーネントをクライアントサイドコンポーネントとして指定する必要がある
import { useRouter } from "next/navigation";

const Menu = () => {
  //! useRouterフックを使用
  const router = useRouter();

  const handleClick = () => {
    //! ページの遷移: router.push() を使って、ボタンやリンクのクリックで他のページにプログラム的に移動できる。
    router.push("/menu");
    //! ⬆️　　ファイルを新しく作成した時、Next.js のサーバーがまだそのページを認識しておらず、４０４のエラーが出た。　解決策: サーバーを再起動してキャッシュをクリア、npm run devで再起動。
    // alert("Menu button clicked!");
  };

  return (
    // buttonをpage.tsxじゃなくコンポーネント内に書く理由は？
    <button onClick={handleClick} className="menu-button">
      メニュー
    </button>
  );
};

export default Menu;
