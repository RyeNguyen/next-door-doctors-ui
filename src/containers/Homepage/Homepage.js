import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from "react-intl";

import Button from "../../components/Button/Button";
import Navbar from "../Navbar/Navbar";

import Categories from "../../data/CategoriesData";

import BgVid from "../../assets/videos/hero-video-1.mp4";
import IconSearch from '../../assets/icons/icon-search--blue.svg';

import './Homepage.scss';

class Homepage extends Component {
    render() {
        return (
            <div className='home'>
                <Navbar/>

                <section className="home__hero">
                    <video autoPlay muted loop className='home__hero-bg'>
                        <source src={BgVid} type="video/mp4"/>
                    </video>
                    <div className="home__hero-content-wrapper">
                        <div className="home__hero-content">
                            <div className='home__hero-title-wrapper'>
                                <div className="home__hero-decorator first"/>
                                <h1><FormattedMessage id='hero.title-1'/></h1>
                                <div className="home__hero-decorator last"/>
                            </div>
                            <h1><FormattedMessage id='hero.title-2'/></h1>
                            <p className='home__hero-subtitle'><FormattedMessage id='hero.subtitle'/></p>
                            <div className="home__hero-search-wrapper">
                                <img src={IconSearch} alt="icon-search" className='home__hero-search-icon'/>
                                <FormattedMessage id='hero.placeholder'>
                                    {
                                        placeholder => <input type="text" className='home__hero-search' placeholder={placeholder}/>
                                    }
                                </FormattedMessage>
                                <FormattedMessage id='hero.search'>
                                    {
                                        search => <Button text={search}/>
                                    }
                                </FormattedMessage>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="home__categories">
                    {
                        Categories.map(category => (
                            <div className='home__categories-card' key={category.categoryId}>
                                <img className='home__categories-card-icon' src={category.categoryIcon} alt="category-icon"/>
                                <h2 className='home__categories-card-title'>{category[`categoryName${this.props.lang}`]}</h2>
                                <div className='home__categories-card-btn'>
                                    <FormattedMessage id='categories.more'>
                                        {
                                            more => <Button text={more} isLarger/>
                                        }
                                    </FormattedMessage>
                                </div>
                            </div>
                        ))
                    }
                </section>
            </div>
        );
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
