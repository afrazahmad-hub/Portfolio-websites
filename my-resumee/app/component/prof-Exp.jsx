import React from "react";

const ProfExp = ({ data }) => {
  const { title, experiences } = data;

  return (
    <div>
      <h2 className="mb-8">{title}</h2>
      <div className="flex flex-col rounded-md gap-6 bg-grey">
        {experiences.map(({ role, description, current }) => (
          <div key={role} className="flex flex-col rounded-lg">
            <span className={`h-2 ${current ? "bg-green" : "bg-black"}`} />
            <div className="bg-grey-light p-6 drop-shadow-md">
              <h3 className="font-black">{role}</h3>
              <p className="mt-2">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfExp;
