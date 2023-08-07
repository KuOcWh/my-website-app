//I want to make a count down timer that will count down until November 14th 2023. I would like to display how many weeks, days, hours and minutes there are until this time.
//I would like the function to be a react component and use state to update the time on the screen to the countdown.
//I will export and render it within the App.js file. This component will be rendered within the header and show weeks days hours minutes left of the count down.


import React, { useState, useEffect } from 'react';

function CountDown() {
    
      const [time, setTime] = useState({
     weeks: 0,
     days: 0,
     hours: 0,
     minutes: 0,
     seconds: 0
      });
    
      useEffect(() => {
     const timer = setInterval(() => {
        const countDownDate = new Date("Nov 14, 2023 00:00:00").getTime();
        const now = new Date().getTime();
        const distance = countDownDate - now;
    
        const weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        setTime({ weeks, days, hours, minutes, seconds });
     }, 1000);
     return () => clearInterval(timer);
      }, []);
    
      return (
     <div>
        <h2 className='text-center mb-5'>{time.weeks} weeks {time.days} days {time.hours} hours {time.minutes} minutes {time.seconds} seconds</h2>
     </div>
      );
}

export default CountDown;