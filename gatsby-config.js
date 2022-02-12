module.exports = {
    siteMetadata: {
        bio: 'Data analyst and create open source projects.',
		title: `Heri Setiawan`,
		author: `Heri Setiawan`,
		description: `Data analyst and create open source projects.`,
		domain: 'herisetiawan.gatsbyjs.io',
		siteUrl: `basemaster.gatsbyjs.io`,
		repo: 'https://github.com/heriswn/gatsby-boom',
		social: {
			twitter: `https://twitter.com/swnheri`,
			github: 'https://github.com/heriswn',
			youtube: '#',
			instagram: 'https://instagram.com/heriswn',
			email: 'mailto:herisetiawan1453@gmail.com',
			newsletter: 'https://heriswn.substack.com/',
		},
    },
    plugins: [
        `gatsby-plugin-emotion`,
        {
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/pages`,
				name: `pages`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`,
			},
		},
        {
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`,
					`gatsby-remark-external-links`,
				],
			},
		},
		`gatsby-plugin-image`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		// `gatsby-plugin-feed`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Heri Setiawan's Blog`,
				short_name: `Heriswn`,
				start_url: `/`,
				background_color: `#121212`,
				theme_color: `#1d1d1d`,
				display: `minimal-ui`,
				icon: `static/favicon.png`,
			},
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
        {
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		{
			resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
			options: {
				devMode: false,
			},
		},
        'gatsby-plugin-catch-links',
    ]
}