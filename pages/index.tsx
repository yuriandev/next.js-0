import React from "react";
import { Button, Htag } from "../components";

function Home(): JSX.Element {
  return (
    <div >
      <Htag tag="h1">Header test</Htag>
      <Button appearence="primary" arrow="right">Button</Button>
      <Button appearence="ghost" arrow="right">Second button</Button>
    </div>
  );
}

export default Home;
