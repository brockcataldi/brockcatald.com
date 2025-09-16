import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
	loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			readingTime: z.string().optional(),
		}),
});

const work = defineCollection({
	loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z.object({
			title: z.string(),
			type: z.string(),
			description: z.string(),
			datePublish: z.coerce.date(),
			dateUpdate: z.coerce.date().optional(),
			imageHero: z.string(),
			imageListing: z.string()
		}),
});

export const collections = { articles, work };
