"use client";

import { useState, useEffect } from 'react';
// import TechnologiesWeUse from './TechnologiesWeUse'; // Your existing component
// import MobileTechnologiesWeUse from './MobileTechnologiesWeUse'; // Your mobile component
import MobileTechnologies from '../technologies/mobiledevices';
import TechnologiesWeUse from './technologies';
import MobileTechnologiesWeUse from './mobiletechnologies';

const TechnologiesWrapper = () => {
    // Default to null to avoid hydration mismatch
    const [ isMobile, setIsMobile ] = useState(null);

    useEffect(() => {
        // Set initial state based on window width
        setIsMobile(window.innerWidth < 768);

        // Add resize listener
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        // Clean up
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Return null during SSR to prevent hydration mismatch
    if (isMobile === null) {
        return null;
    }

    // Return the appropriate component based on screen size
    return isMobile ? <MobileTechnologiesWeUse /> : <TechnologiesWeUse />;
};

export default TechnologiesWrapper;