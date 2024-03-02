import { useState } from "react"

import iconMinus from '../../assets/images/icon-minus.svg'
import iconPlus from '../../assets/images/icon-plus.svg'

export const Content = ({ title, text }) => {


    const [isActive, setIsActive] = useState(false)

    const setAccordion = () => {
        setIsActive(!isActive)
    }

    return (
        <>
            <div className='px-5 pb-5 desktop:pl-10 desktop:pt-6 desktop:pr-1'>
                <div className='flex flex-row items-center justify-between desktop:justify-self-stretch desktop:pr-0'>
                    <h4 className='font-bold leading-tight pr-4 hover:text-purple-600 desktop:text-[1.12rem] desktop:pr-6'>{title}</h4>
                    {isActive ?
                        <img src={iconMinus} alt="minus icon" onClick={setAccordion} className="desktop:pr-[2.25rem]"/> :
                        <img src={iconPlus} alt="plus icon" onClick={setAccordion} className="desktop:pr-[2.15rem] desktop:pl-[0.5rem]"/>}
                </div>
                {isActive ? <p className='text-sm desktop:text-base text-custom-greyish-purple pt-5 leading-normal desktop:pr-8 desktop:pt-0'>{text}</p> : ''}
            </div>
            <div className='pb-4 px-5 desktop:px-8 desktop:pb-1 last:hidden'>
                <hr className='border-custom-greyish-purple-2 border' />
            </div>
        </>
    )
}
