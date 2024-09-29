import React, { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import '../index.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

export default function CarousselMovies() {
  useEffect(() => {
    AOS.init();
  }, []);
    return (
      <Marquee className="overflow-hidden" style={{ height: "290px" }} >
        <div className="carousel-item flex flex-col justify-center items-center h-[250px] w-44" >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg0sGhQ_v_sA4OCE8uS4DUHo6HbFkT60vhSA&s"
            className="carousel-image"
            alt=""
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className="carousel-item flex flex-col justify-center items-center h-[250px] w-44">
          <img
            src="https://s3.amazonaws.com/nightjarprod/content/uploads/sites/261/2024/05/09131602/gMB8vgHu2lcyzv1fyptD6drHmJd-scaled.jpg"
            className="carousel-image"
            alt=""
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        </div>
        
        <div className="carousel-item flex flex-col justify-center items-center h-[250px] w-44">
          <img
            src="https://m.media-amazon.com/images/M/MV5BNzEzYTc4NWQtODdjNS00OGU0LTk3YWYtNzhmZjhlOTIxYjRmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
            className="carousel-image"
            alt=""
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        </div>
        
        <div className="carousel-item flex flex-col justify-center items-center h-[250px] w-44">
          <img
            src="https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg"
            className="carousel-image"
            alt=""
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className="carousel-item flex flex-col justify-center items-center h-[250px] w-44">
          <img
            src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7894205_b_v8_aa.jpg"
            className="carousel-image"
            alt=""
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className="carousel-item flex flex-col justify-center items-center h-[250px] w-44">
          <img
            src="https://m.media-amazon.com/images/M/MV5BYTgyYTk5MjItMzQ5YS00ODgwLTlmMDEtZWEyYTdkMTY0NTU2XkEyXkFqcGdeQXVyNTk2NTA0MjE@._V1_.jpg"
            className="carousel-image"
            alt=""
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className="carousel-item flex flex-col justify-center items-center h-[250px] w-44">
          <img
            src="https://m.media-amazon.com/images/M/MV5BNjE0ZTc3YzAtMzhkNC00MjZkLTk5NTYtOWFmZjg2MTU5MDkxXkEyXkFqcGc@._V1_.jpg"
            className="carousel-image"
            alt=""
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className="carousel-item flex flex-col justify-center items-center h-[250px] w-44">
          <img
            src="https://fr.web.img4.acsta.net/pictures/19/06/13/16/39/3685647.jpg"
            className="carousel-image"
            alt=""
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className="carousel-item flex flex-col justify-center items-center h-[250px] w-44">
          <img
            src="https://yt3.googleusercontent.com/r2E5eqodxe1vI1fUg229yOL5YyiBFq23wSbzXCcVKMEINj3i_DkM3hKZ4Rt9CBG3N9qaSInc=s900-c-k-c0x00ffffff-no-rj"
            className="carousel-image"
            alt=""
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className="carousel-item flex flex-col justify-center items-center h-[250px] w-44">
          <img
            src="https://m.media-amazon.com/images/M/MV5BNjQ2MDhjYmUtZGU2MC00Yjk4LTljNzEtYWQ5OTJkOTAzZjg3XkEyXkFqcGc@._V1_.jpg"
            className="carousel-image"
            alt=""
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className="carousel-item flex flex-col justify-center items-center h-[250px] w-44">
          <img
            src="https://www.filmfrance.net/app/uploads/2023/09/P_1_02739.jpg"
            className="carousel-image"
            alt=""
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className="carousel-item flex flex-col justify-center items-center h-[250px] w-44">
          <img
            src="https://thumb.canalplus.pro/http/unsafe/180x239/filters:quality(80)/canalplus-cdn.canal-plus.io/p1/brand/23378848/canal-ouah_50254/JAQCANAL/myCANAL_Jaquette_MEA_600x800-kj22"
            className="carousel-image"
            alt=""
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className="carousel-item flex flex-col justify-center items-center h-[250px] w-44">
          <img
            src="https://play-lh.googleusercontent.com/mrjcLx29YdA8FE29vfkX4GOWrKKvEVM_PUJydLiFKpq_bmYV9Cric5T77skgaIN9PLA"
            className="carousel-image"
            alt=""
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className="carousel-item flex flex-col justify-center items-center h-[250px] w-44">
          <img
            src="https://www.thesportsdb.com/images/media/league/poster/on7l121718864972.jpg/medium"
            className="carousel-image"
            alt=""
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        </div>
      </Marquee>
    );
}
