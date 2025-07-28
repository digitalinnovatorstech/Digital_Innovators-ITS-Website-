import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const TechnologiesWeUse = () => {
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
            ? allTechBubbles.slice(0, 40)
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

        const bubbleSize = 100;
        const minDistance = bubbleSize * 1.5;
        const centerCircleRadius = 200;

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

        // Calculate final positions for each bubble
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

        // Initial setup - hide bubbles at the top
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
            start: "top bottom-=100", // Trigger when top of container is 100px from bottom of viewport
            end: "bottom top+=100",   // End when bottom of container is 100px from top of viewport
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
                                    y: (finalPosition.y - containerHeight / 2) + (Math.random() * 30 - 15),
                                    duration: 1 + Math.random() * 1,
                                    repeat: -1,
                                    yoyo: true,
                                    ease: "power1.inOut",
                                });

                                // Gentle rotation
                                gsap.to(bubble, {
                                    rotation: Math.random() * 8 - 4,
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
            onEnterBack: () => {
                // When scrolling back up to component
                // Optional: You can add animations here if needed
            },
            onLeaveBack: () => {
                // When scrolling above the component
                // Reset animation state so it can play again when re-entering
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
            },
            onLeave: () => {
                // When scrolling below the component
                // Optional: You can add animations here if needed
            }
        });

        const handleResize = () => {
            if (!containerRef.current) return;

            // Recalculate positions and restart animations on resize
            const containerWidth = container.offsetWidth;
            const containerHeight = container.offsetHeight;
            bubblesPositions.current = [];

            // Kill ongoing animations
            gsap.killTweensOf('.tech-bubble');

            bubbles.forEach((bubble, index) => {
                let x, y;
                let attempts = 0;
                const maxAttempts = 30;

                const isTooCloseResize = (x, y) => {
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

                do {
                    const padding = bubbleSize;
                    x = padding + Math.random() * (containerWidth - 2 * padding);
                    y = padding + Math.random() * (containerHeight - 2 * padding);
                    attempts++;
                    if (attempts >= maxAttempts) break;
                } while (isTooCloseResize(x, y));

                bubblesPositions.current.push({ x, y });

                if (animationInitialized.current) {
                    // If animation already played, place in final position with animations
                    gsap.set(bubble, {
                        x: x - containerWidth / 2,
                        y: y - containerHeight / 2,
                        opacity: 1
                    });

                    gsap.to(bubble, {
                        y: (y - containerHeight / 2) + (Math.random() * 30 - 15),
                        duration: 0.5 + Math.random() * 0.5,
                        repeat: -1,
                        yoyo: true,
                        ease: "power1.inOut",
                        delay: Math.random() * 0.5,
                    });

                    gsap.to(bubble, {
                        rotation: Math.random() * 8 - 4,
                        duration: 2 + Math.random() * 1,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                        delay: Math.random(),
                    });
                } else {
                    // If animation hasn't played yet, position at top
                    gsap.set(bubble, {
                        x: x - containerWidth / 2,
                        y: -containerHeight,
                        scale: 0.8 + Math.random() * 0.4,
                        opacity: 1,
                        rotation: Math.random() * 10 - 5
                    });
                }
            });

            // Refresh ScrollTrigger
            ScrollTrigger.refresh();
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
                        className="tech-bubble absolute w-32 h-32 bg-white rounded-full shadow-md flex items-center justify-center"
                        style={{
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 5
                        }}
                    >
                        <div className="relative w-20 h-20">
                            <Image
                                src={bubble.src}
                                alt={bubble.alt}
                                fill
                                sizes="80px"
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="z-20 relative bg-primary rounded-full w-80 h-80 flex items-center justify-center text-center shadow-lg">
                <div className="text-white space-y-4">
                    <h2 className="text-5xl font">Technologies</h2>
                    <h3 className="text-5xl font">We use</h3>
                </div>
            </div>
        </div>
    );
};

export default TechnologiesWeUse;