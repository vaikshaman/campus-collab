import mongoose from "mongoose";

// Image to be put in Upper-level schema
const ProjectSchema = mongoose.Schema(
    {
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
        skills : {
            type : String
        },
        imagePath : {
            type: String
        },
        imageName : {
            type: String
        },
        projectName : {
            type: String,
            required : true
        },
        description : 
        {
            type : [String]
        },
        descriptionType : 
        {
            type : [String]
        },
        collaborators : 
        [
            {
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
        isCollabOpen : {
            type : Boolean,
            required : true
        },
        reviews : [
            {
                reviewerEmail : {
                    type : String,
                    required : true
                },
                reviewerName  : {
                    type : String,
                    required : true
                },
                review : {
                    type : String,
                    required : true
                },
                timestamp : {
                    type : Date,
                    default : Date.now
                }
            }
        ]

    }
)

export default mongoose.model("Projects",ProjectSchema);  