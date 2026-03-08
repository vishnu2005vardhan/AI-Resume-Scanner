import React, { useState } from "react";
import UploadSection from "../components/UploadSection";
import ATSScore from "../components/ATSScore";
import SkillsCard from "../components/SkillsCard";

function Dashboard(){

const [result, setResult] = useState(null);

return(

<div className="p-10 space-y-8">

<h1 className="text-3xl font-bold">
Resume Analyzer
</h1>

<UploadSection setResult={setResult}/>

{result && (

<div className="grid grid-cols-3 gap-6">

<ATSScore score={result.score}/>
<SkillsCard
  title="Matched Skills"
  skills={result?.matched_skills}
  color="text-green-600"
/>

<SkillsCard
  title="Missing Skills"
  skills={result?.missing_skills}
  color="text-red-500"
/>


</div>

)}

</div>

);

}

export default Dashboard;