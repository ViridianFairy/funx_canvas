export class InputBase{
   public altKey: boolean;
   public ctrlKey: boolean;
   public shiftKey: boolean;
   public type: InputEventType;
   public constructor(altKey: boolean = false,
   ctrlKey: boolean = false, shiftKey: boolean = false,
   type: InputEventType){
         this.altKey = altKey
         this.shiftKey = shiftKey
         this.ctrlKey = ctrlKey
         this.type = type
   }
}
export enum InputEventType {
   MOUSE_EVENT,
   MOUSE_DOWN,
   MOUSE_UP,
   MOUSE_MOVE,
   MOUSE_DRAG,
   KEY_EVENT,
   KEY_UP,
   KEY_DOWN,
   KEY_PRESS,
};
export class MouseEvent extends InputBase{
   public button: number;
   public canvasPos: vec2;
   public localPos: vec2;
   public constructor(
      canvasPos: vec2,
      button: number,
      altKey: boolean = false,
      ctrlKey: boolean = false,
      shiftKey: boolean = false,
      type: InputEventType
   ){
      super(altKey, ctrlKey, shiftKey, type)
      this.canvasPos = canvasPos
      this.button = button
   }
}
class vec2{

}