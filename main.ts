import {Canvas2dUtil} from './canvas2d/canvas2d.ts'



let canvas:HTMLCanvasElement | null = document.getElementById('canvas') as HTMLCanvasElement;
let canvas2d:Canvas2dUtil = new Canvas2dUtil(canvas)
canvas2d.drawText('abcasdasdasfasf啊a ')

// let posX: number = 0
// let speedX: number = 10
// function update(timestamp: number, elapsed:number, interval: number): void{
//    let t: number = interval / 1000
//    posX += speedX * t
// }
// function render(ctx: CanvasRenderingContext2D | null): void{

// }

/*
let start: number = 0
let lastTime :number = 0
let count: number = 0
function step(nowTime: number):void{
   if(!start) start = nowTime
   if(!lastTime) lastTime = nowTime
   let totalTime: number = nowTime - start
   let intervalTime: number = nowTime - lastTime 
   lastTime = nowTime
   count++
   // console.log(`${totalTime}`);
   // console.log(`${intervalTime}`);
   console.log(`${nowTime}`);
   
   window.requestAnimationFrame(step)
}
window.requestAnimationFrame(step)
*/

