export type Post = {
    slug: string;
    title: string;
    description: string;
    publishedAt: Date;
    content: string;
    image: string;
    showPopCopyrights: boolean;
    showLegalDisclaimer: boolean;
}