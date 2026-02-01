import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";


const handler = NextAuth({

    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Login with email",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const username = credentials?.username;
                const password = credentials?.password;

                console.log(username)
                console.log(password)

                const user = {
                    name: "Tanishq",
                    id: "1",
                    email: "harkirat@gmail.com"
                }

                if (user) {
                    return user;
                } else {
                    return null;
                }



            }
        }),

        GoogleProvider({
            clientId: "123123",
            clientSecret: "123123"
        }),

        GitHubProvider({
            clientId: "process.env.GITHUB_I",
            clientSecret: "process.env.GITHUB_SECRET"
        })

    ],
    secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }