// 注: process.env.XX是Vercel的环境变量，配置方式见：https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a

const BLOG = {
  // Important page_id！！！Duplicate Template from  https://www.notion.so/tanghh/02ab3b8678004aa69e9e415905ef32a5
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '02ab3b8678004aa69e9e415905ef32a5,en:7c1d570661754c8fbc568e00a01fd70e',
  THEME: process.env.NEXT_PUBLIC_THEME || 'heo', // 你的个性化优先
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN',
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2025,

  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false,
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 5,
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'dark', // 你的个性化优先
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6],

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'blacksmith', // 你的个性化优先
  BIO: process.env.NEXT_PUBLIC_BIO || 'Making China Travel Easy', // 你的个性化优先
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://www.travel2cn.cn', // 你的个性化优先
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'China travel, travel to China, China travel guide, China visa, Alipay for foreigners, WeChat pay for tourists, best VPN for China, China travel tips, China itinerary, Beijing, Shanghai, Xi an, Guilin, Chengdu',
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico',
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '',
  BEI_AN_LINK: process.env.NEXT_PUBLIC_BEI_AN_LINK || '',

  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true,

  // 其它复杂配置
  ...require('./conf/comment.config'),
  ...require('./conf/contact.config'),
  ...require('./conf/post.config'),
  ...require('./conf/analytics.config'),
  ...require('./conf/image.config'),
  ...require('./conf/font.config'),
  ...require('./conf/right-click-menu'),
  ...require('./conf/code.config'),
  ...require('./conf/animation.config'),
  ...require('./conf/widget.config'),
  ...require('./conf/ad.config'),
  ...require('./conf/plugin.config'),

  // 高级用法
  ...require('./conf/layout-map.config'),
  ...require('./conf/notion.config'),
  ...require('./conf/dev.config'),

  CUSTOM_EXTERNAL_JS: [''],
  CUSTOM_EXTERNAL_CSS: [''],

  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true,
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true,

  LAYOUT_SIDEBAR_REVERSE:
    process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    'Making China Travel Easy🎉',

  UUID_REDIRECT: process.env.UUID_REDIRECT || false
}

module.exports = BLOG
