import BackgroundSlider from "react-background-slider";
import image1 from "../Assets/IMG-20210810-WA0006.jpg";
import image2 from "../Assets/IMG-20210810-WA0007.jpg";
import '../style/Home.css'
import List from "./List";
function Home() {
  return (
    <>
    <div className='Home'>
      <BackgroundSlider 
        images={[image1, image2]}
        duration={10}
        transition={2}
      ></BackgroundSlider>
      <div className='Title'>
      <div>
        <p  className='HomeTitle'>Dry Fruits</p>
        </div>
        <div>
        <p style={{fontSize:'1.5rem', fontWeight:'900'}}>100% natural and healthy</p>
        </div>
      </div>
    </div>
    <List/>
    </>
  );
}

export default Home;
