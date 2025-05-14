import Link from 'next/link'
import { Auth } from 'aws-amplify'
import { useRouter } from 'next/router'
// Hui add for auth import
import { useState, useEffect } from 'react'

type NavBarProps = {
	isAuthPage?: boolean
}

export const Navbar = ({ isAuthPage }: NavBarProps) => {
	const router = useRouter()
	// Hui add for auth import
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	
	useEffect(() => {
		checkAuth()
	}, [])
	
	async function checkAuth() {
		try {
			await Auth.currentAuthenticatedUser()
			setIsAuthenticated(true)
		} catch {
			setIsAuthenticated(false)
		}
	}
// change L38 from isAuthpage && ( to isAuthenticated ? (
	return (
		<div className="navbar bg-yellow-50">
			<div className="flex-1">
				<Link className="btn btn-ghost normal-case text-xl" href={'/'}>
					Lychnis Realty
				</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					{isAuthPage ? (
						<>
							<li>
								<Link href={'/my-recipes/'}>My Project</Link>
							</li>
							<li>
								<Link href={'/my-recipes/create'}>Create Project</Link>
							</li>
							<li>
								<Link href="/profile" className="justify-between">
									Profile
								</Link>
							</li>
							<li>
								<button
									onClick={() =>
										Auth.signOut().then(() => {
											if (router.pathname !== '/') {
												router.push('/')
											} else {
												window.location.reload()
											}
										})
									}
								>
									Logout
								</button>
							</li>
						</>
					) : (
						<>
							<li>
								<Link href="/profile">Sign In</Link>
							</li>
							<li>
								<Link href="/signup">Create Account</Link>
							</li>
							{!isAuthPage && (
								<li>
									<Link href={'/my-recipes/'}>My Recipes</Link>
								</li>
							)}
						</>
					)}
				</ul>
			</div>
		</div>
	)
}


/*					<li>
						{!isAuthPage && <Link href={'/my-recipes/'}>My Recipes</Link>}
					</li>
					*/