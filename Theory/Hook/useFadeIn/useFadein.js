import { useEffect } from "react";
import ReactDOM from "react-dom";

// 애니메이션을 다루는 Hook
const useFadeIn = (duration, delay) => {
    if(typeof duration !== "number" || typeof delay !== "number") {
        return;
    }
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
            // property, duration, timing 등 다른 요소들 설정도 가능
        }
    });
    return {ref: element, style: {opacity: 0}};
};

const App = () => {
    const fadeInH1 = useFadeIn(5, 2);
    return (
        <div className = "App">
            <h1 {...fadeInH1}>hello</h1>
        </div>
    )
}