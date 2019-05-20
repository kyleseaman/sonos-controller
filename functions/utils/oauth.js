import simpleOauth from 'simple-oauth2';

const sonosApi = ""
const siteUrl = process.env.URL || 'http://localhost:3000'

export const config = {
  appId: process.env.SONOS_APP_ID,
  clientId: process.env.SONOS_CLIENT_ID,
  clientSecret: process.env.SONOS_CLIENT_SECRET,

}

export default authInstance({
  client: {
    id: config.clientId,
    secret: config.clientSecret,
  },
  auth: {
    tokenHost: config.tokenHost,
    tokenPath: config.tokenPath,
    authorizePath: config.authorizePath,
  }
})