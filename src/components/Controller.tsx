import React from "react";
import { useState, useEffect } from "react";
import Button from "./Button";
import BetBox from "./BetBox";
import axios from "axios";

function Controller() {
  const [hasWon, setHasWon] = useState(false);
  const [betDirection, setBetDirection] = useState("up");
  const [isLoading, setIsLoading] = useState(false);
  const [valStored, setValStored] = useState(0);

  const handlePlace = async () => {
    setIsLoading(true);

    let isWinner = false;
    const url = ////Use the above url for the Axios request in the next video
      "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new";
    await axios
      .get(url)
      .then((res) => {
        if (res.status == 200) {
          const val = res.data;
          setValStored(val);
          console.log(val);
          if (val >= 50 && betDirection == "up") {
            isWinner = true;
          } else if (val < 50 && betDirection == "down") {
            isWinner = true;
          }
        } else {
          console.error("There was some kind of error getting the data");
        }
      })
      .catch((err) => {
        console.log(err.date, err.message);
      });

    //* Return winner result */
    setHasWon(isWinner);
    setIsLoading(false);
  };
  // console.log("hello")
  useEffect(() => {
    //// Use this with caution, it will run every time the component is rendered and will cause an infinite loop if you don't have a condition to stop it.
    console.log(hasWon);
    // console.log("oh hello!");
  }, [hasWon]);

  return (
    <div className="w-full md:w-[850px] lg:w-[1200px] py-12 mx-auto px-5">
      <Button runFunction={handlePlace} />
      <BetBox
        betDirection={betDirection}
        setBetDirection={setBetDirection}
        isLoading={isLoading}
        hasWon={hasWon}
        valStored={valStored}
      />
    </div>
  );
}

export default Controller;
