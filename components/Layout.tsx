import { ReactNode } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faClock, faHome, faUsers } from '@fortawesome/free-solid-svg-icons'
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
			<Link href="/">
				<a className={styles.page}>
					<FontAwesomeIcon className={styles.pageIcon} icon={faHome} />
					Home
				</a>
			</Link>
			<Link href="/timer">
				<a className={styles.page}>
					<FontAwesomeIcon className={styles.pageIcon} icon={faClock} />
					Timer
				</a>
			</Link>
			<Link href="/stats">
				<a className={styles.page}>
					<FontAwesomeIcon className={styles.pageIcon} icon={faChartLine} />
					Stats
				</a>
			</Link>
			<Link href="/friends">
				<a className={styles.page}>
					<FontAwesomeIcon className={styles.pageIcon} icon={faUsers} />
					Friends
				</a>
			</Link>
		</nav>
		<main className={cx(styles.content, className)}>
			{children}
		</main>
	</div>
)

export default Layout
