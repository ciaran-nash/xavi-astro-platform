import { PortfolioItem as SanityPost } from './types/portfolio-types';

declare module '@sanity/client' {
    import type { SanityClient as BaseSanityClient } from '@sanity/client'

    export interface SanityClient extends BaseSanityClient {
        fetch<T>(query: string): Promise<T>
    }
}

export { SanityPost };