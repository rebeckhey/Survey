import emailjs from '@emailjs/browser';


const SendBuyMail = (companyname, phonenumber, email) => {
    const templateParams = {
        companyname: companyname,
        phonenumber: phonenumber,
        email:email,
    };
    emailjs.send(process.env.REACT_APP_EMAILKEY,process.env.REACT_APP_TEMPLATE_2, templateParams, process.env.REACT_APP_PUBLIC_KEY)
        .then((response) => {
           console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
           console.log('FAILED...', err);
        });
}

export default SendBuyMail
