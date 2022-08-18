/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["image.tmdb.org"],
  },

  async rewrites() {
    const mykey = process.env.API_KEY;
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${mykey}&language=en-US&page=1`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${mykey}&language=en-US&page=1`,
      },
    ];
  },
};

module.exports = nextConfig;
