import emailjs from '@emailjs/browser';


const SendMail = (companyname, phonenumber, email, summary, answers) => {
    const templateParams = {
        companyname: companyname,
        phonenumber: phonenumber,
        email:email,
        score:summary,
        answers:answers
    };
    emailjs.send('service_djc76ah','template_teofawd', templateParams, 'Wj-nkAKRC-V30DTQX')
        .then((response) => {
           console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
           console.log('FAILED...', err);
        });
}

export default SendMail
