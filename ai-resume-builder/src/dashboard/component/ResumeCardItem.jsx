import { Notebook } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function ResumeCardItem({ resume }) {
  return (
    <Link to={'/dashboard/resume/'+resume.documentId+"/edit"}>
      <div
        className="p-14 bg-secondary flex justify-center 
      items-center h-[280px] border border-purple-800
      rounded-lg hover:scale-105 
      transition-all cursor-pointer hover:shadow-md 
      shadow-purple-800/20"
      >
        <Notebook />
      </div>
      <h2 className="text-center my-1.5">{resume.title}</h2>
    </Link>
  );
}

export default ResumeCardItem;
