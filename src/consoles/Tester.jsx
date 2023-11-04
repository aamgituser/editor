import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

const Tester = () => {
  const [code, setCode] = useState('');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  return (
    <AceEditor
    mode="javascript"
    theme="monokai"
    fontSize={16}
    width="100%"
    height="400px"
    showPrintMargin={false}
    showGutter
    editorProps={{ $blockScrolling: Infinity }}
    setOptions={{
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true, 
      enableSnippets: true,
    }}
    value={code}
    onChange={handleCodeChange}
    showLineNumbers
    />
  );
};

export default Tester;
