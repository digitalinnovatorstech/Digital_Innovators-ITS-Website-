import { useEffect, useState } from 'react';

import Briiliantidea from './briiliantidea';
import MobileBrilliantIdea from './mobilebrilliant';

const ResponsiveBrilliantIdea = () => {
    const [ isMobile, setIsMobile ] = useState(false);

    useEffect(() => {
        // Check if window exists (client-side)
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setIsMobile(window.innerWidth < 768);
            };

            // Set initial value
            handleResize();

            // Add event listener
            window.addEventListener('resize', handleResize);

            // Clean up
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return isMobile ? <MobileBrilliantIdea /> : <Briiliantidea />;
};

export default ResponsiveBrilliantIdea;