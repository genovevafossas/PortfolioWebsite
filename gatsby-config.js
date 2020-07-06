module.exports = {
	siteMetadata: {
		title: 'Genoveva Fossas\' Personal Website',
		author: 'Genoveva Fossas',
		description: 'Personal website for Genoveva Fossas',
		keywords: `Software developer, software, developer, Genoveva, Fossas`,
		siteUrl: `https://genovevafossas.com`
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-171687624-1',
				// Setting this parameter is optional (required for some countries such as Germany)
				anonymize: true
			}
		}
	]
};
