import React from "react";
import type { FC } from "react";
import { Button, Card, Typography } from "@ncr-design-system/react";
import { DevIcon } from "../assets";
import { withRouter } from "react-router-dom";
import './style.css'

export const Home: FC<{}> = () => {
  const StartButton = withRouter((props) => (
    <Button
      variant="fill"
      style={{ marginTop: "2em", padding: "1em" }}
      {...props}
      onClick={() => {
        props.history.push({
          pathname: "/pages/DevEnv",
        });
      }}
    >
      Start Building
    </Button>
  ));

  return (
    <Card className='welcomeCardContainer'>
      <div className='left'>
        <Typography variant="largeTitle">Developers Playground</Typography>
        <Typography variant="title2">Purpose</Typography>
        <Typography variant="body">
          A design system is intended to ease the process of building an
          interface. The code that does the heavy work behind each design system
          component is robust, flexible, and engaging. But, no piece of code, let
          alone any design system, is perfect without exhaustive testing.
        </Typography>
        <Typography variant="body" italic>
          This is where you come in.
        </Typography>
        <StartButton />
      </div>
      <div className='right'>
        <DevIcon className='devIcon' />
      </div>
    </Card>
  );
};
