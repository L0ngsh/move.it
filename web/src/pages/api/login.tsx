import { NextApiRequest, NextApiResponse } from "next";

import axios from 'axios';

import excuteQuery from '../../db';

export default async (req:NextApiRequest, res:NextApiResponse) => {
    const { token } = req.body;
    
    const githubResponse = await axios.get('https://api.github.com/user', {
        headers: {
            Authorization: `token ${token}`,
        }
    });

    const { login, id } = githubResponse.data;

    if (await existsUser({ id })){
        await updateUsername({ login, id });
    } else {
        await registerUser({ login, id });
    }

    res.status(200);
    res.json({ id });

    async function existsUser({ id } ) {
        const query = "SELECT * FROM users WHERE githubId = ?";
        const values = [id];
    
        const response:any = await excuteQuery({ query, values });
    
        if (response.length > 0) {
            return true;
        } else {
            return false;
        }
    }
    
    async function updateUsername({ login, id }){
        const query = "UPDATE users (githubName) VALUES (?) WHERE githubId = ?";
        const values = [ login, id ];
    
        await excuteQuery({ query, values });
    }
    
    async function registerUser({ login, id }) {
        const query = "INSERT INTO users (githubName, githubId) VALUES (?, ?)";
        const values = [ login, id ];
    
        await excuteQuery({ query, values });
    }
}