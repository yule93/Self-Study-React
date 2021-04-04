import { elementType } from "prop-types";
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

// 브라우저에 알람을 띄워주는 Hook. js method를 이용하기 때문에 MDN 참조하면 좋다!
const useNotification = (title, options) => {
    if(!("Notification" in window)) {
        return;
    }
    const fireNotif = () => {
        if(Notification.permission !== "granted") {
            Notification.requestPermission().then(permission => {
                if(permission === "granted") {
                    new Notification(title, options);
                } else {
                    return;
                }
            });
        } else {
            new Notification(title, options);
        }
    }
    return fireNotif;
}

const App = () => {
    const triggerNotif = useNotification("Hello", {body: "Are you there?"});
    return (
        <div className = "App">
            <button onClick={triggerNotif}>Hello</button>
        </div>
    )
}