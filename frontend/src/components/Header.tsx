"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const router = useRouter();

  const handleClickHeader = () => {
    router.push("/header");
    // alert("Menu button clicked!");
  };

  return (
    <>
      {/* bg-headercolorはtailwind.config.tsで自分で作った変数。 */}
      <header className="flex justify-between w-full bg-headercolor2 p-2">
        <div className="flex items-center">
          <Image
            className="pl-[20px]"
            // publicディレクトリの中にimageディレクトリを作り、そこに画像を保存すると、パスでたどる必要はなく『/』から始めれば良い。
            src="/image/logo4.jpg"
            width={75}
            height={75}
            // altはsrcに来るものの名前が相応しい
            alt="Logo"
          ></Image>
          <h1 className="text-white text-[10px] pt-[8px] pl-[8px]">
            東京文化を世界へ
          </h1>
        </div>
        <div className="flex justify-items-center">
          <div className="p-4 w-[110px] flex items-center justify-center">
            {/*元々、useRouterを使っていたが<Link>の方が簡単。  */}
            <Link className="text-white" href="http://localhost:3000/">
              トップ
            </Link>
          </div>
          <div className="flex border-l border-white h-[35px] mt-[10px]" />
          <div className="p-4 w-[110px] flex items-center justify-center">
            <Link className="text-white" href="/Menu">
              お品書き
            </Link>
          </div>
          <div className="border-l  border-white  h-[35px] mt-[10px]" />
          <div className="p-4 w-[110px] flex items-center justify-center">
            <Link className="text-white" href="/History">
              歴史
            </Link>
          </div>
          <div className="border-l  border-white  h-[35px] mt-[10px]" />
          <div className="p-4 w-[110px] flex items-center justify-center">
            <Link className="text-white" href="https://kano-corp.tokyo/shop/">
              アクセス
            </Link>
          </div>
          <div className="border-l  border-white  h-[35px] mt-[10px]" />
          <div className="p-4 w-[110px] flex items-center justify-center">
            <Link
              className="text-white"
              href="https://tabelog.com/tokyo/A1313/A131302/13186205/"
            >
              ご予約
            </Link>
          </div>
        </div>
        {/* <div className="flex item-center text-white pt-[25px] pr-[20px]">
          日本語 | English
        </div> */}
        <div className="flex pt-[7px]">
          <Link
            className="text-white text-[13px] p-4 flex items-center justify-center"
            href=""
          >
            日本語
          </Link>

          <div className="flex border-l border-white h-[25px] mt-[14px]" />

          <Link
            className="text-white text-[13px] p-4 flex items-center justify-center"
            href="https://tsukishima-monja-koboreya.com/"
          >
            English
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
