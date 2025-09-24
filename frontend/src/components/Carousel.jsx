
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // responsive: [
    //     {

    //     breakpoint: 1024,

    //     settings: { slidesToShow: 2 }

    //     },

    //     {

    //     breakpoint: 600,

    //     settings: { slidesToShow: 4 }

    //     }

    // 
  };

  return (
    <div className="w-full h-full overflow-hidden">
      <Slider {...settings} className="h-44 sm:h-72">
        {[1, 2, 3, 4, 5, 7].map((num) => (
          <div key={num} className="h-44 sm:h-72 w-full">
            <img
              src={`/${num}.png`}
              alt={`Slide ${num}`}
              className="w-[100%] h-[80%] sm:h-[100%]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
