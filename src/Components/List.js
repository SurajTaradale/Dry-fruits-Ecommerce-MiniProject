import React  from "react";
import { Card } from "react-bootstrap";
import "../style/List.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  Data from '../Data/fruitsDetails'
import { Link } from "react-router-dom";
const List = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  
  return (
    <>
    <h2 className='text-center ProductTitle'> Prodcuts List</h2>
      <div className='cardlist' >
        <Slider {...settings}>
          {Data.map((key) => {
            return <div className='cardMain' key={key.id}>
            <Link to={`/Services/${key.id}`} className='LinkCard'>
              <Card  className='cardWise' >
                <Card.Img variant="top" src={key.Image} fluid="true" className='img'/>
                <Card.Body className='cardContain'>
                  <Card.Title>{key.Title}</Card.Title>
                  <Card.Text>
                  {key.desciption}
                  </Card.Text>
                  <Card.Text className='textinfo'>
                  <span className='price'>Price:</span>RS {key.Kg}/KG
                  </Card.Text>
                </Card.Body>
              </Card>
              </Link>
            </div>
          })}

        </Slider>
      </div>
    </>
  );
};

export default List;
