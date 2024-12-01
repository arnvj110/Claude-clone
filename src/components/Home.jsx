import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import History from './History';


const Home = ({ content, stay, logo }) => {
  const name = useSelector((state) => state.claude.names);
  const slide = true;
  const date = new Date();
  const [chat, Setchat] = useState('');
  const [textOption, setTextOption] = useState(false);
  const [contentShow, SetcontentShow] = useState(true);

  const [fonttext, SetFontText] = useState('Defalut responses from Claude');
  const latestname = name[name.length - 1];
  const [tick, SetTick] = useState([false, false, false, false]);

  const ago = ['23 seconds ago', '3 minutes ago', '1 hour ago', '3 hours ago', '1 day ago', '1 day ago'];
  let morning = 'morning';
  if (date.getHours() >= 12 && date.getHours() < 17) {
    morning = 'afternoon';
  }
  else if (date.getHours() >= 17) {

    morning = 'evening';
  }
  else {
    morning = 'morning';
  }


  function t(index) {
    if (index == -1) {
      SetFontText('Default responses from Claude');
      SetTick(prev =>
        prev.map((item, i) =>
          false
        )
      )
    }
    else {
      switch (index) {
        case 1:
          SetFontText('Shorter responses & more messages');
          break;
        case 2:
          SetFontText('Educational responses for learning');
          break;
        case 3:
          SetFontText('Clear and well-structured responses');
          break;
        default:
          SetFontText('Defalut responses from Claude');
      }
      SetTick(prev =>
        prev.map((item, i) =>
          i === index ? true : false
        )
      )
    }
  }

  function show() {
    SetcontentShow(!contentShow);
  }
  return (

    <div className={`transition-all duration-500 ease-in out ${stay ? 'ml-[300px]' : ''}`}>
      <div className='md:block hidden'>
        
      <span className={stay ? 'hidden' : `fixed top-3 left-3 text-2xl font-f1 text-text2`}>Claude</span>
      <span className='fixed flex flex-col justify-center items-center bottom-4 left-2 '>
      <span className='w-[25px] h-[25px] flex items-center bg-white text-black font-bold border pl-[5px] rounded-[50%] text-xs mb-3 '>
    <span>{logo}</span>
  </span>
        <svg className=' ' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,56H80V200H40ZM216,200H96V56H216V200Z"></path></svg>
      </span>
      </div>
      <div className='block md:hidden fixed top-4 left-3'
      
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 32 32"><path d="M26 16a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h20a1 1 0 0 1 1 1ZM5 9h18a1 1 0 1 0 0-2H5a1 1 0 0 0 0 2Zm16 14H5a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2Z"></path></svg>
      </div>
      <div className='flex flex-col justify-center items-center mt-[25px] m-auto max-w-[700px]'>
        <div className='flex m-auto border-2 border-gray-700 bg-bg3 text-sm rounded-3xl p-3 mt-5 mb-6'>Using limited free plan <span className='ml-2 text-blue-200'>Upgrade</span></div>
        <h1 className='flex m-auto text-[50px] items-baseline flex-shrink'><img className='w-[35px] h-35px] mr-3 mb-[50px]' src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/claude-color.png" alt="" /><span className='text-[35px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[45px] transition-all duration-300 ease-in-out'>Good {morning}, {latestname.nickname}</span></h1>
        <div className='relative flex flex-col transition-all duration-500 ease-in-out bg-bg2 border-2 border-gray-500 relative rounded-xl w-[85%] scale-110'>
          <div className='flex justify-between'>
            <textarea className='p-2  w-[90%] text-sm bg-transparent resize-none focus:border-none focus:outline-none'
              rows={3}
              placeholder='How can Claude help you today?'
              onChange={(e) => { Setchat(e.target.value) }}
            />
            <button className={`cursor-pointer mb-[45px] mr-2 flex justify-center text-center mr-2 p-2 rounded-lg items-baseline absolute top-2 right-0 bg-blue-500 scale-100 ${chat != '' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} hover:bg-blue-600 transition-all duration-200 ease-in-out hover:bg-blue-700 active:scale-90 hover:scale-105`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M208.49,120.49a12,12,0,0,1-17,0L140,69V216a12,12,0,0,1-24,0V69L64.49,120.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0l72,72A12,12,0,0,1,208.49,120.49Z"></path></svg></button>

          </div>
          <div className='flex items-center mb-2 items-baseline ml-2 text-xs'>
            <p className='mr-5'>Claude Haiku</p>
            <div className='flex p-2 items-center cursor-pointer transition-all ease-in-out hover:bg-bg4 rounded-lg justify-between'
              onClick={(e) => {
                setTextOption(!textOption);
                e.stopPropagation();
              }}
            >
              <span className='flex items-baseline'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" width="16" height="16" viewBox="0 0 16 16" className="mr-1 -translate-y-px" strokeLinecap="round" strokeLinejoin="round"><path d="M7.5 4.5c-3 2-4.5 4-5.5 8L1.5 15l1-1.5"></path><path d="M2 4.5c-.5 1.3-.1 5 .4 6.5 0 0 1.9-2 4.1-3 1.8-.8 3.8-.6 4.5-2 .6-1.2-.2-1.7-1.5-1 1.2-.7 4-2 3-3.5-1-1.4-3.5-.1-4.5.8C8 1.9 8 .9 7 1c-1 .1-2 1.5-2.3 2.8 0 0 0-.7-.7-.8-.7-.1-1.6.5-2 1.5Z"></path><path d="M6.2 11.3c1 .4 1.8 0 2.3-1 .3.6.5 1.2 2 1.2s1.7-.6 2-1.3c.4 1.1 1.1 1.5 2.3 1m-9.6 3.4c.8.4 2 0 2.5-1.1.3.7.8 1.3 1.8 1.3s1.5-.4 2-1.3c.5.9 1.5 1.5 2.5 1"></path></svg>

                <span className=''>Choose style</span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256" className="text-text-500/80 ml-1 shrink-0"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
              </span>

            </div>
            {chat.length > 3 &&
              <span className='ml-[200px] sm:opacity-0 md:opacity-100'>
                <span className='flex gap-1'>Use <span className='text-mono text-text2 bg-bg1'>shift+return</span> for newline</span>
              </span>}

          </div>
          {textOption &&
            <div className='transition-all duration-500 ease-in-out opacity-100 scale-100 flex gap-2 bg-bg4 p-3 absolute left-[-45px] top-[137px]  w-[465px] shadow-2xl rounded-xl'>
              <div className='flex flex-col max-w-[50%]'>
                <p className='text-[13.5px]'>How should Claude write responses?</p>

                <span className='flex items-baseline w-[100%] justify-between hover:bg-bg2 transition-all ease-in-out cursor-pointer rounded-lg'
                  onMouseOver={() => t(0)}
                  onMouseOut={() => t(-1)}
                >
                  <span className='p-1 text-lg'>Normal</span>
                  {tick[0] && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="lightgreen" viewBox="0 0 256 256" className=" text-accent-secondary-200 mb-0.5 mr-2"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path></svg>}
                </span>

                <span className='flex items-baseline w-[100%] justify-between
              hover:bg-bg2 transition-all ease-in-out cursor-pointer rounded-lg'
                  onMouseOver={() => t(1)}
                  onMouseOut={() => t(-1)}
                >
                  <span className='p-1 text-lg'

                  >Concise</span>
                  {tick[1] && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="lightgreen" viewBox="0 0 256 256" className=" text-accent-secondary-200 mb-0.5 mr-2"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path></svg>}
                </span>


                <span className='flex items-baseline w-[100%] justify-between
               transition-all ease-in-out hover:bg-bg2 cursor-pointer rounded-lg'
                  onMouseOver={() => t(2)}
                  onMouseOut={() => t(-1)}
                >
                  <span className='p-1 text-lg'

                  >Explanatory</span>
                  {tick[2] && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="lightgreen" viewBox="0 0 256 256" className=" text-accent-secondary-200 mb-0.5 mr-2"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path></svg>}
                </span>

                <span className='flex items-baseline w-[100%] justify-between
               transition-all ease-in-out hover:bg-bg2 cursor-pointer rounded-lg'
                  onMouseOver={() => t(3)}
                  onMouseOut={() => t(-1)}
                >
                  <span className='p-1 text-lg'

                  >Formal</span>
                  {tick[3] && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="lightgreen" viewBox="0 0 256 256" className=" text-accent-secondary-200 mb-0.5 mr-2"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path></svg>}
                </span>


                <button className='transition-all ease-in-out duration-500 mt-2 p-1 rounded-lg border-2 hover:bg-red-500'>Create & Edit Styles</button>
              </div>
              <div className='w-[48%]  flex flex-col justify-center items-center'>
                <textarea className='mt-2 p-2 border w-[90%] bg-bg2 rounded-xl resize-none text-sm focus:border-none focus:outline-none'
                  rows={8}
                  readOnly
                  value={fonttext}
                
                />
              </div>

            </div>

          }






        </div>
        <div className='bg-bg3 flex text-text1 border border-gray-400 rounded-b-2xl p-5 text-xs w-[650px] justify-between max-w-[90%]'>

          <span>Collaborate with Claude using documents, images, and more</span>
          <div className='flex gap-4'>
            <svg className='cursor-pointer transition-all duration-500 ease-in-out hover:scale-110 active:scale-100' xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256"><path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"></path></svg>
            <svg className='cursor-pointer transition-all duration-500 ease-in-out hover:scale-110 active:scale-100' xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256"><path d="M209.66,122.34a8,8,0,0,1,0,11.32l-82.05,82a56,56,0,0,1-79.2-79.21L147.67,35.73a40,40,0,1,1,56.61,56.55L105,193A24,24,0,1,1,71,159L154.3,74.38A8,8,0,1,1,165.7,85.6L82.39,170.31a8,8,0,1,0,11.27,11.36L192.93,81A24,24,0,1,0,159,47L59.76,147.68a40,40,0,1,0,56.53,56.62l82.06-82A8,8,0,0,1,209.66,122.34Z"></path></svg>
          </div>

        </div>
        <div className='flex mt-[50px]  w-[90%] justify-between'>
          <span className='flex gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="lightblue" viewBox="0 0 256 256" className="text-accent-secondary-100"><path d="M232.07,186.76a80,80,0,0,0-62.5-114.17A80,80,0,1,0,23.93,138.76l-7.27,24.71a16,16,0,0,0,19.87,19.87l24.71-7.27a80.39,80.39,0,0,0,25.18,7.35,80,80,0,0,0,108.34,40.65l24.71,7.27a16,16,0,0,0,19.87-19.86ZM62,159.5a8.28,8.28,0,0,0-2.26.32L32,168l8.17-27.76a8,8,0,0,0-.63-6,64,64,0,1,1,26.26,26.26A8,8,0,0,0,62,159.5Zm153.79,28.73L224,216l-27.76-8.17a8,8,0,0,0-6,.63,64.05,64.05,0,0,1-85.87-24.88A79.93,79.93,0,0,0,174.7,89.71a64,64,0,0,1,41.75,92.48A8,8,0,0,0,215.82,188.23Z"></path></svg>
            <span>Your recent chats</span>
            <span className='flex transition-all duration-500 ease-in-out hover:bg-bg2 cursor-pointer justify-center items-center p-1 rounded-lg pr-2'
              onClick={() => show()}
            >
              <svg className={`w-5 h-5 flex pb-2 transition-all duration-500 ease-in-out ${!contentShow ? 'rotate-180' : ''}`} viewBox="0 0 24 15" fill="white" xmlns="http://www.w3.org/2000/svg" style={{ transformOrigin: 'center' }}>
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g>
                  <path d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"></path>
                </g>
              </svg>
              {!contentShow &&

                <span className='text-gray-400 text-sm'>Show</span>
              }
            </span>

          </span>
          <span className='flex items-baseline gap-2 hover:underline cursor-pointer'>
            <span>View all</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256" className="translate-y-px"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
          </span>
        </div>
        <div className={`flex flex-wrap gap-3 mt-3 w-[90%] wrap transition-all duration-1000 delay-1000 ease-in-out mb-[70px] justify-center`}>
          {content.map((s, i) => {

            return <History key={i} contentShow={contentShow} contents={s} ago={ago[i]} />
          })}

        </div>
      </div>

    </div>

  )
}

export default Home
