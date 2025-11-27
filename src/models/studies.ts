import {Schema, model} from 'mongoose';

const studiesSchema = new Schema({
    institution: {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        required: true,
    },
    fieldOfStudy: { 
        type: String,
        required: false,
    },
    startDate: {    
        type: Date,
        required: true,
    },
    endDate: {
        type: Date, 
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const Studies = model('Studies', studiesSchema);
export default Studies;