

import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <span>Questions? Call <a className="link_a" href="#">000-800-919-1694 </a></span>
            <br /><br />
            <div className='foot_1'>
                {/* <br /><br /><br /><br /> */}
                <div className='foot_1a'>
                    <a className="link_a" href="#">FAQ</a>
                    <a className="link_a" href="#">Investor Relations</a>
                    <a className="link_a" href="#">Privacy</a>
                    <a className="link_a" href="#">Speed Test</a>

                </div>
                {/* <br /><br /> */}
                <div className='foot_1a'>
                    <a className="link_a" href="#">Help Centre</a>
                    <a className="link_a" href="#">Jobs</a>
                    <a className="link_a" href="#">Cookie Preferences</a>
                    <a className="link_a" href="#">Legal Notices</a>

                </div>
                {/* <br /><br /> */}
                <div className='foot_1a'>
                    <a className="link_a" href="#">Account</a>
                    <a className="link_a" href="#">Ways to Watch</a>
                    <a className="link_a" href="#">Corporate Information</a>
                    <a className="link_a" href="#">Only on Netflix</a>

                </div>
                {/* <br /><br /> */}
                <div className='foot_1a'>
                    <a className="link_a" href="#">Media Centre</a>
                    <a className="link_a" href="#">Terms of Use</a>
                    <a className="link_a" href="#">Contact Us</a>
                </div>
                <span className="spn"></span>
                {/* <br/> <br/><br/> <br/> */}

            </div>
        </div>
    )
}
export default Footer