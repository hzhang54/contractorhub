import { Auth } from 'aws-amplify'

// Sign up a new user
export async function signUp(username: string, password: string, email: string) {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email
      }
    })
    return user
  } catch (error) {
    console.error('Error signing up:', error)
    throw error
  }
}

// Confirm sign up with verification code
export async function confirmSignUp(username: string, code: string) {
  try {
    return await Auth.confirmSignUp(username, code)
  } catch (error) {
    console.error('Error confirming sign up:', error)
    throw error
  }
}

// Sign in a user
export async function signIn(username: string, password: string) {
  try {
    const user = await Auth.signIn(username, password)
    return user
  } catch (error) {
    console.error('Error signing in:', error)
    throw error
  }
}

// Sign out the current user
export async function signOut() {
  try {
    await Auth.signOut()
  } catch (error) {
    console.error('Error signing out:', error)
    throw error
  }
}

// Get the current authenticated user
export async function getCurrentUser() {
  try {
    const user = await Auth.currentAuthenticatedUser()
    return user
  } catch (error) {
    console.error('Error getting current user:', error)
    return null
  }
}

// Check if a user is authenticated
export async function isAuthenticated() {
  try {
    await Auth.currentAuthenticatedUser()
    return true
  } catch {
    return false
  }
}

// Reset password
export async function resetPassword(username: string) {
  try {
    return await Auth.forgotPassword(username)
  } catch (error) {
    console.error('Error resetting password:', error)
    throw error
  }
}

// Confirm new password with verification code
export async function confirmResetPassword(username: string, code: string, newPassword: string) {
  try {
    return await Auth.forgotPasswordSubmit(username, code, newPassword)
  } catch (error) {
    console.error('Error confirming new password:', error)
    throw error
  }
}
