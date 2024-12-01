import React from 'react'
import { useNavigate } from 'react-router-dom'

const History = (props) => {
    // let hours=['seconds','hours','minutes'];
    // let h;
    const navigate=useNavigate();
    // h=hours[Math.floor(Math.random()*3)];
    return (
      <div className={`flex flex-col gap-2 md:w-[200px] sm:w-[100%] border cursor-pointer rounded-xl h-[130px] bg-bg4 border-blue-500 transition-all duration-500 ease-in-out hover:scale-105 active:scale-95 overflow-hidden  ${props.contentShow? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
      onClick={()=>navigate("/chat")}
      >
        <svg className='mt-3 ml-3' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#E5E5E2" viewBox="0 0 256 256"><path d="M232.07,186.76a80,80,0,0,0-62.5-114.17A80,80,0,1,0,23.93,138.76l-7.27,24.71a16,16,0,0,0,19.87,19.87l24.71-7.27a80.39,80.39,0,0,0,25.18,7.35,80,80,0,0,0,108.34,40.65l24.71,7.27a16,16,0,0,0,19.87-19.86ZM62,159.5a8.28,8.28,0,0,0-2.26.32L32,168l8.17-27.76a8,8,0,0,0-.63-6,64,64,0,1,1,26.26,26.26A8,8,0,0,0,62,159.5Zm153.79,28.73L224,216l-27.76-8.17a8,8,0,0,0-6,.63,64.05,64.05,0,0,1-85.87-24.88A79.93,79.93,0,0,0,174.7,89.71a64,64,0,0,1,41.75,92.48A8,8,0,0,0,215.82,188.23Z"></path></svg>
        <p className='mt-1 ml-3 text-sm'>{props.contents}</p>
        <div className='flex gap-1 ml-3 mt-3 text-xs text-text2'>
          <span>{props.ago}</span>
          
        </div>
      </div>
    )
}

export default History
