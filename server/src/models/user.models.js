import mongoose, { Schema } from "mongoose";

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"

const userSchema = new Schema({
    userName: {
        type: String,
        required: [true, "please add a name"],
        unique: true,
        lowercase: true,
        trim: true,
        maxlength: [50, "name can't be more than 50 characters"]
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [7, "password must be at least 7 characters"],
        select: false
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: "user"
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    }
}, { timestamps: true, });

userSchema.pre("save", async function (next) {
    if (!this.isModified("password"))
     return next();
    this.password = await bcrypt.hash(this.password, 12)
})




export const User = mongoose.model("User", userSchema)