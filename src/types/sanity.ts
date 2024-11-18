// src/types/sanity.ts

export interface SanityPost {
    _id: string;
    title: string;
    slug: { current: string };
    description: string;
    excerpt: string;
    date: string;
    category: string;
    image: {
        asset: {
            _ref: string;
            _type: string;
        };
    };
    exhibitionDetails?: {
        dates: string;
        days: string;
        location: string;
        accessInfo: string;
    };
    credits?: any;
}