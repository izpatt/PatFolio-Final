//React Modules
import React, { useState } from "react";

//Style
import "../../styles/d_aboutMe.css";

//Components
import AboutMeModal from "../aboutMeComponents/AboutMeModal";

//Data
import list_organizations from "../aboutMeComponents/data/A_ExperienceContent";
import list_achievements from "../aboutMeComponents/data/B_AchievementContent";
import list_activities from "../aboutMeComponents/data/C_CoCurricularContent";
import list_creativity from "../aboutMeComponents/data/D_CreativityContent";

//Images
import aboutCaption from "../../assets/c_aboutMe/aboutCaption.png";
import meCaption from "../../assets/c_aboutMe/meCaption.png";

//Images Options
import myExperiencesCaption from "../../assets/c_aboutMe/captions/myExperiencesCaption.png";
import myExperiencesCaptionHover from "../../assets/c_aboutMe/captions/myExperiencesCaptionHover.png";

import achievementsCaption from "../../assets/c_aboutMe/captions/achievementsCaption.png";
import achievementsCaptionHover from "../../assets/c_aboutMe/captions/achievementsCaptionHover.png";

import coCurricularsCaption from "../../assets/c_aboutMe/captions/coCurricularsCaption.png";
import coCurricularsCaptionHover from "../../assets/c_aboutMe/captions/coCurricularsCaptionHover.png";

import creativityCaption from "../../assets/c_aboutMe/captions/creativityCaption.png";
import creativityCaptionHover from "../../assets/c_aboutMe/captions/creativityCaptionHover.png";

//Header Modal Images
const experiencesHeader =
  "https://res.cloudinary.com/patfolio2022/image/upload/v1650980347/c_aboutMe/experiences/experiencesHeader_esh9hb.png";
const achievementsHeader =
  "https://res.cloudinary.com/patfolio2022/image/upload/v1650980338/c_aboutMe/achievements/achievementsHeader_ikmzc8.png";
const coCurricularHeader =
  "https://res.cloudinary.com/patfolio2022/image/upload/v1650981589/c_aboutMe/coCurriculars/coCurricularHeader_t1ruzh.png";
const creativityHeader =
  "https://res.cloudinary.com/patfolio2022/image/upload/v1650981929/c_aboutMe/creativity/creativityHeader_etdhyi.png";

const AboutMe = (props) => {
  const [showExperience, setShowExperience] = useState(false);
  const [showAchievement, setShowAchievement] = useState(false);
  const [showCoCurricular, setShowCoCurricular] = useState(false);
  const [showCreativity, setShowCreativity] = useState(false);

  const [imageExperience, setImageExperience] = useState(myExperiencesCaption);
  const [imageAchievements, setImageAchievements] =
    useState(achievementsCaption);
  const [imageCoCurriculars, setImageCoCurriculars] =
    useState(coCurricularsCaption);
  const [imageCreativity, setImageCreativity] = useState(creativityCaption);

  return (
    <>
      <div id="AboutMe" className="container-fluid aboutMe">
        <div className="aboutMeContainer">
          {/* About Me Caption */}
          <div className="row d-flex justify-content-center align-content-center">
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              src={aboutCaption}
              alt="aboutCaption"
              className="img-fluid aboutCaptionImage"
            ></img>

            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              src={meCaption}
              alt="meCaption"
              className="img-fluid meCaptionImage"
            ></img>
          </div>

          {/* This or that */}
          <div
            className="row d-flex justify-content-center align-content-center"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <p className="aboutMeSubtitle">this or that?</p>
          </div>

          {/* ---- 4 OPTIONS ---- */}
          <div className="row row-options">
            {/* Experience and Achievements*/}
            <div
              className="col-sm-6 col-xl-6 col1-options"
              data-aos="fade-left"
              data-aos-duration="1100"
            >
              <img
                onMouseOver={() =>
                  setImageExperience(myExperiencesCaptionHover)
                }
                onMouseLeave={() => setImageExperience(myExperiencesCaption)}
                src={imageExperience}
                alt="myExperiencesCaption"
                className="img-fluid myExperiencesCaption"
                onClick={() => setShowExperience(true)}
              ></img>
              <AboutMeModal
                show={showExperience}
                setShow={setShowExperience}
                showColumn="column1"
                list_organizations={list_organizations}
                headerImage={experiencesHeader}
              />
              <img
                onMouseOver={() =>
                  setImageAchievements(achievementsCaptionHover)
                }
                onMouseLeave={() => setImageAchievements(achievementsCaption)}
                src={imageAchievements}
                alt="achievementsCaption"
                className="img-fluid achievementsCaption"
                onClick={() => setShowAchievement(true)}
              ></img>
              <AboutMeModal
                show={showAchievement}
                setShow={setShowAchievement}
                showColumn="column1"
                list_organizations={list_achievements}
                headerImage={achievementsHeader}
              />
            </div>

            {/* Co-Curricular and Creativity*/}
            <div
              className="col-sm-6 col-xl-6 col2-options"
              data-aos="fade-right"
              data-aos-duration="1100"
            >
              <img
                onMouseOver={() =>
                  setImageCoCurriculars(coCurricularsCaptionHover)
                }
                onMouseLeave={() => setImageCoCurriculars(coCurricularsCaption)}
                src={imageCoCurriculars}
                alt="coCurricularsCaption"
                className="img-fluid coCurricularsCaption"
                onClick={() => setShowCoCurricular(true)}
              ></img>
              <AboutMeModal
                show={showCoCurricular}
                setShow={setShowCoCurricular}
                showColumn="column2"
                list_organizations={list_activities}
                headerImage={coCurricularHeader}
              />
              <img
                onMouseOver={() => setImageCreativity(creativityCaptionHover)}
                onMouseLeave={() => setImageCreativity(creativityCaption)}
                src={imageCreativity}
                alt="creativityCaption"
                className="img-fluid creativityCaption"
                onClick={() => setShowCreativity(true)}
              ></img>
              <AboutMeModal
                show={showCreativity}
                setShow={setShowCreativity}
                showColumn="column2"
                list_organizations={list_creativity}
                headerImage={creativityHeader}
              />
            </div>
          </div>
        </div>
        {/* <a class="mailto" href="mailto:contact@test.com">
          Mail
        </a> */}
      </div>
    </>
  );
};

export default AboutMe;
