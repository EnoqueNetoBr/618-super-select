import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

export const register = async (req, resp) => {
  // const { nome, email, senha } = req.body
  const { signUpName, signUpEmail, signUpPassword } = req.body;
  console.log(req.body);

  if (!signUpName || !signUpEmail || !signUpPassword) {
    console.log('Todos os campos são obrigatorios.');
    return resp.status(400).send('Todos os campos são obrigatórios.');
  }

  try {
    const consulta = userModel.findUserByEmail(signUpEmail);
    if (consulta.lenght > 0) {
      return resp.status(409).send('Email já cadastrado.');
    }

    const senhaHash = await bcrypt.hash(signUpPassword, 10);

    userModel.createUser(signUpName, signUpEmail, senhaHash);

    resp.status(201).send('Usuário cadastrado com sucesso!');
  } catch (err) {
    console.error(err);
    resp.status(500).send('Erro ao cadastrar usuário.');
  }
};

// export const login = async (req, resp) => {
//   const { loginUserEmail, loginPassword } = req.body;
//   console.log(loginUserEmail, loginPassword);

//   const senhaHash = await bcrypt.hash(loginPassword, 10);

//   try {
//     const consulta = await userModel.findUserByEmail(loginUserEmail);

//     if (consulta.lenght > 0) {
//       const isOnDB = await userModel.findUserByEmail(loginUserEmail);
//       console.log(isOnDB);
//       resp.status(400).send('Usuário não cadastrado.');
//     } else {
//       resp.status(400).send('Usuário não cadastrado.');
//     }
//   } catch {
//     console.log('Error on login try catch block.');
//   }

//   return;
// };

export const login = async (req, resp) => {
  const { loginUserEmail, loginPassword } = req.body;

  try {
    // Find user by email
    const user = await userModel.findUserByEmail(loginUserEmail);

    // Check if user exists
    if (!user || user.length === 0) {
      return resp.status(400).send('Usuário não cadastrado.'); // User not found
    }

    // Assuming user[0] contains the user object
    const storedHash = user.password; // Adjust based on your user model
    console.log(storedHash);
    console.log(user);

    // Compare the provided password with the stored hash
    const isPasswordValid = await bcrypt.compare(loginPassword, storedHash);

    if (!isPasswordValid) {
      return resp.status(401).send('Senha incorreta.'); // Invalid password
    }

    // If everything is fine, you can send a success response
    // resp.status(200).send('Login bem-sucedido!'); // Successful login

    const userEmail = loginUserEmail;
    const currentUser = { email: userEmail };

    const accessToken = jwt.sign(currentUser, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
    resp.json({ accessToken: accessToken });
  } catch (error) {
    console.error('Error during login:', error);
    resp.status(500).send('Erro interno do servidor.'); // Internal server error
  }
};

function authenticateToken(req, resp, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    return resp.sendStatus(401);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, currentUser) => {
    if (err) return resp.senStatus(403);
    req.userEmail = currentUser; //VERIFY THIS LINE OF CODE!!!
    next();
  });
}
