import React from "react";
import Aboutme from "./component/aboutme";
import ProfExp from "./component/prof-Exp";
import { aboutMe, skills, professionalData } from "../data/page-data";

const page = () => {
  return (
    <div className="">
      <Aboutme data={aboutMe} skills={skills} />
      <ProfExp data={professionalData} />
    </div>
  );
};

export default page;
