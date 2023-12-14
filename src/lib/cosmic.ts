import { createBucketClient } from '@cosmicjs/sdk'
import type { Post } from './content.type';

const cosmic = createBucketClient({
  bucketSlug: import.meta.env.PUBLIC_COSMIC_BUCKET_SLUG,
  readKey: import.meta.env.PUBLIC_COSMIC_READ_KEY
});

export const getAllPosts = async (): Promise<Post[]> => {
  const genericPosts = await cosmic.objects
    .find({ type: 'posts' })
    .props(['slug', 'title', 'metadata'].join(','));

  const oneMonumentADayPosts = await cosmic.objects
    .find({ type: 'one-monument-a-day-posts' })
    .props(['slug', 'title', 'metadata'].join(','));

  return [
    ...genericPosts.objects.map((object: any): Post => ({
      slug: object.slug,
      title: object.title,
      description: object.metadata.description,
      publishedAt: new Date(object.metadata.published_at),
      content: object.metadata.content,
      image: object.metadata.image.imgix_url,
      showLegalDisclaimer: object.metadata.show_legal_disclaimer,
      showPopCopyrights: object.metadata.show_pop_copyrights,
    })),
    ...oneMonumentADayPosts.objects.map((object: any): Post => ({
      slug: object.slug,
      title: object.title,
      description: object.metadata.description,
      publishedAt: new Date(object.metadata.published_at),
      content: object.metadata.content,
      image: object.metadata.image,
      showLegalDisclaimer: false,
      showPopCopyrights: true,
    })),
  ];
};