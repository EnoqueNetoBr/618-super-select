import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

export const register = async (req, resp) => {
  // const { nome, email, senha } = req.body

  console.log(req.body);

  //     if (!nome || !email || !senha) {
  //         return resp.status(400).send("Todos os campos são obrigatórios.")
  //     }

  //     try {
  //         const consulta = userModel.findUserByEmail(email)
  //         if (consulta.lenght > 0) {
  //             return resp.status(409).send("Email já cadastrado.")
  //         }

  //         const senhaHash = await bcrypt.hash(senha, 10);

  //         userModel.createUser(nome, email, senhaHash);

  resp.status(201).send('Usuário cadastrado com sucesso!');

  //     }
  //     catch (err) {

  //         console.error(err)
  //         resp.status(500).send("Erro ao cadastrar usuário.")
  //     }
};
