import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

import User from '../models/User';

const transporter = nodemailer.createTransport({
  service: 'your-email-service',
  auth: {
    user: 'your-email-username',
    pass: 'your-email-password',
  },
});

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ email }, 'your-secret-key', { expiresIn: '1h' });

    return res.json({ token });
  } catch (error) {
    console.error('Login error', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function forgotPassword(req, res) {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const newPassword = generateRandomPassword();
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    await transporter.sendMail({
      from: 'your-email-username',
      to: email,
      subject: 'Password Reset',
      text: `Your new password: ${newPassword}`,
    });

    return res.json({ message: 'Password reset email sent' });
  } catch (error) {
    console.error('Forgot password error', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function generateUser(req, res) {
  const { email, password } = req.body;

  console.log(req.body);

  try {
    // Sprawdź, czy użytkownik o podanym adresie e-mail już istnieje
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists');
      return res.status(400).json({ message: 'User already exists' });
      return;
    }

    // Zaszyfruj hasło
    const hashedPassword = await bcrypt.hash(password, 10);

    // Stwórz nowego użytkownika
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    console.log('User created successfully');
    return res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Failed to generate user', error);
    return res.status(400).json({ message: 'Failed to generate user' });
  }
}

function generateRandomPassword() {
  // ...
  // Implementacja funkcji generateRandomPassword
  // ...
}

export default {
  login,
  generateUser,
  forgotPassword,
};
