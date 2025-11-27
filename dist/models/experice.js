"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ExperienceSchema = new mongoose_1.Schema({
    company: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: false,
    },
    responsibilities: [{
            type: String,
            required: false,
        }],
    technologies: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Skill',
            required: false,
        }],
}, {
    timestamps: true,
    versionKey: false,
});
const Experience = (0, mongoose_1.model)('Experience', ExperienceSchema);
exports.default = Experience;
