


document.body.innerHTML +=
  '<video id="video" autoplay style="display:none"></video>'; // the += means we add this to the inner HTML of body
document.getElementById("video").innerHTML =
  '<video id="someId" autoplay style="display:none"></video>'; // replaces the inner HTML of #someBox to a canvas
const video = document.getElementById("video");

document.body.innerHTML +=
  '<canvas id="canvas" width="600px" height="400px" ></canvas>'; // the += means we add this to the inner HTML of body
document.getElementById("canvas").innerHTML =
  '<canvas id="someId" width="600px" height="400px"></canvas>'; // replaces the inner HTML of #someBox to a canvas
const canvas = document.getElementById("canvas");

let ctx = canvas.getContext("2d");
let model;
const setupCamera = () => {
  navigator.mediaDevices
    .getUserMedia({
      video: { width: 600, height: 400 },
      audio: false,
    })
    .then((stream) => {
      video.srcObject = stream;
    });
};

const detectFaces = async () => {
  const prediction = await model.estimateFaces(video, false);
  console.log(prediction);
  ctx.drawImage(video, 0, 0, 600, 400);
  prediction.forEach((pred) => {
    ctx.beginPath();
    ctx.lineWidth = "4";
    ctx.strokeStyle = "blue";
    ctx.rect(
      pred.topLeft[0],
      pred.topLeft[1],
      pred.bottomRight[0] - pred.topLeft[0],
      pred.bottomRight[1] - pred.topLeft[1]
    );

    ctx.stroke();
  });
};
setupCamera();
video.addEventListener("loadeddata", async () => {
  model = await blazeface.load();
  // detectFaces();
  setInterval(detectFaces, 100);
});

