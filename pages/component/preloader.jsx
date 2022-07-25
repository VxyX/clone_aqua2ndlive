import utama from "../../public/images/svg/logo_2line_full.svg";
import React from "react";
import Image from "next/image";

class Preloader extends React.Component {

    render() {
      return (
            <div className={'bg-loadScreenTexture bg-repeat z-50 bg-white fixed h-screen w-screen transform transition-all duration-700 ' + this.props.addClass}>
                {/* <Image src={utama} alt="Gambar Utama" layout={"fill"}/> */}
                <div className="absolute transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Image src={utama} alt="Gambar Utama"/>
                </div>
            </div>
      );
    }
}

export default Preloader