// const canvas = document.querySelector("#mycanvas");
// const ctx = canvas.getContext("2d");
// ctx.font = "16px Roboto";
// canvas.addEventListener("mousemove", (e) => {
//   const cRect = canvas.getBoundingClientRect();
//   const canvasX = Math.round(e.clientX - cRect.left);
//   const canvasY = Math.round(e.clientY - cRect.top);
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   try {
//     ctx.fillText(`X: ${canvasX} Y: ${canvasY}`, 10, 20);
//   } catch (error) {
//     console.log(error);
//   }
//   console.log(canvasY);
// });

const canvas2: any = document.querySelector("#canvas2");
const ctx2 = canvas2?.getContext("2d");
const ox = canvas2.width / 2;
const oy = canvas2?.width / 2;
ctx2.font = "16px Arial";
ctx2.textAlign = "center";
ctx2.textBaseline = "middle";
ctx2.fillText("Hello World", ox, oy);
const rotateContext = () => {
  ctx2.translate(ox, oy);
  ctx2.rotate((Math.PI / 180) * 10);
  ctx2.fillText("Hello World", 0, 0);
  ctx2.translate(-ox, -oy);
};

let number = 0;
let previousNumber = 0;
(document.querySelector(".number") as any).textContent = number.toString();
const increment = () => {
  if (number < 10) {
    number++;
    useEffect();
  }
};
const decrement = () => {
  if (number > 0) {
    number--;
    useEffect();
  }
};
const useEffect = () => {
  (document.querySelector(".number") as any).textContent = number.toString();
};
