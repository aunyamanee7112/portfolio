import React from "react";
import MyWorkCard from "./card";
import { TESTCASE } from "../../constants/testcase";
import Header from "../common/header";

const GetToKnowME = () => {
  return (
    <div id="buildup" className="text-center xl:p-[150px] h-3/4">
      <Header title={"Why Software Test Engineer ?"}/>
      <p className="lowercase">
        I’m working on frontend developer role as always and Not long ago I was
        introduced to the software testing and working together. <b>This position
        is really cools and can’t working without them, we have the same
        purpose to make to get the best product and best user experience. </b>
        therefore I trying to learn and practice. Hopefully to join the new career
        path and get the new experience in the software development
      </p>
      <p className="py-10 font-semibold">My TestCase Project 👇</p>
      <MyWorkCard card={TESTCASE}/>
    </div>
  );
};

export default GetToKnowME;
