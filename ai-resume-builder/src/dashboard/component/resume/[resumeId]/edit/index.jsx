import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FormSection from '../../components/FormSection';
import ResumePriview from '../../components/ResumePriview';
import dummy from '../../../../../data/dummy';
import { ResumeInfoContext } from '../../../../../context/ResumeInfoContext';

function EditResume() {
  const [resumeInfo, setResumeInfo] = useState();
    

    useEffect(() => {
        setResumeInfo(dummy)
    }, [])
  return (
    <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
        {/* Form Section */}
        <FormSection />
        {/* Preview Section */}
        <ResumePriview />
      </div>
    </ResumeInfoContext.Provider>
    
  );
}

export default EditResume