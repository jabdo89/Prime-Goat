import React, { useState, Fragment } from "react";
import firebase from "firebase";
import img1 from "../../assets/images/blog/GoldTiger2.png";

const Subscribe = (props) => {
  const [form, setForm] = useState({ name: "", email: "" });

  const onFinish = () => {
    const db = firebase.firestore();

    db.collection("Emails")
      .add({
        name: form.name,
        email: form.email,
        date: new Date(),
      })
      .then(async () => {
        setForm({ name: "", email: "" });
        alert("You are now Subscribed, we will keep you updated!");
      });
  };

  return (
    <Fragment>
      <div>
        <section className="tf-contact tf-section">
          <div className="themesflat-container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="box-feature-contact">
                  <img src={img1} alt="Axies" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <h2 className="tf-title-heading style-2 mg-bt-12">
                  Subscribe to Prime Goat
                </h2>
                <h5 className="sub-title style-1">
                  The Prime Goat discord provides further and exact information
                  on getting whitelisted.
                </h5>
                <div className="form-inner">
                  <form
                    id="contactform"
                    noValidate="novalidate"
                    className="form-submit"
                  >
                    <input
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      tabIndex="1"
                      aria-required="true"
                      type="text"
                      placeholder="Your Full Name"
                      required
                    />
                    <input
                      value={form.email}
                      tabIndex="2"
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      aria-required="true"
                      type="email"
                      placeholder="Your Email Address"
                      required
                    />
                    <button
                      type="button"
                      disabled={form.name === "" || form.email === ""}
                      onClick={() => onFinish()}
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Subscribe;
