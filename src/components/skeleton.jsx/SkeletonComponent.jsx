import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './skeleton.css';
const SkeletonComponent = () => {
  return (
    <>
      <div className="skeleton__main-container">
        <h1 className="skeleton__title">
          <Skeleton width={220} duration={0.5} height={20} />
        </h1>
        <div className="skeleton__container">
          <div className="skeleton__element">
            <Skeleton width={350} duration={0.5} />
            <Skeleton width={350} height={150} duration={0.5} />
          </div>
          <div className="skeleton__element">
            <Skeleton width={350} duration={0.5} />
            <Skeleton width={350} height={150} duration={0.5} />
          </div>
          <div className="skeleton__element">
            <Skeleton width={350} duration={0.5} />
            <Skeleton width={350} height={150} duration={0.5} />
          </div>
          <div className="skeleton__element">
            <Skeleton width={350} duration={0.5} />
            <Skeleton width={350} height={150} duration={0.5} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonComponent;
