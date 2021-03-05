import { NextApiRequest, NextApiResponse } from "next";

import axios from 'axios';

export default async (req:NextApiRequest, res:NextApiResponse) => {
    const { token, id } = req.body;
    
    if (!token || !id) {
        res.status(200);
        res.json({ success: false })
    }

    const response = await axios.get('https://api.github.com/user', {
        headers: {
            Authorization: `token ${token}`
        }
    });

    if (response.data.id != id) {
        res.status(200);
        res.json({ success: false });
    }

    res.status(200);
    res.json({ success: true });
}