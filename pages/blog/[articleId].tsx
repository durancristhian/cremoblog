import fs from 'fs'
import glob from 'glob'
import matter from 'gray-matter'
import Head from 'next/head'
import path from 'path'
import React from 'react'
import ReactMarkdown from 'react-markdown'

type Props = {
  content: string
  metadata: {
    [key: string]: string
  }
}

export default function ArticleId({ content, metadata }: Props) {
  return (
    <>
      <Head>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.date} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.date} />
        <meta
          property="og:url"
          content={`https://cremoblog.vercel.app${metadata.slug}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`https://cremoblog.vercel.app${metadata.cover}`}
        />
        <meta
          property="twitter:url"
          content={`https://cremoblog.vercel.app${metadata.slug}`}
        />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.date} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content={`https://cremoblog.vercel.app${metadata.cover}`}
        />
      </Head>
      <ReactMarkdown source={content} />
    </>
  )
}

export const getStaticProps = async ({
  params,
}: {
  params: { [key: string]: string }
}) => {
  const { articleId } = params
  const url = `/blog/${articleId}`

  const postsPath = path.join(process.cwd(), 'content', 'posts', '*.md')
  const paths = glob.sync(postsPath)
  const postPath = paths.find((path) => {
    const fileContent = fs.readFileSync(path, 'utf8')
    const { data } = matter(fileContent)

    return data.slug === url
  })
  const fileContent = fs.readFileSync(postPath || '', 'utf8')
  const { content, data } = matter(fileContent)

  return {
    props: {
      content,
      metadata: data,
    },
  }
}

export const getStaticPaths = async () => {
  const postsPath = path.join(process.cwd(), 'content', 'posts', '*.md')
  const paths = glob.sync(postsPath)

  const slugs = paths
    .map((path) => {
      const fileContent = fs.readFileSync(path, 'utf8')
      const { data } = matter(fileContent)

      if (data.published) {
        return {
          params: {
            articleId: data.slug.split('/')[2],
          },
        }
      }

      return false
    })
    .filter(Boolean)

  return {
    paths: slugs,
    fallback: false,
  }
}
