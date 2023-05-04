import {  Menu } from 'antd';
import {asyncRoutes} from '../../routes/index'
import {Link} from 'react-router-dom'

// 使用自定义hook
import useMenu from './useMenu'

// 根据路由动态计算左侧menu
function createItems(asyncRoutes){
    let result = []
    asyncRoutes.forEach(items => {
        if(!items.hidden){
            if(!items.children){
                result.push(getItem(items.label,items.key,items.icon, null, items.path))
              }else{
                result.push(getItem(items.label,items.key,items.icon, createItems(items.children), items.path))
            } 
        }     
    });
    return result
}

function getItem(label, key, icon, children, path) {
    return {
      key,
      icon,
      children,
      label: path ? <Link to={path}>{label}</Link> : label,
      path
    };
}

function Mysider(props){
    const [selectedKey, openKey] = useMenu()
    return (
        <div className=''>
            <div className="logo"><img src={'https://www.baidu.com/img/flexible/logo/pc/result.png'} alt=''/></div>
                <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={selectedKey}
                defaultOpenKeys={openKey}
                items={createItems(asyncRoutes)}
                />   
        </div>
    )
}

export default Mysider