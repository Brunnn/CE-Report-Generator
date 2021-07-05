export class TextareaField{
    textareaElement: HTMLTextAreaElement
    labelElement: HTMLLabelElement

    constructor(textarea: HTMLTextAreaElement, label: HTMLLabelElement){
        this.textareaElement = textarea
        this.labelElement = label
    }
}