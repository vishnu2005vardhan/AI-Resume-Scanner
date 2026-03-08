import React from "react";
import { useDropzone } from "react-dropzone";
import { FaCloudUploadAlt } from "react-icons/fa";

function UploadCard(){

const {getRootProps,getInputProps} = useDropzone();

return(

<div
{...getRootProps()}
className="border-2 border-dashed border-gray-400 p-12 rounded-xl text-center bg-white shadow hover:shadow-lg cursor-pointer"
>

<input {...getInputProps()} />

<FaCloudUploadAlt size={50} className="mx-auto text-blue-500"/>

<h2 className="text-xl font-semibold mt-3">
Drag & Drop Resume
</h2>

<p className="text-gray-500">
or click to upload
</p>

</div>

);

}

export default UploadCard;