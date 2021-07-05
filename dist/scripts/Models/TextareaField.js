define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TextareaField = void 0;
    var TextareaField = /** @class */ (function () {
        function TextareaField(textarea, label) {
            this.textareaElement = textarea;
            this.labelElement = label;
        }
        return TextareaField;
    }());
    exports.TextareaField = TextareaField;
});
