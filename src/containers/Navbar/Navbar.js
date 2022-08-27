import React from 'react';

import './Navbar.scss';

import Logo from '../../assets/images/logo--light.svg';

const Navbar = () => {
    return (
        <div className='nav'>
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

            <div/>
        </div>
    )
}

export default Navbar;