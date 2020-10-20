import fs from 'fs'
import glob from 'glob'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import React from 'react'

type Props = {
  posts: {
    content: string
    metadata: {
      [key: string]: string
    }
  }[]
}

export default function Blog({ posts }: Props) {
  return (
    <div className="row">
      {posts.map((post) => (
        <div className="col-sm-12" key={post.metadata.slug}>
          <Link href={post.metadata.slug} passHref>
            <div className="card fluid">
              <h2>
                <a href="#!">{post.metadata.title}</a>
                <div>
                  <img src={post.metadata.cover} alt={post.metadata.title} />
                </div>
                <p>{post.metadata.date}</p>
              </h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const postsPath = path.join(process.cwd(), 'content', 'posts', '*.md')
  const paths = glob.sync(postsPath)

  const posts = paths
    .map((path) => {
      const fileContent = fs.readFileSync(path, 'utf8')
      const { content, data } = matter(fileContent)

      if (data.published) {
        return {
          content,
          metadata: data,
        }
      }

      return false
    })
    .filter(Boolean)

  return {
    props: {
      posts,
    },
  }
}
