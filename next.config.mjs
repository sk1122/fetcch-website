// @ts-check

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */

/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    appDir: true,
  },
  redirects: async () => {
    return [
      {
        source: "/blog",
        destination: "https://medium.com/@fetcchx",
        permanent: true
      },
      {
        source: "/docs",
        destination: "https://docs.fetcch.xyz",
        permanent: true
      }
    ]
  }
}

export default config
