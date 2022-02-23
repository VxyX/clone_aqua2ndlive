import Head from "next/head";
import Image from "next/image";
import banner_v from "../public/images/Twt-Logo.jpg";
import logo_v from "../public/images/logo.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Virtunix</title>
        <meta name="description" content="Official Website of Virtunix" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <div>
        <Image src={logo_v} alt="Logo Virtunix" />
        <br></br>
        <Image src={banner_v} alt="Banner Virtunix" />
      </div>
    </>
  );
}
