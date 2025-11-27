"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skill_1 = __importDefault(require("../models/skill"));
class SkillService {
    async getAllSkills() {
        return await skill_1.default.find();
    }
    async getSkillById(id) {
        return await skill_1.default.findById(id);
    }
    async createSkill(data) {
        const newSkill = new skill_1.default(data);
        return await newSkill.save();
    }
    async updateSkill(id, data) {
        return await skill_1.default.findByIdAndUpdate(id, data, { new: true });
    }
    async deleteSkill(id) {
        return await skill_1.default.findByIdAndDelete(id);
    }
}
exports.default = new SkillService();
