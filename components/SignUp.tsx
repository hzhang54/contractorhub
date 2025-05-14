// components/SignUp.tsx
import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { FormEvent, ChangeEvent } from 'react';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [code, setCode] = useState('');

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email
        }
      });
      setShowConfirmation(true);
    } catch (err: any) {
      console.error('Error signing up:', err);
      setError(err.message || 'An error occurred during sign up');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await Auth.confirmSignUp(username, code);
      // Redirect or show success message
      window.location.href = '/profile';
    } catch (err: any) {
      console.error('Error confirming sign up:', err);
      setError(err.message || 'An error occurred during confirmation');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, setter: (value: string) => void) => {
    setter(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      {!showConfirmation ? (
        <>
          <h2 className="text-2xl font-bold mb-6">Create Account</h2>
          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => handleInputChange(e, setUsername)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => handleInputChange(e, setEmail)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => handleInputChange(e, setPassword)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              <p className="text-gray-600 text-xs italic">Password must be at least 8 characters with numbers, special characters, uppercase and lowercase letters.</p>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {loading ? 'Creating...' : 'Create Account'}
              </button>
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/profile">
                Already have an account?
              </a>
            </div>
          </form>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-6">Confirm Your Account</h2>
          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
          <p className="mb-4">We've sent a confirmation code to your email. Please enter it below.</p>
          <form onSubmit={handleConfirmSignUp}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="code">
                Confirmation Code
              </label>
              <input
                id="code"
                type="text"
                value={code}
                onChange={(e) => handleInputChange(e, setCode)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {loading ? 'Confirming...' : 'Confirm Account'}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
