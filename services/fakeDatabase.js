"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDogs = getDogs;
const dogModel_1 = require("../models/dogModel");
function getDogs() {
    return [new dogModel_1.Dog("Kalle", "Pitbull"), new dogModel_1.Dog("Stefan", "Labbis")];
}
