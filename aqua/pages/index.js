import Head from "next/head";
import Image from "next/image";
import utama from "../public/images/svg/logo_2line_full.svg";
import aqua from "../public/images/aqua_neko_1000-min.png";
import gedung from "../public/images/kv_bg_ef_1920-min.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aqua Minato One-man Live 2022</title>
        <meta name="description" content="Live Aqua 2022!" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <div className="h-screen">
        <div className="flex-wrap bg-cross hidden">
          <div className="place-content-center flex flex-wrap h-screen m-auto">
            <Image src={utama} alt="Gambar Utama" />
          </div>
        </div>

        <div className="bg-ungu h-auto flex flex-wrap place-content-center m-0.5 py-16">
          <div id="container" className="w-5/6 flex overflow-hidden">
            <div id="beranda" className="animate-gedung-fade-in relative scale-y-full">
              <Image src={gedung} />
              
            </div>
            <div className="animate-aqua-fade-in transform translate-x-dikit absolute h-full -my-16">
                <Image src={aqua} alt="Gambar Utama" />
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
