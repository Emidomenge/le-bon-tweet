import React from 'react';
import ContentLoader from 'react-content-loader';
import styles from './index.module.css';

const TweetLoader = () => (
  <ContentLoader
    height={100}
    width={700}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#f56b2a"
    className={`${styles.loader} mr-auto ml-auto`}
  >
    <rect x="70" y="13" rx="4" ry="4" width="117" height="12" />
    <rect x="71" y="39" rx="3" ry="3" width="587" height="9" />
    <circle cx="30" cy="30" r="30" />
    <rect x="336" y="52" rx="0" ry="0" width="0" height="0" />
    <rect x="200" y="13" rx="4" ry="4" width="47" height="12" />
    <circle cx="265" cy="19" r="8" />
    <rect x="111" y="65" rx="0" ry="0" width="0" height="0" />
    <rect x="71" y="57" rx="3" ry="3" width="587" height="9" />
    <rect x="71" y="76" rx="3" ry="3" width="587" height="9" />
  </ContentLoader>
);

export default TweetLoader;
