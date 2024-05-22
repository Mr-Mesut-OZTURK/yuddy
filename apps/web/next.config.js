/** @type {import('next').NextConfig} */


module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'demo4techies.com',
                port: '',
                pathname: '/**',
            },
        ],
    }
}
