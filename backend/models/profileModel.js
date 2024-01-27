const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        schoolName: { type: String, required: true },
        cityName: { type: String, required: true },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Profile", ProfileSchema);
