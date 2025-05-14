/*import '@/styles/globals.css'
import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import type { AppProps } from 'next/app'
import { Amplify } from 'aws-amplify'
import { config } from '../src/aws-config'

Amplify.configure(config)

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AmplifyProvider>
			<Component {...pageProps} />
		</AmplifyProvider>
	)
}
*/
/*
import '@/styles/globals.css'
import { Authenticator, AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import type { AppProps } from 'next/app'
import { Amplify } from 'aws-amplify'
import { config } from '../src/aws-config'
import { useRouter } from 'next/router'

Amplify.configure(config)
*/

// pages/_app.tsx
// pages/_app.tsx
import '@/styles/globals.css'
import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import type { AppProps } from 'next/app'
import { Amplify } from 'aws-amplify'
import { amplifyConfig } from '../src/amplify-config'

// Configure Amplify
Amplify.configure(amplifyConfig)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AmplifyProvider>
      <Component {...pageProps} />
    </AmplifyProvider>
  )
}


/*
// List of public pages that don't require authentication
const publicPages = ['/', '/pricing']

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  
  // Check if the current page is public
  const isPublicPage = publicPages.includes(router.pathname)
  
  // If it's a public page, don't wrap with Authenticator
  if (isPublicPage) {
    return (
      <AmplifyProvider>
        <Component {...pageProps} />
      </AmplifyProvider>
    )
  }
  
  // For protected pages, wrap with Authenticator
  return (
    <AmplifyProvider>
      <Authenticator>
        {({ signOut, user }) => (
          <>
            <Component {...pageProps} user={user} signOut={signOut} />
          </>
        )}
      </Authenticator>
    </AmplifyProvider>
  )
}
*/