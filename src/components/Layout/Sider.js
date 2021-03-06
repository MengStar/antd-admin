import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Switch } from 'antd'
import styles from './Layout.less'
import { config } from '../../utils'
import Menus from './Menu'
import { Link } from 'dva/router'

const Sider = ({ siderFold, darkTheme, location, changeTheme, navOpenKeys, changeOpenKeys, menu }) => {
  const menusProps = {
    menu,
    siderFold,
    darkTheme,
    location,
    navOpenKeys,
    changeOpenKeys,
  }
  return (
    <div>
      <Link to={'/home'}>
        <div className={styles.logo}>
          <img alt={'logo'} src={config.logo} />
          {siderFold ? '' : <span>{config.name}</span>}
        </div>
      </Link>
      <Menus {...menusProps} />
      {!siderFold ? <div className={styles.switchtheme}>
        <span><Icon type="bulb" />选择主题</span>
        <Switch onChange={changeTheme} defaultChecked={darkTheme} checkedChildren="夜晚" unCheckedChildren="白天" />
      </div> : ''}
    </div>
  )
}

Sider.propTypes = {
  menu: PropTypes.array,
  siderFold: PropTypes.bool,
  darkTheme: PropTypes.bool,
  location: PropTypes.object,
  changeTheme: PropTypes.func,
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func,
}

export default Sider
