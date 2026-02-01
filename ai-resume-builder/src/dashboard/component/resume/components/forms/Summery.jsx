import React, { useContext, useEffect, useState } from "react";
import { Button } from "../../../../../components/ui/button";
import { Textarea } from "../../../../../components/ui/textarea";
import { ResumeInfoContext } from "../../../../../context/ResumeInfoContext";
import { useParams } from "react-router-dom";
import GlobalApi from "../../../../../../service/GlobalApi";
import { Brain, LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { AIChatSession } from "../../../../../../service/AIModel"; // ✅ same as video

function Summery({ enabledNext }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [Summery, setSummary] = useState();
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    Summery &&
      setResumeInfo({
        ...resumeInfo,
        summery: Summery,
      });
  }, [Summery]);

  // ✅ Function name and logic same as video
  const GenerateSummaryFromAI = async () => {
    setLoading(true);
    const prompt = `Job Title: ${
      resumeInfo.jobTitle || "Full Stack Developer"
    }. Depending on job title, give me a professional summary for my resume within 4-5 lines.`;

    try {
      const response = await AIChatSession(prompt);
      setSummary(response);
      toast("AI Generated Summary Successfully!");
    } catch (error) {
      console.error("Error generating summary:", error);
      toast("Something went wrong while generating summary.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Save same as in video
  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      data: {
        summery: Summery,
      },
    };

    GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
      (resp) => {
        console.log(resp);
        enabledNext(true);
        setLoading(false);
        toast("Details Updated Successfully...");
      },
      (error) => {
        console.error(error);
        setLoading(false);
        toast("Error saving details.");
      }
    );
  };

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Summery</h2>
        <p>Add Summery For Your Job Title</p>

        <form className="mt-7" onSubmit={onSave}>
          <div className="flex justify-between items-end">
            <label>Add Summery</label>
            <Button
              variant="outline"
              type="button"
              size="sm"
              className="border-primary text-primary flex gap-2"
              onClick={GenerateSummaryFromAI} // ✅ same as video
              disabled={loading}
            >
              {loading ? (
                <LoaderCircle className="animate-spin h-4 w-4" />
              ) : (
                <>
                  <Brain className="h-4 w-4" />
                  Generate With AI
                </>
              )}
            </Button>
          </div>

          <Textarea
            className="mt-5"
            required
            value={Summery}
            onChange={(e) => setSummary(e.target.value)}
          />

          <div className="mt-2 flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Summery;
