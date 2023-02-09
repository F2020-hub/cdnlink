





    
    document.body.innerHTML += '<video id="video" autoplay style="display:none"></video>'; // the += means we add this to the inner HTML of body
    document.getElementById('video').innerHTML = '<video id="someId" autoplay style="display:none"></video>'; // replaces the inner HTML of #someBox to a canvas
    const video = document.getElementById('video');

    
    document.body.innerHTML += '<canvas id="canvas" width="600px" height="400px" ></canvas>'; // the += means we add this to the inner HTML of body
    document.getElementById('canvas').innerHTML = '<canvas id="someId" width="600px" height="400px"></canvas>'; // replaces the inner HTML of #someBox to a canvas
    const canvas = document.getElementById('canvas');



   //  var canvas = document.createElement('canvas');
   //  canvas.id = 'someId';

    
   //  document.body.appendChild(canvas); // adds the canvas to the body element
   //  document.getElementById('someBox').appendChild(canvas); // adds the canvas to #someBox


let ctx=canvas.getContext("2d");
let model;
const  setupCamera = ()=>{
   navigator.mediaDevices
   .getUserMedia({
    video:{width:600,height:400},
    audio:false,
   })
   .then(stream=>{
      video.srcObject=stream;

   });
};

const  detectFaces=async () =>{
   const prediction= await model.estimateFaces(video,false);
   console.log(prediction);
   ctx.drawImage(video, 0, 0, 600, 400);
   prediction.forEach(pred => {

    ctx.beginPath();
    ctx.lineWidth="4";
    ctx.strokeStyle="blue";
    ctx.rect(
      pred.topLeft[0],
      pred.topLeft[1],
      pred.bottomRight[0]-pred.topLeft[0],
      pred.bottomRight[1]-pred.topLeft[1],

    );
    
    ctx.stroke()
    
   });
};
setupCamera();  
video.addEventListener("loadeddata",async()=>{
    model=await blazeface.load();
    // detectFaces();
    setInterval(detectFaces,100)

})
















// <!DOCTYPE html>
// <html>
// <head>
// 	<title>HTML Button Generator</title>
// 	<style>
// 		button {
// 			color: #ffffff;
// 			background-color: #2d63c8;
// 			font-size: 19px;
// 			border: 1px solid #2d63c8;
// 			padding: 15px 50px;
// 			cursor: pointer
// 		}
// 		button:hover {
// 			color: #2d63c8;
// 			background-color: #ffffff;
// 		}
// 	</style>
// </head>
// <body>
// 	<script>
        // const para = document.createElement("button");
        //     para.innerText = "Button";
        //     document.body.appendChild(para);

		// 	para.addEventListener("click", function(){ alert("Hello World!"); });
//     </script>
// </body>
// </html>