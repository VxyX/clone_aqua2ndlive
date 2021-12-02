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
        <div
          id="beranda"
          className="bg-ungu h-screen hp:h-auto grid place-content-center"
        >
          <div className="relative">
            <div className="animate-fade-in-dikit m-auto h-auto py-10 px-10">
              <div className="absolute">
                <Image src={gedung} alt="Gambar Utama" />
              </div>
              <div className="animate-fade-in-banyak z-10">
                <Image src={aqua} alt="Gambar Utama" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
