import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Accordion } from "react-bootstrap-accordion";

const FAQ = () => {
  const [data] = useState([
    {
      key: "0",
      show: "show",
      title: "What is a Prime Goat?",
      text: "A collection of 5,555 NFTs in the Ethereum Blockchain.",
    },
    {
      key: "1",
      title: "What will be the mint price?",
      text: "The mint price will be .15 ETH + Gas fee",
    },
    {
      key: "2",
      title: "How can I buy a Prime Goat?",
      text:
        "You can buy from our official website in pre-sale or public-sale an “unrevealed” PrimeGoat or in the secondary market place opensea.io (use the discord official links) Be aware of scammers, we will never DM you.",
    },
    {
      key: "3",
      title: "How many NFTs are available?",
      text:
        "There is a total supply of 5,555 NFTs, the team will keep 10% for partnerships, collabs and giveaways. ",
    },
    {
      key: "4",
      title: "How do I get whitelisted?",
      text:
        "The Prime Goat discord provides further and exact information on getting whitelisted.",
    },
  ]);
  return (
    <div>
      <section className="tf-section wrap-accordion">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="tf-title-heading ct style-2 fs-30 mg-bt-10">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="col-md-12">
              <div className="flat-accordion2">
                {data.map((item, index) => (
                  <Accordion key={index} title={item.title}>
                    <p>{item.text}</p>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
