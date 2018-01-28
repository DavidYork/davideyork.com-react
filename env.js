export default class Env {
  static siteRoot = '';
}

switch (process.env.NODE_ENV) {
  case 'staging': Env.siteRoot = 'http://staging.davideyork.com'; break;
  case 'production': Env.siteRoot = 'http://davideyork.com'; break;
  case 'localhost': Env.siteRoot = 'http://localhost:3000'; break;
}