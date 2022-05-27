import emailjs from '@emailjs/browser';


const SendBuyMail = (companyname, phonenumber, email) => {
    const templateParams = {
        companyname: companyname,
        phonenumber: phonenumber,
        email:email,
    };
    emailjs.send('service_djc76ah','template_mnefkx8', templateParams, 'Wj-nkAKRC-V30DTQX')
        .then((response) => {
           console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
           console.log('FAILED...', err);
        });
}

export default SendBuyMail
