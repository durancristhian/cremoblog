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
          <div className="card fluid">
            <h2>
              <Link href={post.metadata.slug} passHref>
                <a href="#!">{post.metadata.title}</a>
              </Link>
            </h2>
          </div>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const postsPath = path.join(process.cwd(), 'content', 'posts', '*.md')
  const paths = glob.sync(postsPath)

  const posts = paths.map((path) => {
    const fileContent = fs.readFileSync(path, 'utf8')
    const { content, data } = matter(fileContent)

    return {
      content,
      metadata: data,
    }
  })

  return {
    props: {
      posts,
    },
  }
}
