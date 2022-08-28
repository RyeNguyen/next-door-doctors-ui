import React, {useEffect, useState} from 'react';

import './Navbar.scss';

import Logo from '../../assets/images/logo--light.svg';

const Navbar = () => {
    const [activeNav, setActiveNav] = useState(false);

    useEffect(() => {
        changeNavBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeNavBackground)
    });

    const changeNavBackground = () => {
        if (window.scrollY >= 132) {
            setActiveNav(true);
        } else {
            setActiveNav(false);
        }
    }

    return (
        <div className={activeNav ? 'nav nav--active' : 'nav'}>
            <img src={Logo} alt="logo"/>

            <div className="nav__links">
                <div className="nav__link">
                    Chuyên khoa
                    <div className="nav__link-desc">Tìm bác sĩ theo chuyên khoa</div>
                </div>

                <div className="nav__link">
                    Cơ sở y tế
                    <div className="nav__link-desc">Chọn bệnh viện phòng khám</div>
                </div>

                <div className="nav__link">
                    Bác sĩ
                    <div className="nav__link-desc">Chọn bác sĩ giỏi</div>
                </div>

                <div className="nav__link">
                    Gói khám
                    <div className="nav__link-desc">Khám sức khỏe tổng quát</div>
                </div>
            </div>

            <div style={{display: 'flex', alignItems: 'center', gap: '1.6rem'}}>
                <div className='nav__switch-label'>Language</div>
                <div className="nav__switch">
                    <input type="checkbox" className="nav__switch-checkbox"/>
                    <div className="nav__switch-knobs">
                        <span/>
                    </div>
                    <div className="nav__switch-layer"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;