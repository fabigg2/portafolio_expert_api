import skillService from "../services/skill";

class SkillController {
    async getAllSkills(req: any, res: any) {
        try {   
            const skills = await skillService.getAllSkills();
            res.status(200).json(skills);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving skills', error });
        }
    }

    async getSkillById(req: any, res: any) {
        try {
            const skill = await skillService.getSkillById(req.params.id);
            if (!skill) {
                return res.status(404).json({ message: 'Skill not found' });
            }
            res.status(200).json(skill);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving skill', error });
        }
    }

    async createSkill(req: any, res: any) {
        try {
            const newSkill = await skillService.createSkill(req.body);
            res.status(201).json(newSkill);
        } catch (error) {
            res.status(500).json({ message: 'Error creating skill', error });
        }
    }
    async updateSkill(req: any, res: any) {
        try {
            const updatedSkill = await skillService.updateSkill(req.params.id, req.body);
            if (!updatedSkill) {
                return res.status(404).json({ message: 'Skill not found' });
            }
            res.status(200).json(updatedSkill);
        } catch (error) {
            res.status(500).json({ message: 'Error updating skill', error });
        }
}

    async deleteSkill(req: any, res: any) {
        try {
            const deletedSkill = await skillService.deleteSkill(req.params.id);
            if (!deletedSkill) {
                return res.status(404).json({ message: 'Skill not found' });
            }
            res.status(200).json(deletedSkill);
        } catch (error) {
            res.status(500).json({ message: 'Error deleting skill', error });
        }
    }
}

export default new SkillController();