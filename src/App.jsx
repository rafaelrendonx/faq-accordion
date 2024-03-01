import { Content } from './components'

import { data } from './data'

import bgMobile from '../assets/images/background-pattern-mobile.svg'
import iconStar from '../assets/images/icon-star.svg'

function App() {




  return (
    <div className='static'>
      <div className='w-275 h-[14.5rem]'>
        <img src={bgMobile} alt="mobile image" className='h-full w-full object-cover' />
      </div>
      <div className="bg-custom-light-pink h-[36rem]">
      </div>

      <div className='absolute top-[7.65rem] bg-custom-white m-5 rounded-lg'>
        
        <div className='container rounded-b-lg font-work-sans last:pb-2'>
          
          <div className='flex flex-row items-center justify-start p-5'>
            <img src={iconStar} alt="icon star image" className='size-6' />
            <h1 className='text-custom-dark-purple text-[2rem] font-bold pl-6'>FAQs</h1>
          </div>

          <div className=''>
            {
              data.map(data => (
                <>
                  <Content key={data.id} title={data.title} text={data.text} />
                </>
              ))
            }
          </div>

        </div>
      </div>

    </div>
  )
}

export default App
