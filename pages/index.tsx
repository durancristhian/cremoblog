import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import React from 'react'
import ReactMarkdown from 'react-markdown'

type Props = {
  content: string
}

export default function Index({ content }: Props) {
  return (
    <>
      <img src="logo.png" alt="Cremona" />
      <h1>cremoblog</h1>
      <ReactMarkdown source={content} />
    </>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'index.md')
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { content } = matter(fileContent)

  return {
    props: {
      content,
    },
  }
}
