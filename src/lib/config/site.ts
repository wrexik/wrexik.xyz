import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'Wrexik Web',
  subtitle: 'Home',
  lang: 'en-US',
  description: 'Powered by Love 💜',
  author: {
    avatar: '/assets/favicon.png',
    name: 'Wrexik',
    status: '💖',
    bio: 'Working on my site with the companion of Copilot :D     IG: @notwrexik | Discord: @Wrexik',
  },
  themeColor: '#868abd'
}
