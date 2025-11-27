import Skill from "../models/skill";

class SkillService {
    async getAllSkills() {
        return await Skill.find();
    }

    async getSkillById(id: string) {
        return await Skill.findById(id);
    }

    async createSkill(data: any) {
        const newSkill = new Skill(data);
        return await newSkill.save();
    }

    async updateSkill(id: string, data: any) {
        return await Skill.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteSkill(id: string) {
        return await Skill.findByIdAndDelete(id);
    }
}

export default new SkillService();