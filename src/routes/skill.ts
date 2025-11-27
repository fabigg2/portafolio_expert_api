import {Router} from 'express';
import skill from '@/controllers/skill';

const skillRouter = Router();

// find all skills 
skillRouter.get('/', async (req, res) => {
    skill.getAllSkills(req, res);
});

// find skill by id
skillRouter.get('/:id', async (req, res) => {
    skill.getSkillById(req, res);
});

// create new skill
skillRouter.post('/', async (req, res) => {
    skill.createSkill(req, res);
});

// update skill by id
skillRouter.put('/:id', async (req, res) => {
    skill.updateSkill(req, res);
});

// delete skill by id
skillRouter.delete('/:id', async (req, res) => {
    skill.deleteSkill(req, res);
});

export default skillRouter;