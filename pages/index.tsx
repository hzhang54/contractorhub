import { FeatureList } from '@/components/FeatureList'
import { Testimonial } from '@/components/Testimonial'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'

function Home() {
	return (
		<>
			<Navbar user={null} isAuthPage />
			<Hero />
			<FeatureList />
			<Testimonial />
			<Footer />
		</>
	)
}

export default Home
