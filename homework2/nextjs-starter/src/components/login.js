import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ReactDOM from 'react-dom/client';
import { useRouter } from 'next/router';
import { ClerkLoading, ClerkProvider, useAuth } from '@clerk/nextjs';
import { AuthAction } from 'next-auth';

const LoginPage = () => {


  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (user) {
  //   router.push('/todos');
  //   return null;
  // }

  const handleLogin = async () => {
    try {
      await ClerkProvider(auth)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;


