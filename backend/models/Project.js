import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema(
    {
        projectId : 
        {
            type : String,
            required : true,
            unique : true
        },
        ownerId : 
        {
            type : String,
            required : true
        },
        ownerName : 
        {
            type: String,
            required : true
        },
        ownerEmail :
        {
            type : String,
            required : true
        },
        tag : {
            type: String
        },
        description : 
        {
            type : String,
            required: true
        },
        collaborators : 
        [
            {
                collaboratorId : 
                {
                    type:  String,
                    required : true
                },
                collaboratorEmail :
                {
                    type : String,
                    required : true
                },
                collaboratorName : 
                {
                    type : String,
                    required : true
                }                
            }
        ]

    }
)

export default mongoose.model("Projects",ProjectSchema);  