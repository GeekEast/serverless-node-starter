<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table Of Content

- [Usage](#usage)
  - [Install](#install)
  - [Import](#import)
  - [Execute](#execute)
  - [Deploy](#deploy)
  - [Logging](#logging)
  - [Remove](#remove)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage
### Install
```sh
yarn
# yarn add --dev husky doctoc
```

### Import
```yml
plugins:
  - serverless-plugin-typescript
  - serverless-offline-schedule
```

### Execute
```sh
serverless offline
yarn dev
```

### Deploy
```sh
sls deploy
```

### Logging
```sh
sls log -f hello -s dev -t
```

### Remove
```sh
sls remove
```

