'use client'

import { ScrollableHtmlBox } from "../components";
import { useState, useEffect } from 'react';



export default function Hobbies() {
    const [count, setCount] = useState(3); // Start countdown at 3
    const [isReady, setIsReady] = useState(false);

    // A recursion countdown function 
    useEffect(() => {
        // base case
        if (count === 0) {
        setIsReady(true);
        return;
        }

        const timer = setTimeout(() => {
        setCount(count - 1);
        }, 1000); // Decrease count every second

        return () => clearTimeout(timer);
    }, [count]); // Setting an array at the end of useEffect determines how long it runs
    // This is important because otherwise useEffect would keep activating every time the page renders
    return (
        <main>
            {/* Display countdown, after the : display actual content */}
            {!isReady ? ( <h1>Welcome to my hobbies... {count} </h1>
            ) : (
            <section className = "max-w-sm mx-auto">
                <div className = "max-w-sm mx-auto">
                    <ScrollableHtmlBox filePath={"/poems.html"}/>
                </div>
            </section>
            )}
        </main>
    );
}