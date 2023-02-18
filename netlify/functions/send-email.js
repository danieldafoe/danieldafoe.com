const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'dannydafoe@gmail.com',
  from: 'dannydafoe+rosy@gmail.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

exports.handler = async event => {
  try {
    const data = JSON.parse(event.body);

    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Let's become serverless conductors!!!"
      })
    };
  } catch (e) {
    console.log(e);
    
    return {
      statusCode: 500,
      body: e.mssage
    };
  }
};