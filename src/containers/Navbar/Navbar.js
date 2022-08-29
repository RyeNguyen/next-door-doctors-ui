import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from "react-intl";

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
                    <FormattedMessage id='navbar.specialty'/>
                    <div className="nav__link-desc"><FormattedMessage id='navbar.specialty-desc'/></div>
                </div>

                <div className="nav__link">
                    <FormattedMessage id='navbar.facility'/>
                    <div className="nav__link-desc"><FormattedMessage id='navbar.facility-desc'/></div>
                </div>

                <div className="nav__link">
                    <FormattedMessage id='navbar.doctor'/>
                    <div className="nav__link-desc"><FormattedMessage id='navbar.doctor-desc'/></div>
                </div>

                <div className="nav__link">
                    <FormattedMessage id='navbar.pack'/>
                    <div className="nav__link-desc"><FormattedMessage id='navbar.pack-desc'/></div>
                </div>
            </div>

            <div style={{display: 'flex', alignItems: 'center', gap: '1.6rem'}}>
                <div className='nav__switch-label'><FormattedMessage id='navbar.language'/></div>
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

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);