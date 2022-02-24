import React, { useCallback, useMemo, useState } from 'react';
import logo from "../assets/images/logo.png";
import { User, Search, AlignJustify, X } from "react-feather";
import ButtonTag from './atoms/ButtonTag';
import "../assets/styles/header.css";

export default function Header() {

    const [show, setShow] = useState(false);

    const toggle = useCallback(() => {
        setShow(!show);
    }, [show, setShow])

    const mobileHeader = useMemo(() => {
        return show && <div className="mobile-expand-header-container">
            <div className="mobile-expand-header">
                <div className="d-flex justify-content-end">
                    <X size={28} className="mobile-header-close-btn" onClick={() => toggle()} />
                </div>
                <div className="mt-5">
                    <p onClick={() => toggle()} className="mobile-menu-item">SINGUP TO COOK</p>
                    <p onClick={() => toggle()} className="mobile-menu-item">DISH</p>
                    <p onClick={() => toggle()} className="mobile-menu-item">EVENT</p>
                    <p onClick={() => toggle()} className="mobile-menu-item">SAFETY & TRUST</p>
                    <p onClick={() => toggle()} className="mobile-menu-item">FAQ</p>
                </div>
            </div>
        </div>
    }, [show, toggle])

    return (
        <div>
            <div className="header-container">
                <div className="desktop-header-content">
                    <div><img src={logo} alt="logo" /></div>
                    <div className="header-menu d-flex align-items-center">
                        <p className="menu-item">SINGUP TO COOK</p>
                        <p className="menu-item">DISH</p>
                        <p className="menu-item">EVENT</p>
                        <p className="menu-item">SAFETY & TRUST</p>
                        <p className="menu-item">FAQ</p>
                    </div>
                    <div className="header-extra-action d-flex align-items-center">
                        <Search size={20} className="" color={"#504F55"} />
                        <User size={20} className="mx-4" color={"#504F55"} />
                        <span><ButtonTag onClick={() => console.log("contact us")} title="CONTACT US" /></span>
                    </div>
                </div>
                <div className="mobile-header-content">
                    <div><img src={logo} alt="logo" /></div>
                    <div className="header-expand-btn" onClick={() => toggle()}>
                        <AlignJustify color={"#333333"} size={24} />
                    </div>
                    {mobileHeader}
                </div>
            </div>
        </div>
    )
}