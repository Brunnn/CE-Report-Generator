define(["require", "exports", "./Models/CloseWindowHandler", "./Models/Form", "./Models/FullscreenTextarea", "./Util/DaylyPrhase"], function (require, exports, CloseWindowHandler_1, Form_1, FullscreenTextarea_1, DaylyPrhase_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    DaylyPrhase_1.DaylyPhrase();
    var closeWindowHandler = new CloseWindowHandler_1.CloseWindowHandler(function () {
        console.log("before close");
    });
    var form = new Form_1.Form();
    var fullscreenTextare = new FullscreenTextarea_1.FullscreenTextarea();
});
