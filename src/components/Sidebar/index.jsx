import React, { useState, useEffect } from 'react';
import "./style.scss";
import { NavLink } from 'react-router-dom';
import { API } from '../../api/api';
const index = () => {

   const puiple = <svg text="muted" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-people">
      <path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
   </svg>;

   const [count, setCount] = useState([]);

   useEffect(() => {
      API.github().then((res) => setCount(res.data))
   }, []);



   return (
      <div>
         <div className="saidbar">
            <img src={count.avatar_url} alt="person img" />
            <ul className="saidbar__ul text-center">
               <li className="saidbar__ul--li">{count.name}</li>
               <li className="saidbar__ul--li">{count.login}</li>
               <li className="saidbar__ul--li d-none d-md-block" ><button className="btn">follow</button></li>
               <li className="saidbar__ul--li  d-none d-md-block d-flex "> <NavLink to='/folows' className='tds'>{puiple}Followers{count.followers}</NavLink> <NavLink to='/folowing' className='tds px-2'>Following{count.following}</NavLink></li>
               <li className="saidbar__ul--li d-none d-md-block">{count.location}</li>
               {/* <li className="saidbar__ul--li">location</li>
               <li className="saidbar__ul--li">twitter_username</li>
               <li className="saidbar__ul--li">email</li>
               <li className="saidbar__ul--li">email</li> */}
            </ul>
         </div>
      </div>
   );
};

export default index;