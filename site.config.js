const items = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}]
const gridItems = [{id: 1}, {id: 2}, {id: 3}]

// Site Infomation
const siteData = {
  root: 'src',
  src: 'src',
  locale: 'ar',
  siteName: '',
  shortName: '',
  description: '',
  url: '',
  ogpImage: 'ogp.jpg',
  ogType: 'website',
  fbAppId: '',
  fbAdmins: '',
  twitterCard: 'summary_large_image',
  twitterSite: '@SiteAccount',
  themeColor: '#FFA800',
  backgroundColor: '#fff'
};

// Page Infomation
const pagesData = {
  '/index.html': { items, gridItems }
};

export { siteData, pagesData };
