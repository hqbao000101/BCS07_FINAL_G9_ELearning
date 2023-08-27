import { Col, Row } from 'antd'
import React from 'react';
import styles from './Sponsors.module.scss'

const Sponsors = () => {
  return (
    <div className='container mx-auto py-20'>
        <h1 className='text-center font-bold text-yellow-500 text-3xl mb-5'>NHÀ TÀI TRỢ CHƯƠNG TRÌNH</h1>
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