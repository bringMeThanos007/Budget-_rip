//import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube, faLinkedin, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';

import './footer.css';
export default function Footer() {
    return (
        <div className="footer bg-dark">
            <div class="d-flex justify-content-between" id='footer_flex'>
                <div className="ftr font-monospace">
                    <ul className="list my-2">
                        <li><a href="">Privacy Policy </a></li>
                        <li><a href="">Terms &amp; Conditions </a></li>
                        <li><a href="">User Agreement </a></li>
                        <li><a href="">About Us </a></li>
                        <li><a href="">Contact Us </a></li>

                    </ul>
                </div>
                <div className="social d-flex justify-content-between fa-2x align-items-center my-5">

                    <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} id="sicon1" className="rotate"></FontAwesomeIcon></a>
                    <a href="https://twitter.com/i/flow/login"><FontAwesomeIcon icon={faTwitter} id="sicon2" className="rotate"></FontAwesomeIcon></a>
                    <a href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} id="sicon3" className="rotate"></FontAwesomeIcon></a>
                    <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} id="sicon4" className="rotate"></FontAwesomeIcon></a>
                    <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} id="sicon5" className="rotate"></FontAwesomeIcon></a>
                    <a href="https://telegram.org/"><FontAwesomeIcon icon={faTelegram} id="sicon6" className="rotate"></FontAwesomeIcon></a>
                </div>

                <div className="copy text-white font-monospace ">
                    <pre>Budget trips</pre>
                    <pre>Copyright@2022</pre>
                </div>

            </div>



        </div>

    )
}