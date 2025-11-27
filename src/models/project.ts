import { Schema, model } from 'mongoose';
import Skill from './skill';

const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    url: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    technologies: [{
        type: Schema.Types.ObjectId,
        ref: 'Skill',
        required: false,
    }],
}, {
    timestamps: true,
    versionKey: false,
});
const Project = model('Project', projectSchema);
export default Project;