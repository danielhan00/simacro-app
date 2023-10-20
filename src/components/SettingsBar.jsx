import React from 'react';
import UploadButton from './UploadButton';
import '../styles/SettingsBar.css'

const SettingsBar = () => {
  return (
    <div className={"settings-bar"}>
      <UploadButton className="button"></UploadButton>
      <button className="button">Save Image</button>
      <button className="button">Other Images</button>
    </div>
  );
}

export default SettingsBar;