import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Corrected function name
export const sendProviderConfirmationEmail = (to: string, token: string) => {
  transporter.sendMail({
    to,
    subject: 'Confirm Placement Authorization',
    text: `Confirmation link: ${process.env.BASE_URL}/confirm/${token}`
  });
};