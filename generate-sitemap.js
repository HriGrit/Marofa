import fs from 'fs';
import { Readable } from 'stream';
import { SitemapStream, streamToPromise } from 'sitemap';

// Simulate fetching dynamic route data
const employerIds = ['qBFcDlgDp8SG7YkdCaapsLiQxRy1'];
const helperIds = ['yfJp1PHhHqShAYGDSj1G6rZqwT63'];

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/signIn', changefreq: 'weekly', priority: 0.8 },
  { url: '/signUp', changefreq: 'weekly', priority: 0.8 },
  { url: '/employers', changefreq: 'weekly', priority: 0.8 },
  ...employerIds.map(id => ({ url: `/employers/${id}`, changefreq: 'weekly', priority: 0.8 })),
  { url: '/helpers', changefreq: 'weekly', priority: 0.8 },
  ...helperIds.map(id => ({ url: `/helpers/${id}`, changefreq: 'weekly', priority: 0.8 })),
  { url: '/register', changefreq: 'weekly', priority: 0.8 }
];

async function generateSitemap() {
    const stream = new SitemapStream({ hostname: 'https://marofa-2279c.web.app' });
    const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then(data => data.toString());
  
    fs.writeFileSync('./public/sitemap.xml', xmlString);
  }
  
  generateSitemap().catch(error => {
    console.error('An error occurred while generating the sitemap:', error);
  });
