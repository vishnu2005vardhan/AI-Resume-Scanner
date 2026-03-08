import React from "react";
import { Link } from "react-router-dom";

function Sidebar(){

return(

<div className="w-64 bg-gray-900 text-white min-h-screen p-6">

<h1 className="text-2xl font-bold mb-10">
AI Resume Scanner
</h1>

<ul className="space-y-4">

<li className="hover:text-blue-400 cursor-pointer">
<Link to="/">Upload Resume</Link>
</li>

<li className="hover:text-blue-400 cursor-pointer">
<Link to="/ats">ATS Report</Link>
</li>

<li className="hover:text-blue-400 cursor-pointer">
<Link to="/ai">AI Suggestions</Link>
</li>

</ul>

</div>

);

}

export default Sidebar;