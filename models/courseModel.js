import mongoose from 'mongoose';

const  courseSchema = mongoose.Schema({
    // image:{
    //     type: String,
    //     required: true
    // },
    courseTitle:{
        type: String,
        required: true
    },
    courseDescription:{
        type: String,
        required: true
    },
    courseTeacher:{
        type: String,
        required: true
    }
});

const courseModel = mongoose.model("course", courseSchema);
export default courseModel