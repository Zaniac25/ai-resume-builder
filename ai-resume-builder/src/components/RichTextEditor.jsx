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

function RichTextEditor() {
  const [value, setValue] = useState();
  return (
    <div>
      <EditorProvider>
        <Editor
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
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
