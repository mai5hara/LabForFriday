import React, { useEffect,useState } from 'react';

const Test = ({ seconds}) => {

    const [timeLeft, setTimeLeft] = useState(seconds);
    const [isRunning, setIsRunning] = useState(false);

    const now = Date.now();
    const then = now + seconds * 1000;                
    // const secondsLeft = Math.round((then - Date.now()) / 1000);


    // const countDown = setInterval(() => {
    //     const secondsLeft = Math.round((then - Date.now()) / 1000);
    //     console.log(secondsLeft)
    //     if(secondsLeft <= 0) {
    //         clearInterval(countDown);
    //         console.log('done');
    //         return;
    //     }
    //     displayTimeLeft(secondsLeft);
    // },1000);

    const displayTimeLeft = (seconds) => {
        let minutesLeft = Math.floor(seconds / 60);
        let secondsLeft = seconds % 60;
    
        minutesLeft = minutesLeft.toString().length === 1 ? '0' + minutesLeft : minutesLeft;
        secondsLeft = secondsLeft.toString().length === 1 ? '0' + secondsLeft : secondsLeft;
        console.log(minutesLeft)
        console.log(secondsLeft)
        return `${minutesLeft}:${secondsLeft}`;
    }

    useEffect(() => {
        // if (!timeLeft && isRunning) return;
        console.log(isRunning)
        if(isRunning) {
            // const intervalId = setInterval(() => {
            //     // console.log('thick', seconds);
            //     setTimeLeft(displayTimeLeft(seconds));
            // }, 1000);
            const countDown = setInterval(() => {
                const secondsLeft = Math.round((then - Date.now()) / 1000);
                console.log(secondsLeft)
                if(secondsLeft < 0) {
                    clearInterval(countDown);
                    console.log('done');
                    return;
                }
                setTimeLeft(displayTimeLeft(secondsLeft));
            },1000);
            return () => clearInterval(countDown)
        }
        return undefined;
    }, [isRunning]);

    return (
        <div>
            {isRunning ? (
                <button onClick={() => {setIsRunning(false)}}>stop</button>
            ) : (
                <button onClick={() => {setIsRunning(true)}}>start</button>
            )}
            <button onClick={() => {setIsRunning(false)}}>stop</button>
            <button>return</button>
            {timeLeft}
        </div>
    )
}

export default Test;