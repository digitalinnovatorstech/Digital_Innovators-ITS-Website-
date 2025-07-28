"use client";
import React, { useState, useEffect, useRef } from "react";
import Background from "../../../../public/assets/design/herobg.svg";
import Designimg from "../../../../public/assets/design/designbg.svg";
import Image from "next/image";
import Icon1 from "../../../../public/assets/design/icon1.svg";
import Icon2 from "../../../../public/assets/design/icon2.svg";
import Icon3 from "../../../../public/assets/design/icon3.svg";
import Icon4 from "../../../../public/assets/design/icon4.svg";
import Icon5 from "../../../../public/assets/design/icon5.svg";
import Icon6 from "../../../../public/assets/design/icon6.svg";
import Icon7 from "../../../../public/assets/design/icon7.svg";
import "../components/styles/herosection.css";

const Herosection = () => {
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ activeIcon, setActiveIcon ] = useState(null);
    const iconRefs = useRef([]);

    // Add refs for each icon
    const addToRefs = (el) => {
        if (el && !iconRefs.current.includes(el)) {
            iconRefs.current.push(el);
        }
    };

    useEffect(() => {
        // Simulate MacBook opening animation on component mount
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    // Handle icon click to show popup
    const handleIconClick = (index) => {
        setActiveIcon(index);
    };

    // Handle closing popup with MacOS-like animation
    const handleClosePopup = () => {
        const popupElement = document.querySelector('.icon-popup');
        if (popupElement) {
            popupElement.classList.add('closing');
            setTimeout(() => {
                setActiveIcon(null);
            }, 300); // Match this with the CSS animation duration
        }
    };

    // Array of icon data
    const icons = [
        { src: Icon1, alt: "Figma", name: "Figma", description: "Collaborative interface design tool" },
        { src: Icon2, alt: "Sketch", name: "Sketch", description: "Digital design for Mac" },
        { src: Icon3, alt: "Adobe XD", name: "Adobe XD", description: "UI/UX design and prototyping" },
        { src: Icon4, alt: "Adobe Illustrator", name: "Illustrator", description: "Vector graphics editor" },
        { src: Icon5, alt: "Adobe Photoshop", name: "Photoshop", description: "Image editing software" },
        { src: Icon6, alt: "Adobe Premiere Pro", name: "Premiere Pro", description: "Video editing software" },
        { src: Icon7, alt: "Delete", name: "Delete", description: "Remove unwanted elements" },
    ];

    return (
        <div
            className={`w-full container my-10 rounded-xl min-h-screen bg-white flex flex-col items-center justify-center bg-center macbook-screen ${isLoaded ? 'opened' : ''}`}
            style={{
                backgroundImage: `url(${Background.src})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
            }}
        >
            {/* Content */}
            <div className={`text-center content-container ${isLoaded ? 'fade-in' : ''}`}>
                {/* Container with design background */}
                <div
                    className="relative bg-center bg-no-repeat bg-contain design-container"
                    style={{
                        backgroundImage: `url(${Designimg.src})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    {/* Main Heading */}
                    <div className="p-8 md:p-12">
                        <h1 className="text-4xl md:text-6xl font mb-6 main-heading">
                            Let's ignite your ideas and
                            <br />
                            make <span className="text-orange-500">magic happen!</span>
                        </h1>
                        {/* Subheading */}
                        <p className="text-xl md:text-2xl text-black font-medium mt-14 sub-heading">
                            Where your ideas thrive and creativity
                            <br />
                            knows no bounds.
                        </p>
                    </div>
                </div>

                {/* Design software icons */}
                <div className="flex justify-center items-center space-x-8 bg-gray-100 p-4 rounded-lg dock-container">
                    {icons.slice(0, 6).map((icon, index) => (
                        <div
                            key={index}
                            ref={addToRefs}
                            className="icon-wrapper"
                            onClick={() => handleIconClick(index)}
                        >
                            <div className="w-12 h-12 rounded overflow-hidden icon-container">
                                <Image src={icon.src} alt={icon.alt} width={48} height={48} className="icon-image" />
                            </div>
                        </div>
                    ))}
                    <div className="border-l h-12 mx-2"></div>
                    <div
                        className="w-12 h-12 rounded overflow-hidden flex items-center justify-center icon-wrapper"
                        onClick={() => handleIconClick(6)}
                    >
                        <Image src={Icon7} alt="Delete" width={32} height={32} className="icon-image" />
                    </div>
                </div>
            </div>

            {/* Icon popup (MacOS style window) */}
            {activeIcon !== null && (
                <div className="icon-popup">
                    <div className="popup-header">
                        <div className="window-controls">
                            <span className="close-btn" onClick={handleClosePopup}></span>
                            <span className="minimize-btn"></span>
                            <span className="maximize-btn"></span>
                        </div>
                        <div className="popup-title">{icons[ activeIcon ].name}</div>
                    </div>
                    <div className="popup-content">
                        <div className="popup-icon">
                            <Image
                                src={icons[ activeIcon ].src}
                                alt={icons[ activeIcon ].alt}
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className="popup-description">
                            <h3>{icons[ activeIcon ].name}</h3>
                            <p>{icons[ activeIcon ].description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Herosection;
