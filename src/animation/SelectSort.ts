import { initCanvas } from "../utils";

let ctx: CanvasRenderingContext2D;
const animateCache = {
  animateId: 0,
};

export default function SelectSort() {
  const { canvas } = initCanvas();

  ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  return animateCache;
}
