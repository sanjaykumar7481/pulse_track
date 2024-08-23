import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">Attendance Management System</h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
                Tracking attendance of students efficiently.
              </h2>
              <p data-aos="fade-up" data-aos-delay="600">
                We have designed a comprehensive Attendance Management System to
                track the attendance of students in an efficient manner.
                Different logins are provided for students, trainers, and an
                admin with complete access to all the data.
              </p>
              <div data-aos="fade-up" data-aos-delay="800">
                <div className="text-center text-lg-start">
                  <Link
                    to="about"
                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Learn More</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src="assets/img/values-2.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row gx-0">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="content">
                <h3>What We Offer</h3>
                <h2>Streamlined Attendance Tracking for Effortless Management
</h2>
                <p>
                  {" "}
                  Our Attendance Management System offers a comprehensive
                  solution for efficient tracking of student attendance. With
                  user-specific logins for students, trainers, and an admin, you
                  can easily manage and monitor attendance records. The system
                  provides real-time insights, making attendance management a
                  breeze.
                </p>
                <div className="text-center text-lg-start">
                  <Link
                    to="#read-more"
                    className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Read More</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src="assets/img/values-3.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;