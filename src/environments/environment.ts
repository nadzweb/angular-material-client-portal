// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  auth0: {
  	clientID: 'dF1lxGOBreAb1xmZsskKI9nxKjrfSr2f',
  	domain: 'nadzweb.auth0.com',
  	redirectUri: 'http://localhost:3000/callback'
  }
};
