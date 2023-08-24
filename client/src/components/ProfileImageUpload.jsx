import React, { useState } from "react";

const UploadAndDisplayImage = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
      <div className="App">
          <h2>Add Profile Image:</h2>
          <input type="file" onChange={handleChange} />
          <img src={file} />

      </div>

  );
};

export default UploadAndDisplayImage;