import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './wallet.css';
import 'react-loading-skeleton/dist/skeleton.css';
import image from '../../assets/banner2.png';

const WalletMember = () => {
  const [wallets, setWallets] = useState([]);

  useEffect(() => {
    const wallet = async () => {
      fetch('https://qa-api.socioinfonavit.com/api/v1/member/wallets')
        .then((res) => res.json())
        .then((data) => setWallets(data))
        .catch((err) => {
          console.log(err);
        });
    };

    wallet();
  }, []);
  console.log(wallets);
  //peticion get
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="wallet__main-container">
      <h1 className="wallet__title">Tus cuponeras...</h1>
      <Slider {...settings} className="wallet__slider-container">
        {wallets.map((w, key) => {
          return (
            <div className="wallet__slider-benevit" key={w?.id}>
              <div className="wallet_image" />
              <div className="wallet__container-text">
                <p className="wallet__subtitle">{w.display_text}</p>
                <p className="wallet__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default WalletMember;
