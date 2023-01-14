import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaBars, FaSignInAlt } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import filterIcon from '../../Images/filterIcon.png'
import Female01 from '../../Images/Female01.jpg'
import Female02 from '../../Images/Female02.jpg'
import Female03 from '../../Images/Female03.jpg'
import Female04 from '../../Images/Female04.jpg'
import Female05 from '../../Images/Female05.jpg'
import Female06 from '../../Images/Female06.jpg'
import Female07 from '../../Images/Female07.jpg'
import Female08 from '../../Images/Female08.jpg'
import Female09 from '../../Images/Female09.jpg'
import Female10 from '../../Images/Female10.jpg'
import Female11 from '../../Images/Female11.jpg'
import Female12 from '../../Images/Female12.jpg'
import Female13 from '../../Images/Female13.jpg'
import Female14 from '../../Images/Female14.jpg'
import Female15 from '../../Images/Female15.jpg'
import Female16 from '../../Images/Female16.jpg'
import Female17 from '../../Images/Female17.jpg'
import Female18 from '../../Images/Female18.jpg'
import Female19 from '../../Images/Female19.jpg'
import Female20 from '../../Images/Female20.jpg'
import Female21 from '../../Images/Female21.jpg'
import Female22 from '../../Images/Female22.jpg'
import Female23 from '../../Images/Female23.jpg'
import Female24 from '../../Images/Female24.jpg'
import Female25 from '../../Images/Female25.jpg'
import Male01 from '../../Images/Male01.jpg'
import Male02 from '../../Images/Male02.jpg'
import Male03 from '../../Images/Male03.jpg'
import Male04 from '../../Images/Male04.jpg'
import Male05 from '../../Images/Male05.jpg'
import Male06 from '../../Images/Male06.jpg'
import Male07 from '../../Images/Male07.jpg'
import Male08 from '../../Images/Male08.jpg'
import Male09 from '../../Images/Male09.jpg'
import Male10 from '../../Images/Male10.jpg'
import Male11 from '../../Images/Male11.jpg'
import Male12 from '../../Images/Male12.jpg'
import Male13 from '../../Images/Male13.jpg'
import Male14 from '../../Images/Male14.jpg'
import Male15 from '../../Images/Male15.jpg'
import Male16 from '../../Images/Male16.jpg'
import Male17 from '../../Images/Male17.jpg'
import Male18 from '../../Images/Male18.jpg'
import Male19 from '../../Images/Male19.jpg'
import Male20 from '../../Images/Male20.jpg'
import Male21 from '../../Images/Male21.jpg'
import Male22 from '../../Images/Male22.jpg'
import Male23 from '../../Images/Male23.jpg'
import Male24 from '../../Images/Male24.jpg'
import Male25 from '../../Images/Male25.jpg'


const Home = () => {
    // const data = [
    //     {
    //         id: "EVT0001",
    //         location: "Bangalore",
    //         gender: "Female",
    //         name: "Female01",
    //         date: "5-Jan-23",
    //         time: "9:05:23",
    //         picture: Female01
    //     },
    //     {
    //         id: "EVT0002",
    //         location: "Chennai",
    //         gender: "Male",
    //         name: "Male01",
    //         date: "5-Jan-23",
    //         time: "9:11:03",
    //         picture: Male01
    //     },
    //     {
    //         id: "EVT0003",
    //         location: "Bangalore",
    //         gender: "Male",
    //         name: "Male02",
    //         date: "5-Jan-23",
    //         time: "10:04:05",
    //         picture: Male02
    //     },
    //     {
    //         id: "EVT0004",
    //         location: "Bangalore",
    //         gender: "Female",
    //         name: "Female02",
    //         date: "5-Jan-23",
    //         time: "10:39:09",
    //         picture: Female02
    //     },
    //     {
    //         id: "EVT0005",
    //         location: "Chennai",
    //         gender: "Female",
    //         name: "Female03",
    //         date: "5-Jan-23",
    //         time: "11:14:13",
    //         picture: Female03
    //     },
    //     {
    //         id: "EVT0006",
    //         location: "Bangalore",
    //         gender: "Male",
    //         name: "Male03",
    //         date: "5-Jan-23",
    //         time: "11:49:17",
    //         picture: Male03
    //     },
    //     {
    //         id: "EVT0007",
    //         location: "Hyderabad",
    //         gender: "Female",
    //         name: "Female04",
    //         date: "5-Jan-23",
    //         time: "12:24:21",
    //         picture: Female04
    //     },
    //     {
    //         id: "EVT0008",
    //         location: "Hyderabad",
    //         gender: "Male",
    //         name: "Male04",
    //         date: "5-Jan-23",
    //         time: "12:59:25",
    //         picture: Male04
    //     },
    //     {
    //         id: "EVT0009",
    //         location: "Chennai",
    //         gender: "Male",
    //         name: "Male05",
    //         date: "5-Jan-23",
    //         time: "13:34:29",
    //         picture: Male05
    //     },
    //     {
    //         id: "EVT0010",
    //         location: "Hyderabad",
    //         gender: "Female",
    //         name: "Female05",
    //         date: "5-Jan-23",
    //         time: "14:09:33",
    //         picture: Female05
    //     },
    //     {
    //         id: "EVT0011",
    //         location: "Bangalore",
    //         gender: "Male",
    //         name: "Male06",
    //         date: "5-Jan-23",
    //         time: "14:44:37",
    //         picture: Male06
    //     },
    //     {
    //         id: "EVT0012",
    //         location: "Hyderabad",
    //         gender: "Male",
    //         name: "Male07",
    //         date: "5-Jan-23",
    //         time: "15:19:41",
    //         picture: Male07
    //     },
    //     {
    //         id: "EVT0013",
    //         location: "Chennai",
    //         gender: "Female",
    //         name: "Female06",
    //         date: "5-Jan-23",
    //         time: "15:54:45",
    //         picture: Female06
    //     },
    //     {
    //         id: "EVT0014",
    //         location: "Chennai",
    //         gender: "Female",
    //         name: "Female07",
    //         date: "5-Jan-23",
    //         time: "16:29:49",
    //         picture: Female07
    //     },
    //     {
    //         id: "EVT0015",
    //         location: "Bangalore",
    //         gender: "Female",
    //         name: "Female08",
    //         date: "6-Jan-23",
    //         time: "17:04:53",
    //         picture: Female08
    //     },
    //     {
    //         id: "EVT0016",
    //         location: "Chennai",
    //         gender: "Male",
    //         name: "Male08",
    //         date: "6-Jan-23",
    //         time: "17:39:57",
    //         picture: Male08
    //     },
    //     {
    //         id: "EVT0017",
    //         location: "Chennai",
    //         gender: "Male",
    //         name: "Male09",
    //         date: "6-Jan-23",
    //         time: "18:15:01",
    //         picture: Male09
    //     },
    //     {
    //         id: "EVT0018",
    //         location: "Bangalore",
    //         gender: "Female",
    //         name: "Female09",
    //         date: "6-Jan-23",
    //         time: "18:50:05",
    //         picture: Female09
    //     },
    //     {
    //         id: "EVT0019",
    //         location: "Bangalore",
    //         gender: "Female",
    //         name: "Female10",
    //         date: "6-Jan-23",
    //         time: "19:25:09",
    //         picture: Female10
    //     },
    //     {
    //         id: "EVT0020",
    //         location: "Hyderabad",
    //         gender: "Male",
    //         name: "Male10",
    //         date: "6-Jan-23",
    //         time: "20:00:13",
    //         picture: Male10
    //     },
    //     {
    //         id: "EVT0021",
    //         location: "Chennai",
    //         gender: "Male",
    //         name: "Male11",
    //         date: "6-Jan-23",
    //         time: "20:35:17",
    //         picture: Male11
    //     },
    //     {
    //         id: "EVT0022",
    //         location: "Hyderabad",
    //         gender: "Female",
    //         name: "Female11",
    //         date: "6-Jan-23",
    //         time: "21:10:21",
    //         picture: Female11
    //     },
    //     {
    //         id: "EVT0023",
    //         location: "Hyderabad",
    //         gender: "Male",
    //         name: "Male12",
    //         date: "6-Jan-23",
    //         time: "21:45:25",
    //         picture: Male12
    //     },
    //     {
    //         id: "EVT0024",
    //         location: "Bangalore",
    //         gender: "Female",
    //         name: "Female12",
    //         date: "6-Jan-23",
    //         time: "22:20:29",
    //         picture: Female12
    //     },
    //     {
    //         id: "EVT0025",
    //         location: "Bangalore",
    //         gender: "Male",
    //         name: "Male13",
    //         date: "6-Jan-23",
    //         time: "22:55:33",
    //         picture: Male13
    //     },
    //     {
    //         id: "EVT0026",
    //         location: "Hyderabad",
    //         gender: "Female",
    //         name: "Female13",
    //         date: "6-Jan-23",
    //         time: "23:30:37",
    //         picture: Female13
    //     },
    //     {
    //         id: "EVT0027",
    //         location: "Hyderabad",
    //         gender: "Male",
    //         name: "Male14",
    //         date: "7-Jan-23",
    //         time: "0:05:41",
    //         picture: Male14
    //     },
    //     {
    //         id: "EVT0028",
    //         location: "Hyderabad",
    //         gender: "Male",
    //         name: "Male15",
    //         date: "7-Jan-23",
    //         time: "0:40:45",
    //         picture: Male15
    //     },
    //     {
    //         id: "EVT0029",
    //         location: "Hyderabad",
    //         gender: "Female",
    //         name: "Female14",
    //         date: "7-Jan-23",
    //         time: "1:15:49",
    //         picture: Female14
    //     },
    //     {
    //         id: "EVT0030",
    //         location: "Chennai",
    //         gender: "Female",
    //         name: "Female15",
    //         date: "7-Jan-23",
    //         time: "1:50:53",
    //         picture: Female15
    //     },
    //     {
    //         id: "EVT0031",
    //         location: "Chennai",
    //         gender: "Female",
    //         name: "Female16",
    //         date: "7-Jan-23",
    //         time: "2:25:57",
    //         picture: Female16
    //     },
    //     {
    //         id: "EVT0032",
    //         location: "Chennai",
    //         gender: "Male",
    //         name: "Male16",
    //         date: "7-Jan-23",
    //         time: "3:01:01",
    //         picture: Male16
    //     },
    //     {
    //         id: "EVT0033",
    //         location: "Chennai",
    //         gender: "Male",
    //         name: "Male17",
    //         date: "8-Jan-23",
    //         time: "3:36:05",
    //         picture: Male17
    //     },
    //     {
    //         id: "EVT0034",
    //         location: "Bangalore",
    //         gender: "Male",
    //         name: "Male18",
    //         date: "8-Jan-23",
    //         time: "4:11:09",
    //         picture: Male18
    //     },
    //     {
    //         id: "EVT0035",
    //         location: "Chennai",
    //         gender: "Male",
    //         name: "Male19",
    //         date: "8-Jan-23",
    //         time: "4:46:13",
    //         picture: Male19
    //     },
    //     {
    //         id: "EVT0036",
    //         location: "Bangalore",
    //         gender: "Female",
    //         name: "Female17",
    //         date: "9-Jan-23",
    //         time: "5:21:17",
    //         picture: Female17
    //     },
    //     {
    //         id: "EVT0037",
    //         location: "Hyderabad",
    //         gender: "Female",
    //         name: "Female18",
    //         date: "9-Jan-23",
    //         time: "5:56:21",
    //         picture: Female18
    //     },
    //     {
    //         id: "EVT0038",
    //         location: "Hyderabad",
    //         gender: "Male",
    //         name: "Male20",
    //         date: "9-Jan-23",
    //         time: "6:31:25",
    //         picture: Male20
    //     },
    //     {
    //         id: "EVT0039",
    //         location: "Chennai",
    //         gender: "Male",
    //         name: "Male21",
    //         date: "9-Jan-23",
    //         time: "7:06:29",
    //         picture: Male21
    //     },
    //     {
    //         id: "EVT0040",
    //         location: "Bangalore",
    //         gender: "Male",
    //         name: "Male22",
    //         date: "9-Jan-23",
    //         time: "7:41:33",
    //         picture: Male22
    //     },
    //     {
    //         id: "EVT0041",
    //         location: "Hyderabad",
    //         gender: "Female",
    //         name: "Female19",
    //         date: "9-Jan-23",
    //         time: "8:16:37",
    //         picture: Female19
    //     },
    //     {
    //         id: "EVT0042",
    //         location: "Bangalore",
    //         gender: "Female",
    //         name: "Female20",
    //         date: "9-Jan-23",
    //         time: "8:51:41",
    //         picture: Female20
    //     },
    //     {
    //         id: "EVT0043",
    //         location: "Chennai",
    //         gender: "Male",
    //         name: "Male23",
    //         date: "9-Jan-23",
    //         time: "9:26:45",
    //         picture: Male23
    //     },
    //     {
    //         id: "EVT0044",
    //         location: "Bangalore",
    //         gender: "Female",
    //         name: "Female21",
    //         date: "9-Jan-23",
    //         time: "10:01:49",
    //         picture: Female21
    //     },
    //     {
    //         id: "EVT0045",
    //         location: "Bangalore",
    //         gender: "Male",
    //         name: "Male24",
    //         date: "9-Jan-23",
    //         time: "10:36:53",
    //         picture: Male24
    //     },
    //     {
    //         id: "EVT0046",
    //         location: "Chennai",
    //         gender: "Female",
    //         name: "Female22",
    //         date: "9-Jan-23",
    //         time: "11:11:57",
    //         picture: Female22
    //     },
    //     {
    //         id: "EVT0047",
    //         location: "Chennai",
    //         gender: "Female",
    //         name: "Female23",
    //         date: "9-Jan-23",
    //         time: "11:47:01",
    //         picture: Female23
    //     },
    //     {
    //         id: "EVT0048",
    //         location: "Hyderabad",
    //         gender: "Male",
    //         name: "Male25",
    //         date: "9-Jan-23",
    //         time: "12:22:05",
    //         picture: Male25
    //     },
    //     {
    //         id: "EVT0049",
    //         location: "Hyderabad",
    //         gender: "Female",
    //         name: "Female24",
    //         date: "9-Jan-23",
    //         time: "12:57:09",
    //         picture: Female24
    //     },
    //     {
    //         id: "EVT0050",
    //         location: "Chennai",
    //         gender: "Female",
    //         name: "Female25",
    //         date: "9-Jan-23",
    //         time: "13:32:13",
    //         picture: Female25
    //     }
    // ]

    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        fetch('https://interview-task-01-default-rtdb.firebaseio.com/userData/-NLjLMc6RHVYNhUhlfLI.json').then(res => res.json()).then(result => {
            setUsersData(result)
        })
    }, []);

    // const handle = () => {
    //     fetch('https://interview-task-01-default-rtdb.firebaseio.com/userData.json', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     }).then(res => res.json()).then(result => {
    //         console.log(result);
    //     })
    // }
    return (
        <section>
            <Navbar />

            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <div className='flex justify-between  '>
                        <div className='bg-[#00b8f1] w-14 h-screen flex flex-col justify-between'>
                            <label htmlFor="my-drawer" className="w-5 ml-2 mt-3 inline-block drawer-button cursor-pointer">
                                <FaBars className=' text-gray-200' />
                            </label>
                            <div className='ml-2  mb-28 text-white'>
                                <Link><FaSignInAlt /></Link>
                            </div>
                        </div>
                        <Outlet />
                        <div className='md:block hidden'>
                            <div className='flex items-center justify-between mr-7 mt-2'><p className='font-bold text-lg'>Events</p> <img className='w-7 h-6 cursor-pointer' src={filterIcon} alt="" /> </div>
                            <div className='h-screen overflow-y-scroll'>
                                {
                                    usersData.map(user => <div key={user.id} className="xl:w-80 lg:w-60">
                                        <NavLink to={`/${user.id}`} className={({ isActive }) =>
                                            isActive ? 'block bg-[#7f7f7f] text-white my-2 p-2 py-1' : 'block bg-[#d9d9d9] my-2 p-2 py-1'}>
                                            <div className='flex justify-between'>
                                                <h3>{user.id}:<span>{user.location}</span></h3>
                                                <p className='text-sm'>{user.date} {user.time}</p>
                                            </div>
                                            <p className='text-start'>Person detectd.</p>
                                        </NavLink>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="  p-4 sm:w-80  bg-base-100 text-base-content">
                        <div className='flex justify-between sticky top-3 bg-white items-center'>
                            <h4 className='font-bold'>Menu</h4>
                            <label htmlFor="my-drawer" className="drawer-overlay  h-8 w-8 text-white flex justify-center items-center bg-black rounded-full cursor-pointer font-bold">X</label>
                        </div>
                        {
                            usersData.map(user => <div key={user.id} className=" ">
                                <NavLink to={`/${user.id}`} className={({ isActive }) =>
                                    isActive ? 'block bg-[#7f7f7f] text-white my-2 p-2 py-1' : 'block bg-[#d9d9d9] my-2 p-2 py-1'}>
                                    <div className='flex justify-between'>
                                        <h3>{user.id}:<span>{user.location}</span></h3>
                                        <p className='text-sm'>{user.date} {user.time}</p>
                                    </div>
                                    <p className='text-start'>Person detectd.</p>
                                </NavLink>
                            </div>)
                        }

                    </ul>
                </div>
            </div>

        </section>
    );
};

export default Home;