// pages/signup.tsx
import SignUp from '../components/SignUp';
import { Navbar } from '@/components/Navbar';

export default function SignUpPage() {
  return (
    <>
      <Navbar isAuthPage={false} />
      <SignUp />
    </>
  );
}
