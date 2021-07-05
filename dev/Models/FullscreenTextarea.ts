import { TextareaField } from "./TextareaField";

export class FullscreenTextarea {
    public textarea: HTMLTextAreaElement = document.querySelector("#fullscreen-textarea");
    public label: HTMLLabelElement = document.querySelector("#fullscreen-textarea-label");
    public closeButton: Element = document.querySelector("#close-fullscreen-button");
    public wrapper: Element = document.querySelector("#fullscreen-textarea-wrapper"); 
    public currentTextareaFieldTarget: TextareaField = null;

    constructor(){
        var $this = this;
        this.closeButton.addEventListener("click", () => $this.closeFullscreen());
    }

    public showFullscreen(textareaField: TextareaField): void{
        console.log("Opening fullsrc!");
        this.currentTextareaFieldTarget = textareaField;
        
        
        this.textarea.value = this.currentTextareaFieldTarget.textareaElement.value
        this.label.textContent = this.currentTextareaFieldTarget.labelElement.textContent
        this.wrapper.classList.add("showing");
        

    }

    public closeFullscreen(){
        this.currentTextareaFieldTarget.textareaElement.value = this.textarea.value
        this.wrapper.classList.remove("showing");

        console.log("Closing!");
    }

}



