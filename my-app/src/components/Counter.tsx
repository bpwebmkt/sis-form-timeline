import { useEffect, useState } from "react";

const Counter = () => {
  // const [currentTime, setCurrentTime] = useState(new Date());


  const FULLTIME = 5;
  const timelineTray = [];
  const events = [
    {
      id: 1,
      name: "1a",
    },
    {
      id: 2,
      name: "2b",
    },

  ];

  // events 
  const totalEvents =
    events.length <= FULLTIME / 2 ? events.length : FULLTIME / 2;

  // gap between events
  const gapBetweenEvents = Math.floor(FULLTIME / totalEvents);

  let currentEvent = 0;
  let count = 0;


  for (let i = 0; i < FULLTIME; i++) {
    count += 1;
    let message = "";

    if (count === gapBetweenEvents) {
      count = 0;
      const hasEventsLeft = currentEvent < totalEvents;

      if (hasEventsLeft) {
        currentEvent += 1;
        console.log("event:", currentEvent);
        message = "event";
      } else {
        console.log("has no event");
        message = "has no event";
      }
    
    } else {
      console.log("pass", i);
        message = "pass";
    }

    timelineTray.push({
      id: i,
      message: message
    })

  }


  console.log("tray", timelineTray)





  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentTime(new Date());
  //   }, 1000); // Update every second

  //   return () => {
  //     clearInterval(timer); // Clean up the timer on component unmount
  //   };
  // }, []); // Empty dependency array to run the effect only once on component mount
  return (
    <div className="border">
      <h1>Counter</h1>
      {/*Current Time: {currentTime.toLocaleTimeString()}*/}
    </div>
  );
};

export default Counter;
