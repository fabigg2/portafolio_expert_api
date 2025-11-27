"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const studiesSchema = new mongoose_1.Schema({
    institution: {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        required: true,
    },
    fieldOfStudy: {
        type: String,
        required: false,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const Studies = (0, mongoose_1.model)('Studies', studiesSchema);
exports.default = Studies;
