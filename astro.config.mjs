// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import rehypeUnwrapImages from 'rehype-unwrap-images';

// https://astro.build/config
export default defineConfig({
	site: 'https://brockcataldi.com',
	integrations: [mdx(), sitemap()],
	markdown: {
		rehypePlugins: [rehypeUnwrapImages],
	},
});
