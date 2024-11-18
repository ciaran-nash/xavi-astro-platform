// src/types/portfolio-types.ts
export interface PortfolioItem {
    _id: string;
    title: string;
    slug: { current: string };
    image: string;
    category: string;
    date: string;
    excerpt: string;
    description?: string;
}

export interface PortfolioCategory {
    title: string;
    slug: string;
}