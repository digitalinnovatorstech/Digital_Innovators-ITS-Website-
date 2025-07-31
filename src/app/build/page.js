import React from 'react'

import BuildHerosection from './components/herosection'
import TextSection from './components/section2'
import Buildwtweserve from './components/buildwtweserve'
import Impact from './components/impact'
import WhatWeServe from './components/vision'



const Buildpage = () => {
    return (
        <div><BuildHerosection />
            <TextSection />
            <Buildwtweserve />

            <WhatWeServe /> <Impact /></div>
    )
}

export default Buildpage