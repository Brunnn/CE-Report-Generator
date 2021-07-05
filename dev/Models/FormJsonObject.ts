interface ITextareaJson{
    id: string,
    value: string | null
}

interface IInputJson{
    id: string,
    value: string | null
}

interface ICheckboxJson{
    id: string,
    checked: boolean
}


class CheckboxJson implements ICheckboxJson{
    public id: string;
    public checked: boolean;
}

class InputJson implements IInputJson{
    public id: string;
    public value: string;
}

class TextareaJson implements ITextareaJson{
    public id: string;
    public value: string;

}



export class FormJsonObject{
    public inputs: Array<IInputJson>;
    public textareas: Array<ITextareaJson>;
    public checkboxes: Array<ICheckboxJson>;
    
    constructor(inputs: NodeListOf<HTMLInputElement>, textareas: NodeListOf<HTMLTextAreaElement>, checkboxes: NodeListOf<HTMLInputElement> ){
        // this.inputs = this.parseInputs(inputs);
    } 

    // private parseTextareas(textareas:NodeListOf<HTMLTextAreaElement>): Array<ITextareaJson>{

    // }


    // private parseCheckboxes(checkboxes: NodeListOf<HTMLInputElement>): Array<ICheckboxJson>{

    // }


    // private parseInputs(inputs: NodeListOf<HTMLInputElement>): Array<IInputJson>{

    // }
}