// src/components/LiveCodeEditor.js
import React, { useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const LiveCodeEditor = () => {
  const [code, setCode] = useState(
    `function Welcome() {
  return <p>Welcome to my site --Ramesh :)</p>
}`
  );

  return (
    <LiveProvider code={code}>
      <LiveEditor onChange={setCode} />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  );
};

export default LiveCodeEditor;
