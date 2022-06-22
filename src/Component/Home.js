import React from "react";
import Styles from "../assets/css/Home.module.css";

const Home = () => {
  return (
    <>
      <div className={Styles.container}>
        <h2 className={Styles.title}>Counter</h2>
        <div className={Styles.counter}>
          <div className={Styles.content}>
            <div className={Styles.boox}>
              <div className={Styles.contentBox}>
                <span className={Styles.contentNumber}>00</span>
              </div>
              <div className={Styles.contentBox}>
                <span className={Styles.contentNumber}>00</span>
              </div>
            </div>
            <span className={Styles.contentWord}>Days</span>
          </div>
          <div className={Styles.content}>
            <div className={Styles.boox}>
              <div className={Styles.contentBox}>
                <span className={Styles.contentNumber}>00</span>
              </div>
              <div className={Styles.contentBox}>
                <span className={Styles.contentNumber}>00</span>
              </div>
            </div>
            <span className={Styles.contentWord}>Hrs</span>
          </div>
          <div className={Styles.content}>
            <div className={Styles.boox}>
              <div className={Styles.contentBox}>
                <span className={Styles.contentNumber}>00</span>
              </div>
              <div className={Styles.contentBox}>
                <span className={Styles.contentNumber}>00</span>
              </div>
            </div>
            <span className={Styles.contentWord}>Min</span>
          </div>
          <div className={Styles.content}>
            <div className={Styles.boox}>
              <div className={Styles.contentBox}>
                <span className={Styles.contentNumber}>00</span>
              </div>
              <div className={Styles.contentBox}>
                <span className={Styles.contentNumber}>00</span>
              </div>
            </div>
            <span className={Styles.contentWord}>Sec</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
