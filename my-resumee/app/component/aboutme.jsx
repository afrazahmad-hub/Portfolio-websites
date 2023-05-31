import React, { useId } from "react";
import Skills from "./skills";

const Aboutme = ({ data, skills }) => {
  const { title, body } = data;
  const id = useId();

  return (
    <section>
      <h2 className="mb-8">{title}</h2>

      {body?.map((el, i) => (
        <p key={`${id} _${i}`} className="mb-8">
          {el}
        </p>
      ))}

      <Skills data={skills} />
    </section>
  );
};

export default Aboutme;
