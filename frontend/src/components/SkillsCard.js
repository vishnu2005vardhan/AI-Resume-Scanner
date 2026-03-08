import React from "react";

function SkillsCard({ title, skills = [], color }) {

  return (

    <div className="bg-white p-6 rounded shadow">

      <h2 className="text-xl font-bold mb-4">
        {title}
      </h2>

      <ul>

        {skills.length > 0 ? (

          skills.map((skill, i) => (
            <li key={i} className={`mb-2 ${color}`}>
              {color === "text-green-600" ? "✔" : "✖"} {skill}
            </li>
          ))

        ) : (

          <p className="text-gray-400">
            No skills found
          </p>

        )}

      </ul>

    </div>

  );

}

export default SkillsCard;