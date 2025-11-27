"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SkillSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: false,
    },
    images: [{
            type: String,
            required: false,
        }],
    description: {
        type: String,
        required: false,
    },
    reactions: {
        likes: {
            type: Number,
            required: false,
        },
    },
}, {
    timestamps: true,
    versionKey: false,
});
const Skill = (0, mongoose_1.model)('Skill', SkillSchema);
exports.default = Skill;
