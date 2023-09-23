export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';

export const showLogger = isLocal
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false;

export let token: {
  email: string;
  name: string;
  token: string;
  _id: string;
} | null = null;

export function setToken(tkn: {
  email: string;
  name: string;
  token: string;
  _id: string;
}) {
  token = tkn;
}
