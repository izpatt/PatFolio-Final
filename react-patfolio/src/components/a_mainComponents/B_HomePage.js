//Style
import "../../styles/c_homepage.css";

//Image
import patriciaCaption from "../../assets/b_homePage/patriciaCaption.png";
import anneCaption from "../../assets/b_homePage/anneCaption.png";
import meImage from "../../assets/b_homePage/me.png";

const HomePage = () => {
  return (
    <>
      <div className="homepage container-fluid " id="HomePage">
        <div className="row homepageRow d-flex justify-content-center align-content-center">
          <div className="col-sm-6 col-md-6 col1-texts ">
            <img
              data-aos="fade-right"
              data-aos-duration="900"
              src={patriciaCaption}
              alt="patriciaCaption"
              className="img-fluid patriciaCaptionImage"
            ></img>
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              src={anneCaption}
              alt="anneCaption"
              className="img-fluid anneCaptionImage"
            ></img>
            <p
              className="subtitleHomepage"
              data-aos="fade-right"
              data-aos-duration="1100"
            >
              A greatly passionate, dedicated and willing to learn individual. I
              love to explore, create and discover new things. Have fun
              navigating around my site! :){" "}
            </p>
            <button
              className="viewResume"
              data-aos="fade-right"
              data-aos-duration="1100"
            >
              <a
                className="viewResume-a-tag"
                href="https://izpatt.github.io/Curriculum-Vitae/"
                target={"_blank"}
              >
                {" "}
                viewResume();
              </a>
            </button>
          </div>
          <div className="col-sm-6 col-md-6 scol2-pic">
            <img
              data-aos="fade-left"
              data-aos-duration="1000"
              src={meImage}
              alt="meImage"
              className="img-fluid meImage"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
