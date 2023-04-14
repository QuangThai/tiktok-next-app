import NextAuth, { CallbacksOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// const sessionCallback: CallbacksOptions["session"] = async (session, token) => {
//   console.log("2222222")
// };

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    // jwt: jwtCallback,
    // session: sessionCallback,
  },
});
