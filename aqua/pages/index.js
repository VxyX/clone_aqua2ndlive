import Head from "next/head";
import Image from "next/image";
import utama from "../public/images/svg/logo_2line_full.svg";
import aqua from "../public/images/aqua_neko_1000-min.png";

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
        <div className="bg-ungu h-auto flex flex-wrap place-content-center m-auto py-44">
          <div id="beranda" className="bg-gedung animate-fade-in-dikit -my-10 w-3/4">
            <div className="animate-fade-in-banyak -my-24">
              <Image src={aqua} alt="Gambar Utama" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
