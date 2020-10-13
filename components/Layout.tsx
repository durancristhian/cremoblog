import Link from 'next/link'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function Layout({ children }: Props) {
  return (
    <>
      <header>
        <div>
          <Link href="/" passHref>
            <a href="#!">cremoblog</a>
          </Link>
        </div>
      </header>
      <main>
        <div>{children}</div>
      </main>
      <footer>
        <div>
          <p>
            <span>Created by </span>
            <a
              href="https://twitter.com/durancristhian"
              target="_blank"
              rel="noopener noreferrer"
            >
              @durancristhian
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}
