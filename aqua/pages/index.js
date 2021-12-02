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
        <div id="beranda" className="bg-ungu h-screen hp:h-auto flex flex-wrap place-content-center hp:py-44">
          <div className="bg-gedung animate-fade-in-dikit m-auto hp:-my-10 h-1/2 hp:h-auto w-5/6 hp:w-5/6">
            <div className="animate-fade-in-banyak hp:-my-24 hp:mx-36">
              <Image src={aqua} alt="Gambar Utama" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
