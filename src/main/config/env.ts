
export const env = {
  facebookApi: {
    clientId: process.env.FB_CLIENT_ID ?? '255017709763229',
    clientSecret: process.env.FB_CLIENT_SECRET ?? 'c02b1e197ee6aec2947b193148cdaef7',
    accessToken: process.env.FB_ACCESS_TOKEN ?? ''
  },
  s3: {
    accessKey: process.env.AWS_S3_ACCESS_KEY ?? '',
    secret: process.env.AWS_S3_SECRET ?? '',
    bucket: process.env.BUCKET ?? ''
  },
  port: process.env.PORT ?? 8080,
  jwtSecret: process.env.JWT_SECRET ?? 'ff2çej2çlk22çlkej'
}
