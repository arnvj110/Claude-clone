import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import Home from "./components/Home";
import Name from "./components/Name";
import SlideBar from './components/SlideBar';
import { useSelector } from 'react-redux';
import MainChat from './components/MainChat';
function App() {
  // const [count, setCount] = useState(0)
  const content = ['Lorem, ipsum dolor sit amet consectetur adipisicing elit.', 'Quisquam ipsa recusandae dolores minus veritatis est.', 'Aut accusantium porro similique optio odit,', 'molestiae tempora ipsum, deleniti eos, quae officia?', 'Quo reiciendis obcaecati molestiae aliquam', 'aspernatur dolorum dignissimos itaque officiis'];
  const [stay,setStay] = useState(false);
  const name = useSelector((state) => state.claude.names);
  const user=name[name.length-1];
  const fullname=user.fullname;
  
  const email=fullname.split(" ").join('').toLowerCase();
  let logo='';
  for(let i=0;i<fullname.split(" ").length;i++){
    logo+=fullname.split(" ")[i][0].toUpperCase();
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>
        <Name />
      </div>
    },
    {
      path: '/home',
      element: <div>
        <SlideBar email={email} logo={logo} stay={stay} setStay={setStay} content={content}/>
        <Home logo={logo} stay={stay} content={content} />
      </div>
    },
    {
      path: 'chat',
      element: <div>
        <SlideBar email={email} logo={logo} stay={stay} setStay={setStay} content={content}/>
        <MainChat logo={logo} stay={stay}/>
      </div>
    }
  ]);



  return (
    <div >
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
