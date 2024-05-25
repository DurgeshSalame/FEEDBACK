import './Cont-3.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Container3() {
    useEffect(() => {
        Aos.init()
    })
    return (
        <>
            <div className="container3">
                <div className='cont3-content' data-aos="fade-up" data-aos-duration="3000">
                    <h1>Opinions. We All Have Them, But They Are <span className='sh3'> Not Always Valued </span></h1>
                    <br />
                    <p>Neque sodales ut etiam sit amet nisl purus. Mattis vulputate enim nulla aliquet. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt.</p>
                    <br />
                    <p>Gravida cum sociis natoque penatibus et magnis dis parturient. Suspendisse faucibus interdum posuere lorem ipsum dolor.</p>
                </div>
                <div className='cont3-img' >
                    <img src='./imgs/Girl.png' alt='' data-aos="fade-left" data-aos-duration="1000"></img>

                </div>
            </div>
        </>
    )
}
export default Container3;