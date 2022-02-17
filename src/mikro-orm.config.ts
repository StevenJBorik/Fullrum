import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from 'path'; 

export default {
    migrations: {
        path: path.join(__dirname, "./migrations"),
        pattern: /ˆ[\w-]+\d+\.[tj]s$/,
    },
    entities: [Post],
    port: 5432, 
    dbName: "fsforum",
    type: "postgresql",
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0]; 