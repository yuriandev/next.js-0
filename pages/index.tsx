import React, { useEffect, useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";

function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  useEffect(
    () => {
      console.log("Counter is " + counter);
      return function cleanup() {
        console.log("Unmount " + counter);
      };
    }
  );

  return (
    <div >
      <Htag tag="h1">{counter}</Htag>
      <Button appearence="primary" arrow="right" onClick={() => setCounter(x => x + 1)}>Button</Button>
      <Button appearence="ghost" arrow="down">Second button</Button>
      <P size="l">Large text size</P>
      <P size="m">Medium text size</P>
      <P size="s">Small text size</P>
      <Tag size="s">Small size, def color ghost</Tag>
      <Tag size="m" color="red">Medium size, red</Tag>
      <Tag color="green">Def size, green</Tag>
      <Rating rating={4} />

    </div>
  );
}

export default Home;
