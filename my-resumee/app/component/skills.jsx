"use client";

import React, { useState } from "react";

const Skills = ({ data }) => {
  const [activeTab, setActiveTab] = useState("soft");

  return (
    <div>
      {["soft", "hard"].map((el) => (
        <button
          type="button"
          className={"btn gap-2 rounded-xl"}
          key={el}
          onClick={() => setActiveTab(el)}
        >
          {el} Skills
        </button>
      ))}

      <ul
        className={`flex flex-row flex-wrap content-center list-none py-4 px-2 gap-2 ${
          activeTab == "soft" ? "justify-start" : "justify-end"
        }`}
      >
        {data[activeTab].map(({ icon, text }) => (
          <li key={text} className="skill">
            <span>{icon}</span>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
