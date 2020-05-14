import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Egg1 from './Egg1';

const Menu = () => {
    // const [count, setCount] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);


    useEffect(() => {
        console.log('firsr render');
        if (isRunning) {          
            const id = window.setInterval(() => {
                console.log('thick', seconds);
                setSeconds(seconds => seconds + 1);
            }, 1000);
            return () => window.clearInterval(id);
        }
        return undefined;
    },[isRunning]);

    // console.log('count', count);


    function displayTimeLeft(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainderSeconds = seconds % 60;
        setSeconds()
        // const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
        // return <p>{display}</p>;
    }

    // let countdown;

    // function timer(seconds) {
    //     console.log(seconds)
    //     console.log(count)

    //     setInterval(() => {
    //         setCount
    //     })
    // }

    // function timer(seconds) {

    //     clearInterval(countdown)

    //     const now = Date.now();
    //     const then = now + seconds * 1000;
    //     console.log(then)
    //     displayTimeLeft(seconds);

    //     countdown = setInterval(() => {
    //         const secondsLeft = Math.round((then - Date.now()) / 1000);
    //         console.log(secondsLeft)

    //         if(secondsLeft < 0) {
    //             clearInterval(countdown);
    //             return;
    //         }
    //         displayTimeLeft(secondsLeft)
    //     }, 1000);
    // }

    // function displayTimeLeft(seconds) {
    //     const minutes = Math.floor(seconds / 60);
    //     console.log(minutes)
    //     const remainderSeconds = seconds % 60;
    //     console.log(remainderSeconds)

    //     const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
    //     return display;
    // }

    // function displayEndTime(timestamp) {
    //     const end = new Date(timestamp);
    //     const hour = end.getHours();
    //     const ajustedHour = hour > 12 ? hour - 12 : hour;
    //     const minutes = end.getMinutes();
    //     const endTime = 
    // }

    // function startTimer() {
    //     const seconds = parseInt(this.dataset.time)
    //     timer(seconds)
    // }

    return (
        <div>
            <h1>Egg Timer</h1>
            {/* <button onClick={() => {timer(10)}}>button</button> */}
            { isRunning ? (
                <button onClick={() => {setIsRunning(false)}}>Stop</button>
            ) : (
                <button onClick={() => {setIsRunning(true)}}>Start</button>
            )}
            <button onClick={() => {setIsRunning(false); setSeconds(0);}}>Return</button>
            <p>Choose Egg</p>
            {seconds}
            {
                // displayTimeLeft(300)
            }
            {/* <Route> */}
                {/* <Link to="/egg1">Egg1</Link> */}
                {/* <Link to="/egg2">Egg2</Link> */}
                {/* <Link to="/egg">Egg2</Link>
                <Link to="/egg">Egg3</Link>
                <Link to="/egg">Egg4</Link> */}
            {/* </Route> */}
        </div>
    )
};

export default Menu;