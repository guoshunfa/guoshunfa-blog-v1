import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
// 配置
import headConfig from './config/headConfig'
import navbarConfig from './config/navbarConfig'
import pluginsConfig from './config/pluginsConfig'
import sidebarConfig from './config/sidebarConfig'

export default defineUserConfig({
    // 站点配置
    base: "/",
    lang: 'zh-CN',
    title: '熊猫代码知识库',
    description: '这是我的知识库平台！',
    head: headConfig,
    // 在这里进行默认主题配置
    theme: defaultTheme({
        navbar: navbarConfig,
        logo: '/images/logo/高清logo源文件.svg',
        // 在夜间模式中使用的 Logo 图片的 URL。
        // logoDark: '',
        sidebar: sidebarConfig,
        sidebarDepth: 5,
        lastUpdatedText: "最近更新时间",
        contributorsText: '贡献者',
        backToHome: '返回首页',
        openInNewWindow: '打开新的窗口'
    }),
    plugins: pluginsConfig,
    // 通用配置项
    // permalinkPattern: ':year/:month/:day/:slug.html',
})