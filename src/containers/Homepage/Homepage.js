import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Homepage.scss';
import BgVid from "../../assets/videos/hero-video-1.mp4";
import Button from "../../components/Button/Button";

import IconSearch from '../../assets/icons/icon-search--blue.svg';
import Navbar from "../Navbar/Navbar";

class Homepage extends Component {
    render() {
        return (
            <div className='home'>
                <Navbar/>

                <div className="home__hero">
                    <video autoPlay muted loop className='home__hero-bg'>
                        <source src={BgVid} type="video/mp4"/>
                    </video>
                    <div className="home__hero-content-wrapper">
                        <div className="home__hero-content">
                            <div className='home__hero-title-wrapper'>
                                <div className="home__hero-decorator first"/>
                                <h1>Nền tảng y tế</h1>
                                <div className="home__hero-decorator last"/>
                            </div>
                            <h1>Chăm sóc sức khỏe toàn diện</h1>
                            <p className='home__hero-subtitle'>Đội ngũ các bác sĩ lâu năm với đa dạng chuyên khoa từ các
                                cơ sở y tế hàng đầu Việt Nam</p>
                            <div className="home__hero-search-wrapper">
                                <img src={IconSearch} alt="icon-search" className='home__hero-search-icon'/>
                                <input type="text" className='home__hero-search' placeholder='Tìm kiếm bác sĩ'/>
                                <Button text='Tìm kiếm'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
