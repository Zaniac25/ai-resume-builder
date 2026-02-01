import React, { use, useEffect, useState } from 'react'
import { Input } from '../../../../../components/ui/input'
import { Button } from '../../../../../components/ui/button'
import RichTextEditor from '../../../../../components/RichTextEditor'


const formField = {
  title: "",
  companyname: "",
  city: "",
  state: "",
  startDate: "",
  ensDate: "",
  workSummery: ""
}

function Experience() {
  const [experienceList, setExperienceList] = useState([
    formField
  ])

  const handleChange = (index, event) => {
    const newEntries = experienceList.slice();
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setExperienceList(newEntries);
  }

  const AddNewExperience = () => { 
    setExperienceList([...experienceList, formField]);
  }

  const RemoveExperience = () => { 
    setExperienceList(experienceList.slice(0, -1));
  }

  useEffect(() => { 
    console.log(experienceList);
  }, [experienceList])

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Professional Experience</h2>
        <p>Add Your Previous Job Experience</p>

        <div>
          {experienceList.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg ">
                <div>
                  <label className="text-sm">Position Title</label>
                  <Input
                    name="title"
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>

                <div>
                  <label className="text-sm">Company Name</label>
                  <Input
                    name="companyName"
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>

                <div>
                  <label className="text-sm">city</label>
                  <Input
                    name="city"
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>

                <div>
                  <label className="text-sm">State</label>
                  <Input
                    name="state"
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>

                <div>
                  <label className="text-sm">Start Date</label>
                  <Input
                    type="date"
                    name="startDate"
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>

                <div>
                  <label className="text-sm">End Date</label>
                  <Input
                    type="date"
                    name="ensDate"
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
                <div className="col-span-2">
                  {/* {Work Summery} */}
                  <RichTextEditor />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <div className='flex gap-5'>
            <Button
              variant="outline"
              onClick={AddNewExperience}
              className="text-primary border-primary"
            >
              + Add More Experience
            </Button>
            <Button
              variant="outline"
              onClick={RemoveExperience}
              className="border-black">
              - Remove
            </Button>
          </div>
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
}

export default Experience