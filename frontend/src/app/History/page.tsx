"use client";

import Head from "next/head";
import SimpleBar from "simplebar-react";

const HistoryPage = () => {
  return (
    <main
      className="py-[100px] " // ヘッダーの高さに応じたパディングと全高に設定
      style={{
        backgroundImage: "url('/image/backimg1.jpg')", // メインの背景画像
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="bg-white ml-[150px] mr-[138px] p-[30px] "></p>
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
        <p className="pl-[25px] p-[15px] font-bold">＜もんじゃの歴史＞</p>
        <div className="flex">
          <p className="px-[25px]">
            もんじゃ焼きは、江戸時代の浅草で生まれました。1819年発行の葛飾北斎の「北斎漫画」にて、鉄板の上に小麦粉を水で溶き文字を書いて子供たちに食べさせていた"文字焼き屋"が登場します。
            となりました。食料難であった昭和20年代頃、うどん粉を溶いて醤油やシロップを加えたシンプルなもんじゃ焼きが子どもたちに広く親しまれていた。江戸末期から明治にかけては物資が不足していた時代、紙や習字の道具をなかなか手に入れることができなかった子どもたちに、小麦粉を水に溶いた生地で鉄板に文字を書いて教えたり遊んだりしていたことから「文字焼き」と呼ばれ、もじがもんじと転じて「もんじゃ」へ変化していった。戦後の経済成長に伴い、キャベツ、コーンや揚げ玉など具材を入れて進化していったが、同時に子どもたちが親しんできた駄菓子屋は激減してしまう。幼い頃から親しんできた味を残そうと数軒のもんじゃ焼き店が立ち上がり、大人のつまみへと変化を遂げ、現在に至る。
            もんじゃ焼きに必須なのが、鉄板とヘラ。もんじゃ焼きは生地の外側から少しずつすくい、鉄板に押し当てて焦がして食べるのが一般的だが、現在は実にさまざまな具材のバリエーションに富んでおり、様々な味ともんじゃの食感を楽しむことができる。
          </p>
          <img
            src="/image/backimg1.jpg"
            className="h-[280px] w-[280px] p-[25px] "
            alt="mennmochi"
          />
        </div>
        <div className="w-[1100px] border-t border-gray-300 my-[40px]"></div>
        <div className="flex">
          <img
            src="/image/backimg1.jpg"
            className="h-[280px] w-[280px] p-[25px] "
            alt="mennmochi"
          />
          <div>
            <p className="pl-[25px] p-[15px] font-bold">
              ＜なぜ土手を作るのか＞
            </p>
            <p className="px-[25px]">
              もんじゃ焼きといえば、土手！と思われる方も多いんではないでしょうか？そもそも、なぜ土手が必要なのか？混ぜてしまえば同じなのではないか？
              実は、土手を作っても作らなくても、もんじゃは作れます！！
              水気の多い生地が床にこぼれないための「工夫」として生まれたのが、ドーナツ状の＂土手＂。
              今現在の鉄板にはフチがあるので、土手を作らなくてももんじゃは作れてしまうのです。。
              とはいえ、東京文化であり昔の名残！
              生地が土手からこぼれるかこぼれないかワクワクしたり、楽しい気持ちになるのは作り手にもありますし、そういう下町ならではの遊び心として、やっぱり土手は欠かせないものですよね！！！
              キャベツの水分や生地のとろみ具合など、土手を作ることで美味しく仕上げることができるので、美味しくもんじゃを作る方法は、もへじのプロたちにお任せください！
            </p>
          </div>
        </div>
        <div className="w-[1100px] border-t border-gray-300 my-[40px]"></div>
        <div className="flex">
          <div className="flex flex-col ">
            <p className="pl-[25px] p-[15px] font-bold">＜もんじゃの作り方＞</p>
            <p className="px-[25px]">
              ＊当店ではスタッフがもんじゃをお焼きいたします。
            </p>
            <p className="px-[25px]">
              ①適量の油を大きなヘラで伸ばしてください。汁を一滴落とし、ジュッという温度まで温めます。
            </p>
            <p className="px-[25px]">
              ②豚・イカ・おもち等の具材だけをまず鉄板の上に落とし軽く炒めます。
            </p>
            <p className="px-[25px]">
              ③お椀の中の残りの具を鉄板の上に落として下さい。（ダシはこぼさないよう注意！火傷する場合があります）
            </p>
            <p className="px-[25px]">
              ④キャベツが少し、しなやかになるまで、切るような感覚で炒めてください。
            </p>
            <p className="px-[25px]">
              ⑤キャベツがしなやかになったら、円状に土手を作ります。ダシが漏れないように土手を作ることが重要！
            </p>
            <p className="px-[25px]">
              ⑥ドーナッツの輪の中に残しておいたダシを入れます。あふれないようにそっと入れてください。少し経つと、土手の中がグツグツ煮えてきます。
            </p>
            <p className="px-[25px]">
              ⑦土手の中と外を、均一に混ぜ合わせていきます。全体が混ぜ合わさったら火を弱火にし、薄く延ばして完成。お好みで青海苔やチーズなどのトッピングを振りかけてください！
            </p>
          </div>
          <img
            src="/image/backimg1.jpg"
            className="h-[280px] w-[280px] p-[25px] "
            alt="mennmochi"
          />
        </div>
      </SimpleBar>
      <p className="bg-white ml-[150px] mr-[138px] p-[30px] "></p>
    </main>
  );
};

export default HistoryPage;
