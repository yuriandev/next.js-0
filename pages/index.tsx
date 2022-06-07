import React from "react";
import { Button, Htag } from "../components";

function Home(): JSX.Element {
  return (
    <div >
      <Htag tag="h1">Header test</Htag>
      <Button appearence="primary">Button</Button>
      <Button appearence="ghost">Second button</Button>
    </div>
  );
}

export default Home;
