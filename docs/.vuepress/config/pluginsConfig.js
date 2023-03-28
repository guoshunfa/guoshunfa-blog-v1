import { searchPlugin } from '@vuepress/plugin-search'
import { commentPlugin } from "vuepress-plugin-comment2";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default [
  // 右侧目录
  // 全文搜索
  searchPlugin({
    // 配置项
  }),
  // docsearchPlugin({
  //   // 配置项
  //   apiKey: 'e6ad1de726af1e8faf2e5f6b40177302',
  //   indexName: 'guoshunfa',
  //   appId: '6GGH5B76NF',
  //   locales: {
  //     '/': {
  //       placeholder: '搜索文档',
  //       translations: {
  //         button: {
  //           buttonText: '搜索文档',
  //           buttonAriaLabel: '搜索文档'
  //         },
  //         modal: {
  //           searchBox: {
  //             resetButtonTitle: '清除查询条件',
  //             resetButtonAriaLabel: '清除查询条件',
  //             cancelButtonText: '取消',
  //             cancelButtonAriaLabel: '取消'
  //           },
  //           startScreen: {
  //             recentSearchesTitle: '搜索历史',
  //             noRecentSearchesText: '没有搜索历史',
  //             saveRecentSearchButtonTitle: '保存至搜索历史',
  //             removeRecentSearchButtonTitle: '从搜索历史中移除',
  //             favoriteSearchesTitle: '收藏',
  //             removeFavoriteSearchButtonTitle: '从收藏中移除'
  //           },
  //           errorScreen: {
  //             titleText: '无法获取结果',
  //             helpText: '你可能需要检查你的网络连接'
  //           },
  //           footer: {
  //             selectText: '选择',
  //             navigateText: '切换',
  //             closeText: '关闭',
  //             searchByText: '搜索提供者'
  //           },
  //           noResultsScreen: {
  //             noResultsText: '无法找到相关结果',
  //             suggestedQueryText: '你可以尝试查询',
  //             reportMissingResultsText: '你认为该查询应该有结果？',
  //             reportMissingResultsLinkText: '点击反馈'
  //           }
  //         }
  //       }
  //     }
  //   }
  // }),
  // 评论 https://vuepress-theme-hope.github.io/v2/comment/zh/config/
  commentPlugin({
    provider: 'Giscus',
    repo: 'guoshunfa/pandacode-comment',
    repoId: 'R_kgDOIfh6Dw',
    category: 'Announcements',
    categoryId: 'DIC_kwDOIfh6D84CSulu',
    mapping: 'pathname',
  }),
  // registerComponentsPlugin(
  //   {
  //     // 自动注册全局组件,
  //     componentsDir: path.resolve(__dirname, '../../', 'components'),
  //   }
  // ),
]