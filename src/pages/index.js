import React from 'react';
import { Link, graphql } from 'gatsby';
import { object } from 'prop-types';
import { mediaMax } from '../styles/media';
import { FiExternalLink, FiStar } from 'react-icons/fi';

import ThemeProvider from '../components/ThemeProvider';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import BlogInfo from '../components/BlogInfo';
import { rhythm } from '../utils/typography';

const BlogIndex = ({ data, location }) => {
	const posts = data.allMarkdownRemark.edges;

	return (
		<ThemeProvider>
			<section
				css={{
					display: 'grid',
					gridTemplateColumns: 'auto 1fr',
					alignContent: 'start',
					height: '100%',
					minHeight: '100vh',
					maxWidth: 1200,
					margin: '0 auto',
					[mediaMax.large]: {
						gridTemplateColumns: 'auto',
						justifyItems: 'center',
					},
				}}
			>
				<Sidebar />
				<Layout location={location}>
					<Seo />
					{posts.map(({ node }) => {
						const title = node.frontmatter.title || node.fields.slug;
						const link = node.frontmatter.external ? (
							<a style={{ boxShadow: `none` }} href={node.frontmatter.external} target="_blank" rel="noreferrer noopener">
								{title}
								<FiExternalLink css={{ marginLeft: 4 }} size={16} />
							</a>
						) : (
							<Link style={{ boxShadow: `none` }} to={node.fields.slug}>
								{title}
							</Link>
						)
						return (
							<div key={node.fields.slug}>
								<BlogInfo timeToRead={node.frontmatter.time || node.timeToRead} date={node.frontmatter.date} />
								<h3
									css={{
										marginTop: rhythm(1 / 4),
										marginBottom: rhythm(0.5),
									}}
								>
									{link}
								</h3>
								<p
									css={{ marginBottom: rhythm(1.5) }}
									dangerouslySetInnerHTML={{
										__html: node.frontmatter.description || node.excerpt,
									}}
								/>
							</div>
						);
					})}
				</Layout>
			</section>
		</ThemeProvider>
	);
};

BlogIndex.propTypes = {
	data: object.isRequired,
	location: object.isRequired,
};

export const pageQuery = graphql`
	query {
		allMarkdownRemark(
			filter: { frontmatter: { title: { ne: "About" } } }
			sort: { fields: [frontmatter___date], order: DESC }
		) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						description
					}
					timeToRead
				}
			}
		}
	}
`;

export default BlogIndex;
