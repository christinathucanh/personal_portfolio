import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I'm like a tech Swiss Army knife! From Python to Swift, MongoDB
                to MySQL, and everything in between—I've got the coding toolbox
                covered. Whether it's dancing with Django, jamming with
                JavaScript, or crafting pixel-perfect experiences in Swift/Swift
                UI, I'm your go-to tech maestro. HTML, CSS, React, Angular—name
                it, and I've probably sprinkled some code glitter on it. Let's
                not forget my love affair with version control on GitHub and the
                enchanting world of XCode development. In the coding circus, I'm
                the acrobat, the magician, and the ringmaster all rolled into
                one! 🎩💻✨.<br></br>
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Full-stack Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Virtual Reality Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>AI Research</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>
                    Data Structures & Algorithms
                  </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image"/>
                  <h5> Finance and Investment
                  </h5>
                </div>
                <div className="item">
                
                  <h5> Languages: English, Vietnamese, and Mandarin!
                  </h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
