const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'skyboundstories.in@gmail.com',
        pass: 'optscsrupixukrsy', // use Netlify ENV later
      },
    });

    const ownerMailOptions = {
      from: email,
      to: 'skyboundstories.in@gmail.com',
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    const autoReplyOptions = {
      from: 'skyboundstories.in@gmail.com',
      to: email,
      subject: 'Thanks for contacting Skybound Stories',
      text: `Hi ${name},\n\nThank you for reaching out! We’ve received your message and will get back to you soon.\n\n- Skybound Stories`,
    };

    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(autoReplyOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Emails sent successfully' }),
    };
  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
