import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
// import { Seo } from '../components/seo.js';
import Layout from '../components/layout.js';


export default function AboutPage() {
    return (
        <Layout
            title="about this site"
            description="more info"
            >
        <h1>About Page</h1>
        </Layout>
    )
}