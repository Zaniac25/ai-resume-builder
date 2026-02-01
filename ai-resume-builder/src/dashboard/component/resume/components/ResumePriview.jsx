import React, { useContext } from "react";
import PersonalDetailPreview from "./preview/PersonalDetailPreview";
import { ResumeInfoContext } from "../../../../context/ResumeInfoContext";
import SummeryPreview from "./preview/SummeryPreview";
import ExperiencePreview from "./preview/ExperiencePreview";
import EducationPreview from "./preview/EducationPreview";
import SkillsPreview from "./preview/SkillsPreview";

function ResumePriview() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  return (
    <div
      className="shadow-lg h-full p-14 rounded-lg border-t-[20px]"
      style={{
        borderColor: resumeInfo?.themeColor,
      }}
    >
      {/* personal Details */}
      <PersonalDetailPreview resumeInfo={resumeInfo} />

      {/* Summary */}
      <SummeryPreview resumeInfo={resumeInfo} />

      {/* Proffessional Experience */}
      <ExperiencePreview resumeInfo={resumeInfo} />

      {/* education */}
      <EducationPreview resumeInfo={resumeInfo} />

      {/* skills */}
      <SkillsPreview resumeInfo={resumeInfo} />
    </div>
  );
}

export default ResumePriview;
