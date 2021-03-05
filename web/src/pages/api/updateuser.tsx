import { NextApiRequest, NextApiResponse } from "next";
import excuteQuery from '../../db';

export default async (req:NextApiRequest, res:NextApiResponse) => {
    const { level, currentXp, totalXp, challengesCompleted, id } = req.body;
    
    const query = "UPDATE users SET level = ?, currentXp = ?, totalXp = ?, challengesCompleted = ? WHERE githubId = ?";
    const values = [level, currentXp, totalXp, challengesCompleted, id];

    await excuteQuery({ query, values });

    res.status(200);
    res.json({ success: true });
}