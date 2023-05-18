import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout.js';

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
        }
    `);
    const posts = data.allMdx.nodes;
    return (
        <Layout>
            <h1>Hello FEM</h1>
            <h2>recent posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={post.slug}>{post.frontmatter.title}</Link> <small>{post.frontmatter.date}</small>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}