// import mongoose from "mongoose";

const communityPost = mongoose.Schema(
    {
        authorEmail : 
        {
            type : String,
            reuqired : true,
            unique : true
        },
        authorName : {
            type : String,
            required : true
        },
        question : {
            type : String,
            required : true
        },
        description : {
            type : String,
            required : true
        },
        comments : [
            {
                commentId : {
                    type : Number,
                    required : true
                },
                commenterEmail : {
                    type : String,
                    required : true
                },
                commenterName : {
                    type : String,
                    required : true
                },
                content : {
                    type : String,
                    required : true
                },
                timestamps : {
                    type: Date,
                    default : Date.now
                }
            }
        ]
    }
,{timestamps : true})

// export default mongoose.model('CommunityPosts',communityPost);