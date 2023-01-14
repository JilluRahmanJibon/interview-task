import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const params = useParams()

    const [user, setUser] = useState({});

    useEffect(() => {
        fetch('https://interview-task-01-default-rtdb.firebaseio.com/userData/-NLjLMc6RHVYNhUhlfLI.json').then(res => res.json()).then(result => {
            const user = result.find(user => user.id === params.id)

            setUser(user)
        })
    }, [params.id]);
    console.log(user);
    return (
        <div className='flex w-full md:flex-row flex-col justify-between sm:mx-8 mx-2'>
            <div className='lg:w-1/2 sm:mt-12 mt-4'>
                <div>
                    <h1 className='text-3xl font-bold'>{user.id}</h1>
                    <p className='text-xl font-bold'>Person Detected</p>
                </div>
                <div className=' sm:mt-9 mt-2 font-medium '>
                    <p>Name: {user.name}</p>
                    <p>Location: {user.location}</p>
                    <p>Date: {user.date}</p>
                    <p>Time: {user.time}</p>
                    <p className='mt-5'>Description: {user.name} detected at {user.location} on {user.date}</p>
                </div>

            </div>
            <div className='lg:w-1/2 '>
                <div >
                    <h3 className='text-2xl py-2 font-semibold'>{user.gender}</h3>
                    <img className='sm:max-w-[400px] sm:h-[480px]' src={user.picture} alt="" />
                </div>
            </div>
        </div>
    );
};

export default User;