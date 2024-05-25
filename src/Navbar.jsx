import { Link } from 'react-router-dom'
import './Navbar.css';
import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Dropdown } from 'rsuite';

function Navbar() {
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

    // function SignIn() {
        
    // }
    isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )
    return (
        <>
            <div className="nav">
                <img src="https://th.bing.com/th/id/OIP.GEt84UQ_AztwIkuUPfYRuAHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="" />
                <ul>
                    <li> <Link to='/Home'>Home</Link></li>
                    <li><Link to='/Research'>Research</Link></li>
                    <li><Link to='/Review' >Review</Link></li>
                    {/* <li><a href="#">Contact</a></li> */}
                    {/* <li><a href="#">About</a></li> */}
                    <li>

                        {/* <select>
                            <option><a href="#">Peges</a></option>
                            <option><Link to='/Research'>Research</Link></option>
                            <option><Link to='/Review' >Review</Link></option>
                            <option><a href="#">A3</a></option>
                            <option>   </option>
                            
                        </select> */}
                        {/* <div style={{
                            display: 'block', width: 700, paddingLeft: 30
                        }}>

                        <Dropdown title="Select Weekday">
                            <Dropdown.Item><Link to='/Research'>Research</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/Review' >Review</Link></Dropdown.Item>
                            <Dropdown.Item>page3</Dropdown.Item>
                        </Dropdown>
                        </div> */}


                    </li>
                </ul>
                <div className='btn'>
                    {/* <button  className="btn1">Sign In</button> */}
                    
                    {
                        isAuthenticated ? (<div>Wellcome! {user.name}  <button className="btn1" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                        Log Out
                      </button></div>) : (<button className="btn1" onClick={() => loginWithRedirect()}>Log In</button>)
                    }
                </div>
            </div>
        </>
    )
}
export default Navbar