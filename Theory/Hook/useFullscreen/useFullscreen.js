import { elementType } from "prop-types";
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

// img와 같은 요소를 screen 크기에 맞춰 조절하는 Hook
const useFullscreen = (callback) => {
    const element = useRef();
    const triggerFull = () => {
        if(element.current) {
            element.current.requestFullScreen();
            if(callback && typeof onFullS === "function") {
                callback(true);
            }
        }
    };
    const exitFull = () => {
        document.exitFullscreen();
        if(callback && typeof onFullS === "function") {
            callback(false);
        }
    };
    return { element, triggerFull, exitFull };
}

const App = () => {
    const onFullS = isFull => {
        console.log(isFull ? "we are full" : "we are small");
    }
    const { element, triggerFull, exitFull } = useFullscreen();
    return (
        <div className = "App">
            <div ref= {element}>
                <img
                    ref={fullScrEl}
                    src = ""/>
                <button onClick = {triggerFull}>Make fullscreen</button>
            </div>
            <button onClick = {exitFull}>Exit fullscreen</button>
        </div>
    )
}