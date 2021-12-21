import React from "react";
import './course-one.css';
import VideoImage from '../../assets/img/video-image.png';
import programme from '../../assets/img/CHART.png';
// import dropdown from '../../assets/img/dropdown.png';
import constellationLogo from '../../assets/img/Constellation-Logo-3.png';
import constellationCurve from '../../assets/img/curve.png';
import syllabus from '../../assets/img/syllabus.png';



function CourseOne(){
    return (
        <div id="course-one-home">
            <div className="container-boom">
            <div className="head">
                <img src={constellationLogo} alt="metamask logo"></img>
                <h1>Hypergraph Accreditation Programme</h1>
            </div>
            <img src={constellationCurve} alt="metamask logo" className="curve"></img>
            </div>
            <div className="white-background">
            <div class="description">
            {/* <img src={VideoImage} alt="metamask logo"></img> */}
            <video width="100%" controls>
            <source src="https://res.cloudinary.com/mselbekk-com/video/upload/v1639429700/Master_Alkimi_classroom_part_01_cyapwq.mp4" type="video/mp4"></source>
            <source src="https://res.cloudinary.com/mselbekk-com/video/upload/v1639429700/Master_Alkimi_classroom_part_01_cyapwq.mp4" type="video/ogg"></source>
            Your browser does not support the video tag.
            </video>
            <h2>Accreditation Levels</h2>
            <p><span>Accreditation Level 1:</span> Blockchain Fundamentals</p>
            <p><span>Accreditation Level 2:</span> Constellation Fundamentals</p>
            <p><span>Accreditation Level 3:</span> Integrating on the Hypergraph - State Channels</p>
            <h2>Programme Overview</h2>
            <img src={programme} alt="metamask logo"></img>
            
            {/* <img src={dropdown} alt="metamask logo" className="dropdown"></img>
            <img src={dropdown} alt="metamask logo" className="dropdown"></img>
            <img src={dropdown} alt="metamask logo" className="dropdown"></img> */}
            </div>
            </div>
            <div className="white-background-two">
                <div class="description-two">
                <h2>Syllabus</h2>
                <img src={syllabus} alt="metamask logo" className="dropdown"></img> 
                </div>
            </div>
        </div>
      );
}

export default CourseOne;