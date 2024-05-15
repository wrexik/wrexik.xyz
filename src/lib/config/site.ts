import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'Wrexik Blog',
  subtitle: 'Mainpage',
  lang: 'en-US',
  description: 'Powered by Love :P',
  author: {
    avatar: '/assets/pwna.png',
    name: 'Wrexik',
    status: '💖',
    bio: 'Working on my blog with the companion of Copilot :D',
  },
  themeColor: '#4b4860'
}
