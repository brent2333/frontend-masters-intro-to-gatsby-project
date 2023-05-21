import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout.js';
import { StaticImage } from 'gatsby-plugin-image';
import { imageWrapper } from '../styles/index.module.css';

export default function IndexPage() {
    const data = useStaticQuery(graphql`
    query GetBlogposts {
        allMdx(sort: {order: DESC, fields: frontmatter___date}) {
            nodes {
            id
            slug
            frontmatter {
                title
                description
                date(fromNow: true)
            }
            }
        }
        allSanityEpisode(
            sort: {fields: date, order: DESC}
            filter: {youtubeID: {ne: "null"}}
            limit: 20
        ) {
            nodes {
            title
            id
            guest {
                name
            }
            gatsbyPath(filePath: "/episode/{SanityEpisode.slug__current}")
            }
        }
        }
    `);
    const posts = data.allMdx.nodes;
    const episodes = data.allSanityEpisode.nodes;
    return (
        <Layout>
            <div className={imageWrapper}>
                <StaticImage
                    src="../images/ivana-la-61jg6zviI7I-unsplash.jpg"
                    alt="corgi"
                    placeholder="dominantColor"
                    width={300}
                    height={300}
                    />
            </div>
            <h1>Hello FEM</h1>
            <h2>recent posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={post.slug}>{post.frontmatter.title}</Link> <small>{post.frontmatter.date}</small>
                    </li>
                ))}
            </ul>
            <h2>Latst episodes</h2>
            <ul>
                {episodes.map((episode) => (
                    <li key={episode.id}>
                        <Link to={episode.gatsbyPath}>{episode.title} with {episode.guest?.[0]?.name}</Link>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}