import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
const MainChat = ({ logo, stay }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [textOption, setTextOption] = useState(false);
  const [fonttext, SetFontText] = useState('Defalut responses from Claude');
  const [tick, SetTick] = useState([false, false, false, false]);
  // class=
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
  return (

    <div>
      {!stay &&
        <div>


          <span className='fixed flex flex-col justify-center items-center bottom-4 left-2 '>
            <span className='w-[25px] h-[25px] flex items-center bg-white text-black font-bold border pl-[5px] rounded-[50%] text-xs mb-3 '>
              <span>{logo}</span>
            </span>
            <svg className=' ' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,56H80V200H40ZM216,200H96V56H216V200Z"></path></svg>
          </span>
        </div>
      }


      <nav className={`z-10 fixed flex top-0 items-baseline justify-between p-3 w-screen  transition-all duration-500 ease-in-out ${stay ? 'pl-[320px]' : ''} w-screen bg-gradient-to-b from-bg1 via-[#2c2b28cc] from-60% via-80%`}>

        <span className={`text-2xl font-f1 text-text2 ${stay ? 'invisible' : ''}`}>Claude</span>
        <span className=' flex items-baseline gap-3'>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 0 256 256" className="shrink-0"><path d="M232.07,186.76a80,80,0,0,0-62.5-114.17A80,80,0,1,0,23.93,138.76l-7.27,24.71a16,16,0,0,0,19.87,19.87l24.71-7.27a80.39,80.39,0,0,0,25.18,7.35,80,80,0,0,0,108.34,40.65l24.71,7.27a16,16,0,0,0,19.87-19.86ZM62,159.5a8.28,8.28,0,0,0-2.26.32L32,168l8.17-27.76a8,8,0,0,0-.63-6,64,64,0,1,1,26.26,26.26A8,8,0,0,0,62,159.5Zm153.79,28.73L224,216l-27.76-8.17a8,8,0,0,0-6,.63,64.05,64.05,0,0,1-85.87-24.88A79.93,79.93,0,0,0,174.7,89.71a64,64,0,0,1,41.75,92.48A8,8,0,0,0,215.82,188.23Z"></path></svg>
          <span>Friendly AI Assistant</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="white" viewBox="0 0 256 256"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
        </span>
        <span className='flex gap-5 mr-5'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" className="-translate-y-[0.5px]"><path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 256 256"><path d="M40,88H73a32,32,0,0,0,62,0h81a8,8,0,0,0,0-16H135a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16Zm64-24A16,16,0,1,1,88,80,16,16,0,0,1,104,64ZM216,168H199a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16h97a32,32,0,0,0,62,0h17a8,8,0,0,0,0-16Zm-48,24a16,16,0,1,1,16-16A16,16,0,0,1,168,192Z"></path></svg>
        </span>
      </nav>


      <div className={`w-full overflow-hidden mt-3 transition-all duration-500 ease-in-out m-auto flex flex-col justify-center items-center ${stay ? 'pl-[280px]' : ''}`}>

        <div className=' mt-[70px] w-[50%] mb-[150px] p-2 transition-all duration-300 ease-in-out'>
          <div className='group relative flex gap-3 p-4 border  border-blue-500 bg-bg3 rounded-xl w-fit pr-5 mb-5'>
            <span className='w-[25px] h-[25px] flex items-center bg-white text-black font-bold border pl-[5px] rounded-[50%] text-xs '>
              <span>{logo}</span>
            </span>
            <span>
              Introduce youself
            </span>
            <div className='group absolute scale-0 group-hover:scale-100 cursor-pointer text-xs transition-all duration-300 ease-in-out  bottom-[-7px] right-[-7px] bg-bg2 p-[7px] rounded-lg flex items-baseline gap-1'
              onMouseOver={() => setShowEdit(true)}
              onMouseOut={() => setShowEdit(false)}
            >

              <svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" fill="white" viewBox="0 0 256 256" className=""><path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"

              ></path></svg>
              {showEdit && <span>Edit</span>}



            </div>
          </div>
          <div className='relative flex gap-3 p-4 border  border-blue-500 bg-bg2 rounded-xl '>
            Hello! I'm Claude, an AI created by Anthropic. I'm here to help you with a wide variety of tasks - whether that's writing, analysis, problem-solving, creative projects, coding, math, or just having an interesting conversation. I aim to be helpful, honest, and direct. I have a broad knowledge base that I can draw upon, and I'm always eager to tackle new challenges. What would you like to work on today?
            <div className='flex absolute right-[-10px] bottom-[-10px] border border-blue-200 bg-bg2 p-1 rounded-lg text-xs'>

              <span className='flex items-baseline cursor-pointer transition-all duration-300 ease-in-out hover:bg-bg1 p-1 rounded-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="white" viewBox="0 0 256 256"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg>
                <span>Copy</span>
              </span>

              <span className='flex items-baseline cursor-pointer transition-all duration-300 ease-in-out hover:bg-bg1 p-1 rounded-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="white" viewBox="0 0 256 256"><path d="M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L44.59,96H72a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0V85.8L60.25,60A96,96,0,0,1,224,128Z"></path></svg>
                <span>Retry</span>
              </span>
              <span className='pt-[7px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-bg1 p-1 rounded-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="white" viewBox="0 0 256 256"><path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"></path></svg>

              </span>
              <span className='pt-[7px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-bg1 p-1 rounded-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="white" viewBox="0 0 256 256"><path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"></path></svg>

              </span>
            </div>
          </div>
          <div className="group mt-5 relative flex gap-3 p-4 border  border-blue-500 bg-bg3 rounded-xl w-fit pr-5 mb-5">
            <span className="w-[25px] h-[25px] flex items-center bg-white text-black font-bold border pl-[5px] rounded-[50%] text-xs ">
              <span>{logo}</span>
            </span>
            <span>
              Explain me binary search
            </span>

            <div className='group absolute scale-0 group-hover:scale-100 cursor-pointer text-xs transition-all duration-300 ease-in-out  bottom-[-7px] right-[-7px] bg-bg2 p-[7px] rounded-lg flex items-baseline gap-1'
              onMouseOver={() => setShowEdit(true)}
              onMouseOut={() => setShowEdit(false)}
            >

              <svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" fill="white" viewBox="0 0 256 256" className=""><path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"

              ></path></svg>
              {showEdit && <span>Edit</span>}



            </div>
          </div>
          <div className='flex flex-col relative flex gap-3 p-4 border  border-blue-500 bg-bg2 rounded-xl '>
            I'll explain binary search and provide a clear Python implementation to help you understand how it works.<br />
            Binary search is an efficient algorithm for finding a specific item in a sorted list. It works by repeatedly dividing the search interval in half, which makes it much faster than searching through every element one by one.<br />
            Here's how binary search works step by step:<br />
            <span className='flex gap-2'>
              <b>Prerequisite:</b>
              The list must be sorted in ascending order.
            </span>
            <b>Basic Algorithm:</b>

            <ul className='flex flex-col gap-1 list-disc pl-[36px]'>
              <li>Start with the entire list</li>
              <li>Find the middle element</li>
              <li>Compare the target value with the middle element</li>
              <li>If the target is equal to the middle element, you've found it!</li>
              <li>If the target is less than the middle element, search the left half</li>
              <li>If the target is greater than the middle element, search the right half</li>
              <li>Repeat this process until the target is found or it's clear the target isn't in the list</li>

            </ul>

            Let me show you a Python implementation to make this concrete:
            <div className='flex flex-col bg-bg7 rounded-xl'>
              <span className='flex pt-2 pl-5 justify-between'>
                Python
                <span className='flex mr-3 p-1 text-sm items-baseline cursor-pointer transition-all duration-300 ease-in-out hover:bg-bg1 p-1 rounded-lg'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="white" viewBox="0 0 256 256"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg>
                  <span>Copy</span>
                </span>
              </span>
              <SyntaxHighlighter language='python' style={darcula}>
                {`def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        # Calculate the middle index
        mid = (left + right) // 2

        # Check if target is present at mid
        if arr[mid] == target:
            return mid  # Target found, return its index

        # If target is greater, ignore left half
        elif arr[mid] < target:
            left = mid + 1

        # If target is smaller, ignore right half
        else:
            right = mid - 1

    # Target was not found
    return -1

# Example usage
sorted_list = [2, 3, 4, 10, 40, 55, 89, 90]
target = 10

result = binary_search(sorted_list, target)
if result != -1:
    print(f"Element {target} is present at index {result}")
else:
    print(f"Element {target} is not in the list")`}
              </SyntaxHighlighter>

            </div>
            <b>Time Complexity:</b>
            <ul className='flex flex-col gap-1 list-disc pl-[36px]'>
              <li>Binary search is extremely efficient, with a time complexity of O(log n)</li>
              <li>This means the search time grows logarithmically with the list size</li>
              <li>For a list of 1,000,000 elements, it might take only about 20 comparisons to find an item!</li>

            </ul>
            <b>Comparison with Linear Search:</b>
            <ul className='flex flex-col gap-1 list-disc pl-[36px]'>
              <li>Linear search checks every element, taking O(n) time</li>
              <li>Binary search divides the search space in half each iteration, taking O(log n) time</li>
              <li>This makes binary search much faster for large sorted lists</li>

            </ul>
            <b>Key Requirements:</b>
            <ol className='flex flex-col gap-1 list-disc pl-[36px]'>
              <li>The list must be sorted before performing binary search</li>
              <li>Works best with random access data structures like arrays</li>
              <li>Less efficient for linked lists due to slower access to middle elements</li>

            </ol>
            <span>Would you like me to elaborate on any part of the explanation or show you some examples of how binary search works in practice?</span>
            <div className='flex items-baseline rounded-lg bg-bg4 p-1 gap-1 text-text2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 256 256" className="pt-1"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path></svg>
              <span>Claude does not have the ability to run the code it generates yet.</span>
            </div>
            <div className='flex absolute right-[-10px] bottom-[-10px] border border-blue-200 bg-bg2 p-1 rounded-lg text-xs'>

              <span className='flex items-baseline cursor-pointer transition-all duration-300 ease-in-out hover:bg-bg1 p-1 rounded-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="white" viewBox="0 0 256 256"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg>
                <span>Copy</span>
              </span>

              <span className='flex items-baseline cursor-pointer transition-all duration-300 ease-in-out hover:bg-bg1 p-1 rounded-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="white" viewBox="0 0 256 256"><path d="M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L44.59,96H72a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0V85.8L60.25,60A96,96,0,0,1,224,128Z"></path></svg>
                <span>Retry</span>
              </span>
              <span className='pt-[7px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-bg1 p-1 rounded-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="white" viewBox="0 0 256 256"><path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"></path></svg>

              </span>
              <span className='pt-[7px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-bg1 p-1 rounded-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="white" viewBox="0 0 256 256"><path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"></path></svg>

              </span>
            </div>
          </div>
          <div>

          </div>
          <div className='relative pb-5'>
            <img className='pt-10 animate-blink duration-1000' width={'35px'} src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/claude-color.png" alt="" />
            <span className='text-text1 text-sm absolute bottom-0 right-0 flex hover:underline cursor-pointer'>

              Claude can make mistakes. Please double-check responses.
            </span>
          </div>
        </div>

      </div>
      <div className={`z-10 fixed transition-all duration-500 ease-in-out -bottom-2 left-[25%]  bg-bg2 w-[50%] text-text2 rounded-xl ${stay ? 'ml-[140px]' : ''}`}>
        <span className='flex justify-between items-baseline p-5'>
          <textarea className='font-mono
bg-transparent resize-none focus:border-none focus:outline-none'
            rows={1}
            placeholder='Reply to Claude...'
          />
          <span className='flex gap-2'>
          <svg className='cursor-pointer transition-all duration-500 ease-in-out hover:scale-110 active:scale-100' xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 256 256"><path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"></path></svg>
          <svg className='cursor-pointer transition-all duration-500 ease-in-out hover:scale-110 active:scale-100' xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 256 256"><path d="M209.66,122.34a8,8,0,0,1,0,11.32l-82.05,82a56,56,0,0,1-79.2-79.21L147.67,35.73a40,40,0,1,1,56.61,56.55L105,193A24,24,0,1,1,71,159L154.3,74.38A8,8,0,1,1,165.7,85.6L82.39,170.31a8,8,0,1,0,11.27,11.36L192.93,81A24,24,0,1,0,159,47L59.76,147.68a40,40,0,1,0,56.53,56.62l82.06-82A8,8,0,0,1,209.66,122.34Z"></path></svg>
          </span>
        </span>
        <div className='flex items-center mb-2 items-baseline ml-2 text-sm pl-3'>
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
          {textOption &&
            <div className='transition-all duration-500 ease-in-out opacity-100 scale-100 flex gap-2 bg-bg4 p-3 absolute left-[-45px] top-[-170px]  w-[465px] shadow-2xl rounded-xl'>
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
      </div>
      <div className={`fixed flex transition-all duration-500 ease-in-out bottom-[84px] left-[25.7%] w-[48.7%] bg-bg8 rounded-lg pb-5 border border-blue-900 justify-between items-baseline p-2 ${stay?'ml-[138px]':''}`}>
        <span className='text-xs'>Subscribe to Pro for 5x more usage with <span className='hover:underline cursor-pointer'>Claude 3.5 Sonnet</span>.</span>
        <span className='flex items-baseline gap-3'>
          <span className='text-xs text-blue-200 hover:underline cursor-pointer'>Subscibe to Pro</span>
          <span className=' p-[1px] rounded hover:bg-indigo-700 cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="white" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
          </span>
        </span>
      </div>

    </div>
  )
}

export default MainChat
