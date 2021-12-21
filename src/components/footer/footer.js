import React from "react";
import './footer.css'

function Footer(){
    return (
        <div id="footer" className="footer-background">
            <div className="footer-container">
                <h2>Join our Email Community</h2>
                <div className="form-field">
                    <div className="three Name">
                        Name
                    </div>
                    <div className="three Email">
                        Email
                    </div>
                    <div className="Submit">
                    <a href="#"><button>Submit</button></a>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Footer;