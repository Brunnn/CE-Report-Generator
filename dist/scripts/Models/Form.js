define(["require", "exports", "./TextareaField", "./FullscreenTextarea", "../Util/Util", "./FormJsonObject"], function (require, exports, TextareaField_1, FullscreenTextarea_1, Util_1, FormJsonObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Form = void 0;
    var Form = /** @class */ (function () {
        function Form() {
            this.fullscreenTextarea = new FullscreenTextarea_1.FullscreenTextarea();
            this.mainForm = document.querySelector("#main-form");
            this.textareaGroup = this.getTextareaGroup();
            var $this = this;
            this.textareaGroup.forEach(function (textareaItem, index) {
                var fullscreenIcon = Util_1.Util.html2Element('<i class="fas fa-expand expand-button" data-target-index="' + index + '"></i>');
                fullscreenIcon.addEventListener("click", function () {
                    $this.fullscreenTextarea.showFullscreen(textareaItem);
                });
                textareaItem.textareaElement.parentNode.appendChild(fullscreenIcon);
            });
        }
        Form.prototype.getTextareaGroup = function () {
            var textareaGroup = new Array();
            document.querySelectorAll(".text-area-field").forEach(function (textAreaElement) {
                var label = document.querySelector("#" + textAreaElement.id + "-label");
                if (!label)
                    throw new Error("Não foi possível encontrar a label de " + textAreaElement + " verifique se sua label possui como ID  (IDTextarea + \"-label\")");
                else {
                    var textAreaField = new TextareaField_1.TextareaField(textAreaElement, label);
                    textareaGroup.push(textAreaField);
                }
            });
            return textareaGroup;
        };
        Form.prototype.saveFormContent = function () {
        };
        Form.prototype.getFormJson = function () {
            var formTextareas = this.mainForm.querySelectorAll("textarea");
            var formCheckboxes = this.mainForm.querySelectorAll("input[type=\"checkbox\"]");
            var formInputs = this.mainForm.querySelectorAll("input");
            var valueObject = new FormJsonObject_1.FormJsonObject(formInputs, formTextareas, formCheckboxes);
            return "";
        };
        return Form;
    }());
    exports.Form = Form;
});
