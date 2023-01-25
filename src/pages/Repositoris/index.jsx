import React, { useEffect, useState } from 'react';
import { API } from '../../api/api';
import './stayle.scss';
import { useSelector, useDispatch } from 'react-redux';

const index = () => {

    const page = useSelector(store => store.count.count);

    // console.log(page);

    const [count, setCount] = useState([]);

    useEffect(() => {
        API.gitrep().then((res) => setCount(res.data))
    }, []);

    console.log(count);



    const star = <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" className="octicon octicon-star UnderlineNav-octicon hide-sm">
        <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
    </svg>;

    return (
        <div>
            <h1>reprositoris</h1>

            <div className="repo d-flex">
                <input type="text" className='form-control inputW ' placeholder='Find a repsitory...' />
                <select className='form-control  btnW '>
                    <option >Type</option>
                    <option >Public</option>
                    <option >Private</option>
                    <option >Sources</option>
                    <option >Forks</option>
                    <option >Archived</option>
                    <option >Mirrors</option>
                    <option >Templates </option>
                </select>
                <select className='form-control btnW '>
                    <option>Language</option>
                    <option>All</option>
                    <option>JavaScript</option>
                    <option>Css</option>
                    <option>HTML</option>
                    <option>SCSS</option>
                </select>
                <select className='form-control btnW '>
                    <option>Sort</option>
                    <option>Last updated</option>
                    <option>Name</option>
                    <option>Stars</option>
                </select>
                <a href="https://github.com/new" target='_blank'><button className="btn btn-success btnN" >New</button></a>
            </div>
            {
                count.map((el) => {
                    return (
                        <div className=' col-12  repos ' key={el.id}>
                            <div className='d-flex justify-content-between align-items-center' >
                                <div className='d-flex justify-content-start  align-items-center '>
                                    <a href={el.html_url} target='_blank' className='td' >{el.name}</a>
                                    <button className='btn'>{el.visibility}</button>
                                </div>
                                <div className='d-flex justify-content-end  '>
                                    <button className='btn'> {star} star</button>
                                </div>
                            </div >
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='mt-3'><span></span> {el.language}<p className={el.language}  >
                                </p></div>
                                <div  ></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default index;