import connection from "./../db/connections.js";

class UserModel {

    findUserByEmail = async (email) => {
        const query = `SELECT * FROM users WHERE email = ?`;
        const [result] = await connection.execute(query, [email]);
        return result[0]; ;
    }

    createUser = async(name, email, passwordHash) => {
        const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`
        const [result] = await connection.execute(query, [name, email, passwordHash])
        return result.insertId
    }


}

export default new UserModel();