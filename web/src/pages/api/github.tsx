import { NextApiRequest, NextApiResponse } from "next";

import axios from 'axios';

export default async (req:NextApiRequest, res:NextApiResponse) => {
    const { code } = req.body;
    
    const response = await axios.post('https://github.com/login/oauth/access_token', {
        client_id: process.env.githubClientId,
        client_secret: process.env.githubClientSecret,
        code,
    }, {
        headers: {
            "Accept": "application/json"
        }
    });

    res.status(200);
    res.json({ token: response.data.access_token });
}