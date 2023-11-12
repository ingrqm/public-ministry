import { SignJWT, jwtVerify } from 'jose';

type SignJWTType = (payload?: { sub: string }, options?: { exp: string }) => Promise<string>;

export const signJWT: SignJWTType = async (payload, options) => {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
    const alg = 'HS256';

    let jwt = new SignJWT(payload).setProtectedHeader({ alg }).setIssuedAt();

    if (options?.exp) {
      jwt = jwt.setExpirationTime(options.exp);
    }

    if (payload?.sub) {
      jwt = jwt.setSubject(payload.sub);
    }

    return jwt.sign(secret);
  } catch (error) {
    throw error;
  }
};

export const verifyJWT = async <T>(token: string): Promise<T> => {
  try {
    return (await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET_KEY))).payload as T;
  } catch (error) {
    throw new Error('Your token has expired.');
  }
};
