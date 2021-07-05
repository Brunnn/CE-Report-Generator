import { Util } from "../Util/Util";

export class CloseWindowHandler{
    private readonly delta: number = 500;
    private lastKeypressTime: number = 0
    constructor(beforeCloseCallback:() => void){
        var $this = this;
        document.addEventListener("keyup", (event) => $this.closeWindowHandler(event, beforeCloseCallback));
    }

    private closeWindowHandler(event: KeyboardEvent, callback: () => void): void
    {       
        if ( event.code == "Escape" || event.key == "Escape"){
            var thisKeypressTime: number = new Date().getTime();
            if (thisKeypressTime - this.lastKeypressTime <= this.delta){
                callback();
                Util.closeWindow();
                thisKeypressTime = 0;
            }
            this.lastKeypressTime = thisKeypressTime;
        }
    }
}
