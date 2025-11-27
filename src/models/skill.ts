import {Schema, model} from 'mongoose';

const SkillSchema = new Schema({
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

const Skill = model('Skill', SkillSchema);

export default Skill;