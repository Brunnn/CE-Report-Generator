import { TextareaField } from "./TextareaField"
import { FullscreenTextarea } from "./FullscreenTextarea"
import { Util } from "../Util/Util";
import { FormJsonObject } from "./FormJsonObject";
export class Form{
    public textareaGroup: Array<TextareaField>;
    public fullscreenTextarea: FullscreenTextarea = new FullscreenTextarea();
    public formJson: string;
    private mainForm: HTMLFormElement = document.querySelector("#main-form");
    constructor(){
        this.textareaGroup = this.getTextareaGroup();

        var $this = this;
        this.textareaGroup.forEach((textareaItem, index) => {
            var fullscreenIcon: Element = Util.html2Element('<i class="fas fa-expand expand-button" data-target-index="' + index + '"></i>');            
            fullscreenIcon.addEventListener("click", () => {
                $this.fullscreenTextarea.showFullscreen(textareaItem);
            });
            
            textareaItem.textareaElement.parentNode.appendChild(fullscreenIcon);
        });


    }


    private getTextareaGroup(): Array<TextareaField>{
        var textareaGroup: Array<TextareaField> = new Array<TextareaField>();
        document.querySelectorAll(".text-area-field").forEach((textAreaElement: HTMLTextAreaElement) => {
            var label: HTMLLabelElement = document.querySelector("#"+textAreaElement.id+"-label");
            if (!label)
                throw new Error("Não foi possível encontrar a label de "+textAreaElement+" verifique se sua label possui como ID  (IDTextarea + \"-label\")")
            else{
                var textAreaField = new TextareaField(textAreaElement, label);
                textareaGroup.push(textAreaField);
            }
        });
        return textareaGroup;
    }

    public saveFormContent(): void{

    }

    public getFormJson(): string{
        var formTextareas: NodeListOf<HTMLTextAreaElement> = this.mainForm.querySelectorAll("textarea")
        var formCheckboxes: NodeListOf<HTMLInputElement>  = this.mainForm.querySelectorAll("input[type=\"checkbox\"]")
        var formInputs: NodeListOf<HTMLInputElement>  = this.mainForm.querySelectorAll("input")
        var valueObject: FormJsonObject = new FormJsonObject(formInputs, formTextareas, formCheckboxes);

        return "";
    }
}


