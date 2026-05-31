import { User } from "../models/user.models.js"
import validationResult from "express-validator"

const register =async (req, res) => {

    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res
        .status(400)
        .json({success:false,error:error.array()});
    }




    try {

        const { userName, email, password } = req.body;

        //console.log("email:", email);

        const userExists = await User.findOne({ email });

        if (userExists) return res
            .status(400)
            .json({ success: false, massage: "user already exists" })


        const user = await User.create({ userName, email, password })
        return res
            .status(201)
            .json({
                success: true,
                data: user,
            });


    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal Server Error"
        });
    }


}

export { register }