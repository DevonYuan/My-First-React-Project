import { useState } from 'react';
export default function Playground() {
    // We useState() to represent a point inside the box
    // The point's "walls" are limits set by the box 
    // Let's set the width of the wall to 100
    const [x, setX] = useState(100);
    const [y, setY] = useState(100);
    const bound = 100; 

    // Handle the keyPress 
    // We let x and y be the coordinates relative to the top of the box (200 x 200)
    // However I want to display cartesian coordinates with x and y at the center 
    function handleKeyPress(event) {
        let newX = x;
        let newY = y;
        if (event.key == "w") {
            if (0 < y && y <= 2 * bound) {
                newY -= 1;
            }
        } else if (event.key == "a") {
            if (0 < x && x <= 2 * bound) {
                newX -= 1;
            }
        } else if (event.key == "s") {
            if (0 <= y && y < 2 * bound) {
                newY += 1;
            }
        } else if (event.key == "d") {
            if (0 <= x && x < 2 * bound) {
                newX += 1;
            }
        }
        setX(newX);
        setY(newY);
    }

    // Return the final result 
    return (
        <div className = "box" tabIndex={0} onKeyDown={(event) => handleKeyPress(event)}>
            <p className = "coordinates-display">Coordinates: ({x - 100}, {100 - y})</p>
            <div className = "sandbox">
                <div className = "point" style = {{left: x, top: y}}>+</div>
            </div>
        </div>
    );
}
