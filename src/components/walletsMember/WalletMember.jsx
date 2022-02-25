import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './wallet.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { useSelector } from 'react-redux';

const WalletMember = () => {
  const [wallets, setWallets] = useState([]);
  const [locked, setLocked] = useState([]);
  const [unLocked, setUnLocked] = useState([]);
  const [loading, setLoading] = useState(false);
  const state = useSelector((state) => state);
  const token = state.authReducer.id;

  useEffect(() => {
    const wallet = async () => {
      fetch('https://qa-api.socioinfonavit.com/api/v1/member/wallets')
        .then((res) => res.json())
        .then((data) => setWallets(data))
        .catch((err) => {
          console.log(err);
        });
    };

    const handleLogin = () => {
      let url = 'https://qa-api.socioinfonavit.com//api/v1/member/landing_benevits';

      const request = {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json; charset=utf-8',
          'cache-control': 'max-age=0, private, must-revalidate',
          Authorization: `${token}`,
        }),
      };
      fetch(url, request)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let objWalet = {};
          for (const cupon of data.locked) {
            if (!objWalet.hasOwnProperty(cupon?.wallet?.name)) {
              objWalet[cupon?.wallet?.name] = [];
            }
            objWalet[cupon?.wallet?.name].push(cupon);
          }

          setLocked(objWalet);
          setUnLocked(data.unlocked);
          setLoading(true);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };
    handleLogin();
    wallet();
  }, []);

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
    <div className="container">
      <div className="wallet__main-container">
        <h1 className="wallet__title mis_benevits">Mis benevits</h1>
        <Slider {...settings} className="wallet__slider-container">
          {wallets.map((e, key) => {
            return (
              <div className="wallet__element-container" key={e?.id}>
                <div className="wallet__slider-benevit">
                  <div className="wallet_image" />
                  <div className="wallet__container-text unlocked">
                    <p className="wallet__subtitle">{e?.display_text}</p>
                    <p className="wallet__text ">
                      There are many variations of passages of Lorem Ipsum available
                      or randomised words which don't look even .
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      {loading && (
        <>
          <div className="wallet__main-container">
            <h1 className="wallet__title">Benevits disponibles</h1>
            <Slider {...settings} className="wallet__slider-container">
              {unLocked.map((e, key) => {
                return (
                  <div className="wallet__main-container" key={e.id}>
                    <div className="wallet__slider-benevit">
                      <img
                        src={e.ally.mini_logo_full_path}
                        className="wallet_image"
                      />
                      <div className="wallet__container-text unlocked">
                        <p className="wallet__subtitle">{e?.description}</p>
                        <p className="wallet__text">{e.title}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>

          <div className="wallet__main-container">
            <h1 className="wallet__title">Academia</h1>
            <Slider {...settings} className="wallet__slider-container">
              {locked.Academia.map((e, key) => {
                return (
                  <div className="wallet__main-container" key={e?.id}>
                    <div className="wallet__slider-benevit">
                      <img src={e?.vector_full_path} className="wallet_image" />
                      <div className="wallet__container-text">
                        <p className="wallet__text">{e?.title}</p>
                        <button className="btn-locked btn-session">
                          Lo quiero
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>

          <div className="wallet__main-container">
            <h1 className="wallet__title">Casa</h1>
            <Slider {...settings} className="wallet__slider-container">
              {locked.Casa.map((e, key) => {
                return (
                  <div className="wallet__main-container" key={e?.id}>
                    <div className="wallet__slider-benevit">
                      <img src={e?.vector_full_path} className="wallet_image" />
                      <div className="wallet__container-text">
                        <p className="wallet__text">{e?.title}</p>
                        <button className="btn-locked">Lo quiero</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>

          <div className="wallet__main-container">
            <h1 className="wallet__title">Negocio</h1>
            <Slider {...settings} className="wallet__slider-container">
              {locked.Negocio.map((e, key) => {
                return (
                  <div className="wallet__main-container" key={e?.id}>
                    <div className="wallet__slider-benevit">
                      <img src={e?.vector_full_path} className="wallet_image" />
                      <div className="wallet__container-text">
                        <p className="wallet__text">{e?.title}</p>
                        <button className="btn-locked">Lo quiero</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>

          <div className="wallet__main-container">
            <h1 className="wallet__title">Departamento</h1>
            <Slider {...settings} className="wallet__slider-container">
              {locked.Departamento.map((e, key) => {
                return (
                  <div className="wallet__main-container" key={e?.id}>
                    <div className="wallet__slider-benevit">
                      <img src={e?.vector_full_path} className="wallet_image" />
                      <div className="wallet__container-text">
                        <p className="wallet__text">{e?.title}</p>
                        <button className="btn-locked">Lo quiero</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>

          {/* <div className="wallet__main-container">
            <h1 className="wallet__title">Centro comercial</h1>
            <Slider {...settings} className="wallet__slider-container">
              {locked['Centro comercial'].map((e, key) => {
                return (
                  <div className="wallet__main-container" key={e?.id}>
                    <div className="wallet__slider-benevit">
                      <img src={e?.vector_full_path} className="wallet_image" />
                      <div className="wallet__container-text">
                        <p className="wallet__text">{e?.title}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>

          <div className="wallet__main-container">
            <h1 className="wallet__title">Parque Verde</h1>
            <Slider {...settings} className="wallet__slider-container">
              {locked['Parque Verde'].map((e, key) => {
                return (
                  <div className="wallet__main-container" key={e?.id}>
                    <div className="wallet__slider-benevit">
                      <img src={e?.vector_full_path} className="wallet_image" />
                      <div className="wallet__container-text">
                        <p className="wallet__text">{e?.title}</p>
                        <button>Lo quiero</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div> */}
        </>
      )}
    </div>
  );
};

export default WalletMember;
