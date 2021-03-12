import React, { useEffect } from "react";
import styles from './Project.css'
import AOS from "aos";
import "aos/dist/aos.css";

function Project({title, description, stacks, imagefront, imageback}) {
        useEffect(() => {
            AOS.init();
            AOS.refresh();
        }, []);
        return (
        <div className="container row">
            <div className="col">
                <div className="left" data-aos="fade-up-right">
                    <p className="title">
                        <div className="row">
                            <div className="col-7">{title}</div>
                            <div className="col-5"></div>
                        </div>
                    </p>
                    <div className="row">
                        <div className="col">
                            <div className="description shadow">
                                {description}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mt-2 col stacks">
                            {stacks}
                        </div>
                    </div>
                </div>
                <div className="right" data-aos="fade-up-left">
                    <div className="hoverSwap">
                        <img className="hoverSwapFront" src={imagefront} alt=""/>
                        <img className="hoverSwapBack" src={imageback} alt=""/>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Project
