import sgMail from '@sendgrid/mail';
import config from '../../configs/config.js';
import emailTemplate from './emailTemplate.js';

// set api key
sgMail.setApiKey(config.sendgrid_api_key);

const sendMail = async (name, email, message) => {
  const replaceTemplateVariables = emailTemplate
    .replace('{{ name }}', name)
    .replace('{{ email }}', email)
    .replace('{{ message }}', message);

  const msg = {
    to: config.to_email, // Change to your recipient
    from: config.from_email, // Change to your verified sender
    subject: 'Contact Query Form Submission',
    text: 'and easy to do anywhere, even with Node.js',
    html: replaceTemplateVariables,
  };

  //   await sgMail
  //     .send(msg)
  //     .then((response) => {
  //       console.log(response[0].statusCode);
  //       console.log(response[0].headers);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  await sgMail.send(msg).then(
    () => {},
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
};

export default sendMail;
