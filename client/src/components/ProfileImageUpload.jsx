import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { UPLOAD_FILE } from "../graphql/mutations";

const UploadAndDisplayImage = () => {
  const [uploadFile, { data }] = useMutation(UPLOAD_FILE);
  var myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "",
      uploadPreset: "",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        uploadFile({ variables: { file: result.info.secure_url } }).then(result => {
            console.log("File upload complete.");
        });
        //console.log("Done! Here is the image info: ", result.info);
      }
    }
  );
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function handleClick() {
    myWidget.open();
  }

  return (
    <div className="App">
      <h2>Add Profile Image:</h2>
      <button
        id="upload_widget"
        className="cloudinary-button"
        onClick={handleClick}
      >
        Upload
      </button>
    </div>
  );
};

export default UploadAndDisplayImage;
