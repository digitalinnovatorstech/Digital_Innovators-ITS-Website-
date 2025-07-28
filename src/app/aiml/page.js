import React from 'react'
import HerosectionAiml from './components/herosection'
import AIMLServices from './components/services'
import Aidevelopement from './components/aidevelopement'
import Aisolutions from './components/aisolutions'
import Howwework from './components/howwework'
import Section4 from './components/secction4'
import Whychooseus from './components/whychooseus'
import AiRobotImage from './components/robot'
import TechnologyStack from '@/components/common/technologystack'
import StayUpdates from '@/components/common/stayupdates'


const AiMlPage = () => {
    return (
        <div><HerosectionAiml />
            <AIMLServices />
            <Aidevelopement />
            <Aisolutions />
            <Howwework />
            <Section4 />
            <Whychooseus />
            <AiRobotImage />
            <div className='container mx-auto'>
                <TechnologyStack />
            </div>
            <StayUpdates />
        </div>
    )
}

export default AiMlPage