// src/types/client.d.ts

import type { SanityClient as BaseSanityClient } from '@sanity/client'

declare module '@sanity/client' {
    export interface SanityClient extends BaseSanityClient {
        fetch<T>(query: string): Promise<T>
    }
}