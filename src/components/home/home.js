import React from "react";
import  "./home.css"
import HeroImage from '../../assets/img/uni-2.png';
// import VideoImage from '../../assets/img/video-image.png';
import courseOne from '../../assets/img/blockchain2.png';
import courseTwo from '../../assets/img/Constellation-Logo-3.png';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Home(){
    let navigate = useNavigate();
    return (
        <div id="home">
            <div className="container">
            <div className="left">
                <h1>Alkimi Akademi</h1>
                <p>This is some text I will write later</p>
            </div>
            <div className="right">
            <img src={HeroImage} alt="metamask logo"></img>
            </div>
            </div>
            <div className="white-background">
            <div class="intro">
            
            <video width="100%" controls>
            <source src="https://res.cloudinary.com/mselbekk-com/video/upload/v1639429700/Master_Alkimi_classroom_part_01_cyapwq.mp4" type="video/mp4"></source>
            <source src="https://res.cloudinary.com/mselbekk-com/video/upload/v1639429700/Master_Alkimi_classroom_part_01_cyapwq.mp4" type="video/ogg"></source>
            Your browser does not support the video tag.
            </video>
            
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
            <h2>Courses</h2>
            <div className="courses">
                <div className="course">
                    <img src={courseOne} alt="metamask logo" className="blockchain"></img>
                    <h3>Blockchain</h3>
                    <h3>Fundamentals</h3>
                </div>

                {/* <Link to="/constellation"><div className="course">
                    <img src={courseTwo} alt="metamask logo" className="constellation"></img>
                    <h3>Hypergraph</h3>
                    <h3>Accreditation Programme</h3>
                </div></Link> */}

                <div className="course" onClick={() => {
                navigate('/constellation');
            }}>
                    <img src={courseTwo} alt="metamask logo" className="constellation"></img>
                    <h3>Hypergraph</h3>
                    <h3>Accreditation Programme</h3>
                </div>


            </div>
            </div>
            </div>
        </div>
      );
}

export default Home;