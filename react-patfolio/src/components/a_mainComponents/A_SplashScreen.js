//Style
import "../../styles/b_splashStyles.css";

//Image
import patFolioCaption from "../../assets/a_splashScreen/patFolioCaption.png";

const SplashScreen = () => {
  return (
    <>
      <div className="bgImage container-fluid" id="SplashScreen">
        <div className="row rowCaption d-flex justify-content-center align-content-center">
          {" "}
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            src={patFolioCaption}
            alt="patFolioCaption"
            className="img-fluid patFolioCaptionImage"
          ></img>
        </div>
      </div>
    </>
  );
};

export default SplashScreen;
