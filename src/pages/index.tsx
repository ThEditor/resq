import InputBox from '@/components/InputBox';
import MessageBox from '@/components/MessageBox';
import TextButton from '@/components/buttons/TextButton';
import { setToken, token } from '@/constant/env';
import axios from '@/lib/api/axios';
import { isAxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const router = useRouter();
  if (token) {
    router.push('/map');
  }

  useEffect(() => {
    setErr('');
  }, [email, password]);

  const login = async () => {
    // validate email and pass
    if (
      !email ||
      !password ||
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      setErr('Invalid credentials, try again...');
      return;
    }

    try {
      await axios
        .post('/agencies/login', {
          email,
          password,
        })
        .then((v) => {
          setToken(v.data);
          axios.interceptors.request.use(
            (config) => {
              // Get the JWT token from your storage (e.g., localStorage, sessionStorage, or a variable)
              const tkn = v.data.token;

              // Add the token to the Authorization header with the "Bearer" scheme
              if (tkn) {
                config.headers['Authorization'] = `Bearer ${tkn}`;
              }
              return config;
            },
            (error) => {
              return Promise.reject(error);
            }
          );
          router.push('/map');
        });
    } catch (error: unknown) {
      if (isAxiosError(error))
        if (!error?.response) setErr('No server response, try again later...');
        else if (error.response?.status === 401)
          setErr('Invalid credentials, try again...');
    }
  };

  return (
    <div className='h-screen'>
      <main className='flex h-5/6 items-center justify-center'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            login();
          }}
          className='flex w-1/5 flex-col items-center justify-center gap-6'
        >
          <h1>Login</h1>
          {err && <MessageBox>{err}</MessageBox>}
          <InputBox
            className='w-full'
            type='email'
            placeholder='Email'
            required
            onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
          />
          <InputBox
            className='w-full'
            type='password'
            placeholder='Password'
            required
            onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
          />
          <TextButton type='submit' className='w-full'>
            Log in
          </TextButton>
        </form>
      </main>
    </div>
  );
}
