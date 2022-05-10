import * as React from 'react';
import HomePage from './HomePage';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function Home({ blogs }) {
  return (
    <>
      <HomePage blogs={blogs} />
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('blog'));
  const blogs = files.map((fileName ) => {
      const markdownWithMeta = fs.readFileSync(
        path.join('blog', fileName),
        'utf-8'
      )
      const { data: frontmatter } = matter(markdownWithMeta)
      return {
        frontmatter,
        slug: fileName.replace('.md', ''),
      }
  });
  return {
    props: {
      blogs,
    },  
  }
}
