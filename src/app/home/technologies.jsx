"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import '../home/styles/tech.css';

const TechnologiesWeUse = () => {
    const [ activeCategory, setActiveCategory ] = useState('all');
    const containerRef = useRef(null);
    const bubblesPositions = useRef([]);
    const [ isVisible, setIsVisible ] = useState(false);
    const [ hasAnimated, setHasAnimated ] = useState(false);
    const [ containerSize, setContainerSize ] = useState({ width: 0, height: 0 });

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
            ? allTechBubbles.slice(0, 33) // Reduced number to avoid overcrowding
            : allTechBubbles.filter(bubble => bubble.category === activeCategory);

    // Calculate non-overlapping positions for bubbles
    const calculateBubblePositions = () => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const centerCircleRadius = 200; // Size of center circle

        setContainerSize({ width: containerWidth, height: containerHeight });
        bubblesPositions.current = [];

        // Create a quadtree-like structure for more efficient collision detection
        const occupiedSpaces = [];

        // Function to check if a position with a given size would overlap
        const wouldOverlap = (x, y, size) => {
            // Check if too close to center circle
            const distanceToCenter = Math.sqrt(
                Math.pow(x - containerWidth / 2, 2) +
                Math.pow(y - containerHeight / 2, 2)
            );

            if (distanceToCenter < centerCircleRadius + size / 2) {
                return true;
            }

            // Check if too close to container edges
            if (x - size / 2 < 0 || x + size / 2 > containerWidth ||
                y - size / 2 < 0 || y + size / 2 > containerHeight) {
                return true;
            }

            // Check if too close to other bubbles
            for (const space of occupiedSpaces) {
                const distance = Math.sqrt(
                    Math.pow(x - space.x, 2) +
                    Math.pow(y - space.y, 2)
                );
                if (distance < (size / 2 + space.size / 2)) {
                    return true;
                }
            }

            return false;
        };

        // Place bubbles with adaptive sizing
        visibleBubbles.forEach((bubble, index) => {
            // Start with preferred size and reduce if needed
            let size = 128; // Default size (w-32 = 8rem = 128px)
            let x, y;
            let placed = false;

            // Try different sizes if needed
            const sizeTiers = [ 128, 112, 96, 80, 64 ]; // Different size options

            for (const currentSize of sizeTiers) {
                size = currentSize;
                let attempts = 0;
                const maxAttempts = 50;

                while (attempts < maxAttempts && !placed) {
                    attempts++;

                    // Generate random position
                    x = size / 2 + Math.random() * (containerWidth - size);
                    y = size / 2 + Math.random() * (containerHeight - size);

                    // Check if this position works
                    if (!wouldOverlap(x, y, size)) {
                        occupiedSpaces.push({ x, y, size });
                        bubblesPositions.current.push({
                            x,
                            y,
                            size,
                            scale: size / 128 // Scale factor based on original size
                        });
                        placed = true;
                        break;
                    }
                }

                if (placed) break;
            }

            // If still not placed after trying all sizes, force placement
            if (!placed) {
                size = 64; // Minimum size
                x = size / 2 + Math.random() * (containerWidth - size);
                y = size / 2 + Math.random() * (containerHeight - size);

                occupiedSpaces.push({ x, y, size });
                bubblesPositions.current.push({
                    x,
                    y,
                    size,
                    scale: size / 128
                });
            }
        });
    };

    // Set up intersection observer to detect when component is visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[ 0 ].isIntersecting) {
                    setIsVisible(true);
                    if (!hasAnimated) {
                        calculateBubblePositions();
                        setHasAnimated(true);
                    }
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [ hasAnimated ]);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            calculateBubblePositions();
            // Force re-render to apply new positions
            setHasAnimated(false);
            setIsVisible(false);
            setTimeout(() => {
                setIsVisible(true);
                setHasAnimated(true);
            }, 100);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [ visibleBubbles ]);

    // Generate animation properties for each bubble
    const getBubbleStyle = (index) => {
        if (!bubblesPositions.current[ index ]) return {};

        const position = bubblesPositions.current[ index ];
        const bubbleScale = position.scale || 1;
        const rotation = Math.random() * 10 - 5;
        const animationDelay = index * 0.1; // Staggered delay
        const bounceHeight = 30 + Math.random() * 20; // Random bounce height

        return {
            '--x': `${position.x - containerSize.width / 2}px`,
            '--y': `${position.y - containerSize.height / 2}px`,
            '--scale': bubbleScale,
            '--rotation': `${rotation}deg`,
            '--animation-delay': `${animationDelay}s`,
            '--float-duration': `${1.5 + Math.random()}s`,
            '--float-distance': `${Math.random() * 15 - 7.5}px`,
            '--rotation-duration': `${2 + Math.random() * 2}s`,
            '--rotation-amount': `${Math.random() * 8 - 4}deg`,
            '--bounce-height': `${bounceHeight}px`,
            width: `${position.size}px`,
            height: `${position.size}px`,
        };
    };

    // Get inner content size based on bubble size
    const getInnerSize = (index) => {
        if (!bubblesPositions.current[ index ]) return { width: '5rem', height: '5rem' };
        const position = bubblesPositions.current[ index ];
        const innerSize = position.size * 0.625; // 5/8 ratio for inner content
        return { width: `${innerSize}px`, height: `${innerSize}px` };
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full min-h-screen bg-white overflow-hidden flex items-center justify-center"
        >
            <div className="absolute inset-0 w-full h-full">
                {visibleBubbles.map((bubble, index) => (
                    <div
                        key={bubble.id}
                        className={`tech-bubble absolute bg-white rounded-full shadow-md flex items-center justify-center ${isVisible ? 'animate-fall' : ''}`}
                        style={getBubbleStyle(index)}
                    >
                        <div className="relative" style={getInnerSize(index)}>
                            <Image
                                src={bubble.src}
                                alt={bubble.alt}
                                fill
                                sizes="(max-width: 768px) 3rem, 5rem"
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="z-20 relative bg-primary rounded-full w-80 h-80 flex items-center justify-center text-center shadow-lg">
                <div className="text-white space-y-4">
                    <h2 className="text-5xl font">Technologies </h2>
                    <h3 className="text-5xl font">We use</h3>
                </div>
            </div>
        </div>
    );
};

export default TechnologiesWeUse;
