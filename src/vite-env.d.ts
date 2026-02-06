interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly VITE_API_URL: string;
  // add more variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}