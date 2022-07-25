import utama from "../../public/images/svg/logo_2line_full.svg";
import aqua from "../../public/images/home/aqua_neko_1000-min.png";
import aqua2 from "../../public/images/home/aqua_neko_1500_pc-min.png";
import gedung from "../../public/images/home/kv_bg_ef_1920-min.jpg";
import Preloader from "./preloader";
import Image from "next/image";
import React, { Component } from "react";

class home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            loaderClass: ' opacity-100',
            mainBgClass: ' opacity-0',
            gedungBgClass: ' scale-150',
            aquaBgClass: ' scale-double',
            load: true,
            loadAqua: true
        }
    }
  
    componentDidMount() { 
        console.log("Did Mount")
        
    }

    componentWillUnmount() {
        console.log("Unmount")
    }

    componentDidUpdate = () => {
        if (!this.state.loadAqua && !this.state.load) {
            setTimeout(() => {
                this.setState({
                    loaderClass: ' opacity-0',
                })
            }, 800)
            setTimeout(() => {
                this.setState({
                    mainBgClass: ' opacity-100',
                    gedungBgClass: ' scale-100',
                    aquaBgClass: ' scale-100', 
                    open: true
                })
            },900)
            setTimeout(() => {
                this.setState({
                    open: true
                })
            },950)
            return true
        }
    }

    shouldComponentUpdate = () => {
        if (this.state.open) {
            return false
        }
        return true
    }

    openState = () => {
        setTimeout(() => {
            this.setState({
                open : true, 
                loaderClass: ' opacity-0',
            })
        }, 800)
        setTimeout(() => {
            this.setState({
                mainBgClass: ' opacity-100',
                gedungBgClass: ' scale-100',
                aquaBgClass: ' scale-100' 
            })
        },900)
    }

    render() {
        return (
            <>
                <Preloader addClass={this.state.loaderClass}/>
                <div className="bg-bgUngu bg-center bg-cover h-screen w-full fixed" >
                    <div className="bg-dot bg-repeat bg-center absolute block h-full w-full top-0 left-0 bg-dotSize">
                    </div>
                    <div className="h-full w-full absolute">
                        <div className="absolute bg-bgCircle bg-contain w-48 h-48 left-1/4 top-circleBgTop animate-bg-circle-a"></div>
                        <div className="absolute bg-bgCircle bg-contain w-48 h-48 right-circleBgRight bottom-circleBgBottom animate-bg-circle-a"></div>
                    </div>
                    <div className="h-full w-full">
                        <div className="bg-bgFrame bg-no-repeat left-0 w-1/2 h-full bg-contain absolute block"></div>
                        <div className="bg-bgFrame bg-no-repeat right-0 w-1/2 h-full bg-contain absolute transform scale-x-flip"></div>
                    </div>
                </div>
                <div className="pt-px100 pb-20 block overflow-hidden">
                    <div className="px-20 relative">
                        <div className="block relative">
                            <div className="w-full h-auto">
                                <Image src={gedung} onLoadingComplete={() => this.setState({load: false})} className={"transition-all duration-15s transform ease-mainBg absolute"
                            + this.state.mainBgClass + this.state.gedungBgClass}></Image>
                            </div>
                            <div className={"transition-all duration-15s ease-mainBg transform -translate-x-1/2 -translate-y-1/2 left-tl top-tl1 w-aqua h-auto absolute block" 
                            + this.state.mainBgClass + this.state.aquaBgClass}>
                                <Image src={aqua2} onLoadingComplete={() => this.setState({loadAqua: false})}></Image>
                            </div>
                        </div>
                        <div className="flex">

                        </div>
                    </div>

                </div>
            </>
        );
    }
}

export default home;