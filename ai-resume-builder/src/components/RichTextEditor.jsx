import React, { useContext, useState } from "react";
import {
  EditorProvider,
  Editor,
  Toolbar,
  BtnBold,
  BtnItalic,
  BtnUnderline,
  BtnStrikeThrough,
  Separator,
  BtnNumberedList,
  BtnBulletList,
  BtnLink,
} from "react-simple-wysiwyg";
import { Brain, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResumeInfoContext } from "../context/ResumeInfoContext";
import { toast } from "sonner";
import { AIChatSession } from "../../service/AIModel"; // ✅ FIX THIS PATH if needed

const PROMPT = `
Position Title: {positionTitle}
Generate 5-7 strong, professional resume bullet points for experience.
Use action verbs and make them ATS-friendly.
Return ONLY clean HTML using <ul> and <li> tags.
`;

function RichTextEditor({ onRichTextEditorChange, index }) {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const { resumeInfo } = useContext(ResumeInfoContext);

  const GenerateSummeryFromAI = async () => {
    if (!resumeInfo.experience[index]?.title) {
      toast("Please Add Position Title first");
      return;
    }

    setLoading(true);

    const prompt = PROMPT.replace(
      "{positionTitle}",
      resumeInfo.experience[index].title,
    );

    try {
      const response = await AIChatSession(prompt);

      // ✅ Set editor content
      setValue(response);

      // ✅ Update parent state
      onRichTextEditorChange({
        target: { value: response },
      });

      toast("AI Generated Experience Successfully!");
    } catch (error) {
      console.error("AI Error:", error);
      toast("Something went wrong while generating experience.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between my-2">
        <label className="text-xs">Experience Summary</label>

        <Button
          variant="outline"
          size="sm"
          onClick={GenerateSummeryFromAI}
          disabled={loading}
          className="flex gap-2 border-primary text-primary"
        >
          {loading ? (
            <LoaderCircle className="animate-spin h-4 w-4" />
          ) : (
            <>
              <Brain className="h-4 w-4" />
              Generate from AI
            </>
          )}
        </Button>
      </div>

      <EditorProvider>
        <Editor
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onRichTextEditorChange(e);
          }}
        >
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
}

export default RichTextEditor;
