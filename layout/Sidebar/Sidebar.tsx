import {SidebarProps} from './Sidebar.props'
import styles from './Sidebar.module.css'
import {Menu} from '../../components/Menu/Menu';

export const Sidebar = ({...props}: SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            <Menu />
        </div>
    )
}