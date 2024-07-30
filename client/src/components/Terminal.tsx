import React, { useState } from "react";

import Editor from "@monaco-editor/react";
interface TerminalProps {
    onChange: (value: string | undefined) => void;
    language: string;
    code: string;
    theme: string;

}


const Terminal : React.FC<TerminalProps> = ({ onChange, code, language, theme }) => {
    
    const [value, setValue] = useState(code || "");

    const handleEditorChange = (value:string ) => {
        setValue(value);
        onChange(value);
    };
    return (
         <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="85vh"
        width={`100%`}  
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue="// some comment"
        onChange={() => handleEditorChange}
      />
    </div>
    )
}

export default Terminal