import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

// 마우스 포인터가 화면을 벗어났을 때, 이벤트가 발생하는 Hook
const useBeforeLeave = (onBefore) => {
    if(typeof onBefore !== "function") {
        return;
    }
    const handle = event => {
        const { clientY } = event;
        if(clientY <= 0) onBefore();
    };
    useEffect(() => {
        document.addEventListener("mouseleave", handle);        // 마우스 포인터가 벗어날 때 일어날 event를 doc에 등록
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
}

const App = () => {
    const begForLife = () => console.log("Pls dont leave");
    useBeforeLeave(begForLife);
    return (
        <div className = "App">
            <h1>hello</h1>
        </div>
    );
};


// From Nomad Coder