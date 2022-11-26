import { searchPlugin } from '@vuepress/plugin-search'
import { commentPlugin } from "vuepress-plugin-comment2";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)
import vuepressPluginAnchorRight from 'vuepress-plugin-anchor-right'

export default [
  // 右侧目录
  // 全文搜索
  searchPlugin({
    // 配置项
    locales: {
      '/': {
        placeholder: '搜索',
      },
    },
    // 排除首页
    isSearchable: (page) => page.path !== '/',
  }),
  // 评论 https://vuepress-theme-hope.github.io/v2/comment/zh/config/
  commentPlugin({
    provider: 'Giscus',
    repo: 'guoshunfa/pandacode-comment',
    repoId: 'R_kgDOIfh6Dw',
    category: 'Announcements',
    categoryId: 'DIC_kwDOIfh6D84CSulu',
    mapping: 'url',
  }),
  registerComponentsPlugin(
    {
      // 自动注册全局组件,
      componentsDir: path.resolve(__dirname, '../../', 'components'),
    }
  ),
  vuepressPluginAnchorRight(
    {
      showDepth: 2,
      ignore: [
        '/',
        '/api/'
        // 更多...
      ],
      expand: {
        trigger: 'hover',
        clickModeDefaultOpen: true
      },
      customClass: 'your-customClass',
    }
  )
]