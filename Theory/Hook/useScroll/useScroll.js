import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// scroll의 위치를 얻어와서 위치에 따라 다른 효과를 주는 Hook
const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0
    });
    const onScroll = (event) => {
        setState({y: window.scrollY, x: window.scrollX});
    }

    useEffect(()=> {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return state;
}

const App = () => {
    const { y } = useScroll();
    return (
        <div className = "App" style = {{ height: "1000vh" }}>
            <h1 style = {{ position: "fixed", color: y > 100 ? "red" : "blue" }}>hello</h1>
        </div>
    )
}