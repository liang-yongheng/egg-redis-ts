## egg-redis-ts

参考egg-redis调整了ts文件

为了支持redis多实例typescript版


## Install

```bash
$ npm i egg-redis-ts --save
```

## Configuration

Change `${app_root}/config/plugin.js` to enable redis plugin:

```js
exports.redis = {
  enable: true,
  package: 'egg-redis-ts',
};
```

Configure redis information in `${app_root}/config/config.default.js`:

**Single Client**

```javascript
config.redis = {
  client: {
    port: 6379,          // Redis port
    host: '127.0.0.1',   // Redis host
    password: 'auth',
    db: 0,
  },
}
```

**Multi Clients**

```javascript
config.redis = {
  clients: {
    foo: {                 // instanceName. See below
      port: 6379,          // Redis port
      host: '127.0.0.1',   // Redis host
      password: 'auth',
      db: 0,
    },
    bar: {
      port: 6379,
      host: '127.0.0.1',
      password: 'auth',
      db: 1,
    },
  }
}
```

**Sentinel**

```javascript
config.redis = {
  client: {
    sentinels: [{          // Sentinel instances
      port: 26379,         // Sentinel port
      host: '127.0.0.1',   // Sentinel host
    }],
    name: 'mymaster',      // Master name
    password: 'auth',
    db: 0
  },
}
```
