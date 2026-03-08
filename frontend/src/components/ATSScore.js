import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ATSScore({score}){

return(

<div className="bg-white p-6 rounded-xl shadow w-64">

<h2 className="text-lg font-bold mb-4">
ATS Score
</h2>

<CircularProgressbar
value={score}
text={`${score}%`}
/>

</div>

);

}

export default ATSScore;