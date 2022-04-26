import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Img1 from "../../assets/images/Team/Founder.png";
import Img2 from "../../assets/images/Team/Co-Founder.png";
import Img3 from "../../assets/images/Team/Head Of Operations.png";
import Img4 from "../../assets/images/Team/Marketing Lead.png";
import Img5 from "../../assets/images/Team/Designer.png";

const Authors01 = () => {
  const data = [
    {
      img: Img1,
      name: "Carlos Garza",
      price: "Founder",
      classPadding: "",
    },
    {
      img: Img2,
      name: "Carlos Garza",
      price: "Co-Founder",
      classPadding: "",
    },
    {
      img: Img3,
      name: "Carlos Garza",
      price: "Head of Operations",
      classPadding: "",
    },
    {
      img: Img4,
      name: "Carlos Garza",
      price: "Marketing Lead",
      classPadding: "",
    },
    {
      img: Img5,
      name: "Carlos Garza",
      price: "Designer",
      classPadding: "",
    },
  ];

  return (
    <section className="tf-section live-auctions">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="tf-title style4">Team</h2>
            <p className="tf-sub-title">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              obcaecati dignissimos quae quo ad iste ipsum officiis deleniti
              asperiores sit.
            </p>
          </div>
          <div className="col-md-12">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                767: {
                  slidesPerView: 3,
                },
                991: {
                  slidesPerView: 4,
                },
                1300: {
                  slidesPerView: 5,
                },
              }}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                {data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <TopSellerItem item={item} />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

Authors01.propTypes = {
  data: PropTypes.array.isRequired,
};

const TopSellerItem = (props) => (
  <div className="swiper-container seller seller-slider">
    <div className="swiper-wrapper">
      <div className="swiper-slide">
        <div className="slider-item">
          <div className="sc-author-box style-2">
            <div className="author-avatar" style={{ height: 200, width: 200 }}>
              <img
                src={props.item.img}
                alt=""
                className="avatar"
                style={{ height: 200, width: 200, borderRadius: 20 }}
              />
              <div className="badge"></div>
            </div>
            <div className="author-infor">
              <h5>
                <Link to="/author-02">{props.item.name}</Link>
              </h5>
              <span className="price">{props.item.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Authors01;
