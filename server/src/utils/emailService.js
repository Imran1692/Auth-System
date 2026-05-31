import nodemailer from "nodemailer"

const createTransportr = () => {
    return nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: false,
        auth: {
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASSWORD
        },
        tls:{
            rejectUnauthorized: false,
        },
    });
}