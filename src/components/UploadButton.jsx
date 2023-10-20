import React from "react";

const UploadButton = () => {
  const handleUpload = () => {
    alert("Upload file prompt here");
  };

  return <button onClick={handleUpload}>Upload GLB File Here</button>;
};

export default UploadButton;
