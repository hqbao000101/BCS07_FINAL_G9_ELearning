import { Col, Row } from 'antd'
import React from 'react';
import styles from './Sponsors.module.scss'

const Sponsors = () => {
  return (
    <div className='py-20 mx-auto max-w-screen-2xl'>
        <h1 className='mb-5 text-3xl font-bold text-center text-yellow-500'>NHÀ TÀI TRỢ CHƯƠNG TRÌNH</h1>
        <br />
        <Row>
            <Col className={styles.sponsorsItem} xs={24} md={12} lg={6}>
                <img src={require('../../assets/imgs/viettel.jpg')} alt="..." />
                <h2>VIETTEL</h2>
            </Col>

            <Col className={styles.sponsorsItem} xs={24} md={12} lg={6}>
                <img src={require('../../assets/imgs/bidv.jpg')} alt="..." />
                <h2>BIDV</h2>
            </Col>

            <Col className={styles.sponsorsItem} xs={24} md={12} lg={6}>
                <img src={require('../../assets/imgs/logo-vingroup1.jpg')} alt="..." />
                <h2>VINGROUP</h2>
            </Col>

            <Col className={styles.sponsorsItem} xs={24} md={12} lg={6}>
                <img src={require('../../assets/imgs/momo.png')} alt="..." />
                <h2>MOMO</h2>
            </Col>
        </Row>
    </div>
  )
}

export default Sponsors