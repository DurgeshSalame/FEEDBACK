import './Cont-4.css'
import Review from './Review'

function Container4() {
    return (
        <>
            <div className='container4'>
                <img className='cont4-img' src="./imgs/review (2).png" alt="" />
                <br />
                <h1>Start Reviewing These Products <span> Today </span></h1>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className='cont4-box'>
                    
                    <div className='cont4-b1'> <img src="https://i.pinimg.com/236x/64/97/8d/64978d041abc120be9bf7b0e0135ae02.jpg" alt="" />
                        <h1>CyberShot 20mp <br /> <span>By Sony</span></h1>
                        <button>Rate This Item</button>
                    </div>
                    <div className='cont4-b1'> <img src="https://i.pinimg.com/236x/d1/12/93/d112939331faf71d7de808ffaac53e57.jpg" alt="" />
                        <h1>Led Lamp <br /> <span>By Lumiens</span></h1>
                        <button>Rate This Item</button>
                    </div>
                    <div className='cont4-b1'> <img src="https://i.pinimg.com/236x/7e/84/f8/7e84f81cbee05ed2bd4f656c7b6ac9c2.jpg" alt="" />
                        <h1>Soft Brush 24' <br /> <span>By Toochbright</span></h1>
                        <button>Rate This Item</button>
                    </div>
                    <div className='cont4-b1'> <img src="https://i.pinimg.com/236x/e7/a7/40/e7a740688707fb16bbe78a7b0833df0a.jpg" alt="" />
                        <h1>Camping Backpack <br /> <span>By PowerBag</span></h1>
                        <button>Rate This Item</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Container4