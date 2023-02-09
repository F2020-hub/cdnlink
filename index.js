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
        const para = document.createElement("button");
            para.innerText = "Button";
            document.body.appendChild(para);

			para.addEventListener("click", function(){ alert("Hello World!"); });
//     </script>
// </body>
// </html>