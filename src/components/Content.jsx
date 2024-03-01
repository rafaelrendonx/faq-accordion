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
            <div className='px-5 pb-5'>
                <div className='flex flex-row items-center justify-between'>
                    <h4 className='font-bold leading-tight pr-4'>{title}</h4>
                    {isActive ?
                        <img src={iconMinus} alt="minus icon" onClick={setAccordion} /> :
                        <img src={iconPlus} alt="plus icon" onClick={setAccordion} />}
                </div>
                {isActive ? <p className='text-sm text-custom-greyish-purple pt-5 leading-normal'>{text}</p> : ''}
            </div>
            <div className='pb-4 px-5 last:hidden'>
                <hr className='border-custom-greyish-purple-2 border' />
            </div>
        </>
    )
}
