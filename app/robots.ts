import { MetadataRoute } from 'next';

export default function robot(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: [],
		},
		sitemap: `${process.env.SITE_URL}/sitemap.xml`,
	};
}
