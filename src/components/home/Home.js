
// import video11 from "./video.mp4"
import './home.css'
// import img from './space2.png'
import img2 from './food.jpg'
// import img3 from './food2.jpg'
// import { Button, Alignment } from "@blueprintjs/core";
// import { Link } from 'react-router-dom';
import Contactus from "../contactus/Contactus";
import final from "./final.mp4"
import { useHistory } from "react-router-dom";
const Home = () => {
  let history = useHistory();
  return (
    <>
      <video loop autoPlay class="video" src={final} type="video/mp4" ></video>
      <section className="sec1">
        {/* <img className='logoSec' src={img}></img> */}
        {/* <p  id="spacefood" className="parg"> SPACE FOOD</p> */}


        <p className="parg">
          A leading online food delivery marketplace, connected restaurants in Jordan.
          To Visit Our Resturants <br></br> <button style={{ color: "white", backgroundColor: " #DA291C", marginTop: "18px", marginLeft: "3px" }} className="btn" onClick={() => { history.push("/restaurants") }}> Resturants</button>
        </p>
      </section>
      {/* <h2 className="h2">  Space Food For You Any Time !!
      </h2> */}
      <section className="sec2">
        <img alt='' className="img1" src={img2}>
        </img>
        <p className="parg2">
          <h2 style={{ color: "rgb(63, 12, 12)", fontFamily: "'IM Fell English SC', serif", marginBottom: "36px" }}>
            It’s all here.
            All in one app.
          </h2>
          Discover local, on-demand delivery or Pickup from restaurants, nearby grocery and convenience stores, and more.
        </p>
      </section>
      {/* <section className="sec3">
        <img className="img3" src="https://media.istockphoto.com/photos/pan-fried-duck-picture-id1081422898?k=20&m=1081422898&s=612x612&w=0&h=YkfQqtV3nN1gB_HaehyvjcTEye7w9FBPkG-PIKdDzPo=">
        </img>
        <p className="parg3">
          <h2>
            Every Flavor Welcome
          </h2>
          From your neighborhood sushi spot to the burger and fries you crave, choose from over 300,000 local and national favorites across Jordan.        </p>
          <br style={{clear:"both"}}/>
      </section> */}
      <div class="image1"></div>
      {/* <section className="sec2">
        <img className="img1" src="https://image.cnbcfm.com/api/v1/image/106436941-1583942201563gettyimages-748332225.jpeg?v=1583942245">
        </img>
        <p className="parg2">
          <h2>
            It’s all here.
            All in one app.
          </h2>
          Discover local, on-demand delivery or Pickup from restaurants, nearby grocery and convenience stores, and more.
        </p>
      </section> */}
      <section className="sec3">
        <img alt='' className="img3" src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80">
        </img>
        <p className="parg3">
          <h2 style={{ color: "rgb(63, 12, 12)", fontFamily: "'IM Fell English SC', serif", marginBottom: "36px", marginLeft: "-5px" }}>
            Every Flavor Welcome
          </h2>
          From your neighborhood sushi spot to the burger and fries you crave, choose from over 300,000 local and national favorites across Jordan.        </p>
        <br style={{ clear: "both" }} />
      </section>
      <Contactus />
    </>
  );
};
export default Home;
