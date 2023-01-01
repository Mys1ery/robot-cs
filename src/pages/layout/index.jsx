import React, { useState } from 'react'
import { UserOutlined } from '@ant-design/icons'
import { Layout, Menu, Avatar } from 'antd'
import { navItems } from './data.js'
import './index.scss'
const { Header, Content, Sider } = Layout
const BasicLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout className="outer">
      <Header className="header">
        <Avatar size="large" icon={<UserOutlined />} />
      </Header>
      <Layout>
        <Sider
          className="site-layout-background"
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={navItems}
          />
        </Sider>
        <Layout className="content">
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}>
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
export default BasicLayout
