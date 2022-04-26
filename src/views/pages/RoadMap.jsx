import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Img1 from "../../assets/images/RoadMap/roadMap_1.jpg";
import Img2 from "../../assets/images/RoadMap/roadMap_2.jpg";
import Img3 from "../../assets/images/RoadMap/roadMap_3.jpg";
import Img4 from "../../assets/images/RoadMap/roadMap_4.jpg";
import Img5 from "../../assets/images/RoadMap/roadMap_5.png";

const RoadMap = () => {
  const [data] = useState([
    {
      title: "Community of Prime Goat",
      subtitle: "20%",
      img: Img1,
    },
    {
      title: "Community Wallet",
      subtitle: "40%",
      img: Img2,
    },
    {
      title: "Hold Your Goat",
      subtitle: "60%",
      img: Img3,
    },
    {
      title: "Metaverse",
      subtitle: "80%",
      img: Img4,
    },
    {
      title: "Giveaways",
      subtitle: "100%",
      img: Img5,
    },
  ]);
  return (
    <section className="tf-section brow-category home5 bg-style2">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading-live-auctions">
              <h2 className="tf-title text-left pb-40">RoadMap 1.0</h2>
            </div>
          </div>
          <div className="col-md-12">
            <Swiper
              modules={[Scrollbar, A11y]}
              spaceBetween={32}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                767: {
                  slidesPerView: 2,
                },
                991: {
                  slidesPerView: 4,
                },
              }}
              loop={{ draggable: true }}
              scrollbar={{ draggable: true }}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div className="sc-card-product explode style2">
                        <div className="type-title">
                          <h3>{item.title}</h3>
                          <h6 style={{ marginTop: 10 }}>{item.subtitle}</h6>
                        </div>
                        <div className="card-media">
                          {/* <Link to="/item-details-01"> */}
                          <img src={item.img} alt="Axies" />
                          {/* </Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
