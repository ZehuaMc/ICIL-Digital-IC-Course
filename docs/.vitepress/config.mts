import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ICIL数字IC培训",
  description: "ICIL的数字IC培训课程的讲义",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '讲义', link: '/handout' },
      { text: '贡献者', link: '/contributors' },
      { text: '食用指北', link: '/howuse' },
      { text: '学习记录', link: 'https://docs.qq.com/sheet/DUFFsdVZXSUd2Y2hr?tab=BB08J2'}
    ]
  }
})
