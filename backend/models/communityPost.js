import mongoose from "mongoose";

// Image to be put in upper-level schema.
const communityPost = mongoose.Schema(
    {
        authorId : 
        {
            type : String,
            required: true,
            unique : true
        },
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
        postId : {
            type : Number,
            unique : true
        },
        title : {
            type : String,
            required : true
        },
        likecnt : {
            type : Number,
            required : true
        },
        tags : [
            {
                tag: 
                {
                    type : String
                }
            }
        ],
        content : {
            type : String,
            required : true
        },
        comments : [
            {
                commentId : {
                    type : Number,
                    required : true
                },
                commenterId : {
                    type : String,
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
                }
            }
        ]
    }
,{timestamps : true})

export default mongoose.model('CommunityPosts',communityPost);