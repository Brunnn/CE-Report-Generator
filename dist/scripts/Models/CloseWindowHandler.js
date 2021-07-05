define(["require", "exports", "../Util/Util"], function (require, exports, Util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CloseWindowHandler = void 0;
    var CloseWindowHandler = /** @class */ (function () {
        function CloseWindowHandler(beforeCloseCallback) {
            this.delta = 500;
            this.lastKeypressTime = 0;
            var $this = this;
            document.addEventListener("keyup", function (event) { return $this.closeWindowHandler(event, beforeCloseCallback); });
        }
        CloseWindowHandler.prototype.closeWindowHandler = function (event, callback) {
            if (event.code == "Escape" || event.key == "Escape") {
                var thisKeypressTime = new Date().getTime();
                if (thisKeypressTime - this.lastKeypressTime <= this.delta) {
                    callback();
                    Util_1.Util.closeWindow();
                    thisKeypressTime = 0;
                }
                this.lastKeypressTime = thisKeypressTime;
            }
        };
        return CloseWindowHandler;
    }());
    exports.CloseWindowHandler = CloseWindowHandler;
});
