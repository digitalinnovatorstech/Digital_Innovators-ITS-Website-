import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const MobileTechnologiesWeUse = () => {
    const [ activeCategory, setActiveCategory ] = useState('all');
    const containerRef = useRef(null);
    const bubblesPositions = useRef([]);
    const animationInitialized = useRef(false);
    const CATEGORIES = [ 'all', 'design', 'frontend', 'backend', 'database', 'cloud' ];
    const ICONS_COUNT = {
        design: 8,
        frontend: 8,
        backend: 8,
        database: 5,
        cloud: 4,
    };

    const generateTechBubbles = () => {
        const bubbles = [];
        CATEGORIES.forEach(category => {
            if (category !== 'all') {
                const count = ICONS_COUNT[ category ];
                for (let i = 1; i <= count; i++) {
                    bubbles.push({
                        id: `${category}-${i}`,
                        category: category,
                        src: `/assets/technologystack/${category}/stack_${i}.svg`,
                        alt: `${category} Technology ${i}`,
                    });
                }
            }
        });
        return bubbles;
    };

    const allTechBubbles = generateTechBubbles();

    const visibleBubbles =
        activeCategory === 'all'
            ? allTechBubbles.slice(0, 25) // Reduced for mobile
            : allTechBubbles.filter(bubble => bubble.category === activeCategory);

    useEffect(() => {
        // Register ScrollTrigger plugin
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        if (!containerRef.current) return;

        const container = containerRef.current;
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const bubbles = document.querySelectorAll('.tech-bubble');

        // Smaller bubbles for mobile
        const bubbleSize = 60;
        const minDistance = bubbleSize * 1.2;
        const centerCircleRadius = containerWidth * 0.35; // Center circle takes 70% of width

        bubblesPositions.current = [];

        const isTooClose = (x, y) => {
            const distanceToCenter = Math.sqrt(
                Math.pow(x - containerWidth / 2, 2) +
                Math.pow(y - containerHeight / 2, 2)
            );

            if (distanceToCenter < centerCircleRadius) {
                return true;
            }

            for (let pos of bubblesPositions.current) {
                const distance = Math.sqrt(Math.pow(x - pos.x, 2) + Math.pow(y - pos.y, 2));
                if (distance < minDistance) {
                    return true;
                }
            }
            return false;
        };

        // Calculate positions for bubbles
        bubbles.forEach((bubble) => {
            let x, y;
            let attempts = 0;
            const maxAttempts = 50;

            do {
                const padding = bubbleSize;
                x = padding + Math.random() * (containerWidth - 2 * padding);
                y = padding + Math.random() * (containerHeight - 2 * padding);
                attempts++;
                if (attempts >= maxAttempts) break;
            } while (isTooClose(x, y));

            bubblesPositions.current.push({ x, y });
        });

        // Initial setup - position bubbles
        bubbles.forEach((bubble, index) => {
            const finalPosition = bubblesPositions.current[ index ];
            if (!finalPosition) return;

            gsap.set(bubble, {
                x: finalPosition.x - containerWidth / 2,
                y: -containerHeight, // Start position above the container
                scale: 0.8 + Math.random() * 0.4,
                opacity: 1,
                rotation: Math.random() * 10 - 5
            });
        });

        // Create a ScrollTrigger for the component
        const scrollTrigger = ScrollTrigger.create({
            trigger: container,
            start: "top bottom-=50", // Trigger earlier on mobile
            end: "bottom top+=50",
            onEnter: () => {
                // When component enters viewport - animate bubbles falling
                if (!animationInitialized.current) {
                    animationInitialized.current = true;

                    bubbles.forEach((bubble, index) => {
                        const finalPosition = bubblesPositions.current[ index ];
                        if (!finalPosition) return;

                        // Kill any existing animations
                        gsap.killTweensOf(bubble);

                        // Animate to final position with bounce
                        gsap.to(bubble, {
                            x: finalPosition.x - containerWidth / 2,
                            y: finalPosition.y - containerHeight / 2,
                            duration: 1 + Math.random() * 0.5,
                            delay: 0.05 * index,
                            ease: "bounce.out",
                            onComplete: () => {
                                // Gentle floating animation
                                gsap.to(bubble, {
                                    y: (finalPosition.y - containerHeight / 2) + (Math.random() * 15 - 7), // Smaller movement for mobile
                                    duration: 1 + Math.random() * 1,
                                    repeat: -1,
                                    yoyo: true,
                                    ease: "power1.inOut",
                                });

                                // Gentle rotation
                                gsap.to(bubble, {
                                    rotation: Math.random() * 6 - 3, // Smaller rotation
                                    duration: 2 + Math.random() * 1,
                                    repeat: -1,
                                    yoyo: true,
                                    ease: "sine.inOut",
                                });
                            }
                        });
                    });
                }
            },
            onLeaveBack: () => {
                // Reset animation state when scrolling above
                animationInitialized.current = false;

                bubbles.forEach((bubble, index) => {
                    const finalPosition = bubblesPositions.current[ index ];
                    if (!finalPosition) return;

                    // Kill any ongoing animations
                    gsap.killTweensOf(bubble);

                    // Reset to top position for next entrance
                    gsap.set(bubble, {
                        x: finalPosition.x - containerWidth / 2,
                        y: -containerHeight,
                        scale: 0.8 + Math.random() * 0.4,
                        opacity: 1,
                        rotation: Math.random() * 10 - 5
                    });
                });
            }
        });

        // Handle resize
        const handleResize = () => {
            if (!containerRef.current) return;
            ScrollTrigger.refresh();

            // Mobile optimization - just refresh positions instead of full recalculation
            if (window.innerWidth < 768) {
                ScrollTrigger.refresh();
                return;
            }

            // For larger screens, recalculate everything
            // Similar to original code...
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            scrollTrigger.kill();
            gsap.killTweensOf('.tech-bubble');
        };
    }, [ visibleBubbles ]);

    return (
        <div
            ref={containerRef}
            className="relative w-full min-h-screen bg-white overflow-hidden flex items-center justify-center"
        >
            <div className="absolute inset-0 w-full h-full">
                {visibleBubbles.map((bubble, index) => (
                    <div
                        key={bubble.id}
                        className="tech-bubble absolute w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center"
                        style={{
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 5
                        }}
                    >
                        <div className="relative w-10 h-10">
                            <Image
                                src={bubble.src}
                                alt={bubble.alt}
                                fill
                                sizes="40px"
                                style={{ objectFit: "contain" }}
                                priority={index < 10} // Only prioritize first 10 bubbles
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="z-20 relative bg-primary rounded-full w-60 h-60 flex items-center justify-center text-center shadow-lg">
                <div className="text-white space-y-2">
                    <h2 className="text-3xl font">Technologies</h2>
                    <h3 className="text-3xl font">We use</h3>
                </div>
            </div>
        </div>
    );
};

export default MobileTechnologiesWeUse;