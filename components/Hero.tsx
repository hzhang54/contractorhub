import Link from 'next/link'
import TypewriterComponent from 'typewriter-effect'
export const Hero = () => {
	return (
		<div className="relative w-full">
			<div className="relative bg-yellow-50">
				<div className="container m-auto px-6 pt-8 md:px-12 lg:pt-4 lg:px-7">
					<div className="flex items-center flex-wrap px-2 md:px-0">
						<div className="relative lg:w-6/12 lg:py-24 xl:py-32">
							<h1 className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">
								Our partner&apos;s
								<TypewriterComponent
									options={{
										strings: ['achievement', 'experience', 'contribution'],
										autoStart: true,

										loop: true,
									}}
								/>
								should be remembered.
							</h1>
							<p className="mt-8 text-gray-700 lg:w-10/12">
								Here at{' '}
								<a
									className="text-yellow-700"
									href="https://twitter.com/huizhang54"
								>
									Lychnis Realty
								</a>{' '}
								we connect homeowners with trusted contractors to complete projects with transparency and efficiency. We prioritize clear communication, fair practices, and accountability, ensuring quality results on time and within budget.
							</p>
							<p className="mt-3 font-bold text-yellow-700">
								Get started for free today!
							</p>
							<div className="flex justify-end lg:w-10/12">
								<Link href={'/pricing'} className="btn btn-primary">
									Sign Up!
								</Link>
							</div>
						</div>
						<div className="ml-auto -mb-24 lg:w-6/12">
							<img
								src="/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept.jpg"
								alt="construction illustration"
								width="1500"
								height="1500"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
