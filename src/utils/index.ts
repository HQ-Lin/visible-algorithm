export function initCanvas() {
  const canvas: HTMLCanvasElement = document.getElementById(
    "Canvas"
  ) as HTMLCanvasElement;

  canvas.width = document.body.clientWidth - 260 - 48;
  canvas.height = document.body.clientHeight - 48;

  return { canvas };
}
