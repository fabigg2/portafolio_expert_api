"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    url: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    technologies: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Skill',
            required: false,
        }],
}, {
    timestamps: true,
    versionKey: false,
});
const Project = (0, mongoose_1.model)('Project', projectSchema);
exports.default = Project;
