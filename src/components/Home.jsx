import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechBuddy.</h1>
          <p>Solution to all you problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day.We are leading tech complany whose aim is tp increase the
            problem solving ability in children
          </p>
        </div>
      </div>
 
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
            incidunt quisquam facere qui architecto, tenetur necessitatibus modi
            distinctio inventore dolorem. Eaque repellat expedita consequuntur
            est ut beatae! Expedita nostrum omnis porro esse harum tempore rem
            corrupti? Nostrum commodi delectus, asperiores reiciendis numquam
            laboriosam odit cumque iusto, corrupti harum eaque ad. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Quos, labore?
            Reprehenderit harum molestias magnam veniam ipsa aperiam in,
            repellendus ex, ut exercitationem facilis dolorum nobis et
            cupiditate vitae eos explicabo.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{
                animationDelay:'.3s'
            }}>
                <AiFillGoogleCircle />
                <p>Google</p>
            </div>
            <div style={{
                animationDelay:'.5s'
            }}>
                <AiFillAmazonCircle />
                <p>Amzaon</p>
            </div>
            <div style={{
                animationDelay:'.7s'
            }}>
                <AiFillYoutube />
                <p>Youtube</p>
            </div>
            <div style={{
                animationDelay:'1s'
            }}>
                <AiFillInstagram />
                <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
