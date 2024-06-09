<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation
- make sure you have [node.js](https://nodejs.org/) installed version 18+
- copy `.env.examaple` to `.env` and set environments for use
```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Feature
- [x] Database. Support [MYSQL](https://www.npmjs.com/package/mysql2) and [PostgreSQL](https://www.npmjs.com/package/pg)
- [x] Config Service [Config](https://www.npmjs.com/package/@nestjs/config)
- [x] JWT Service [JWT](https://www.npmjs.com/package/@nestjs/jwt)
- [x] Winston Service [Winston](https://www.npmjs.com/package/winston)
- [x] Task Scheduling Service [Schedule](https://www.npmjs.com/package/@nestjs/schedule)
- [x] Queue Service [Queue](https://www.npmjs.com/package/@nestjs/bull)
- [x] File Upload [Multer](https://www.npmjs.com/package/multer)
- [x] Rate Limiting Service [Throttler](https://www.npmjs.com/package/@nestjs/throttler)
- [x] Helmet [Helmet](https://www.npmjs.com/package/helmet)

## Incoming Feature
- [ ] Database support [MongoDB](https://www.npmjs.com/package/mongodb)
- [ ] Swagger UI [Swagger](https://www.npmjs.com/package/@nestjs/swagger)
- [ ] Internationalization/Translations (I18N) [nestjs-i18n](https://www.npmjs.com/package/nestjs-i18n).
- [ ] Docker
- [ ] CI (Github Actions)
- [ ] husky
- [ ] Git Hooks pre-commit message

## Stay in touch

- Author - [Dzaki](https://github.com/dzakiafif)
- Linkedin - [Dzaki](https://www.linkedin.com/in/ahmad-dzaki-afif)

## License

Nest is [MIT licensed](LICENSE).
