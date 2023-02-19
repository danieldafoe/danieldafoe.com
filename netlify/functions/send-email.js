const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async event => {
  try {
    const msg = {
      to: 'dannydafoe@gmail.com',
      from: 'dannydafoe+rosy@gmail.com',
      template_id: 'd-0e1dc29d693341bb995b78eeb4295002',
      dynamic_template_data: {
        word: event.body || 'null'
      }
    };
    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Success"
      })
    };
  } catch (e) {
    console.log(e);

    return {
      statusCode: 500,
      body: e.message
    };
  }
};