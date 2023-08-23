import { Col, Row } from 'antd'
import React from 'react'
import BlogItem from './BlogItem';
import BlogImage from "../../assets/imgs/achievement_course.png";
import styles from './BlogContent.scss';
import clsx from 'clsx';

const BlogContent = (props) => {

    // nội dung tin tức
    const dataBlog = [
        {
            hinhAnh: BlogImage,
            tieuDe: 'Thời gian và động lực',
            noiDung: 'Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...',
            tacGia: 'Johny Nguyễn'
        },
        {
            hinhAnh: BlogImage,
            tieuDe: 'Tailwind css và cách cài đặt cơ bản',
            noiDung: 'Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...',
            tacGia: ' Nguyên Minh '
        },
        {
            hinhAnh: BlogImage,
            tieuDe: 'Cấu trúc cơ bản trong HTML',
            noiDung: 'Custom theme Material UI với TypeScript đơn giản, hiệu quả...',
            tacGia: 'Steven',
        },
        {
            hinhAnh: BlogImage,
            tieuDe: 'Material UI custom theme với TypeScript',
            noiDung: 'Trắc hẳn ai cũng biết một trang web thì không thể nào thiếu đi HTML và HTML làm nên cấu trúc của một trang web...',
            tacGia: 'Johny Nguyễn'
        },
        {
            hinhAnh: BlogImage,
            tieuDe: 'Cách tạo một component nhanh chóng chỉ bằng 3 ký tự',
            noiDung: 'Tạo một component nhiều lúc cũng khá mất nhiều thời gian nên mình xin giới thiệu extention này cho mọi người nhé...',
            tacGia: 'Johny Nguyễn'
        },
        {
            hinhAnh: BlogImage,
            tieuDe: 'Xử lý bất đồng bộ trong Javascript (phần 2)',
            noiDung: 'Async/await là cơ chế giúp bạn thực thi các thao tác bất đồng bộ một cách tuần tự hơn , giúp đoạn code nhìn qua tưởng như đồng...',
            tacGia: 'Nguyên Văn'
        },
        {
            hinhAnh: BlogImage,
            tieuDe: 'TyperScrip là gì, Vì sao nên dùng TyperScript',
            noiDung: 'Link khóa học cho anh em nào tò mò ( Đừng lo vì tất cả đều miễn......',
            tacGia: ' Nguyên Minh'
        },
        {
            hinhAnh: BlogImage,
            tieuDe: 'TyperScrip là gì, Vì sao nên dùng TyperScript',
            noiDung: 'Link khóa học cho anh em nào tò mò ( Đừng lo vì tất cả đều miễn......',
            tacGia: ' Nguyên Minh'
        },
    ]


    return (
        <div className='container mx-auto py-20'>
            <Row>
                <Col xs={24} lg={17}>
                    <Row>
                        {dataBlog.map((ele, index) => (<BlogItem key={index} dataBlog={ele} />))}
                    </Row>
                </Col>
                <Col className='lg:px-2 mt-10 lg:mt-0 px-10' xs={24} lg={7}>
                    <Row>
                        <Col className='md:px-5 lg:px-0' span={24} md={12} lg={24} >
                            <div className={clsx(styles.blogCategory, 'border border-solid border-gray-400')}>
                                <h1 className='border-b border-solid border-gray-400 text-center text-lg font-semibold py-2'>Các chủ đề được đề xuất</h1>
                                <div className='px-5'>
                                    <ul className='text-lg font-medium text-gray-500'>
                                        <li className='py-2 hover:pt-1 hover:pb-3 transition-all duration-300 cursor-pointer hover:text-teal-500'>Front-end / Mobile apps</li>
                                        <li className='py-2 hover:pt-1 hover:pb-3 transition-all duration-300 cursor-pointer hover:text-teal-500'>UI / UX / Design</li>
                                        <li className='py-2 hover:pt-1 hover:pb-3 transition-all duration-300 cursor-pointer hover:text-teal-500'>BACK-END</li>
                                        <li className='py-2 hover:pt-1 hover:pb-3 transition-all duration-300 cursor-pointer hover:text-teal-500'>Thư viện</li>
                                        <li className='py-2 hover:pt-1 hover:pb-3 transition-all duration-300 cursor-pointer hover:text-teal-500'>Chia sẻ người trong nghề</li>
                                        <li className='py-2 hover:pt-1 hover:pb-3 transition-all duration-300 cursor-pointer hover:text-teal-500'>Châm ngôn IT</li>
                                        <li className='py-2 hover:pt-1 hover:pb-3 transition-all duration-300 cursor-pointer hover:text-teal-500'>Chủ đề khác</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </div>
    )
}

export default BlogContent