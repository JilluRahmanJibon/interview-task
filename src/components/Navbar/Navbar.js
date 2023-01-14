import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [females, setFemales] = useState([]);
    const [males, setMales] = useState([]);


    useEffect(() => {
        fetch('https://interview-task-01-default-rtdb.firebaseio.com/userData/-NLjLMc6RHVYNhUhlfLI.json').then(res => res.json()).then(result => {
            const females = result.filter(female => female.gender === 'Female')
            setFemales(females)
            const males = result.filter(male => male.gender === 'Male')
            setMales(males)
        })
    }, []);
    return (
        <div>
            <div className='bg-[#001c7b] sm:px-5 px-2 flex justify-between py-2'>
                <Link to='/'>   <h1 className='text-[#007f7f] font-bold text-3xl'>S<span className='text-2xl'>E</span><span className='text-xl'>CQUR</span><span className='text-red-500'>AI</span><span className='text-xl'>SE</span></h1></Link>
                <div className='flex gap-2'>
                    <p title='Females' className='bg-[#92d050] py-1 px-6'>{females.length}</p>
                    <p title='Males' className='bg-red-500 py-1 px-6 text-white'>{males.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;