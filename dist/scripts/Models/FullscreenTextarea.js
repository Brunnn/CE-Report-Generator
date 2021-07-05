define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FullscreenTextarea = void 0;
    var FullscreenTextarea = /** @class */ (function () {
        function FullscreenTextarea() {
            this.textarea = document.querySelector("#fullscreen-textarea");
            this.label = document.querySelector("#fullscreen-textarea-label");
            this.closeButton = document.querySelector("#close-fullscreen-button");
            this.wrapper = document.querySelector("#fullscreen-textarea-wrapper");
            this.currentTextareaFieldTarget = null;
            var $this = this;
            this.closeButton.addEventListener("click", function () { return $this.closeFullscreen(); });
        }
        FullscreenTextarea.prototype.showFullscreen = function (textareaField) {
            console.log("Opening fullsrc!");
            this.currentTextareaFieldTarget = textareaField;
            this.textarea.value = this.currentTextareaFieldTarget.textareaElement.value;
            this.label.textContent = this.currentTextareaFieldTarget.labelElement.textContent;
            this.wrapper.classList.add("showing");
        };
        FullscreenTextarea.prototype.closeFullscreen = function () {
            this.currentTextareaFieldTarget.textareaElement.value = this.textarea.value;
            this.wrapper.classList.remove("showing");
            console.log("Closing!");
        };
        return FullscreenTextarea;
    }());
    exports.FullscreenTextarea = FullscreenTextarea;
});
