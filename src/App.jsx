import { Content } from './components'

import { data } from './data'

import bgMobile from '../assets/images/background-pattern-mobile.svg'
import bgDesktop from '../assets/images/background-pattern-desktop.svg'
import iconStar from '../assets/images/icon-star.svg'

function App() {




  return (
    <div className='static'>
      <div className='w-275 h-[14.5rem] desktop:h-80'>
        <img
          srcSet={`${bgMobile} 375w, ${bgDesktop} 1440w`}
          src={bgMobile}
          alt="Image"
          className='h-full w-full object-cover'
        />
      </div>
      <div className="bg-custom-light-pink h-[55rem] desktop:h-[42rem]">
      </div>

      <div className='absolute top-[7.65rem] desktop:top-36 desktop:rounded-[1.25rem] desktop:ml-[26.3rem] desktop:mr-[25.1rem] desktop:p-[0.05rem] bg-custom-white m-5 rounded-lg'>

        <div className='font-work-sans last:pb-2'>

          <div className='flex flex-row items-center justify-start p-5 desktop:pl-10 desktop:pt-7 desktop:pb-0'>
            <img src={iconStar} alt="icon star image" className='size-6 desktop:size-10' />
            <h1 className='text-custom-dark-purple text-[2rem] desktop:text-[3.5rem] font-bold pl-6'>FAQs</h1>
          </div>

          <>
            {
              data.map(data => (
                <>
                  <Content key={data.id} title={data.title} text={data.text} />
                </>
              ))
            }
          </>

        </div>
      </div>

    </div>
  )
}

export default App
