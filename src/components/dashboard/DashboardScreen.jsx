import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../navbar/Navbar';
import WalletMember from '../walletsMember/WalletMember';

const DashboardScreen = () => {
  const datosUser = useSelector((state) => state.datosUser);
  console.log(datosUser);
  return (
    <div>
      <Navbar />
      <WalletMember />
    </div>
  );
};

export default DashboardScreen;
