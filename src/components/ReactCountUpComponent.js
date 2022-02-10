import React from "react";
import CountUp from "react-countup";
import { useCountUp } from "react-countup";

function ReactCountUpComponent() {
  return (
    <div>
      <h2>CountUp</h2>

      <a href="https://react-countup.vercel.app/" target="_blank">
        Docs Link
      </a>
      <br></br>
      <a
        href="https://youtu.be/zttrshYjHHQ?list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM"
        target="_blank"
      >
        Video Link
      </a>

      <br />
      <CountUp end={500} />
      <br />
      <CountUp end={500} duration={5} />
      <br />
      <CountUp start={500} end={1000} duration={5} />
      <br />
      <CountUp end={1000} duration={5} prefix="$" decimals={2} />
      <br />
      <CountUp end={1000} duration={5} suffix=" USD" decimals={2} />
      <br />
      <CountUp
        start={-875.039}
        end={160527.012}
        duration={2.75}
        separator=" "
        decimals={4}
        decimal=","
        prefix="EUR "
        suffix=" left"
        onEnd={() => console.log("Ended! 👏")}
        onStart={() => console.log("Started! 💨")}
      >
        {({ countUpRef, start }) => (
          <div>
            <span ref={countUpRef} /><br></br>
            <button onClick={start}>Start</button>
          </div>
        )}
      </CountUp>
    </div>
  );
}

export default ReactCountUpComponent;
