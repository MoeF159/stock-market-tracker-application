'use server'

import { connectToDatabase } from "@/database/mongoose";

export const getAllUsersForNewsEmail = async () => {
    try{
        const mongoose = await connectToDatabase();
        const db = mongoose.connection.db;
        if (!db) {
            console.error('Database connection is not available');
            return [];
        }
        const users = await db.collection('user').find(
            { email: { $exists : true, $ne : null}},
            { projection: { _id: 1, id: 1, email: 1, name: 1, country: 1 }}
        ).toArray();
        
        // Some auth providers store the user id in `_id`, some in `id`.
        // Normalize to a single shape for the email pipeline.
        return users.filter((user) => user.email && user.name).map ((user) => ({
            id: user.id || user._id?.toString() || '',
            email: user.email,
            name: user.name,
        }));
    }catch(error){
        console.error('Error fetching users for news email:', error);
        return [];
    }
}