// src/components/LiveCodeEditor.js
import React, { useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const LiveCodeEditor = () => {
  const [code, setCode] = useState(
    `function Welcome() {
  return <p>Play with skills don't play with emotions. --Ramesh:)</p>
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
