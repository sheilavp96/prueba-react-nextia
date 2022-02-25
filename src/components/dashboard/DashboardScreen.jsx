import React, { useEffect, useState } from 'react';

import Navbar from '../navbar/Navbar';
import WalletMember from '../walletsMember/WalletMember';
import SkeletonComponent from '../skeleton.jsx/SkeletonComponent';

const DashboardScreen = () => {
  const [loading, setLoading] = useState(true);

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
