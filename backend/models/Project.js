import mongoose from "mongoose";

// Image to be put in Upper-level schema
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
        tags : [ 
            {
                tag:
                {
                    type: String
                }
            }
        ],
        projectName : {
            type: String,
            required : true
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
        ],
        projectStatus : {
            type : String,
            required : true
        },
        collabReq : {
            type : Boolean,
            required : true
        }

    }
)

export default mongoose.model("Projects",ProjectSchema);  