import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '~models/User';
import { handleAuthError, handleAuthResponse } from '~utils/auth/handleAuthResponse';

export async function login({ email, password }) {
  // TODO: Ja to kiedyś zrobię
  // try {
  //   const user = await User.findOne({ email });
  //   if (!user) {
  //     return handleAuthError('User not found', 404);
  //   }

  //   const passwordMatch = await bcrypt.compare(password, user.password);
  //   if (!passwordMatch) {
  //     return handleAuthError('Invalid password', 401);
  //   }

  //   const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });

  //   return handleAuthResponse(token, user);
  // } catch (error) {
  //   return handleAuthError('Internal server error', 500, error);
  // }
}

async function forgotPassword(req, res) {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const newPassword = 'fwenofew';
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

export async function createUser({ email, password }) {
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return handleAuthError('User already exists', 400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    return handleAuthResponse('User created', newUser);
  } catch (error) {
    return handleAuthError('Failed to generate user', 500, error);
  }
}
