import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
              setElapsedTime((prevElapsedTime) => prevElapsedTime + 10);
            }, 10);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isRunning]);

    const handleStartStop = () => {
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        setElapsedTime(0);
        setIsRunning(false);
    };
    const formatTime = (milliseconds) => {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        const millisecondsRemaining = milliseconds % 1000;


    return `${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}.${millisecondsRemaining.toString().padStart(3, '0')}`;
    };
  return (
    <div>
      <h2>Stopwatch</h2>
      <p>{formatTime(elapsedTime)}</p>
      <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Stopwatch
