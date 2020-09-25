import axios from "axios";
import tc from "../tconfig.json";

//https://jsfiddle.net/Saravanan_Rajaraman/yhgfxdp8/
export function convertImgToBase64(url, callback, outputFormat) {
  var canvas = document.createElement("CANVAS");
  var ctx = canvas.getContext("2d");
  var img = new Image();
  img.crossOrigin = "Anonymous";
  img.onload = function () {
    canvas.height = img.height;
    canvas.width = img.width;
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL(outputFormat || "image/png");
    canvas = null;
    callback(dataURL);
  };
  img.src = url;
}

export function uploadToServer(imageBase64Data, successCallback) {
  var formData = new FormData();
  formData.append("image", imageBase64Data);
  axios.post(tc.server_url, formData).then((res) => {
    console.log(res);
    successCallback(res);
  });
}
