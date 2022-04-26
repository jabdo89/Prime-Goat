import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../../assets/images/icon/Wallet.png";
import icon2 from "../../assets/images/icon/Category.png";
import icon3 from "../../assets/images/icon/Image2.png";
import icon4 from "../../assets/images/icon/Bookmark.png";

const Create = () => {
  const data = [
    {
      title: "ERC-721 tokens",
      description:
        "This NFTs are stored as ERC-721 tokens on the Ethereum blockchain, each one of them has a unique set of traits and its level of rarity",
      icon: icon1,
      colorbg: "icon-color1",
    },
    {
      title: "5,555 unique NFTs",
      description: "Collection of 5,555 unique NFTs",
      icon: icon2,
      colorbg: "icon-color2",
    },
    {
      title: "Talent",
      description:
        "Built by talented artists, designers, developers and veteran marketeers",
      icon: icon3,
      colorbg: "icon-color3",
    },
    {
      title: "Utility Project",
      description:
        "It is a high utility project created and owned by the community itself",
      icon: icon4,
      colorbg: "icon-color4",
    },
  ];
  return (
    <section className="tf-box-icon create tf-section bg-home-3">
      <div className="themesflat-container">
        <div className="row">
          {data.map((item, index) => (
            <CreateItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CreateItem = (props) => (
  <div className="col-lg-3 col-md-6 col-12">
    <div className="sc-box-icon">
      <div className="image center">
        <div className={`icon-create ${props.item.colorbg}`}>
          <img src={props.item.icon} alt="" />
        </div>
      </div>
      <h3 className="heading">
        <Link to="/wallet-connect">{props.item.title}</Link>
      </h3>
      <p className="content">{props.item.description}</p>
    </div>
  </div>
);

export default Create;
