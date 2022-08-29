import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Lazy, Keyboard, FreeMode, Navigation } from "swiper";

import Button from "../../components/Button/Button";
import Navbar from "../Navbar/Navbar";

import Categories from "../../data/CategoriesData";

import BgVid from "../../assets/videos/hero-video-1.mp4";
import IconSearch from "../../assets/icons/icon-search--blue.svg";

import "./Homepage.scss";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/free-mode/free-mode.scss";
import "swiper/modules/keyboard/keyboard.scss";
import "swiper/modules/lazy/lazy.scss";

class Homepage extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />

        <section className="home__hero">
          <video autoPlay muted loop className="home__hero-bg">
            <source src={BgVid} type="video/mp4" />
          </video>
          <div className="home__hero-content-wrapper">
            <div className="home__hero-content">
              <div className="home__hero-title-wrapper">
                <div className="home__hero-decorator first" />
                <h1>
                  <FormattedMessage id="hero.title-1" />
                </h1>
                <div className="home__hero-decorator last" />
              </div>
              <h1>
                <FormattedMessage id="hero.title-2" />
              </h1>
              <p className="home__hero-subtitle">
                <FormattedMessage id="hero.subtitle" />
              </p>
              <div className="home__hero-search-wrapper">
                <img
                  src={IconSearch}
                  alt="icon-search"
                  className="home__hero-search-icon"
                />
                <FormattedMessage id="hero.placeholder">
                  {(placeholder) => (
                    <input
                      type="text"
                      className="home__hero-search"
                      placeholder={placeholder}
                    />
                  )}
                </FormattedMessage>
                <FormattedMessage id="hero.search">
                  {(search) => <Button text={search} />}
                </FormattedMessage>
              </div>
            </div>
          </div>
        </section>

        <section className="home__categories">
          {Categories.map((category) => (
            <div className="home__categories-card" key={category.categoryId}>
              <img
                className="home__categories-card-icon"
                src={category.categoryIcon}
                alt="category-icon"
              />
              <h2 className="home__categories-card-title">
                {category[`categoryName${this.props.lang}`]}
              </h2>
              <div className="home__categories-card-btn">
                <FormattedMessage id="categories.more">
                  {(more) => <Button text={more} isLarger />}
                </FormattedMessage>
              </div>
            </div>
          ))}
        </section>

        <section className="home__features">
          <Swiper
            modules={[Lazy, Keyboard, FreeMode, Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            freeMode
            loop
            lazy
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            ...
          </Swiper>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
