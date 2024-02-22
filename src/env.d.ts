/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly DB_PASSWORD: string;
  readonly PUBLIC_POKEAPI: string;
  readonly PUBLIC_GOOGLE_SITE_VERIFICATION: string;
  // more env variables...
}
