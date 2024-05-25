
import './Cont-1.css';
import AOS from "aos";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Container1() {
    useEffect(() => {

        Aos.init({
            duration: 1000,
            easing: 'ease-in-out',
            once:true
        });
        AOS.refresh();
    })
    return (
        <>
            <div className='cont-1'>
                <div className='cont-2' data-aos="fade-up" data-aos-duration="3000">
                    <h1 className='head1'><span className='sh1'>Sharing Your Opinion</span> By Rating Products & Brands Around The World...</h1>
                    <div className='cont-1-head'>
                        <p className='para1'>"Est sit amet facilisis magna etiam. Ultricies lacus sed turpis tincidunt id aliquet risus. Accumsan tortor posuere ac ut. Pellentesque sit amet porttitor eget."</p>
                    </div>
                </div>
                <img className='img1' data-aos="fade-right" data-aos-duration="1000" src="./imgs/noteEMOJI1.png" alt="" />

                <img className='img2' data-aos="fade-right" data-aos-duration="1000" src="./imgs/loveEMOJI2.png" alt="" />

                <img className='img3' data-aos="fade-left" data-aos-duration="1000" src="./imgs/obserEMOJI3.png" alt="" />

                <img className='img4' data-aos="fade-left" data-aos-duration="1000" src="./imgs/spekerEMOJI4.png" alt=""/>

            </div>
        </>
    )
}
export default Container1