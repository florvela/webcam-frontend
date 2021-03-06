import React, { Component, useState } from 'react';
//import './cameraStyles.css'
import Webcam from "react-webcam";
const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "user"
};

// {'decisions': 'threat detected', 'detections': {'classes': ['SHOTGUN'], 'scores': [0.9819242358207703], 'boxes': [[89, 82, 83, 56]], 'class_ids': [1], 'thresholds': [0.8]}}

export const WebcamCapture = () => {
    const [image,setImage]=useState('');
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc);
      console.log(imageSrc);
      const requestOptions = {
//        mode: "no-cors",
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "imageSrc": imageSrc })
      };

      fetch('http://127.0.0.1:5000/api/v1/yolov4', requestOptions)
      .then((response) => {
        return response.json();
      }).then((data) => console.log(data))
      .catch((err) => console.log(err))
    },

    [webcamRef]
  );

  return (
    <div className="webcam-container">
     <div className="webcam-img">

                {image == '' ? <Webcam
                    audio={false}
                    height={210}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={210}
                    videoConstraints={videoConstraints}
                /> : <img src={image} />}
            </div>
            <div className="ImageCam">

                {image != '' ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                    }}
                        className="webcam-btn">
                        Retake Image</button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        className="webcam-btn">Capturre</button>
                }
            </div>
    </div>
  );
};