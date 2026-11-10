import { defineConfig } from 'vitepress'
import sections from './sections.json'
export default defineConfig({
  title: 'Nextflow · Training Preparation',
  description: 'Prepare your laptop for the Codex mobile application development workshop. Official downloads, clear checks, and an optional iOS path.',
  lang: 'en-US', base: '/codex-workshop-preparation/', cleanUrls: true,
  head: [['meta', { name: 'theme-color', content: '#11786b' }]],
  themeConfig: {
    siteTitle: 'Nextflow · Preparation',
    nav: [
      { text: 'Overview', link: '/' },
      { text: 'Preparation', items: sections.map(s => ({ text: `Section ${s.number} · ${s.title}`, link: `/sections/${s.slug}` })) },
      { text: 'Workshop exercises', link: 'https://teerasej.github.io/codex-mobile-app-workshop/' },
      { text: 'Download test', link: '/sections/06-readiness#download-test' }
    ],
    sidebar: [{ text: 'Before training', items: [{ text: 'Overview', link: '/' }, ...sections.map(s => ({ text: `Section ${s.number} · ${s.title}`, link: `/sections/${s.slug}` }))] }],
    outline: { level: [2, 3], label: 'On this page' },
    sidebarMenuLabel: 'Preparation sections', search: { provider: 'local' },
    docFooter: { prev: 'Previous section', next: 'Next section' }
  }
})
