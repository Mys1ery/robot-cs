import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
function getItem (label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const navItems = [
  getItem('Navigation One', '1', <MailOutlined />),
  getItem('Navigation Two', 'sub1', <AppstoreOutlined />, [
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Submenu', 'sub1-2', null, [getItem('Option 4', '4'), getItem('Option 5', '5')]),
  ]),
  getItem(
    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      Ant Design
    </a>,
    'link',
    <LinkOutlined />,
  ),
]
export { navItems };

