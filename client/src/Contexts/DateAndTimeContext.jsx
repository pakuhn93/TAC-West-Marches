import React, { useState, useEffect, useContext } from "react";

const DateAndTimeContext = React.createContext();

// custom hooks for our context
export function useDateAndTime(){
    return useContext(DateAndTimeContext);
}

export function DateAndTimeProvider({ children }){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    console.log("||| DATE AND TIME PROVIDER RUNNING |||");

    // const [currentDate, setCurrentDate] = useState("Monday January 1, 1960");
    // const [currentTime, setCurrentTime] = useState("00:00:00");

    // holds the state of our formatted date and time in an array: [date, time]
    const [currentDateAndTime, setCurrentDateAndTime] = useState(["DATE", "TIME"]);

    const clock = () => {        
        // generate timestamp in milliseconds for current date and time
        const timestamp = new Date();
        
        // day returns 0-6 starting on Sunday
        const day = days[timestamp.getDay()]; 
        // month returns 0-11
        const month = months[timestamp.getMonth()];
        // day returns 1-31
        const date = timestamp.getDate();
        // year returns full year: YYYY as number
        const year = timestamp.getFullYear();
        // hours returns 0-23
        let hour = timestamp.getHours();
        // minutes returns 0-59
        let minutes = timestamp.getMinutes();
        // second returns 0-59
        let seconds = timestamp.getSeconds();
        // initialize time of day
        let timeOfDay = "";

        // format hours
        // check if hour is between 0-11
        if(Math.sign(hour-12) == -1){
            timeOfDay = "AM";
            // check if midnight
            if(hour == 0) hour = 12;
        // check if hour is 13+
        } else if (Math.sign(hour-12) == 1){
            timeOfDay = "PM";
            hour = (hour-12);
        // anything else should be 12
        } else {
            timeOfDay = "PM";
        }
        
        // format minutes
        if(minutes < 10) minutes = `0${minutes}`;
        
        // format seconds
        if(seconds < 10) seconds = `0${seconds}`;
        
        // console.log(`${day} ${month} ${date}, ${year} | ${hour}:${minutes}:${seconds} ${timeOfDay}`);
        
        // set the current date and time each time we run this function
        // setCurrentDate(`${day} ${month} ${date}, ${year}`);
        // setCurrentTime(`${hour}:${minutes}:${seconds} ${timeOfDay}`);
        if(currentDateAndTime != [`${day} ${month} ${date}, ${year}`, timestamp.toLocaleTimeString()]){
            setCurrentDateAndTime([`${day} ${month} ${date}, ${year}`, timestamp.toLocaleTimeString()]);
        } else {
            console.log("No Need to Update Yet...");
        }
        console.log(`${day} ${month} ${date}, ${year}`, timestamp.toLocaleTimeString());
      }

      // initialize the clock before setInterval completes its first interval
      // this immediately changes our state variables to be the correct currentDate and currentTime instead of preset default values
      useEffect(() => {
        clock();
        // run the clock every 1000ms
        const myClock = setInterval(clock, 1000);
      }, []);
      
    return (
        <DateAndTimeContext.Provider value={currentDateAndTime}>
            {children}
        </DateAndTimeContext.Provider>
    );
}