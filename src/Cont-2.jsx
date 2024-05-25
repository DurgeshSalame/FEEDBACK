import './Cont-2.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Container2() {
    useEffect(()=> {
        Aos.init();
    })
    return (
        <>
            <div className='container2'>
                <div className='cont2-img'><img data-aos="zoom-in" src="./imgs/cont2emoji.png" alt="" /></div>

                <div className='text' data-aos="fade-up" data-aos-duration="3000"><h1>Before Buying A Product Get To Know The <br />
                    <span className='sh2' data-aos="fade-up" data-aos-duration="3000">Opinion Of Our Community</span><br /></h1><br />
                    <p data-aos="fade-up" data-aos-duration="3000">Tristique senectus et netus et malesuada. Sodales ut eu sem integer vitae justo. Arcu bibendum <br /> at varius vel pharetra vel turpis nunc eget.</p>
                </div>
            </div>

            <div className='Box' data-aos="fade-up" data-aos-duration="3000">
                <div className="card-1">
                    <div className="content">
                        <div className="heading">DURGESH SALAME</div>
                        <div className="para">
                            Hey! my self DURGESH SALAME. I'am Web Devloper(MERN)
                        </div>
                        <a href="#" className="btn1">
                            View more
                        </a>
                    </div>
                    <img src="./imgs/JOHN.png" alt="" />
                </div>
                <div className="card-1">
                    <div className="content">
                        <div className="heading">DURGESH SALAME</div>
                        <div className="para">
                            Hey! my self DURGESH SALAME. I'am Web Devloper(MERN)
                        </div>
                        <a href="#" className="btn1">
                            View more
                        </a>
                    </div>
                    <img src="./imgs/JOHN.png" alt="" />
                </div>
                <div className="card-1">
                    <div className="content">
                        <div className="heading">DURGESH SALAME</div>
                        <div className="para">
                            Hey! my self DURGESH SALAME. I'am Web Devloper(MERN)
                        </div>
                        <a href="#" className="btn1">
                            View more
                        </a>
                    </div>
                    <img src="./imgs/JOHN.png" alt="" />
                </div>
            </div>


        </>)
}
export default Container2;