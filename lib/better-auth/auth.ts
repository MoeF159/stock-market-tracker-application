import { betterAuth } from "better-auth";
import { mongodbAdapter} from "better-auth/adapters/mongodb";
import { connectToDatabase } from "@/database/mongoose";
import { nextCookies } from "better-auth/next-js";

let authInstance: ReturnType<typeof betterAuth> | null = null;

// Initialize Better Auth instance and cache it for reuse.
// This prevents creating multiple auth clients during hot reload / serverless invocations.
export const getAuth = async () => {
    if(authInstance) {
        return authInstance;
    }

    const mongoose = await connectToDatabase();
    const db = mongoose.connection.db;

    if(!db){
        throw new Error ("MongoDB connection is not established");
    }

     const secret = process.env.BETTER_AUTH_SECRET;
     const baseURL = process.env.BETTER_AUTH_URL;
     
     // Ensure required auth settings are provided at runtime.
     if (!secret) {
         throw new Error("BETTER_AUTH_SECRET environment variable is not set");
     }
     if (!baseURL) {
         throw new Error("BETTER_AUTH_URL environment variable is not set");
     }

     authInstance = betterAuth({
         database: mongodbAdapter(db as any),
         secret,
         baseURL,
         emailAndPassword: { 
            enabled: true,
            disableSignUp: false,
            requireEmailVerification: false,
            minPasswordLength: 8,
            maxPasswordLength: 128,
            autoSignIn: true,
        },
        plugins: [nextCookies()],
    });

    return authInstance;
}

export const auth = await getAuth();