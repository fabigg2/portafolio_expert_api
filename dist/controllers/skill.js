"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skill_1 = __importDefault(require("../services/skill"));
class SkillController {
    async getAllSkills(req, res) {
        try {
            const skills = await skill_1.default.getAllSkills();
            res.status(200).json(skills);
        }
        catch (error) {
            res.status(500).json({ message: 'Error retrieving skills', error });
        }
    }
    async getSkillById(req, res) {
        try {
            const skill = await skill_1.default.getSkillById(req.params.id);
            if (!skill) {
                return res.status(404).json({ message: 'Skill not found' });
            }
            res.status(200).json(skill);
        }
        catch (error) {
            res.status(500).json({ message: 'Error retrieving skill', error });
        }
    }
    async createSkill(req, res) {
        try {
            const newSkill = await skill_1.default.createSkill(req.body);
            res.status(201).json(newSkill);
        }
        catch (error) {
            res.status(500).json({ message: 'Error creating skill', error });
        }
    }
    async updateSkill(req, res) {
        try {
            const updatedSkill = await skill_1.default.updateSkill(req.params.id, req.body);
            if (!updatedSkill) {
                return res.status(404).json({ message: 'Skill not found' });
            }
            res.status(200).json(updatedSkill);
        }
        catch (error) {
            res.status(500).json({ message: 'Error updating skill', error });
        }
    }
    async deleteSkill(req, res) {
        try {
            const deletedSkill = await skill_1.default.deleteSkill(req.params.id);
            if (!deletedSkill) {
                return res.status(404).json({ message: 'Skill not found' });
            }
            res.status(200).json(deletedSkill);
        }
        catch (error) {
            res.status(500).json({ message: 'Error deleting skill', error });
        }
    }
}
exports.default = new SkillController();
