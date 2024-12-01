import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updatename } from '../features/claudeSlice';
import { useNavigate } from 'react-router-dom';

const Name = () => {
  
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const [username, SetUsername] = useState('');
  
  
  function u() {
    if (username.trim()) {
      const name={
        fullname: username,
        nickname: username.trim().split(' ')[0],
      };
      
      dispatch(updatename(name));
    }
    else{
      const name={
        fullname: 'User',
        nickname: 'User',
      };
      
      dispatch(updatename(name));
    }
    navigate("/home");
  }

  

  return (
    <div className='transition-all duration-500 ease-in-out animate-fade-in flex flex-col gap-3 justify-center mt-[125px] m-auto max-w-[600px]'>
      <h1 className='text-4xl mb-5 animate-typing overflow-hidden whitespace-nowrap'>Hello, I'm Claude.</h1>
      <p className='text-xl animate-typing  overflow-hidden whitespace-nowrap '>I'm a next generation AI assistant built for work and trained to be </p>
      <p className='text-xl animate-typing overflow-hidden whitespace-nowrap '>safe, accurate, and secure.</p>
      <p className='text-xl animate-typing overflow-hidden whitespace-nowrap'>I'd love for us to get to know each other a bit better.</p>
      <div className='transition-all duration-500 ease-in-out bg-bg2 mt-3 p-2 border-2 border-gray-500 relative rounded-xl'>

        <p className='mb-2 text-text2'>Nice to meet you, I'm...</p>


        <textarea className='text-lg font-mono w-[80%] mb-2 bg-transparent resize-none focus:border-none focus:outline-none'
          rows={1}
          placeholder='Enter your Full name'
          onChange={(e) => { SetUsername(e.target.value) }}
        />

        {username.trim() != '' &&
          <p className='mb-1 text-text2'>But you can call me...</p>}
        {username.trim() != '' &&
          <textarea className='text-lg font-mono w-[80%] bg-transparent resize-none focus:border-none focus:outline-none'
            readOnly
            rows={1}
            value={username.trim().split(' ')[0]}
          />}



        <button className='flex justify-center text-center mr-2 p-2 rounded-xl items-baseline absolute top-2 right-0 bg-blue-500  hover:bg-blue-600 transition-all duration-500 ease-in-out hover:bg-blue-700 active:scale-90 hover:scale-105'
          onClick={u}
        >Send<svg className='pl-3' width="30px" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41421L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z" fill="white"></path> </g></svg></button>

      </div>
      {username.trim() != '' &&
        <p className='text-text1 ml-auto mr-0'>You can always change this later</p>
      }
      <img className='pt-3 animate-blink duration-1000' width={'45px'} src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/claude-color.png" alt="" />
    </div>
  )
}

export default Name
