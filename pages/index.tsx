import React, { useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";
import { Layout } from "../layout/Layout";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <Layout >
      <Htag tag="h1">Hello</Htag>
      <Button appearence="primary" arrow="right">Button</Button>
      <Button appearence="ghost" arrow="down">Second button</Button>
      <P size="l">Large text size</P>
      <P size="m">Medium text size</P>
      <P size="s">Small text size</P>
      <Tag size="s">Small size, def color ghost</Tag>
      <Tag size="m" color="red">Medium size, red</Tag>
      <Tag color="green">Def size, green</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />

    </Layout>
  );
}

export default Home;
