import Features from "../components/Landing/Features";
import Hero from "../components/Landing/Hero";
import Others from "../components/Landing/Others";
import Preview from "../components/Landing/Preview";
import Layout from "../components/Layout/Layout";

export default function Home() {
	return (
		<Layout>
			<Hero />
			<Features />
			<Preview />
			<Others />
		</Layout>
	);
}
