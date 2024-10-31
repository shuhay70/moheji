"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-between w-full bg-footercolor p-2 h-[350px]">
      <div className="flex">
        <div className="flex items-center">
          <Image
            className="pl-[20px]"
            // publicディレクトリの中にimageディレクトリを作り、そこに画像を保存すると、パスでたどる必要はなく『/』から始めれば良い。
            src="/image/logo1.jpg"
            width={363}
            height={363}
            // altはsrcに来るものの名前が相応しい
            alt="Logo"
          ></Image>
        </div>
        <div className="pt-[55px] pl-[5px]">
          <h1 className="text-white pb-[10px]">＜こだわり＞</h1>
          <p className="text-white w-[330px] ">
            明治四年創業
            豊洲水産仲卸直営。魚介・鶏がら・香味野菜を合わせ毎朝炊き上げる自家製だしを使ったもんじゃ焼きに、豊洲直営ならではの目利き厳選した海鮮一品、焼き魚、珍味など、魅力的な"肴"を数多く揃えております。もんじゃ焼きはすべて、スタッフがお客様の目の前で焼き上げ、プロが作る出来立てを召し上がりいただけます。
          </p>
        </div>
        <div className="border-l  border-white  h-[280px] mt-[30px] ml-[70px] mr-[70px]" />
        <div className="pt-[55px] pl-[5px]">
          <h1 className="text-white pb-[10px]">＜企業情報＞</h1>
          <p className="text-white w-[530px] ">
            私たちの経営理念は伝統と革新。ビジョンは「「東京文化を世界へ」です。「自分たちが信じるうまいものをお客様に届けたい。」「東京の食文化を、世界へ届けていきたい。」そのためにやるべきことは、食のプロフェッショナルとして人々の思い出に残る体験を提供すること。
          </p>
          <p className="text-white w-[530px]">
            もんじゃ焼き専門店をメインとする外食産業に加え、海産物や和惣菜などを販売する小売事業などを展開しています。
          </p>
          <div className="ml-[290px] mt-[20px]">
            <Link className="text-red-200 " href="https://kano-corp.tokyo/">
              会社ホームページはこちらから👈
            </Link>
          </div>
        </div>
        {/* <div className="flex flex-col justify-center">
          <h1 className="text-white">＜アクセス＞</h1>
          <div className="flex p-[10px]">
            <p className="text-white">もへじ 総本店</p>
            <p className="text-white pl-[20px]">
              〒104-0052 東京都中央区月島３丁目５−５
            </p>
          </div>{" "}
          <div className="flex  p-[10px]">
            <p className="text-white">もへじ 本店</p>
            <p className="text-white pl-[20px]">
              〒104-0052 東京都中央区月島３丁目１６−９
            </p>
          </div>
          <div className="flex  p-[10px]">
            <p className="text-white">もへじ はなれ</p>
            <p className="text-white pl-[20px]">
              〒104-0052 東京都中央区月島３丁目６−４
            </p>
          </div>
          <div className="flex  p-[10px]">
            <p className="text-white">もへじ はなれのはなれ</p>
            <p className="text-white pl-[20px]">
              〒104-0052 東京都中央区月島３丁目７−１２
            </p>
          </div>
          <div className="flex  p-[10px]">
            <p className="text-white">もへじ はなれのはなれのはなれ</p>
            <p className="text-white pl-[20px]">
              〒104-0052 東京都中央区月島１丁目２２−１
            </p>
          </div>
        </div> */}
        {/* <div className="flex flex-col justify-center  pl-[40px]">
          <h1 className="text-white pb-[10px]">＜もへじ はなれ＞</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.566347114762!2d139.77818147583505!3d35.66305447259316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018897adffd646d%3A0xc5898692406f85b5!2z5pyI5bO244KC44KT44GY44KDIOOCguOBuOOBmCDjga_jgarjgow!5e0!3m2!1sja!2sca!4v1729577286493!5m2!1sja!2sca"
            width="380"
            height="200"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
