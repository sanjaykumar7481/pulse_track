import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section id="services" className="services">

        <div className="container" data-aos="fade-up">

          <header className="section-header">
            <p>Efficiently manage attendance with our advanced system</p>
          </header>

          <div className="row gy-4">

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-box blue">
                <i className="ri-discuss-line icon"></i>
                <h3>Real-time Tracking</h3>
                <p>Track attendance in real-time, ensuring accurate and up-to-date records. Our system provides instant insights into attendance patterns.</p>
                {/* <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-box orange">
                <i className="ri-discuss-line icon"></i>
                <h3>Automated Notifications</h3>
                <p>Receive automated notifications for absentees and late entries, ensuring timely awareness and intervention in attendance matters.</p>
                {/* <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="service-box green">
                <i className="ri-discuss-line icon"></i>
                <h3>Comprehensive Reporting</h3>
                <p>Generate detailed attendance reports with just a few clicks. Analyze trends, identify patterns, and make informed decisions based on attendance data.</p>
                {/* <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="service-box red">
                <i className="ri-discuss-line icon"></i>
                <h3>User-Friendly Interface</h3>
                <p>Enjoy a user-friendly interface that simplifies attendance management. Easily mark attendance, view reports, and manage user profiles seamlessly.</p>
                {/* <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div className="service-box purple">
                <i className="ri-discuss-line icon"></i>
                <h3>Secure Data Storage</h3>
                <p>Rest assured with secure data storage for attendance records. Our system prioritizes data privacy and confidentiality.</p>
                {/* <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="700">
              <div className="service-box pink">
                <i className="ri-discuss-line icon"></i>
                <h3>Attendance Analytics</h3>
                <p>Utilize powerful analytics tools to gain insights into attendance patterns, helping optimize scheduling and resource allocation.</p>
                {/* <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a> */}
              </div>
            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default Services;
