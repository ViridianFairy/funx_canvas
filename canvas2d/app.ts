export class Application {
   protected _start: boolean = false
   protected _loopId: number = -1
   protected _lastTime: number
   protected _startTime: number
   public start(): void{
      if(!this._start){
         this._start = true;
         this._lastTime = 0;
         this._startTime = 0;
         this._loopId = window.requestAnimationFrame(this.step.bind(this))
      }
   }
   //回调函数的this不一样
   public stop(): void{
      if(this._start){
         window.cancelAnimationFrame(this.step.bind(this))
         this._start = false;
      }
   }
   protected step(nowTime: number): void{
      let divTime: number = nowTime - this._lastTime
      this.update()
      this.render()
      window.requestAnimationFrame(this.step)
   }
   public render(): void{
     
   }
   public update(): void{

   }
}
