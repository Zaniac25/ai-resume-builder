import React, { useState } from "react";
import { EditorProvider } from "react-simple-wysiwyg";
import { Editor } from "react-simple-wysiwyg";
import { Toolbar } from "react-simple-wysiwyg";
import { BtnBold } from "react-simple-wysiwyg";
import { BtnItalic } from "react-simple-wysiwyg";
import { BtnUnderline } from "react-simple-wysiwyg";
import { BtnStrikeThrough } from "react-simple-wysiwyg";
import { Separator } from "react-simple-wysiwyg";
import { BtnNumberedList } from "react-simple-wysiwyg";
import { BtnBulletList } from "react-simple-wysiwyg";
import { BtnLink } from "react-simple-wysiwyg";
import { BtnClearFormatting } from "react-simple-wysiwyg";
import { HtmlButton } from "react-simple-wysiwyg";
import { BtnStyles } from "react-simple-wysiwyg";
import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

function RichTextEditor({ onRichTextEditorChange }) {
  const [value, setValue] = useState();
  
  return (
    <div>
      <div>
        <label className="text-xs">Summery</label>
        <Button variant="outline" size="sm" className="flex gap-2 border-primary text-primary"><Brain className="h-4 w-4/> Generate from AI </Button>
      </div>
      <EditorProvider>
        <Editor
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onRichTextEditorChange(e)
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
