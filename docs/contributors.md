---
layout: doc
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/zehua_pic.png',
    name: '唐泽华',
    title: "网站维护\xa0编辑",
    links: [
      { icon: 'github', link: 'https://github.com/ZehuaMc' }
    ]
  },
]
</script>

# 贡献者

欢迎大家编写或补充讲义内容。

<VPTeamMembers size="medium" :members="members" />