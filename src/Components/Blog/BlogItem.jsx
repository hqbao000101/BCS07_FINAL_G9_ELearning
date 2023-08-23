import { Col } from 'antd'
import React from 'react';
import { FaRegThumbsUp, FaEye, FaRegComment } from "react-icons/fa";
import styles from './BlogItem.scss'

const BlogItem = (props) => {
    return (
        <Col className='lg:px-5 px-10 mb-16 lg:pb-10' xs={24} md={12}>
            <div className='w-full h-48 lg:h-60 overflow-hidden'>
                <img className='object-contain w-full block' src={props.dataBlog.hinhAnh} alt="..." />
            </div>
            <h1 className='text-xl font-semibold py-3 h-20 overflow-hidden'>{props.dataBlog.tieuDe}</h1>
            <div className='block lg:flex justify-between items-center text-[16px]'>
                <div className='flex'>
                    <div className='mr-3 flex items-center'>
                        <FaRegThumbsUp className='text-lg mr-1 text-teal-500 cursor-pointer'/>
                        <span>300</span>
                    </div>
                    <div className='mr-3 flex items-center'>
                        <FaRegComment className='text-lg mr-1 text-teal-500 cursor-pointer'/>
                        <span>500</span>
                    </div>
                    <div className='flex items-center'>
                        <FaEye className='text-lg mr-1 text-teal-500 cursor-pointer'/>
                        <span>2500</span>
                    </div>
                </div>
                <p>Đăng Bởi <span className='text-pink-500'>{props.dataBlog.tacGia}</span></p>
            </div>
            <p className='text-[16px] font-medium text-gray-500 mt-5 mb-2 lg:h-20 md:h-24 h-24 overflow-hidden'>{props.dataBlog.noiDung}</p>
            <button>XEM THÊM</button>
        </Col>
    )
}

export default BlogItem