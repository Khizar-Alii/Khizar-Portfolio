import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personel Journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button  qualification__active button--flex"
                : "qualification__button   button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button  qualification__active button--flex"
                : "qualification__button   button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experiance
          </div>
        </div>
        <div className="qualification__section">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachelor's in Computer science</h3>
                <span className="qualification__subtitle">
                  Hazara University Mansehra
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">React JS Expert</h3>
                <span className="qualification__subtitle">
                SkillUP by Simplilearn
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 16 Dec - 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">HTML JavaScript, & Bootstrap</h3>
                <span className="qualification__subtitle">
                  Udemy
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 14 Dec - 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">CSS Expert</h3>
                <span className="qualification__subtitle">
                  SkillUP by Simplilearn
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 03 Sep 2022
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  Let's Grow More - India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 1 Month Internship
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">React + Next JS</h3>
                <span className="qualification__subtitle">
                  Bytewise Limited
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 3 Months Internship
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Social Media Management and Content Curation</h3>
                <span className="qualification__subtitle">Self Employed</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
