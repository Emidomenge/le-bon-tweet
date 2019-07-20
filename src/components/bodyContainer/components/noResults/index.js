import React from 'react';
import { Row, Col } from 'react-bootstrap';
import noTweetsImg from '../../../../assets/img/no_tweets.svg';
import styles from './index.module.css';

const NoResults = () => (
  <Row>
    <Col>
      <div className={styles.container}>
        <img src={noTweetsImg} className={`mt3 pv4 mr-auto ml-auto ${styles.img}`} alt="Aucun résultat" />
        <h4 className="mt4 tc">Oops, aucun tweet n'a été trouvé...</h4>
      </div>
    </Col>
  </Row>
);

export default NoResults;
