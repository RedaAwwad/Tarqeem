import features from './src/data/features.json';
import section1 from './src/data/section1.json';
import mashareqItems from './src/data/mashareqItems.json';
import events from './src/data/events.json';
import makaremCenter from './src/data/makaremCenter.json';
import masha3rImages from './src/data/masha3rImages.json';
import hotelsImages from './src/data/hotelsImages.json';


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
  '/index.html': {
    items,
    gridItems,
    features,
    section1,
    mashareqItems,
    events,
    makaremCenter,
    masha3rImages,
    hotelsImages,
  }
};

export { siteData, pagesData };
