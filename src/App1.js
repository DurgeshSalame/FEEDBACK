import App from "./App"
import Review from './Review';
import Research from './Research';
import React from 'react';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Connect from './Link';
function App1(params) {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path='/' element={<App />} /> */}
                <Route path='/' element={<App />} />
                <Route path='/home' element={<App />} />
                <Route path='/review' element={<Review />} />
                <Route path='/research' element={<Research />} />

            </Routes>
        </BrowserRouter>
        // <BrowserRouter>
        //   <Routes>
        //     <Route path='/LOGIN' element={<LOGIN />} />
        //     <Route path='/SIGN' element={<SIGN/>}/>
        //     <Route path='/Link' element={<Connect />} />
        //   </Routes>
        //   </BrowserRouter>
    )
}
export default App1