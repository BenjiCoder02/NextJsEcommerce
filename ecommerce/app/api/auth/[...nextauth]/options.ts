import type { NextAuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'Enter your username',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter your password',
        }
      },
      async authorize(credentials) {
        const user = {
          id: '1001', name: 'Ben', password: 'test1234', image: 'https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg'
        }
        if (credentials?.username === user.name && credentials?.password === user.password) {
          return user
        }

        return null;
      }
    })
  ]
}
