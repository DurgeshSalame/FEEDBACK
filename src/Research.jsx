
import Footer from './Footer'
import Navbar from './Navbar'
import './Research.css'
import { useEffect, useState } from 'react'
import { imgsDB } from './config'
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'
import { useAuth0 } from "@auth0/auth0-react";

 function Research() {
    
    const { loginWithRedirect } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [img, setImg] = useState()
    const [data, setData] = useState({
        user_name: '',
        user_mail: '',
        user_company: '',
        user_contry: '',
        user_textarea: '',
    
    
    
    })

    let name, value
    function changed(e) {
        name = e.target.name
        value = e.target.value
        setData({ ...data, [name]: value })
    }

    async function submit(r) {
        // const img2 = document.getElementById('img').value
        r.preventDefault()
        const reference = ref(imgsDB, `uploads/${v4()}`)
        await uploadBytes(reference, img) 
        const imgUrl = await getDownloadURL(reference)
        
        const { user_name, user_mail, user_company, user_contry, user_textarea } = data

        if (user_name !== '' && user_mail !== '' && user_company !== '' && user_contry !== '' && user_textarea !== '' && img !== '') {
       
            const res = await fetch('https://opinion-review-default-rtdb.firebaseio.com/Review_Database.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Uname: user_name,
                    Umail: user_mail,
                    Ucompany: user_company,
                    Ucontry: user_contry,
                    Utextarea: user_textarea,
                    Uurl : imgUrl,
            
                })
            })

            if (res) {
                alert('Your Form is Submit Successfully')
                setData({
                    user_name: '',
                    user_mail: '',
                    user_company: '',
                    user_contry: '',
                    user_textarea: '',
                    
                    
                     

                })
                
            }
        }
        else {
            alert('Please fill your all the input box Correctly')
            // alert('Your Form is not send due to THALA for Reason')
        }

    }

    return (
        <>
            <div className="Mcontainer">
                <Navbar />
                <section className='sec-1'>
                    <img src="./imgs/star.png" alt="" />
                    <h1>Reviews For Companies Shop</h1>
                    <p>Home - Reviews For Companies</p>
                </section>
                <div className='LineEnd'></div>
                <section className='sec-2'>
                    <img src="./imgs/Review1.png" alt="" />
                    <h1>Learn More About Opiniun & <span> Schedule A Demo </span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div className="sec-2box">

                    </div>
                </section>
                {/* <div className='LineEnd'></div> */}

                <form method='POST' className='sec-3'>
                    {/* <div className="sec-3cont">     
                    </div> */}

                    <input name='user_name' id='name' type="text" placeholder='Your Name' value={data.user_name} onChange={changed} required />
                    <input name='user_mail' id='mail' type="text" placeholder='Your Email' value={data.user_mail} onChange={changed} required /><br />
                    <input name='user_company' id='company' type="text" placeholder='Your Company' value={data.user_company} onChange={changed} required />
                    <input name='user_contry' id='contry' type="text" placeholder='Your Country' value={data.user_contry} onChange={changed} required /><br />
                    <textarea name='user_textarea' id='textarea' cols="30" rows="10" placeholder='Describe your product for which you would like to receive feedback' value={data.user_textarea} onChange={changed} required />
                    <input name='img'  id='img' type="file" onChange={e => setImg(e.target.files[0])} required /><br />

                    {
                        isAuthenticated ? <button className='Send' onClick={submit}>Send</button> : <button  onClick={() => loginWithRedirect()}>Send</button>
                    }
                </form>
                <div className='LineEnd'></div>
                <Footer />
            </div>

        </>
    )


}
export default Research

