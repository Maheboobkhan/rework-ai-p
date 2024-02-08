import React from 'react'
import telegram from '../../../assets/telegram.png'
import facebook from '../../../assets/facebook.png'
import whatsapp from '../../../assets/whatsapp.png'
import x from '../../../assets/x.png'
import instagram from '../../../assets/instagram.png'

const SocialMedia = () => {
    return (
        <>
            <div className="mt-9 text-lg font-bold leading-7 text-white px-2">Follow us</div>
            <div className="flex gap-1.5 px-2">
                <img
                    loading="lazy"
                    srcSet={telegram}
                    className="w-7 aspect-square"
                />
                <img
                    loading="lazy"
                    srcSet={whatsapp}
                    className="w-7 aspect-square"
                />
                <img
                    loading="lazy"
                    srcSet={x}
                    className="aspect-[1.03] w-[29px]"
                />
                <img
                    loading="lazy"
                    srcSet={facebook}
                    className="w-7 aspect-square"
                />
                <img
                    loading="lazy"
                    srcSet={instagram}
                    className="w-7 aspect-square"
                />
            </div>
        </>
    )
}

export default SocialMedia