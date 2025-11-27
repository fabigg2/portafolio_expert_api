import {Schema, model} from 'mongoose';


const ExperienceSchema = new Schema({
    company: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    startDate: {    
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: false,
    },
    responsibilities: [{
        type: String,
        required: false,    
    }],
    technologies: [{
        type: Schema.Types.ObjectId,
        ref: 'Skill',
        required: false,
    }],
}, {
    timestamps: true,
    versionKey: false,
});
const Experience = model('Experience', ExperienceSchema);
export default Experience;