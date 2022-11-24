import React from "react";
import './dashboard.css';
import { Link } from "react-router-dom";

export default function Dashboard(){
    return(
        <div className="dbdash">
        <div className="dbheader">
        <div className="dbbalency">
            <div className="dbb">
                <h1>Balancy</h1>
            </div>
        </div>
        <div className="dbwelcome1">
            <h2 className="dbwelcome">Welcome User..</h2>
        </div>
    </div>
    <div className="dbmenu">
        <ul>
            <li> <Link to="/front">Home</Link></li>
            <li> <Link to="/BMI">BMI Calculator</Link></li>
            <li> <a href="https://www.prevention.com/health/sleep-energy/g24736063/best-health-apps/">Community</a></li>
            <li> <a href="https://www.apollo247.com">Contact</a></li>
        </ul>
    </div>
    <div className="dbcontent">
        <div className="dbleft-side">
            <div className="dbarticle">
                <h2>Articles</h2>
            </div>
            <div className="dbnews">
                <h3 className topic>Importance of Sleep!</h3>
                <a href="https://www.cnn.com/2022/10/19/health/sleep-heart-health-wellness/index.html">
                    https://www.cnn.com/2022/10/19/health/sleep-heart-health-wellness/index.html
                </a>
            </div>
            <div className="dbnews">
                <h3 className topic>Popular diet habits</h3>
                <a href="https://health.usnews.com/health-news/blogs/eat-run/articles/research-suggests-most-popular-diets-have-poor-diet-quality">
                    https://health.usnews.com/health-news/blogs/eat-run/articles/research-suggests-most-popular-diets-have-poor-diet-quality
                </a>
            </div>
            <div className="dbnews">
                <h3 className topic>Importance of diet in immunotheraphy</h3>
                <a href="https://www.news-medical.net/news/20221010/Diet-plays-an-important-role-in-the-success-of-immunotherapy.aspx">
                    https://www.news-medical.net/news/20221010/Diet-plays-an-important-role-in-the-success-of-immunotherapy.aspx
                </a>
            </div>
            <div className="dbnews">
                <h3 className topic>Low-glycemic index diet</h3>
                <a href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/low-glycemic-index-diet/art-20048478">
                    https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/low-glycemic-index-diet/art-20048478
                </a>
            </div>
            <div className="dbnews">
                <h3 className topic>Healthy eating tips</h3>
                <a href="https://www.hindustantimes.com/lifestyle/health/healthy-eating-tips-post-covid-19-pandemic-101667633020726.html">
                    https://www.hindustantimes.com/lifestyle/health/healthy-eating-tips-post-covid-19-pandemic-101667633020726.html
                </a>
            </div>

        </div>
        <div className="dbright-side">
            <div className="dbdivision">
                <div className="dbleft">
                    <div className="dbmrng">
                        <h2 className="dbmrng"><Link className="dbmld" to ="/breakfast">Morning</Link></h2>
                    </div>
                    <div className="dbleft-top">

                    </div>
                    <div className="dbaftn">
                        <h2 className="dbaftn"><Link className="dbmld" to="/lunch">Afternoon</Link></h2>
                    </div>
                    <div className="dbleft-bottom">
                     
                    </div>
                </div>
                <div className="dbright">
                    <div className="dbright-top">
                    </div>
                    <div className="dbdnr">
                        <h2 className="dbdnr"><Link className="dbmld" to="/dinner">Night</Link></h2>
                    </div>
                    <div className="dbright-bottom">
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}