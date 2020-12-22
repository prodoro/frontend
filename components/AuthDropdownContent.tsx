import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import cx from 'classnames'

import CurrentUser from 'models/CurrentUser'
import EditUserName from './EditUserName'
import SignOutButton from './SignOutButton'

import styles from 'styles/AuthDropdownContent.module.scss'

export interface AuthDropdownContentProps {
	currentUser: CurrentUser
	onClick?(): void
}

const AuthDropdownContent = ({ currentUser, onClick }: AuthDropdownContentProps) => (
	<>
		<EditUserName className={styles.row} user={currentUser} />
		<SignOutButton className={cx(styles.row, styles.action, styles.danger)} onClick={onClick}>
			<FontAwesomeIcon icon={faSignOutAlt} />
			<p className={styles.actionMessage}>Sign out</p>
		</SignOutButton>
	</>
)

export const authDropdownContentClassName = styles.root
export default AuthDropdownContent
