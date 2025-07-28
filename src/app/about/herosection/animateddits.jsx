import React, { useEffect, useRef } from "react";

export default function AnimatedLineDots() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const dots = [];

        // Increase canvas width and height to prevent line cutting
        canvas.width = 500;
        canvas.height = 3000;

        // Colors for the dots
        const dotColors = [ "#BDBDBD", "#FF9C41", "#00A99D", "#333333" ];

        // Starting Y position at the bottom (ensure it's at the very bottom)
        const startY = canvas.height;
        const lineCount = 4;
        const horizontalGap = 80;

        // Create the curved lines with equal spacing and touching the corner
        const lines = [];
        for (let i = 0; i < lineCount; i++) {
            // Start points are more spread out horizontally
            const startX = 40 + (i * horizontalGap);

            // End points - make the top line touch the edge of the screen
            let endX, endY;

            if (i === 0) {
                // For the top line, make it touch the right edge at the top
                endX = canvas.width; // Right edge
                endY = 0; // Top edge
            } else {
                // For other lines, maintain the original pattern
                endX = 400 + (i * 30);
                endY = 200 + (i * 200);
            }

            // More dramatic curve by adjusting control points
            const controlX = startX - 200 + (i * 60);
            const controlY = endY + 400 - (i * 40);

            lines.push({
                startX: startX,
                startY: startY,
                endX: endX,
                endY: endY,
                controlX: controlX,
                controlY: controlY
            });
        }

        // Position dots on the curves - adjust for better visibility with 4 lines
        const dotPositions = [
            { lineIndex: 0, position: 0.12 }, // Top dot
            { lineIndex: 1, position: 0.45 }, // Upper middle dot
            { lineIndex: 2, position: 0.32 }, // Lower middle dot
            { lineIndex: 3, position: 0.70 }  // Bottom dot
        ];

        // Create dots at specific positions on the curves
        dotPositions.forEach((dotPos, i) => {
            dots.push({
                lineIndex: dotPos.lineIndex,
                position: dotPos.position,
                speed: 0.0005 + Math.random() * 0.0003, // Slower movement
                color: dotColors[ i % dotColors.length ],
                size: 30, // Bigger dots to match your design
                direction: Math.random() > 0.5 ? 1 : -1
            });
        });

        // Function to get point at position t on a quadratic curve
        function getQuadraticPoint(startX, startY, controlX, controlY, endX, endY, t) {
            const x = Math.pow(1 - t, 2) * startX + 2 * (1 - t) * t * controlX + Math.pow(t, 2) * endX;
            const y = Math.pow(1 - t, 2) * startY + 2 * (1 - t) * t * controlY + Math.pow(t, 2) * endY;
            return { x, y };
        }

        function drawCurve(line) {
            ctx.beginPath();
            ctx.moveTo(line.startX, line.startY);
            ctx.quadraticCurveTo(
                line.controlX, line.controlY,
                line.endX, line.endY
            );
            ctx.strokeStyle = "#DDDDDD";
            ctx.lineWidth = 3;
            ctx.stroke();
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw all the curves
            lines.forEach(line => {
                drawCurve(line);
            });

            // Draw and update the dots
            dots.forEach(dot => {
                const line = lines[ dot.lineIndex ];

                const point = getQuadraticPoint(
                    line.startX, line.startY,
                    line.controlX, line.controlY,
                    line.endX, line.endY,
                    dot.position
                );

                ctx.beginPath();
                ctx.arc(point.x, point.y, dot.size, 0, Math.PI * 2);
                ctx.fillStyle = dot.color;
                ctx.fill();

                dot.position += dot.speed * dot.direction;

                if (dot.position > 0.95 || dot.position < 0.05) {
                    dot.direction *= -1;
                }
            });

            requestAnimationFrame(animate);
        }

        animate();

        return () => {
            // Cleanup if needed
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="h-full w-auto"
            style={{ background: "transparent" }}
        />
    );
}
