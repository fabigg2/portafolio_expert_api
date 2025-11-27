import {Schema, model} from 'mongoose';

const SkillSchema = new Schema({
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
const Skill = model('Skill', SkillSchema);
export default Skill;