import React from 'react';
import MyCalender from '../components/MyCalender';
// import Footer from '../components/Footer';
// import Header from '../components/Header';


const Task = () => {
  return (
    <div className ="h-full bg-yellow-300 pb-[200px]">
        
    <div className = "flex px-8 justify-center gap-x-5 pt-[140px] pb-2">
        <div>
            <h1 className='text-3xl font-semibold content-start'>This Website gives you the</h1>
            <h1 className='text-3xl font-semibold content-start'>examination timetable.</h1>
            <br></br>
            <p>You can request to change the time slot or suggest other lecturer</p>
            <p>to participate the examination.</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-[40%] mt-[25%]  '>Request</button>
        </div>
        <div>
            <MyCalender />
        </div>
    </div>
        
    </div>
  )
}

export default Task
