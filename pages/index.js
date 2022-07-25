import Head from "next/head";
import Image from "next/image";
import utama from "../public/images/svg/logo_2line_full.svg";
import aqua from "../public/images/home/aqua_neko_1000-min.png";
import aqua2 from "../public/images/home/aqua_neko_1500_pc-min.png";
import gedung from "../public/images/home/kv_bg_ef_1920-min.jpg";
import React, { useEffect, useState } from "react";
import Homee from './component/home'
import ReactDOM from "react-dom";
import Router from "next/router";



function Home() {

  return (
    <>
      <Head>
        <title>Aqua Minato One-man Live 2022</title>
        <meta name="description" content="Live Aqua 2022!" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Homee />
    </>
  );
}

export default Home
