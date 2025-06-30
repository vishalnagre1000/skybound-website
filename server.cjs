const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Setup the email transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'skyboundstories.in@gmail.com',
      pass: 'optscsrupixukrsy', // App password from Google
    },
  });

  // Email to yourself (owner)
  const ownerMailOptions = {
    from: email,
    to: 'skyboundstories.in@gmail.com', // ✅ corrected recipient
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  // Auto-reply to user
  const autoReplyOptions = {
    from: 'skyboundstories.in@gmail.com',
    to: email,
    subject: 'Thanks for contacting Skybound Stories',
    text: `Hi ${name},\n\nThank you for reaching out! We’ve received your message and will get back to you soon.\n\n- Skybound Stories`,
  };

  try {
    // Send both emails
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(autoReplyOptions);

    res.status(200).json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
