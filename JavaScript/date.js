Creating a new date object 

  new Date() 
    // creates a new date object with the current date and time
    // Date objects are static; the computer time will tick, but date objects won't.
    // Notice the d in Date is capitalized
    
  new Date(year, month, day, hours, minutes, seconds, miliseconds)
    // creates a new date object with a specified date and time
    // Month starts from 0; January is 0, and December is 11.
    // Don't have to fill in all seven parameters. Can add a minimum of two parameters (i.e., up to month).
      var d = new Date(2018, 11, 24, 10) // Year 2018 December 24th 10 o'clock
    // One and two digit years will be interpreted as 19xx.
      var d = new Date(99, 11, 24) // Year 1999 December 24th
      var d = new Date(9, 11, 24) // Year 1909 December 24th
    
  new Date(miliseconds)
    // creates a new date object as zero time plus milliseconds
    // Zero time = January 01, 1970 00:00:00 UTC
    
  new Date(-milliseconds)
    // creates a new date object as zerto time minus milliseconds
    
  new Date(datestring)
    // creates a new date object from a date string
      var d = new Date("October 13, 2014 11:13:00")
      Mon Oct 13 2014 11:13:00 GMT-0400 (Eastern Daylight Time)

Date Methods

  // JavaScript will, by default, output dates in full text string format, so no need to use toString()
  
  toUTCString() 
    // converts a date to a UTC string (a date display standard)
    date.toUTCString(); // Thu, 09 Jan 2020 16:22:31 GMT
  
  toDateString() // converts a date to a more readable format
    date.toDateString(); // Thu Jan 09 2020
    
Date Formats

  // ISO example "2015-03-25"
  // Short example "03/25/2015"
  // Long example "Mar 25 2015" or "25 Mar 2015"
  
  parse() // returns the number of milliseconds between the date and January 1, 1970
  
Date Methods

  Get Methods
    getFullYear()	// Get the year as a four digit number (yyyy)
    getMonth()	// Get the month as a number (0 January - 11 December)
    getDate()	// Get the day as a number (1-31)
    getHours()	// Get the hour (0-23)
    getMinutes()	// Get the minute (0-59)
    getSeconds()	// Get the second (0-59)
    getMilliseconds()	// Get the millisecond (0-999)
    getTime()	// Get the time (milliseconds since January 1, 1970)
    getDay()	// Get the weekday as a number (0 Sunday - 6 Saturday)

  Set Methods
    setDate()	// Set the day as a number (1-31)
    setFullYear()	// Set the year (optionally month and day)
    setHours()	// Set the hour (0-23)
    setMilliseconds()	// Set the milliseconds (0-999)
    setMinutes()	// Set the minutes (0-59)
    setMonth()	// Set the month (0 January - 11 December)
    setSeconds()	// Set the seconds (0-59)
    setTime()	// Set the time (milliseconds since January 1, 1970)
