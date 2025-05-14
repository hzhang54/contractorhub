/*
import { Navbar } from '@/components/Navbar'
import { withAuthenticator } from '@aws-amplify/ui-react'

const Profile = () => {
	return (
		<>
			<Navbar user={null} />
			<pre>
				<code>{JSON.stringify('THE USER DATA FROM THE DB')}</code>
			</pre>
		</>
	)
}

export default withAuthenticator(Profile)
*/

/*
import { Navbar } from '@/components/Navbar'
import { withAuthenticator } from '@aws-amplify/ui-react'

function Profile({ user, signOut }: any) {
  return (
    <>
      <Navbar isAuthPage={true} />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
        
        <div className="bg-white shadow-md rounded p-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <p className="text-gray-900">{user?.attributes?.email || ''}</p>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <p className="text-gray-900">{user?.attributes?.name || 'Not provided'}</p>
          </div>
          
          <button
            onClick={signOut}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  )
}
*/
// Configure the authenticator with sign-up options
/*
export default withAuthenticator(Profile, {
  signUpAttributes: ['email'],
  hideDefault: false,
  includeGreetings: true
}); */

import { Navbar } from '@/components/Navbar'
import { Authenticator } from '@aws-amplify/ui-react'

export default function ProfilePage() {
  return (
    <Authenticator>
      {({ user, signOut }) => (
        <>
          <Navbar isAuthPage={true} />
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
            
            <div className="bg-white shadow-md rounded p-6">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <p className="text-gray-900">{user?.attributes?.email || ''}</p>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <p className="text-gray-900">{user?.attributes?.name || 'Not provided'}</p>
              </div>
              
              <button
                onClick={signOut}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign Out
              </button>
            </div>
          </div>
        </>
      )}
    </Authenticator>
  )
}

//export default withAuthenticator(Profile);
