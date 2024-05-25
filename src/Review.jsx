import { useState, useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import './Review.css'


function Review() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://opinion-review-default-rtdb.firebaseio.com/Review_Database.json')
            .then(res => {
                return res.json();
            })
            .then(res2 => {
                console.log(res2)
                let getData = []

                for (let key in res2) {
                    console.log(res2[key])
                    const imgData = res2[key].Uurl
                    console.log(imgData);
                    getData.push(

                        <div style={{ width: '30rem', backgroundColor:'pink', borderRadius: '30px' }}>

                            <div>

                                <img src={imgData} height='190px' width='300px' style={{ borderRadius: '10px', marginTop: '30px' }} />

                                <br />  <br />
                                <h5 >{res2[key].Ucompany}</h5>
                                <h5 >{res2[key].Uname}</h5>
                                <p >{res2[key].Ucountry}</p>  <br />
                                <h6>{res2[key].Umail} </h6>
                                <span>Review</span>

                            </div>
                        </div>)


                }
                setData(getData)
            })
    }, []);


    //    async function getdata(){
    //         let data = await fetch('https://opinion-review-default-rtdb.firebaseio.com/Review_Database.json')
    //         let data2 = await data.json()
    //         for (const key in data2) {
    //           console.log(data2[key]);
    //         }
    //         let data3 = data2
    //         console.log(data3);
    // fetch('https://opinion-review-default-rtdb.firebaseio.com/Review_Database.json')
    // .then(res =>{
    //     return res.json()
    // })
    // .then(data =>{
    //     console.log(data)
    //     for(let key in data){
    //         console.log(data[key].Ucompany)
    //     }
    // }
    // getdata()

    return (
        <>
            <div className='main-cont'>
                <Navbar />
                <section className='sec-1'>
                    <img src="./imgs/star.png" alt="" />
                    <h1>Review Shop</h1>
                    <p>Home - Reviews For Customers</p>
                </section>
                <div className='LineEnd'></div>

                <section className='sec-2'>
                    <img src="./imgs/Review1.png" alt="" />
                    <h1>Start Reviewing These Products <span> Today </span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div className="sec-2box">


                        {/* {data} */}

                        {data.map(data2 => {
                            return <div className='sec-2box1' >
                                <h1> {data2} </h1>
                                <h1> {data2.Ucompany} </h1>
                                <h1> {data2.Ucompany} </h1>
                                <h1> {data2.Ucontry} </h1>
                                <h1> {data2.Utextarea} </h1>
                                <h1> {data2.Uimg} </h1>
                            </div>
                        })}

                    </div>
                </section>
                <div className='LineEnd'></div>

                <section className='sec-3'>

                    <div className="sec-3cont">
                        <div className='cont3-content'>
                            <h1>Through Your Opinion We Inform Your Ideas For <span className='sh3'> Large Companies & Organization </span></h1>
                            <br />
                            <p>n pellentesque massa placerat duis ultricies lacus sed. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Nulla at volutpat diam ut venenatis tellus in metus.</p>

                        </div>
                        <div className='cont3-img' >
                            <img src='./imgs/think.png' alt=''></img>
                        </div>
                        <div className="img1">
                            <img src="./imgs/loveEMOJI2.png" alt="" />
                            <img src="./imgs/thumb.png" alt="" />
                        </div>
                        <div className="img2">
                        </div>
                        <div className="img3">
                            <img src="" alt="" />
                        </div>
                    </div>
                </section>
                <div className='LineEnd'></div>


                <Footer />
            </div>
        </>
    )
}
export default Review