import Image from 'next/image'
import React from 'react'
import AIdev from "../../../../public/assets/home/aiml/internal/aiimage.svg"

const Aidevelopement = () => {
    return (
        <div className="w-full">
            <Image
                src={AIdev}
                alt="AI Development"
                layout="responsive"


            />
        </div>
    )
}

export default Aidevelopement
