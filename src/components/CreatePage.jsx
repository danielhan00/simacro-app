import React from "react";
import UploadButton from "./UploadButton";
import RenderObject from "./RenderObject";
import SettingsBar from "./SettingsBar";

const CreatePage = () => {
  return (
    <div>
      <SettingsBar></SettingsBar>
      <div className="renderObject">
        <RenderObject></RenderObject>
      </div>
    </div>
  );
};

export default CreatePage;
