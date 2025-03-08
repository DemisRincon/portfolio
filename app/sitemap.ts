import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const url =
		process.env.NODE_ENV === 'production'
			? 'https://demisrincon.netlify.app'
			: 'http://localhost:3000';
	return [
		{
			url,
			lastModified: new Date(),
			priority: 1,
			changeFrequency: 'yearly',
		},
		{
			url: `${url}/about`,
			lastModified: new Date(),
			priority: 0.8,
			changeFrequency: 'yearly',
		},
		{
			url: `${url}/contact`,
			lastModified: new Date(),
			priority: 0.8,
			changeFrequency: 'yearly',
		},
		{
			url: `${url}/projects`,
			lastModified: new Date(),
			priority: 0.8,
			changeFrequency: 'yearly',
		},
	];
}
