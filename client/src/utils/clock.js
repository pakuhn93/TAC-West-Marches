const clock = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // generate timestamp in milliseconds for current date and time
    const timestamp = new Date(Date.now());
    
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
    let ampm = "am";
    
    // format hours
    if(hour < 12){
      hour = `0${hour}`;
    } else if (hour > 12){
      hour = `0${hour-12}`;
      ampm = "pm";
    } else {
      hour = 12;
    }
    
    // format minutes
    if(minutes < 10) minutes = `0${minutes}`;
    
    // format seconds
    if(seconds < 10) seconds = `0${seconds}`;
    
    console.log(`${day}, ${month} ${date}, ${year} | ${hour}:${minutes}:${seconds} ${ampm}`);
    
    // return a string with formatted values
    return `${day}, ${month} ${date}, ${year} | ${hour}:${minutes}:${seconds} ${ampm}`;
  }
  
  // setInterval(clock, 1000);

  // console.log(clock());

  export { clock };