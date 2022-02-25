import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../navbar/Navbar';
import WalletMember from '../walletsMember/WalletMember';
import SkeletonComponent from '../skeleton.jsx/SkeletonComponent';

const DashboardScreen = () => {
  // const datosUser = useSelector((state) => state.datosUser.datos);
  // console.log(datosUser);
  // // console.log(datosUser.member.id_socio_infonavit);
  // const [wallet, setWallet] = useState();
  const [loading, setLoading] = useState(true);
  // const email = datosUser.email;
  // const id = datosUser.id;
  // // let myHeaders = new Headers();
  // // myHeaders.append('Content-Type', 'Nextia');
  // // let buff = Buffer.alloc();
  // console.log(email);
  // let Buff;
  // useEffect(() => {
  //   const handleLogin = () => {
  //     let url = 'https://qa-api.socioinfonavit.com//api/v1/member/landing_benevits';

  //     const request = {
  //       method: 'GET',
  //       headers: new Headers({
  //         'Content-Type': 'application/json',
  //         /Authorization: `Bearer ${token}`,
  //
  //       }),
  //
  //     };
  //     fetch(url, request)
  //       .then(async (response) => {
  //         const data = await response.json();
  //         console.log(data);
  //         // setDatosUser(data);
  //         if (data?.error) {
  //           console.log(data.error);
  //         } else {
  //           console.log('todo bien');
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   handleLogin();
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  // console.log(datosUser);
  return (
    <div>
      <Navbar />
      {loading ? <SkeletonComponent /> : <WalletMember />}
      {loading ? <SkeletonComponent /> : <WalletMember />}
      {loading ? <SkeletonComponent /> : <WalletMember />}
      {/* <SkeletonComponent /> */}
    </div>
  );
  // }
};
export default DashboardScreen;
