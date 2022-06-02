import emailjs from '@emailjs/browser';


const SendMail = (companyname, phonenumber, email, summary, answers) => {
    const templateParams = {
        companyname: companyname,
        phonenumber: phonenumber,
        email:email,
        score:summary,
        answers:answers
    };
    emailjs.send(process.env.REACT_APP_EMAILKEY,process.env.REACT_APP_TEMPLATE_1, templateParams, process.env.REACT_APP_PUBLIC_KEY)
        .then((response) => {
           console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
           console.log('FAILED...', err);
        });
}

export default SendMail
