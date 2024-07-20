import courseModel from "../models/courseModel.js"

export const createCourse = async(req,res)=>{
    try {
        const {courseTitle, courseDescription, courseTeacher} = req.body;

        if( !courseTitle || !courseDescription || !courseTeacher){
            return res.status(400).json({message: "All fields are required"})
        }
        const courseExist = await courseModel.findOne({courseTitle});
        if(courseExist){
            return res.status(400).json({message: "Course already exists", status: false})
        }
        const newCourse = new courseModel({
            
            courseTitle,
            courseDescription,
            courseTeacher
        });
        await newCourse.save();
        res.status(201).json({message: "Course created successfully", status: true, data: newCourse})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error", status: false, error:error})
    }
}

export const getAllCourses = async(req,res)=>{
    try {
        const courses = await courseModel.find();
        res.json({message: "Courses retrieved successfully", status: true, data: courses})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error", status: false, error:error})
    }
}

export const getCourseById = async(req,res)=>{
    const {id} = req.params
    try {
        const course = await courseModel.findById(id);
        if(!course){
            return res.status(404).json({message: "Course not found", status: false})
        }
        res.json({message: "Course retrieved successfully", status: true, data: course})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error", status: false, error:error})
    }
}

export const updateCourse = async (req, res) => {
    const { id } = req.params; 

    try {
        const updatedCourse = await courseModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedCourse) {
            return res.status(404).json({ message: "Course not found", status: false });
        }
        res.status(200).json({ message: "Course updated successfully", status: true, data: updatedCourse });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error", status: false, error: error.message });
    }
};

export const deleteCourse = async(req,res)=>{
    try {
        const deletedCourse = await courseModel.findByIdAndDelete(req.params.id);
        if(!deletedCourse){
            return res.status(404).json({message: "Course not found", status: false})
        }
        res.json({message: "Course deleted successfully", status: true, data: deletedCourse})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error", status: false, error:error})
    }
}

