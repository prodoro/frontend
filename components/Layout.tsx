import { ReactNode } from 'react'
import Link from 'next/link'
import cx from 'classnames'

import AuthButton from './AuthButton'

import styles from 'styles/Layout.module.scss'

export interface LayoutProps {
	className?: string
	children?: ReactNode
}

const Layout = ({ className, children }: LayoutProps) => (
	<div className={styles.root}>
		<nav className={styles.navbar} aria-label="Navbar">
			<Link href="/">
				<a className={styles.home}>prodoro</a>
			</Link>
			<AuthButton className={styles.auth} />
		</nav>
		<nav className={styles.sidebar} aria-label="Sidebar">
			
		</nav>
		<main className={cx(styles.content, className)}>
			{children}
		</main>
	</div>
)

export default Layout
