const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'm4rko1000',
    database:'ApiSimple',
    port: '5432'
});


const getUsers = async (req,res) =>{
    const response = await pool.query('SELECT * FROM  users');
    res.status(200).json(response.rows);
};

const getUsersById = async (req,res) =>{
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM  users WHERE id = $1', [id]);
    res.json(response.rows);
};

const createUsers = async (req,res) =>{
    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)',[name, email]);
    console.log(response);

res.json({
    message: 'user add',
    body: {
        user: { name, email}
    }
})
};

const deleteUsers = async (req,res) =>{
const id = req.params.id;
const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
console.log(response);
res.json(`User ${id} deleted`);
};

const updateUsers = async (req,res) =>{
    const id = req.params.id;
    const {name,email } = req.body;
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [
        name,
        email,
        id
    ]);
    console.log(response);
    res.json('User updated');
    };

module.exports = {
    getUsers,
    createUsers,
    getUsersById,
    deleteUsers,
    updateUsers
}