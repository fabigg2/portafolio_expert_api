"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SkillSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    level: {
        type: String,
        required: true,
    },
    percentage: {
        type: Number,
        required: true,
    },
    icon: {
        type: String,
        required: false,
    },
    color: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const Skill = (0, mongoose_1.model)('Skill', SkillSchema);
exports.default = Skill;
