import defaultAxios from "axios";
import { elementType } from "prop-types";
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

// 브라우저에 알람을 띄워주는 Hook. js method를 이용하기 때문에 MDN 참조하면 좋다!
const useAxios = (opts ,axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });
    const [trigger, setTrigger] = useState(0);
    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTrigger(Date.now());
    }
    if(!opts.url) {
        return;
    }
    useEffect(() => {
        axiosInstance(opts).then(response => {
            setState({
                ...state,
                loading: false,
                data
            });
        }).catch(error => {
            setState({
                ...state,
                loading: false,
                error
            });
        });
    }, [trigger]);
    return {...state, refetch};
}

const App = () => {
    const {lading, data, error, refetch} = useAxios({url: ""});
    console.log(`Loading: ${loading}\nError:${error}\nData:${JSON.stringify(data)}`);
    return (
        <div className = "App">
            <h1>{data && data.status}</h1>
            <h2>{loading && "Loading"}</h2>
            <button onClick={refetch}>Hello</button>
        </div>
    )
}