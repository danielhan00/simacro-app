import React from "react";
import UploadButton from "./UploadButton";
import RenderObject from "./RenderObject";

const CreatePage = () => {
  return (
    <div>
      <h1>Hello, create here</h1>
      <UploadButton></UploadButton>
      <ol>
        <li>file1</li>
        <li>file2</li>
        <li>file3</li>
      </ol>
      <div className="renderObject">
        <RenderObject></RenderObject>
      </div>
    </div>
  );
};

export default CreatePage;
