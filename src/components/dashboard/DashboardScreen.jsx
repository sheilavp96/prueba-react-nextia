import React, { useEffect, useState } from 'react';

import Navbar from '../navbar/Navbar';
import WalletMember from '../walletsMember/WalletMember';
import SkeletonComponent from '../skeleton.jsx/SkeletonComponent';

const DashboardScreen = () => {
  // const state = useSelector((state) => state);
  // console.log(state.authReducer.id);
  // const token = state.authReducer.id;
  // console.log(token);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const handleLogin = () => {
  //     let url = 'https://qa-api.socioinfonavit.com//api/v1/member/landing_benevits';

  //     const request = {
  //       method: 'GET',
  //       headers: new Headers({
  //         'Content-Type': 'application/json; charset=utf-8',
  //         'cache-control': 'max-age=0, private, must-revalidate',
  //         Authorization: `${token}`,
  //                }),
  //            };
  //     fetch(url, request)
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
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

  return (
    <div>
      <Navbar />
      {loading ? <SkeletonComponent /> : <WalletMember />}
      {loading && <SkeletonComponent />}
      {loading && <SkeletonComponent />}
    </div>
  );
  // }
};
export default DashboardScreen;
