"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const skill_1 = __importDefault(require("../controllers/skill"));
const skillRouter = (0, express_1.Router)();
// find all skills 
skillRouter.get('/', async (req, res) => {
    skill_1.default.getAllSkills(req, res);
});
// find skill by id
skillRouter.get('/:id', async (req, res) => {
    skill_1.default.getSkillById(req, res);
});
// create new skill
skillRouter.post('/', async (req, res) => {
    skill_1.default.createSkill(req, res);
});
// update skill by id
skillRouter.put('/:id', async (req, res) => {
    skill_1.default.updateSkill(req, res);
});
// delete skill by id
skillRouter.delete('/:id', async (req, res) => {
    skill_1.default.deleteSkill(req, res);
});
exports.default = skillRouter;
