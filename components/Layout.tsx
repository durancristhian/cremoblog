import Link from 'next/link'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function Layout({ children }: Props) {
  return (
    <>
      <header>
        <div className="responsive-margin responsive-padding">
          <Link href="/" passHref>
            <a href="#!" className="logo">
              cremoblog
            </a>
          </Link>
        </div>
      </header>
      <main>
        <div className="responsive-margin responsive-padding">{children}</div>
      </main>
      <footer>
        <div className="responsive-margin responsive-padding">
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
