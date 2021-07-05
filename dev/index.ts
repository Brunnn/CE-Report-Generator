import { CloseWindowHandler } from "./Models/CloseWindowHandler";
import { Form } from "./Models/Form";
import { FullscreenTextarea } from "./Models/FullscreenTextarea";
import { DaylyPhrase } from "./Util/DaylyPrhase";
import { Util } from "./Util/Util";


DaylyPhrase();

const closeWindowHandler = new CloseWindowHandler(() => {
   console.log("before close");
});

const form = new Form();
const fullscreenTextare = new FullscreenTextarea();
