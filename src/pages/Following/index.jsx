import React, { useEffect, useState } from 'react';
import { API } from '../../api/api';
import './stayle.scss';


const index = () => {
    const [count, setCount] = useState([]);

    useEffect(() => {
        API.gitfoling().then((res) => setCount(res.data))
    }, []);

    return (
        <div>
            {
                count.map((el) => {
                    return (
                        <div key={el.id} >
                            <div className=' h-25 mt-5  d-flex justify-content-between align-items-center'>
                                <div className='d-flex justify-content-start gap-4 align-items-center '>
                                    <img src={el.avatar_url} className='rounded-circle fol-img' alt="" />
                                    <a href={el.html_url} target='_blank' className='text-secondary' key={el.id}>{el.login} </a>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <button className='btn btn-secondary'>folllow</button>
                                </div>
                            </div>
                            <hr />
                        </div>)
                })
            }
        </div>
    );
};

export default index;