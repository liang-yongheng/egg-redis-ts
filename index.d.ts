import { Redis, RedisOptions } from "ioredis";

interface ClusterOptions extends RedisOptions {
  cluster?: boolean;
  nodes?: RedisOptions[];
}

interface EggRedisOptions {
  Redis?: Redis;
  default?: object;
  app?: boolean;
  agent?: boolean;
  client?: ClusterOptions;
  clients?: Record<string, RedisOptions>;
}

interface EggRedis {
  get(key: string): Redis;
}

declare module 'egg' {
  interface Application {
    redis: EggRedis & Singleton<EggRedis>;
  }

  interface EggAppConfig {
    redis: EggRedisOptions;
  }
}
