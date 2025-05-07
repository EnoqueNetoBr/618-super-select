import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js"

export const register = async (req, resp) => {
    const { nome, email, senha } = req.body

    if (!nome || !email || !senha) {
        return resp.status(400).send("Todos os campos são obrigatórios.")
    }

    try {
        const consulta = userModel.findUserByEmail(email)
        if (consulta.lenght > 0) {
            return resp.status(409).send("Email já cadastrado.")
        }

        const senhaHash = await bcrypt.hash(senha, 10);

        userModel.createUser(nome, email, senhaHash);

        resp.status(201).send("Usuário cadastrado com sucesso!");


    }
    catch (err) {

        console.error(err)
        resp.status(500).send("Erro ao cadastrar usuário.")
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ message: 'E-mail e senha são obrigatórios.' });
    }
  
    try {
      const user = await userModel.findUserByEmail(email);
  
      if (!user) {
        return res.status(400).json({ message: 'Usuário não encontrado' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.senha);
      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Senha inválida' });
      }
  
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      
      res.json({ token });
    } catch (error) {
      console.error('Erro ao realizar login:', error);
      res.status(500).json({ message: 'Erro interno no servidor.' });
    }
  };