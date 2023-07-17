import axios from "axios";

const SendEmail = async (email: string, message: string, name:string, recaptcha:string) => {
    return axios({
        method: 'post',
        url: 'http://localhost:3001/api/email',
        data: {
            email: email,
            message: message,
            name: name,
            recaptcha: recaptcha,
        },
    })
};

export default SendEmail;