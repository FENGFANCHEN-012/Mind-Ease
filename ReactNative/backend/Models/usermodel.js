import pool from "../../db.js";

export async function createUser(username, email, password) {
    const result = await pool.query(
        "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email",
        [username, email, password]
    );
    return result.rows[0];
}

export async function getUserProfile(userId) {
    const result = await pool.query(
        "SELECT id, username, email, created_at FROM users WHERE id = $1",
        [userId]
    );
    return result.rows[0];
}


export async function findUserByEmail(email) {
    const result = await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
    );
    return result.rows[0];
}