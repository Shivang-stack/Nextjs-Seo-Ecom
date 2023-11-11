## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Google Indexing Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Robots.txt File](#robots.txt-file)
3. [XML Sitemaps](#xml-sitemaps)
   - [Static Sitemap](#static-sitemap)
   - [Dynamic Sitemap with Next.js](#dynamic-sitemap-with-nextjs)
4. [Google Search Console](#google-search-console)
5. [Content Quality and Relevance](#content-quality-and-relevance)
6. [Mobile-Friendly Design](#mobile-friendly-design)
7. [Page Speed Optimization](#page-speed-optimization)
8. [Secure HTTPS Connection](#secure-https-connection)
9. [Social Media Integration](#social-media-integration)
10. [Regular Content Updates](#regular-content-updates)
    - [getStaticProps in Next.js](#getstaticprops-in-nextjs)
    - [Incremental Static Regeneration](#incremental-static-regeneration)

## 1. Introduction

Google indexing is the process by which Googlebot, Google's web crawling bot, discovers and categorizes web pages. Proper indexing is essential for your website's visibility in Google search results. Follow the steps below to ensure your site is effectively indexed.

## 2. Robots.txt File

The `robots.txt` file is used to control which areas of your site should not be crawled by search engines. Make sure it's configured correctly to allow Googlebot access to important content.

Example `robots.txt`:

```plaintext
User-agent: *
Disallow: /private/
Disallow: /restricted/
```

## 3. XML Sitemaps

### Static Sitemap

Create an XML sitemap to help Googlebot understand the structure of your website. Include the sitemap in your `robots.txt` file and submit it to Google Search Console.

Example XML Sitemap entry:

```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>https://www.example.com/page1</loc>
      <lastmod>2023-01-01</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
   </url>
   <!-- Add more URL entries -->
</urlset>
```

### Dynamic Sitemap with Next.js

For Next.js applications, you can use the `nextjs-sitemap` package to generate dynamic sitemaps. Install the package:

```bash
npm install nextjs-sitemap
```

Configure `next.config.js`:

```javascript
const sitemap = require('nextjs-sitemap-generator');

module.exports = {
  // Other Next.js configurations

  // Add the following sitemap configuration
  async exportPathMap() {
    await sitemap({
      baseUrl: 'https://www.example.com',
      pagesDirectory: __dirname + "/pages",
      targetDirectory: 'static/',
      ignoredExtensions: ['js', 'map'],
      ignoredPaths: ['[path]', '404'],
    });
    return {
      // Your exportPathMap configuration
    };
  },
};
```

## 4. Google Search Console

Set up Google Search Console for your website. Verify ownership and monitor the indexing status, crawl errors, and search performance.

## 5. Content Quality and Relevance

Produce high-quality, relevant content that provides value to users. Google prioritizes content that matches search intent and user queries.

## 6. Mobile-Friendly Design

Ensure your website is mobile-friendly. Google uses mobile-first indexing, meaning it primarily crawls and indexes the mobile version of a site.

## 7. Page Speed Optimization

Optimize your website's loading speed. Google considers page speed as a ranking factor, and faster-loading pages enhance the user experience.

## 8. Secure HTTPS Connection

Use a secure HTTPS connection for your website. Google prefers secure sites, and it can affect your search rankings positively.

## 9. Social Media Integration

Integrate social media sharing buttons and encourage social sharing. While not a direct ranking factor, social signals can indirectly impact search visibility.

## 10. Regular Content Updates

### `getStaticProps` in Next.js

Utilize `getStaticProps` in Next.js to pre-render static pages at build time. This ensures that Googlebot can easily crawl and index your content.

Example usage of `getStaticProps`:

```javascript
export async function getStaticProps() {
  // Fetch data from an API or other source
  const data = //...

  return {
    props: {
      data,
    },
    // Re-generate the page every hour
    revalidate: 3600,
  };
}
```

### Incremental Static Regeneration

Implement Incremental Static Regeneration (ISR) to update static pages without rebuilding the entire site. This allows for more frequent content updates while maintaining optimal performance.

Example usage of ISR:

```javascript
export async function getStaticProps() {
  const data = //...

  return {
    props: {
      data,
    },
    // Re-generate the page at most every hour
    revalidate: 3600,
  };
}
```

By using `getStaticProps` and Incremental Static Regeneration, you can keep your content fresh and indexed efficiently by Google.