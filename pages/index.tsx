import React from "react";
import { Button, Htag, P } from "../components";

function Home(): JSX.Element {
  return (
    <div >
      <Htag tag="h1">Header test</Htag>
      <Button appearence="primary" arrow="right">Button</Button>
      <Button appearence="ghost" arrow="down">Second button</Button>
      <P size="l">Large text size</P>
      <P size="m">Medium text size</P>
      <P size="s">Small text size</P>

    </div>
  );
}

export default Home;
