import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const SlideBar = ({ stay, setStay, content , email, logo, key }) => {
  const navigate = useNavigate();
  
  
  
  function stay1() {
    setStay(prev => !prev);
  }



  return (
    <div className={stay ? 'fixed border w-[300px] opacity-95 h-[94.5%] bg-bg3 z-20 top-5 left-0 scale-105 backdrop-blur-[7px] rounded-lg md:hiden flex flex-col gap-2' : 'fixed opacity-0 border sm:w-[50px] md:w-[100px] w-[200px] hover:w-[300px] hover:opacity-95 bg-bg3 transition-all duratiion-500 ease-in-out h-[94.5%] z-20 top-5 left-0 scale-105 backdrop-blur-[7px] rounded-lg md:hiden flex flex-col gap-2'}>
      <span className='absolute top-2 left-4 text-2xl font-f1 text-text2'>Claude

      </span>
      <span className={`absolute top-2 cursor-pointer p-2 left-[250px] hover:bg-gray-700 rounded-xl transition-all duration-300 hover:scale-105 active:scale-100 ease-in-out ${stay ? '' : 'rotate-180'}`}
        onClick={() => { setStay(prev => !prev) }}
      ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 256 256"><path d="M232,128a8,8,0,0,1-8,8H91.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L91.31,120H224A8,8,0,0,1,232,128ZM40,32a8,8,0,0,0-8,8V216a8,8,0,0,0,16,0V40A8,8,0,0,0,40,32Z"></path></svg></span>
      <div className='absolute flex items-baseline gap-1 mt-[55px] ml-[10px] p-1 w-[95%] border rounded-lg bg-blue-900 cursor-pointer transition-all duration-500 ease-in-out  active:scale-100 hover:bg-blue-700'
        onClick={() => {

          navigate("/home");

        }}
      >
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className="shrink-0"><path fill="currentColor" d="M8 1.5a6.5 6.5 0 0 1 5.74 9.55l.7 2.13a1 1 0 0 1-1.26 1.27l-2.13-.71A6.5 6.5 0 1 1 8 1.5Zm0 12a5.5 5.5 0 0 0 2.75-.74.5.5 0 0 1 .41-.04l2.34.78-.78-2.34a.5.5 0 0 1 .04-.4A5.5 5.5 0 1 0 8 13.5Z"></path><path stroke="currentColor" strokeLinecap="round" d="M8 6.4v3.2M9.6 8H6.4"></path></svg>
        </span>
        Start a new chat
      </div>
      <div className='flex flex-col w-[95%] mt-[100px] ml-[10px] p-1'>
        <p>Starred</p>
        <textarea className='flex justify-center text-center pt-6 w-[95%] text-sm bg-transparent resize-none focus:border-none focus:outline-none border border-gray-500 rounded-lg'
          readOnly
          rows={3}
          placeholder='Star chats you use often'
        />
      </div>
      <div className='flex flex-col gap-1 mt-2 ml-[10px] p-1'>
        <p>Recent</p>
        {content.map((s, i) => {

          return <div key={i} className='flex gap-1 items-baseline  w-[95%] h-[30px] text-xs overflow-hidden pt-1 rounded-lg hover:bg-bg4 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 0 256 256" className="shrink-0"><path d="M232.07,186.76a80,80,0,0,0-62.5-114.17A80,80,0,1,0,23.93,138.76l-7.27,24.71a16,16,0,0,0,19.87,19.87l24.71-7.27a80.39,80.39,0,0,0,25.18,7.35,80,80,0,0,0,108.34,40.65l24.71,7.27a16,16,0,0,0,19.87-19.86ZM62,159.5a8.28,8.28,0,0,0-2.26.32L32,168l8.17-27.76a8,8,0,0,0-.63-6,64,64,0,1,1,26.26,26.26A8,8,0,0,0,62,159.5Zm153.79,28.73L224,216l-27.76-8.17a8,8,0,0,0-6,.63,64.05,64.05,0,0,1-85.87-24.88A79.93,79.93,0,0,0,174.7,89.71a64,64,0,0,1,41.75,92.48A8,8,0,0,0,215.82,188.23Z"></path></svg>
            {s.slice(0, 40)}...</div>
        })}
        <span className='flex items-baseline gap-2 no-underline hover:underline cursor-pointer'>
          <span>View all</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="white" viewBox="0 0 256 256" className="translate-y-px"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
        </span>
      </div>
      <div className='flex flex-col absolute bottom-2 ml-[15px] w-[90%]'>
        <div className='flex ml-[15px] border w-[90%] justify-center text-sm pb-2'>
          Free plan
        </div>
        <div className='flex p-3 items-baseline gap-2 border w-[88%] rounded-lg justify-center ml-[19px] text-xs scale-110 bg-bg2 cursor-pointer'>
        <span className='w-[25px] h-[25px] flex items-center justify-center bg-white text-black font-bold border  rounded-[50%] text-xs '>
    <span>{logo}</span>
  </span>
          <span>
            {email}@gmail.com
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="white" viewBox="0 0 256 256"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
          </span>
        </div>
        <div className='mt-3 flex justify-between items-baseline '>
        <svg width="15" height="15" viewBox="0 0 28 28" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M20 4h-4.3l7.7 19.5h4.2L20 4ZM7.6 4 0 23.5h4.3L6 19.4h8l1.6 4h4.3L12.1 4H7.7Zm-.4 11.8 2.6-6.9 2.7 6.9H7.3Z"></path></svg>
        <span className='flex gap-1 items-baseline text-sm'>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 0 256 256"><path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
        <span className='no-underline hover:underline cursor-pointer'>Help & support</span>
        </span>
        </div>
      </div>

    </div>
  )
}

export default SlideBar
