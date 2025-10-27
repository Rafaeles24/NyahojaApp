
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Guild
 * 
 */
export type Guild = $Result.DefaultSelection<Prisma.$GuildPayload>
/**
 * Model UserInGuild
 * 
 */
export type UserInGuild = $Result.DefaultSelection<Prisma.$UserInGuildPayload>
/**
 * Model Juegos
 * 
 */
export type Juegos = $Result.DefaultSelection<Prisma.$JuegosPayload>
/**
 * Model Partidas
 * 
 */
export type Partidas = $Result.DefaultSelection<Prisma.$PartidasPayload>
/**
 * Model JugadoresEnPartida
 * 
 */
export type JugadoresEnPartida = $Result.DefaultSelection<Prisma.$JugadoresEnPartidaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guild`: Exposes CRUD operations for the **Guild** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guilds
    * const guilds = await prisma.guild.findMany()
    * ```
    */
  get guild(): Prisma.GuildDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userInGuild`: Exposes CRUD operations for the **UserInGuild** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserInGuilds
    * const userInGuilds = await prisma.userInGuild.findMany()
    * ```
    */
  get userInGuild(): Prisma.UserInGuildDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.juegos`: Exposes CRUD operations for the **Juegos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Juegos
    * const juegos = await prisma.juegos.findMany()
    * ```
    */
  get juegos(): Prisma.JuegosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partidas`: Exposes CRUD operations for the **Partidas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Partidas
    * const partidas = await prisma.partidas.findMany()
    * ```
    */
  get partidas(): Prisma.PartidasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jugadoresEnPartida`: Exposes CRUD operations for the **JugadoresEnPartida** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JugadoresEnPartidas
    * const jugadoresEnPartidas = await prisma.jugadoresEnPartida.findMany()
    * ```
    */
  get jugadoresEnPartida(): Prisma.JugadoresEnPartidaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Guild: 'Guild',
    UserInGuild: 'UserInGuild',
    Juegos: 'Juegos',
    Partidas: 'Partidas',
    JugadoresEnPartida: 'JugadoresEnPartida'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "guild" | "userInGuild" | "juegos" | "partidas" | "jugadoresEnPartida"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Guild: {
        payload: Prisma.$GuildPayload<ExtArgs>
        fields: Prisma.GuildFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuildFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuildFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          findFirst: {
            args: Prisma.GuildFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuildFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          findMany: {
            args: Prisma.GuildFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>[]
          }
          create: {
            args: Prisma.GuildCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          createMany: {
            args: Prisma.GuildCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GuildDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          update: {
            args: Prisma.GuildUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          deleteMany: {
            args: Prisma.GuildDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuildUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GuildUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          aggregate: {
            args: Prisma.GuildAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuild>
          }
          groupBy: {
            args: Prisma.GuildGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuildGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuildCountArgs<ExtArgs>
            result: $Utils.Optional<GuildCountAggregateOutputType> | number
          }
        }
      }
      UserInGuild: {
        payload: Prisma.$UserInGuildPayload<ExtArgs>
        fields: Prisma.UserInGuildFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserInGuildFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInGuildPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserInGuildFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInGuildPayload>
          }
          findFirst: {
            args: Prisma.UserInGuildFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInGuildPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserInGuildFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInGuildPayload>
          }
          findMany: {
            args: Prisma.UserInGuildFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInGuildPayload>[]
          }
          create: {
            args: Prisma.UserInGuildCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInGuildPayload>
          }
          createMany: {
            args: Prisma.UserInGuildCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserInGuildDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInGuildPayload>
          }
          update: {
            args: Prisma.UserInGuildUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInGuildPayload>
          }
          deleteMany: {
            args: Prisma.UserInGuildDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserInGuildUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserInGuildUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInGuildPayload>
          }
          aggregate: {
            args: Prisma.UserInGuildAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserInGuild>
          }
          groupBy: {
            args: Prisma.UserInGuildGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserInGuildGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserInGuildCountArgs<ExtArgs>
            result: $Utils.Optional<UserInGuildCountAggregateOutputType> | number
          }
        }
      }
      Juegos: {
        payload: Prisma.$JuegosPayload<ExtArgs>
        fields: Prisma.JuegosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JuegosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JuegosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegosPayload>
          }
          findFirst: {
            args: Prisma.JuegosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JuegosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegosPayload>
          }
          findMany: {
            args: Prisma.JuegosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegosPayload>[]
          }
          create: {
            args: Prisma.JuegosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegosPayload>
          }
          createMany: {
            args: Prisma.JuegosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JuegosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegosPayload>
          }
          update: {
            args: Prisma.JuegosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegosPayload>
          }
          deleteMany: {
            args: Prisma.JuegosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JuegosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JuegosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegosPayload>
          }
          aggregate: {
            args: Prisma.JuegosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJuegos>
          }
          groupBy: {
            args: Prisma.JuegosGroupByArgs<ExtArgs>
            result: $Utils.Optional<JuegosGroupByOutputType>[]
          }
          count: {
            args: Prisma.JuegosCountArgs<ExtArgs>
            result: $Utils.Optional<JuegosCountAggregateOutputType> | number
          }
        }
      }
      Partidas: {
        payload: Prisma.$PartidasPayload<ExtArgs>
        fields: Prisma.PartidasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartidasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartidasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidasPayload>
          }
          findFirst: {
            args: Prisma.PartidasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartidasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidasPayload>
          }
          findMany: {
            args: Prisma.PartidasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidasPayload>[]
          }
          create: {
            args: Prisma.PartidasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidasPayload>
          }
          createMany: {
            args: Prisma.PartidasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PartidasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidasPayload>
          }
          update: {
            args: Prisma.PartidasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidasPayload>
          }
          deleteMany: {
            args: Prisma.PartidasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartidasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PartidasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidasPayload>
          }
          aggregate: {
            args: Prisma.PartidasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartidas>
          }
          groupBy: {
            args: Prisma.PartidasGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartidasGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartidasCountArgs<ExtArgs>
            result: $Utils.Optional<PartidasCountAggregateOutputType> | number
          }
        }
      }
      JugadoresEnPartida: {
        payload: Prisma.$JugadoresEnPartidaPayload<ExtArgs>
        fields: Prisma.JugadoresEnPartidaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JugadoresEnPartidaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JugadoresEnPartidaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JugadoresEnPartidaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JugadoresEnPartidaPayload>
          }
          findFirst: {
            args: Prisma.JugadoresEnPartidaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JugadoresEnPartidaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JugadoresEnPartidaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JugadoresEnPartidaPayload>
          }
          findMany: {
            args: Prisma.JugadoresEnPartidaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JugadoresEnPartidaPayload>[]
          }
          create: {
            args: Prisma.JugadoresEnPartidaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JugadoresEnPartidaPayload>
          }
          createMany: {
            args: Prisma.JugadoresEnPartidaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JugadoresEnPartidaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JugadoresEnPartidaPayload>
          }
          update: {
            args: Prisma.JugadoresEnPartidaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JugadoresEnPartidaPayload>
          }
          deleteMany: {
            args: Prisma.JugadoresEnPartidaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JugadoresEnPartidaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JugadoresEnPartidaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JugadoresEnPartidaPayload>
          }
          aggregate: {
            args: Prisma.JugadoresEnPartidaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJugadoresEnPartida>
          }
          groupBy: {
            args: Prisma.JugadoresEnPartidaGroupByArgs<ExtArgs>
            result: $Utils.Optional<JugadoresEnPartidaGroupByOutputType>[]
          }
          count: {
            args: Prisma.JugadoresEnPartidaCountArgs<ExtArgs>
            result: $Utils.Optional<JugadoresEnPartidaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    guild?: GuildOmit
    userInGuild?: UserInGuildOmit
    juegos?: JuegosOmit
    partidas?: PartidasOmit
    jugadoresEnPartida?: JugadoresEnPartidaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    guilds: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guilds?: boolean | UsuarioCountOutputTypeCountGuildsArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountGuildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInGuildWhereInput
  }


  /**
   * Count Type GuildCountOutputType
   */

  export type GuildCountOutputType = {
    partidas: number
    usuarios_en_guild: number
  }

  export type GuildCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partidas?: boolean | GuildCountOutputTypeCountPartidasArgs
    usuarios_en_guild?: boolean | GuildCountOutputTypeCountUsuarios_en_guildArgs
  }

  // Custom InputTypes
  /**
   * GuildCountOutputType without action
   */
  export type GuildCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildCountOutputType
     */
    select?: GuildCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuildCountOutputType without action
   */
  export type GuildCountOutputTypeCountPartidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartidasWhereInput
  }

  /**
   * GuildCountOutputType without action
   */
  export type GuildCountOutputTypeCountUsuarios_en_guildArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInGuildWhereInput
  }


  /**
   * Count Type JuegosCountOutputType
   */

  export type JuegosCountOutputType = {
    partidas: number
  }

  export type JuegosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partidas?: boolean | JuegosCountOutputTypeCountPartidasArgs
  }

  // Custom InputTypes
  /**
   * JuegosCountOutputType without action
   */
  export type JuegosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegosCountOutputType
     */
    select?: JuegosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JuegosCountOutputType without action
   */
  export type JuegosCountOutputTypeCountPartidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartidasWhereInput
  }


  /**
   * Count Type PartidasCountOutputType
   */

  export type PartidasCountOutputType = {
    jugadores: number
  }

  export type PartidasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jugadores?: boolean | PartidasCountOutputTypeCountJugadoresArgs
  }

  // Custom InputTypes
  /**
   * PartidasCountOutputType without action
   */
  export type PartidasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartidasCountOutputType
     */
    select?: PartidasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PartidasCountOutputType without action
   */
  export type PartidasCountOutputTypeCountJugadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JugadoresEnPartidaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    discord_id: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    discord_id: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    discord_id: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    discord_id?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    discord_id?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    discord_id?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    discord_id: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discord_id?: boolean
    guilds?: boolean | Usuario$guildsArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    discord_id?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "discord_id", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guilds?: boolean | Usuario$guildsArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      guilds: Prisma.$UserInGuildPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      discord_id: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guilds<T extends Usuario$guildsArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$guildsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInGuildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly discord_id: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.guilds
   */
  export type Usuario$guildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInGuild
     */
    select?: UserInGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInGuild
     */
    omit?: UserInGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInGuildInclude<ExtArgs> | null
    where?: UserInGuildWhereInput
    orderBy?: UserInGuildOrderByWithRelationInput | UserInGuildOrderByWithRelationInput[]
    cursor?: UserInGuildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserInGuildScalarFieldEnum | UserInGuildScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Guild
   */

  export type AggregateGuild = {
    _count: GuildCountAggregateOutputType | null
    _avg: GuildAvgAggregateOutputType | null
    _sum: GuildSumAggregateOutputType | null
    _min: GuildMinAggregateOutputType | null
    _max: GuildMaxAggregateOutputType | null
  }

  export type GuildAvgAggregateOutputType = {
    id: number | null
  }

  export type GuildSumAggregateOutputType = {
    id: number | null
  }

  export type GuildMinAggregateOutputType = {
    id: number | null
    discord_id: string | null
  }

  export type GuildMaxAggregateOutputType = {
    id: number | null
    discord_id: string | null
  }

  export type GuildCountAggregateOutputType = {
    id: number
    discord_id: number
    _all: number
  }


  export type GuildAvgAggregateInputType = {
    id?: true
  }

  export type GuildSumAggregateInputType = {
    id?: true
  }

  export type GuildMinAggregateInputType = {
    id?: true
    discord_id?: true
  }

  export type GuildMaxAggregateInputType = {
    id?: true
    discord_id?: true
  }

  export type GuildCountAggregateInputType = {
    id?: true
    discord_id?: true
    _all?: true
  }

  export type GuildAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guild to aggregate.
     */
    where?: GuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guilds to fetch.
     */
    orderBy?: GuildOrderByWithRelationInput | GuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guilds
    **/
    _count?: true | GuildCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuildAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuildSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuildMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuildMaxAggregateInputType
  }

  export type GetGuildAggregateType<T extends GuildAggregateArgs> = {
        [P in keyof T & keyof AggregateGuild]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuild[P]>
      : GetScalarType<T[P], AggregateGuild[P]>
  }




  export type GuildGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildWhereInput
    orderBy?: GuildOrderByWithAggregationInput | GuildOrderByWithAggregationInput[]
    by: GuildScalarFieldEnum[] | GuildScalarFieldEnum
    having?: GuildScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuildCountAggregateInputType | true
    _avg?: GuildAvgAggregateInputType
    _sum?: GuildSumAggregateInputType
    _min?: GuildMinAggregateInputType
    _max?: GuildMaxAggregateInputType
  }

  export type GuildGroupByOutputType = {
    id: number
    discord_id: string
    _count: GuildCountAggregateOutputType | null
    _avg: GuildAvgAggregateOutputType | null
    _sum: GuildSumAggregateOutputType | null
    _min: GuildMinAggregateOutputType | null
    _max: GuildMaxAggregateOutputType | null
  }

  type GetGuildGroupByPayload<T extends GuildGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuildGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuildGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuildGroupByOutputType[P]>
            : GetScalarType<T[P], GuildGroupByOutputType[P]>
        }
      >
    >


  export type GuildSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discord_id?: boolean
    partidas?: boolean | Guild$partidasArgs<ExtArgs>
    usuarios_en_guild?: boolean | Guild$usuarios_en_guildArgs<ExtArgs>
    _count?: boolean | GuildCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guild"]>



  export type GuildSelectScalar = {
    id?: boolean
    discord_id?: boolean
  }

  export type GuildOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "discord_id", ExtArgs["result"]["guild"]>
  export type GuildInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partidas?: boolean | Guild$partidasArgs<ExtArgs>
    usuarios_en_guild?: boolean | Guild$usuarios_en_guildArgs<ExtArgs>
    _count?: boolean | GuildCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GuildPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guild"
    objects: {
      partidas: Prisma.$PartidasPayload<ExtArgs>[]
      usuarios_en_guild: Prisma.$UserInGuildPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      discord_id: string
    }, ExtArgs["result"]["guild"]>
    composites: {}
  }

  type GuildGetPayload<S extends boolean | null | undefined | GuildDefaultArgs> = $Result.GetResult<Prisma.$GuildPayload, S>

  type GuildCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuildFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuildCountAggregateInputType | true
    }

  export interface GuildDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guild'], meta: { name: 'Guild' } }
    /**
     * Find zero or one Guild that matches the filter.
     * @param {GuildFindUniqueArgs} args - Arguments to find a Guild
     * @example
     * // Get one Guild
     * const guild = await prisma.guild.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuildFindUniqueArgs>(args: SelectSubset<T, GuildFindUniqueArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guild that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuildFindUniqueOrThrowArgs} args - Arguments to find a Guild
     * @example
     * // Get one Guild
     * const guild = await prisma.guild.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuildFindUniqueOrThrowArgs>(args: SelectSubset<T, GuildFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guild that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildFindFirstArgs} args - Arguments to find a Guild
     * @example
     * // Get one Guild
     * const guild = await prisma.guild.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuildFindFirstArgs>(args?: SelectSubset<T, GuildFindFirstArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guild that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildFindFirstOrThrowArgs} args - Arguments to find a Guild
     * @example
     * // Get one Guild
     * const guild = await prisma.guild.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuildFindFirstOrThrowArgs>(args?: SelectSubset<T, GuildFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Guilds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guilds
     * const guilds = await prisma.guild.findMany()
     * 
     * // Get first 10 Guilds
     * const guilds = await prisma.guild.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guildWithIdOnly = await prisma.guild.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuildFindManyArgs>(args?: SelectSubset<T, GuildFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guild.
     * @param {GuildCreateArgs} args - Arguments to create a Guild.
     * @example
     * // Create one Guild
     * const Guild = await prisma.guild.create({
     *   data: {
     *     // ... data to create a Guild
     *   }
     * })
     * 
     */
    create<T extends GuildCreateArgs>(args: SelectSubset<T, GuildCreateArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Guilds.
     * @param {GuildCreateManyArgs} args - Arguments to create many Guilds.
     * @example
     * // Create many Guilds
     * const guild = await prisma.guild.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuildCreateManyArgs>(args?: SelectSubset<T, GuildCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Guild.
     * @param {GuildDeleteArgs} args - Arguments to delete one Guild.
     * @example
     * // Delete one Guild
     * const Guild = await prisma.guild.delete({
     *   where: {
     *     // ... filter to delete one Guild
     *   }
     * })
     * 
     */
    delete<T extends GuildDeleteArgs>(args: SelectSubset<T, GuildDeleteArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guild.
     * @param {GuildUpdateArgs} args - Arguments to update one Guild.
     * @example
     * // Update one Guild
     * const guild = await prisma.guild.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuildUpdateArgs>(args: SelectSubset<T, GuildUpdateArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Guilds.
     * @param {GuildDeleteManyArgs} args - Arguments to filter Guilds to delete.
     * @example
     * // Delete a few Guilds
     * const { count } = await prisma.guild.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuildDeleteManyArgs>(args?: SelectSubset<T, GuildDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guilds
     * const guild = await prisma.guild.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuildUpdateManyArgs>(args: SelectSubset<T, GuildUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Guild.
     * @param {GuildUpsertArgs} args - Arguments to update or create a Guild.
     * @example
     * // Update or create a Guild
     * const guild = await prisma.guild.upsert({
     *   create: {
     *     // ... data to create a Guild
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guild we want to update
     *   }
     * })
     */
    upsert<T extends GuildUpsertArgs>(args: SelectSubset<T, GuildUpsertArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Guilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildCountArgs} args - Arguments to filter Guilds to count.
     * @example
     * // Count the number of Guilds
     * const count = await prisma.guild.count({
     *   where: {
     *     // ... the filter for the Guilds we want to count
     *   }
     * })
    **/
    count<T extends GuildCountArgs>(
      args?: Subset<T, GuildCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuildCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuildAggregateArgs>(args: Subset<T, GuildAggregateArgs>): Prisma.PrismaPromise<GetGuildAggregateType<T>>

    /**
     * Group by Guild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuildGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuildGroupByArgs['orderBy'] }
        : { orderBy?: GuildGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuildGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuildGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guild model
   */
  readonly fields: GuildFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guild.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuildClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    partidas<T extends Guild$partidasArgs<ExtArgs> = {}>(args?: Subset<T, Guild$partidasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarios_en_guild<T extends Guild$usuarios_en_guildArgs<ExtArgs> = {}>(args?: Subset<T, Guild$usuarios_en_guildArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInGuildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Guild model
   */
  interface GuildFieldRefs {
    readonly id: FieldRef<"Guild", 'Int'>
    readonly discord_id: FieldRef<"Guild", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Guild findUnique
   */
  export type GuildFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter, which Guild to fetch.
     */
    where: GuildWhereUniqueInput
  }

  /**
   * Guild findUniqueOrThrow
   */
  export type GuildFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter, which Guild to fetch.
     */
    where: GuildWhereUniqueInput
  }

  /**
   * Guild findFirst
   */
  export type GuildFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter, which Guild to fetch.
     */
    where?: GuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guilds to fetch.
     */
    orderBy?: GuildOrderByWithRelationInput | GuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guilds.
     */
    cursor?: GuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guilds.
     */
    distinct?: GuildScalarFieldEnum | GuildScalarFieldEnum[]
  }

  /**
   * Guild findFirstOrThrow
   */
  export type GuildFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter, which Guild to fetch.
     */
    where?: GuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guilds to fetch.
     */
    orderBy?: GuildOrderByWithRelationInput | GuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guilds.
     */
    cursor?: GuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guilds.
     */
    distinct?: GuildScalarFieldEnum | GuildScalarFieldEnum[]
  }

  /**
   * Guild findMany
   */
  export type GuildFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter, which Guilds to fetch.
     */
    where?: GuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guilds to fetch.
     */
    orderBy?: GuildOrderByWithRelationInput | GuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guilds.
     */
    cursor?: GuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guilds.
     */
    skip?: number
    distinct?: GuildScalarFieldEnum | GuildScalarFieldEnum[]
  }

  /**
   * Guild create
   */
  export type GuildCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * The data needed to create a Guild.
     */
    data: XOR<GuildCreateInput, GuildUncheckedCreateInput>
  }

  /**
   * Guild createMany
   */
  export type GuildCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guilds.
     */
    data: GuildCreateManyInput | GuildCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guild update
   */
  export type GuildUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * The data needed to update a Guild.
     */
    data: XOR<GuildUpdateInput, GuildUncheckedUpdateInput>
    /**
     * Choose, which Guild to update.
     */
    where: GuildWhereUniqueInput
  }

  /**
   * Guild updateMany
   */
  export type GuildUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guilds.
     */
    data: XOR<GuildUpdateManyMutationInput, GuildUncheckedUpdateManyInput>
    /**
     * Filter which Guilds to update
     */
    where?: GuildWhereInput
    /**
     * Limit how many Guilds to update.
     */
    limit?: number
  }

  /**
   * Guild upsert
   */
  export type GuildUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * The filter to search for the Guild to update in case it exists.
     */
    where: GuildWhereUniqueInput
    /**
     * In case the Guild found by the `where` argument doesn't exist, create a new Guild with this data.
     */
    create: XOR<GuildCreateInput, GuildUncheckedCreateInput>
    /**
     * In case the Guild was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuildUpdateInput, GuildUncheckedUpdateInput>
  }

  /**
   * Guild delete
   */
  export type GuildDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter which Guild to delete.
     */
    where: GuildWhereUniqueInput
  }

  /**
   * Guild deleteMany
   */
  export type GuildDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guilds to delete
     */
    where?: GuildWhereInput
    /**
     * Limit how many Guilds to delete.
     */
    limit?: number
  }

  /**
   * Guild.partidas
   */
  export type Guild$partidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partidas
     */
    select?: PartidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partidas
     */
    omit?: PartidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidasInclude<ExtArgs> | null
    where?: PartidasWhereInput
    orderBy?: PartidasOrderByWithRelationInput | PartidasOrderByWithRelationInput[]
    cursor?: PartidasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartidasScalarFieldEnum | PartidasScalarFieldEnum[]
  }

  /**
   * Guild.usuarios_en_guild
   */
  export type Guild$usuarios_en_guildArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInGuild
     */
    select?: UserInGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInGuild
     */
    omit?: UserInGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInGuildInclude<ExtArgs> | null
    where?: UserInGuildWhereInput
    orderBy?: UserInGuildOrderByWithRelationInput | UserInGuildOrderByWithRelationInput[]
    cursor?: UserInGuildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserInGuildScalarFieldEnum | UserInGuildScalarFieldEnum[]
  }

  /**
   * Guild without action
   */
  export type GuildDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
  }


  /**
   * Model UserInGuild
   */

  export type AggregateUserInGuild = {
    _count: UserInGuildCountAggregateOutputType | null
    _avg: UserInGuildAvgAggregateOutputType | null
    _sum: UserInGuildSumAggregateOutputType | null
    _min: UserInGuildMinAggregateOutputType | null
    _max: UserInGuildMaxAggregateOutputType | null
  }

  export type UserInGuildAvgAggregateOutputType = {
    id: number | null
  }

  export type UserInGuildSumAggregateOutputType = {
    id: number | null
  }

  export type UserInGuildMinAggregateOutputType = {
    id: number | null
    usuario_id: string | null
    guild_id: string | null
  }

  export type UserInGuildMaxAggregateOutputType = {
    id: number | null
    usuario_id: string | null
    guild_id: string | null
  }

  export type UserInGuildCountAggregateOutputType = {
    id: number
    usuario_id: number
    guild_id: number
    _all: number
  }


  export type UserInGuildAvgAggregateInputType = {
    id?: true
  }

  export type UserInGuildSumAggregateInputType = {
    id?: true
  }

  export type UserInGuildMinAggregateInputType = {
    id?: true
    usuario_id?: true
    guild_id?: true
  }

  export type UserInGuildMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    guild_id?: true
  }

  export type UserInGuildCountAggregateInputType = {
    id?: true
    usuario_id?: true
    guild_id?: true
    _all?: true
  }

  export type UserInGuildAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInGuild to aggregate.
     */
    where?: UserInGuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInGuilds to fetch.
     */
    orderBy?: UserInGuildOrderByWithRelationInput | UserInGuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserInGuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInGuilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInGuilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserInGuilds
    **/
    _count?: true | UserInGuildCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserInGuildAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserInGuildSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserInGuildMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserInGuildMaxAggregateInputType
  }

  export type GetUserInGuildAggregateType<T extends UserInGuildAggregateArgs> = {
        [P in keyof T & keyof AggregateUserInGuild]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserInGuild[P]>
      : GetScalarType<T[P], AggregateUserInGuild[P]>
  }




  export type UserInGuildGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInGuildWhereInput
    orderBy?: UserInGuildOrderByWithAggregationInput | UserInGuildOrderByWithAggregationInput[]
    by: UserInGuildScalarFieldEnum[] | UserInGuildScalarFieldEnum
    having?: UserInGuildScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserInGuildCountAggregateInputType | true
    _avg?: UserInGuildAvgAggregateInputType
    _sum?: UserInGuildSumAggregateInputType
    _min?: UserInGuildMinAggregateInputType
    _max?: UserInGuildMaxAggregateInputType
  }

  export type UserInGuildGroupByOutputType = {
    id: number
    usuario_id: string
    guild_id: string
    _count: UserInGuildCountAggregateOutputType | null
    _avg: UserInGuildAvgAggregateOutputType | null
    _sum: UserInGuildSumAggregateOutputType | null
    _min: UserInGuildMinAggregateOutputType | null
    _max: UserInGuildMaxAggregateOutputType | null
  }

  type GetUserInGuildGroupByPayload<T extends UserInGuildGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserInGuildGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserInGuildGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserInGuildGroupByOutputType[P]>
            : GetScalarType<T[P], UserInGuildGroupByOutputType[P]>
        }
      >
    >


  export type UserInGuildSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    guild_id?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userInGuild"]>



  export type UserInGuildSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    guild_id?: boolean
  }

  export type UserInGuildOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "guild_id", ExtArgs["result"]["userInGuild"]>
  export type UserInGuildInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }

  export type $UserInGuildPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserInGuild"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      guild: Prisma.$GuildPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario_id: string
      guild_id: string
    }, ExtArgs["result"]["userInGuild"]>
    composites: {}
  }

  type UserInGuildGetPayload<S extends boolean | null | undefined | UserInGuildDefaultArgs> = $Result.GetResult<Prisma.$UserInGuildPayload, S>

  type UserInGuildCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserInGuildFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserInGuildCountAggregateInputType | true
    }

  export interface UserInGuildDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserInGuild'], meta: { name: 'UserInGuild' } }
    /**
     * Find zero or one UserInGuild that matches the filter.
     * @param {UserInGuildFindUniqueArgs} args - Arguments to find a UserInGuild
     * @example
     * // Get one UserInGuild
     * const userInGuild = await prisma.userInGuild.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserInGuildFindUniqueArgs>(args: SelectSubset<T, UserInGuildFindUniqueArgs<ExtArgs>>): Prisma__UserInGuildClient<$Result.GetResult<Prisma.$UserInGuildPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserInGuild that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserInGuildFindUniqueOrThrowArgs} args - Arguments to find a UserInGuild
     * @example
     * // Get one UserInGuild
     * const userInGuild = await prisma.userInGuild.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserInGuildFindUniqueOrThrowArgs>(args: SelectSubset<T, UserInGuildFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserInGuildClient<$Result.GetResult<Prisma.$UserInGuildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserInGuild that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInGuildFindFirstArgs} args - Arguments to find a UserInGuild
     * @example
     * // Get one UserInGuild
     * const userInGuild = await prisma.userInGuild.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserInGuildFindFirstArgs>(args?: SelectSubset<T, UserInGuildFindFirstArgs<ExtArgs>>): Prisma__UserInGuildClient<$Result.GetResult<Prisma.$UserInGuildPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserInGuild that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInGuildFindFirstOrThrowArgs} args - Arguments to find a UserInGuild
     * @example
     * // Get one UserInGuild
     * const userInGuild = await prisma.userInGuild.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserInGuildFindFirstOrThrowArgs>(args?: SelectSubset<T, UserInGuildFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserInGuildClient<$Result.GetResult<Prisma.$UserInGuildPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserInGuilds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInGuildFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserInGuilds
     * const userInGuilds = await prisma.userInGuild.findMany()
     * 
     * // Get first 10 UserInGuilds
     * const userInGuilds = await prisma.userInGuild.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userInGuildWithIdOnly = await prisma.userInGuild.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserInGuildFindManyArgs>(args?: SelectSubset<T, UserInGuildFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInGuildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserInGuild.
     * @param {UserInGuildCreateArgs} args - Arguments to create a UserInGuild.
     * @example
     * // Create one UserInGuild
     * const UserInGuild = await prisma.userInGuild.create({
     *   data: {
     *     // ... data to create a UserInGuild
     *   }
     * })
     * 
     */
    create<T extends UserInGuildCreateArgs>(args: SelectSubset<T, UserInGuildCreateArgs<ExtArgs>>): Prisma__UserInGuildClient<$Result.GetResult<Prisma.$UserInGuildPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserInGuilds.
     * @param {UserInGuildCreateManyArgs} args - Arguments to create many UserInGuilds.
     * @example
     * // Create many UserInGuilds
     * const userInGuild = await prisma.userInGuild.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserInGuildCreateManyArgs>(args?: SelectSubset<T, UserInGuildCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserInGuild.
     * @param {UserInGuildDeleteArgs} args - Arguments to delete one UserInGuild.
     * @example
     * // Delete one UserInGuild
     * const UserInGuild = await prisma.userInGuild.delete({
     *   where: {
     *     // ... filter to delete one UserInGuild
     *   }
     * })
     * 
     */
    delete<T extends UserInGuildDeleteArgs>(args: SelectSubset<T, UserInGuildDeleteArgs<ExtArgs>>): Prisma__UserInGuildClient<$Result.GetResult<Prisma.$UserInGuildPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserInGuild.
     * @param {UserInGuildUpdateArgs} args - Arguments to update one UserInGuild.
     * @example
     * // Update one UserInGuild
     * const userInGuild = await prisma.userInGuild.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserInGuildUpdateArgs>(args: SelectSubset<T, UserInGuildUpdateArgs<ExtArgs>>): Prisma__UserInGuildClient<$Result.GetResult<Prisma.$UserInGuildPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserInGuilds.
     * @param {UserInGuildDeleteManyArgs} args - Arguments to filter UserInGuilds to delete.
     * @example
     * // Delete a few UserInGuilds
     * const { count } = await prisma.userInGuild.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserInGuildDeleteManyArgs>(args?: SelectSubset<T, UserInGuildDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserInGuilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInGuildUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserInGuilds
     * const userInGuild = await prisma.userInGuild.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserInGuildUpdateManyArgs>(args: SelectSubset<T, UserInGuildUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserInGuild.
     * @param {UserInGuildUpsertArgs} args - Arguments to update or create a UserInGuild.
     * @example
     * // Update or create a UserInGuild
     * const userInGuild = await prisma.userInGuild.upsert({
     *   create: {
     *     // ... data to create a UserInGuild
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserInGuild we want to update
     *   }
     * })
     */
    upsert<T extends UserInGuildUpsertArgs>(args: SelectSubset<T, UserInGuildUpsertArgs<ExtArgs>>): Prisma__UserInGuildClient<$Result.GetResult<Prisma.$UserInGuildPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserInGuilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInGuildCountArgs} args - Arguments to filter UserInGuilds to count.
     * @example
     * // Count the number of UserInGuilds
     * const count = await prisma.userInGuild.count({
     *   where: {
     *     // ... the filter for the UserInGuilds we want to count
     *   }
     * })
    **/
    count<T extends UserInGuildCountArgs>(
      args?: Subset<T, UserInGuildCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserInGuildCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserInGuild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInGuildAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserInGuildAggregateArgs>(args: Subset<T, UserInGuildAggregateArgs>): Prisma.PrismaPromise<GetUserInGuildAggregateType<T>>

    /**
     * Group by UserInGuild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInGuildGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserInGuildGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserInGuildGroupByArgs['orderBy'] }
        : { orderBy?: UserInGuildGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserInGuildGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserInGuildGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserInGuild model
   */
  readonly fields: UserInGuildFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserInGuild.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserInGuildClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    guild<T extends GuildDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildDefaultArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserInGuild model
   */
  interface UserInGuildFieldRefs {
    readonly id: FieldRef<"UserInGuild", 'Int'>
    readonly usuario_id: FieldRef<"UserInGuild", 'String'>
    readonly guild_id: FieldRef<"UserInGuild", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserInGuild findUnique
   */
  export type UserInGuildFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInGuild
     */
    select?: UserInGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInGuild
     */
    omit?: UserInGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInGuildInclude<ExtArgs> | null
    /**
     * Filter, which UserInGuild to fetch.
     */
    where: UserInGuildWhereUniqueInput
  }

  /**
   * UserInGuild findUniqueOrThrow
   */
  export type UserInGuildFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInGuild
     */
    select?: UserInGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInGuild
     */
    omit?: UserInGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInGuildInclude<ExtArgs> | null
    /**
     * Filter, which UserInGuild to fetch.
     */
    where: UserInGuildWhereUniqueInput
  }

  /**
   * UserInGuild findFirst
   */
  export type UserInGuildFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInGuild
     */
    select?: UserInGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInGuild
     */
    omit?: UserInGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInGuildInclude<ExtArgs> | null
    /**
     * Filter, which UserInGuild to fetch.
     */
    where?: UserInGuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInGuilds to fetch.
     */
    orderBy?: UserInGuildOrderByWithRelationInput | UserInGuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInGuilds.
     */
    cursor?: UserInGuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInGuilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInGuilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInGuilds.
     */
    distinct?: UserInGuildScalarFieldEnum | UserInGuildScalarFieldEnum[]
  }

  /**
   * UserInGuild findFirstOrThrow
   */
  export type UserInGuildFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInGuild
     */
    select?: UserInGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInGuild
     */
    omit?: UserInGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInGuildInclude<ExtArgs> | null
    /**
     * Filter, which UserInGuild to fetch.
     */
    where?: UserInGuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInGuilds to fetch.
     */
    orderBy?: UserInGuildOrderByWithRelationInput | UserInGuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInGuilds.
     */
    cursor?: UserInGuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInGuilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInGuilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInGuilds.
     */
    distinct?: UserInGuildScalarFieldEnum | UserInGuildScalarFieldEnum[]
  }

  /**
   * UserInGuild findMany
   */
  export type UserInGuildFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInGuild
     */
    select?: UserInGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInGuild
     */
    omit?: UserInGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInGuildInclude<ExtArgs> | null
    /**
     * Filter, which UserInGuilds to fetch.
     */
    where?: UserInGuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInGuilds to fetch.
     */
    orderBy?: UserInGuildOrderByWithRelationInput | UserInGuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserInGuilds.
     */
    cursor?: UserInGuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInGuilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInGuilds.
     */
    skip?: number
    distinct?: UserInGuildScalarFieldEnum | UserInGuildScalarFieldEnum[]
  }

  /**
   * UserInGuild create
   */
  export type UserInGuildCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInGuild
     */
    select?: UserInGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInGuild
     */
    omit?: UserInGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInGuildInclude<ExtArgs> | null
    /**
     * The data needed to create a UserInGuild.
     */
    data: XOR<UserInGuildCreateInput, UserInGuildUncheckedCreateInput>
  }

  /**
   * UserInGuild createMany
   */
  export type UserInGuildCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserInGuilds.
     */
    data: UserInGuildCreateManyInput | UserInGuildCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserInGuild update
   */
  export type UserInGuildUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInGuild
     */
    select?: UserInGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInGuild
     */
    omit?: UserInGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInGuildInclude<ExtArgs> | null
    /**
     * The data needed to update a UserInGuild.
     */
    data: XOR<UserInGuildUpdateInput, UserInGuildUncheckedUpdateInput>
    /**
     * Choose, which UserInGuild to update.
     */
    where: UserInGuildWhereUniqueInput
  }

  /**
   * UserInGuild updateMany
   */
  export type UserInGuildUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserInGuilds.
     */
    data: XOR<UserInGuildUpdateManyMutationInput, UserInGuildUncheckedUpdateManyInput>
    /**
     * Filter which UserInGuilds to update
     */
    where?: UserInGuildWhereInput
    /**
     * Limit how many UserInGuilds to update.
     */
    limit?: number
  }

  /**
   * UserInGuild upsert
   */
  export type UserInGuildUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInGuild
     */
    select?: UserInGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInGuild
     */
    omit?: UserInGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInGuildInclude<ExtArgs> | null
    /**
     * The filter to search for the UserInGuild to update in case it exists.
     */
    where: UserInGuildWhereUniqueInput
    /**
     * In case the UserInGuild found by the `where` argument doesn't exist, create a new UserInGuild with this data.
     */
    create: XOR<UserInGuildCreateInput, UserInGuildUncheckedCreateInput>
    /**
     * In case the UserInGuild was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserInGuildUpdateInput, UserInGuildUncheckedUpdateInput>
  }

  /**
   * UserInGuild delete
   */
  export type UserInGuildDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInGuild
     */
    select?: UserInGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInGuild
     */
    omit?: UserInGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInGuildInclude<ExtArgs> | null
    /**
     * Filter which UserInGuild to delete.
     */
    where: UserInGuildWhereUniqueInput
  }

  /**
   * UserInGuild deleteMany
   */
  export type UserInGuildDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInGuilds to delete
     */
    where?: UserInGuildWhereInput
    /**
     * Limit how many UserInGuilds to delete.
     */
    limit?: number
  }

  /**
   * UserInGuild without action
   */
  export type UserInGuildDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInGuild
     */
    select?: UserInGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInGuild
     */
    omit?: UserInGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInGuildInclude<ExtArgs> | null
  }


  /**
   * Model Juegos
   */

  export type AggregateJuegos = {
    _count: JuegosCountAggregateOutputType | null
    _avg: JuegosAvgAggregateOutputType | null
    _sum: JuegosSumAggregateOutputType | null
    _min: JuegosMinAggregateOutputType | null
    _max: JuegosMaxAggregateOutputType | null
  }

  export type JuegosAvgAggregateOutputType = {
    id: number | null
    veces_jugado: number | null
  }

  export type JuegosSumAggregateOutputType = {
    id: number | null
    veces_jugado: number | null
  }

  export type JuegosMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    veces_jugado: number | null
  }

  export type JuegosMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    veces_jugado: number | null
  }

  export type JuegosCountAggregateOutputType = {
    id: number
    nombre: number
    veces_jugado: number
    _all: number
  }


  export type JuegosAvgAggregateInputType = {
    id?: true
    veces_jugado?: true
  }

  export type JuegosSumAggregateInputType = {
    id?: true
    veces_jugado?: true
  }

  export type JuegosMinAggregateInputType = {
    id?: true
    nombre?: true
    veces_jugado?: true
  }

  export type JuegosMaxAggregateInputType = {
    id?: true
    nombre?: true
    veces_jugado?: true
  }

  export type JuegosCountAggregateInputType = {
    id?: true
    nombre?: true
    veces_jugado?: true
    _all?: true
  }

  export type JuegosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Juegos to aggregate.
     */
    where?: JuegosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Juegos to fetch.
     */
    orderBy?: JuegosOrderByWithRelationInput | JuegosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JuegosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Juegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Juegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Juegos
    **/
    _count?: true | JuegosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JuegosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JuegosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JuegosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JuegosMaxAggregateInputType
  }

  export type GetJuegosAggregateType<T extends JuegosAggregateArgs> = {
        [P in keyof T & keyof AggregateJuegos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJuegos[P]>
      : GetScalarType<T[P], AggregateJuegos[P]>
  }




  export type JuegosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JuegosWhereInput
    orderBy?: JuegosOrderByWithAggregationInput | JuegosOrderByWithAggregationInput[]
    by: JuegosScalarFieldEnum[] | JuegosScalarFieldEnum
    having?: JuegosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JuegosCountAggregateInputType | true
    _avg?: JuegosAvgAggregateInputType
    _sum?: JuegosSumAggregateInputType
    _min?: JuegosMinAggregateInputType
    _max?: JuegosMaxAggregateInputType
  }

  export type JuegosGroupByOutputType = {
    id: number
    nombre: string
    veces_jugado: number
    _count: JuegosCountAggregateOutputType | null
    _avg: JuegosAvgAggregateOutputType | null
    _sum: JuegosSumAggregateOutputType | null
    _min: JuegosMinAggregateOutputType | null
    _max: JuegosMaxAggregateOutputType | null
  }

  type GetJuegosGroupByPayload<T extends JuegosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JuegosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JuegosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JuegosGroupByOutputType[P]>
            : GetScalarType<T[P], JuegosGroupByOutputType[P]>
        }
      >
    >


  export type JuegosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    veces_jugado?: boolean
    partidas?: boolean | Juegos$partidasArgs<ExtArgs>
    _count?: boolean | JuegosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["juegos"]>



  export type JuegosSelectScalar = {
    id?: boolean
    nombre?: boolean
    veces_jugado?: boolean
  }

  export type JuegosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "veces_jugado", ExtArgs["result"]["juegos"]>
  export type JuegosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partidas?: boolean | Juegos$partidasArgs<ExtArgs>
    _count?: boolean | JuegosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $JuegosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Juegos"
    objects: {
      partidas: Prisma.$PartidasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      veces_jugado: number
    }, ExtArgs["result"]["juegos"]>
    composites: {}
  }

  type JuegosGetPayload<S extends boolean | null | undefined | JuegosDefaultArgs> = $Result.GetResult<Prisma.$JuegosPayload, S>

  type JuegosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JuegosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JuegosCountAggregateInputType | true
    }

  export interface JuegosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Juegos'], meta: { name: 'Juegos' } }
    /**
     * Find zero or one Juegos that matches the filter.
     * @param {JuegosFindUniqueArgs} args - Arguments to find a Juegos
     * @example
     * // Get one Juegos
     * const juegos = await prisma.juegos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JuegosFindUniqueArgs>(args: SelectSubset<T, JuegosFindUniqueArgs<ExtArgs>>): Prisma__JuegosClient<$Result.GetResult<Prisma.$JuegosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Juegos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JuegosFindUniqueOrThrowArgs} args - Arguments to find a Juegos
     * @example
     * // Get one Juegos
     * const juegos = await prisma.juegos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JuegosFindUniqueOrThrowArgs>(args: SelectSubset<T, JuegosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JuegosClient<$Result.GetResult<Prisma.$JuegosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Juegos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegosFindFirstArgs} args - Arguments to find a Juegos
     * @example
     * // Get one Juegos
     * const juegos = await prisma.juegos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JuegosFindFirstArgs>(args?: SelectSubset<T, JuegosFindFirstArgs<ExtArgs>>): Prisma__JuegosClient<$Result.GetResult<Prisma.$JuegosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Juegos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegosFindFirstOrThrowArgs} args - Arguments to find a Juegos
     * @example
     * // Get one Juegos
     * const juegos = await prisma.juegos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JuegosFindFirstOrThrowArgs>(args?: SelectSubset<T, JuegosFindFirstOrThrowArgs<ExtArgs>>): Prisma__JuegosClient<$Result.GetResult<Prisma.$JuegosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Juegos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Juegos
     * const juegos = await prisma.juegos.findMany()
     * 
     * // Get first 10 Juegos
     * const juegos = await prisma.juegos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const juegosWithIdOnly = await prisma.juegos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JuegosFindManyArgs>(args?: SelectSubset<T, JuegosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuegosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Juegos.
     * @param {JuegosCreateArgs} args - Arguments to create a Juegos.
     * @example
     * // Create one Juegos
     * const Juegos = await prisma.juegos.create({
     *   data: {
     *     // ... data to create a Juegos
     *   }
     * })
     * 
     */
    create<T extends JuegosCreateArgs>(args: SelectSubset<T, JuegosCreateArgs<ExtArgs>>): Prisma__JuegosClient<$Result.GetResult<Prisma.$JuegosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Juegos.
     * @param {JuegosCreateManyArgs} args - Arguments to create many Juegos.
     * @example
     * // Create many Juegos
     * const juegos = await prisma.juegos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JuegosCreateManyArgs>(args?: SelectSubset<T, JuegosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Juegos.
     * @param {JuegosDeleteArgs} args - Arguments to delete one Juegos.
     * @example
     * // Delete one Juegos
     * const Juegos = await prisma.juegos.delete({
     *   where: {
     *     // ... filter to delete one Juegos
     *   }
     * })
     * 
     */
    delete<T extends JuegosDeleteArgs>(args: SelectSubset<T, JuegosDeleteArgs<ExtArgs>>): Prisma__JuegosClient<$Result.GetResult<Prisma.$JuegosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Juegos.
     * @param {JuegosUpdateArgs} args - Arguments to update one Juegos.
     * @example
     * // Update one Juegos
     * const juegos = await prisma.juegos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JuegosUpdateArgs>(args: SelectSubset<T, JuegosUpdateArgs<ExtArgs>>): Prisma__JuegosClient<$Result.GetResult<Prisma.$JuegosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Juegos.
     * @param {JuegosDeleteManyArgs} args - Arguments to filter Juegos to delete.
     * @example
     * // Delete a few Juegos
     * const { count } = await prisma.juegos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JuegosDeleteManyArgs>(args?: SelectSubset<T, JuegosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Juegos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Juegos
     * const juegos = await prisma.juegos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JuegosUpdateManyArgs>(args: SelectSubset<T, JuegosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Juegos.
     * @param {JuegosUpsertArgs} args - Arguments to update or create a Juegos.
     * @example
     * // Update or create a Juegos
     * const juegos = await prisma.juegos.upsert({
     *   create: {
     *     // ... data to create a Juegos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Juegos we want to update
     *   }
     * })
     */
    upsert<T extends JuegosUpsertArgs>(args: SelectSubset<T, JuegosUpsertArgs<ExtArgs>>): Prisma__JuegosClient<$Result.GetResult<Prisma.$JuegosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Juegos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegosCountArgs} args - Arguments to filter Juegos to count.
     * @example
     * // Count the number of Juegos
     * const count = await prisma.juegos.count({
     *   where: {
     *     // ... the filter for the Juegos we want to count
     *   }
     * })
    **/
    count<T extends JuegosCountArgs>(
      args?: Subset<T, JuegosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JuegosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Juegos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JuegosAggregateArgs>(args: Subset<T, JuegosAggregateArgs>): Prisma.PrismaPromise<GetJuegosAggregateType<T>>

    /**
     * Group by Juegos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JuegosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JuegosGroupByArgs['orderBy'] }
        : { orderBy?: JuegosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JuegosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJuegosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Juegos model
   */
  readonly fields: JuegosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Juegos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JuegosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    partidas<T extends Juegos$partidasArgs<ExtArgs> = {}>(args?: Subset<T, Juegos$partidasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Juegos model
   */
  interface JuegosFieldRefs {
    readonly id: FieldRef<"Juegos", 'Int'>
    readonly nombre: FieldRef<"Juegos", 'String'>
    readonly veces_jugado: FieldRef<"Juegos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Juegos findUnique
   */
  export type JuegosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juegos
     */
    select?: JuegosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juegos
     */
    omit?: JuegosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegosInclude<ExtArgs> | null
    /**
     * Filter, which Juegos to fetch.
     */
    where: JuegosWhereUniqueInput
  }

  /**
   * Juegos findUniqueOrThrow
   */
  export type JuegosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juegos
     */
    select?: JuegosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juegos
     */
    omit?: JuegosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegosInclude<ExtArgs> | null
    /**
     * Filter, which Juegos to fetch.
     */
    where: JuegosWhereUniqueInput
  }

  /**
   * Juegos findFirst
   */
  export type JuegosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juegos
     */
    select?: JuegosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juegos
     */
    omit?: JuegosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegosInclude<ExtArgs> | null
    /**
     * Filter, which Juegos to fetch.
     */
    where?: JuegosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Juegos to fetch.
     */
    orderBy?: JuegosOrderByWithRelationInput | JuegosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Juegos.
     */
    cursor?: JuegosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Juegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Juegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Juegos.
     */
    distinct?: JuegosScalarFieldEnum | JuegosScalarFieldEnum[]
  }

  /**
   * Juegos findFirstOrThrow
   */
  export type JuegosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juegos
     */
    select?: JuegosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juegos
     */
    omit?: JuegosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegosInclude<ExtArgs> | null
    /**
     * Filter, which Juegos to fetch.
     */
    where?: JuegosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Juegos to fetch.
     */
    orderBy?: JuegosOrderByWithRelationInput | JuegosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Juegos.
     */
    cursor?: JuegosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Juegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Juegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Juegos.
     */
    distinct?: JuegosScalarFieldEnum | JuegosScalarFieldEnum[]
  }

  /**
   * Juegos findMany
   */
  export type JuegosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juegos
     */
    select?: JuegosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juegos
     */
    omit?: JuegosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegosInclude<ExtArgs> | null
    /**
     * Filter, which Juegos to fetch.
     */
    where?: JuegosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Juegos to fetch.
     */
    orderBy?: JuegosOrderByWithRelationInput | JuegosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Juegos.
     */
    cursor?: JuegosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Juegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Juegos.
     */
    skip?: number
    distinct?: JuegosScalarFieldEnum | JuegosScalarFieldEnum[]
  }

  /**
   * Juegos create
   */
  export type JuegosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juegos
     */
    select?: JuegosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juegos
     */
    omit?: JuegosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegosInclude<ExtArgs> | null
    /**
     * The data needed to create a Juegos.
     */
    data: XOR<JuegosCreateInput, JuegosUncheckedCreateInput>
  }

  /**
   * Juegos createMany
   */
  export type JuegosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Juegos.
     */
    data: JuegosCreateManyInput | JuegosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Juegos update
   */
  export type JuegosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juegos
     */
    select?: JuegosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juegos
     */
    omit?: JuegosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegosInclude<ExtArgs> | null
    /**
     * The data needed to update a Juegos.
     */
    data: XOR<JuegosUpdateInput, JuegosUncheckedUpdateInput>
    /**
     * Choose, which Juegos to update.
     */
    where: JuegosWhereUniqueInput
  }

  /**
   * Juegos updateMany
   */
  export type JuegosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Juegos.
     */
    data: XOR<JuegosUpdateManyMutationInput, JuegosUncheckedUpdateManyInput>
    /**
     * Filter which Juegos to update
     */
    where?: JuegosWhereInput
    /**
     * Limit how many Juegos to update.
     */
    limit?: number
  }

  /**
   * Juegos upsert
   */
  export type JuegosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juegos
     */
    select?: JuegosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juegos
     */
    omit?: JuegosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegosInclude<ExtArgs> | null
    /**
     * The filter to search for the Juegos to update in case it exists.
     */
    where: JuegosWhereUniqueInput
    /**
     * In case the Juegos found by the `where` argument doesn't exist, create a new Juegos with this data.
     */
    create: XOR<JuegosCreateInput, JuegosUncheckedCreateInput>
    /**
     * In case the Juegos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JuegosUpdateInput, JuegosUncheckedUpdateInput>
  }

  /**
   * Juegos delete
   */
  export type JuegosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juegos
     */
    select?: JuegosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juegos
     */
    omit?: JuegosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegosInclude<ExtArgs> | null
    /**
     * Filter which Juegos to delete.
     */
    where: JuegosWhereUniqueInput
  }

  /**
   * Juegos deleteMany
   */
  export type JuegosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Juegos to delete
     */
    where?: JuegosWhereInput
    /**
     * Limit how many Juegos to delete.
     */
    limit?: number
  }

  /**
   * Juegos.partidas
   */
  export type Juegos$partidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partidas
     */
    select?: PartidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partidas
     */
    omit?: PartidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidasInclude<ExtArgs> | null
    where?: PartidasWhereInput
    orderBy?: PartidasOrderByWithRelationInput | PartidasOrderByWithRelationInput[]
    cursor?: PartidasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartidasScalarFieldEnum | PartidasScalarFieldEnum[]
  }

  /**
   * Juegos without action
   */
  export type JuegosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juegos
     */
    select?: JuegosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juegos
     */
    omit?: JuegosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegosInclude<ExtArgs> | null
  }


  /**
   * Model Partidas
   */

  export type AggregatePartidas = {
    _count: PartidasCountAggregateOutputType | null
    _avg: PartidasAvgAggregateOutputType | null
    _sum: PartidasSumAggregateOutputType | null
    _min: PartidasMinAggregateOutputType | null
    _max: PartidasMaxAggregateOutputType | null
  }

  export type PartidasAvgAggregateOutputType = {
    id: number | null
    juego_id: number | null
  }

  export type PartidasSumAggregateOutputType = {
    id: number | null
    juego_id: number | null
  }

  export type PartidasMinAggregateOutputType = {
    id: number | null
    guild_id: string | null
    juego_id: number | null
    estado_partida: string | null
    created_at: Date | null
  }

  export type PartidasMaxAggregateOutputType = {
    id: number | null
    guild_id: string | null
    juego_id: number | null
    estado_partida: string | null
    created_at: Date | null
  }

  export type PartidasCountAggregateOutputType = {
    id: number
    guild_id: number
    juego_id: number
    estado_partida: number
    created_at: number
    _all: number
  }


  export type PartidasAvgAggregateInputType = {
    id?: true
    juego_id?: true
  }

  export type PartidasSumAggregateInputType = {
    id?: true
    juego_id?: true
  }

  export type PartidasMinAggregateInputType = {
    id?: true
    guild_id?: true
    juego_id?: true
    estado_partida?: true
    created_at?: true
  }

  export type PartidasMaxAggregateInputType = {
    id?: true
    guild_id?: true
    juego_id?: true
    estado_partida?: true
    created_at?: true
  }

  export type PartidasCountAggregateInputType = {
    id?: true
    guild_id?: true
    juego_id?: true
    estado_partida?: true
    created_at?: true
    _all?: true
  }

  export type PartidasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partidas to aggregate.
     */
    where?: PartidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidas to fetch.
     */
    orderBy?: PartidasOrderByWithRelationInput | PartidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Partidas
    **/
    _count?: true | PartidasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartidasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartidasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartidasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartidasMaxAggregateInputType
  }

  export type GetPartidasAggregateType<T extends PartidasAggregateArgs> = {
        [P in keyof T & keyof AggregatePartidas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartidas[P]>
      : GetScalarType<T[P], AggregatePartidas[P]>
  }




  export type PartidasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartidasWhereInput
    orderBy?: PartidasOrderByWithAggregationInput | PartidasOrderByWithAggregationInput[]
    by: PartidasScalarFieldEnum[] | PartidasScalarFieldEnum
    having?: PartidasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartidasCountAggregateInputType | true
    _avg?: PartidasAvgAggregateInputType
    _sum?: PartidasSumAggregateInputType
    _min?: PartidasMinAggregateInputType
    _max?: PartidasMaxAggregateInputType
  }

  export type PartidasGroupByOutputType = {
    id: number
    guild_id: string
    juego_id: number
    estado_partida: string
    created_at: Date
    _count: PartidasCountAggregateOutputType | null
    _avg: PartidasAvgAggregateOutputType | null
    _sum: PartidasSumAggregateOutputType | null
    _min: PartidasMinAggregateOutputType | null
    _max: PartidasMaxAggregateOutputType | null
  }

  type GetPartidasGroupByPayload<T extends PartidasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartidasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartidasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartidasGroupByOutputType[P]>
            : GetScalarType<T[P], PartidasGroupByOutputType[P]>
        }
      >
    >


  export type PartidasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guild_id?: boolean
    juego_id?: boolean
    estado_partida?: boolean
    created_at?: boolean
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    juego?: boolean | JuegosDefaultArgs<ExtArgs>
    jugadores?: boolean | Partidas$jugadoresArgs<ExtArgs>
    _count?: boolean | PartidasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partidas"]>



  export type PartidasSelectScalar = {
    id?: boolean
    guild_id?: boolean
    juego_id?: boolean
    estado_partida?: boolean
    created_at?: boolean
  }

  export type PartidasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guild_id" | "juego_id" | "estado_partida" | "created_at", ExtArgs["result"]["partidas"]>
  export type PartidasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    juego?: boolean | JuegosDefaultArgs<ExtArgs>
    jugadores?: boolean | Partidas$jugadoresArgs<ExtArgs>
    _count?: boolean | PartidasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PartidasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Partidas"
    objects: {
      guild: Prisma.$GuildPayload<ExtArgs>
      juego: Prisma.$JuegosPayload<ExtArgs>
      jugadores: Prisma.$JugadoresEnPartidaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guild_id: string
      juego_id: number
      estado_partida: string
      created_at: Date
    }, ExtArgs["result"]["partidas"]>
    composites: {}
  }

  type PartidasGetPayload<S extends boolean | null | undefined | PartidasDefaultArgs> = $Result.GetResult<Prisma.$PartidasPayload, S>

  type PartidasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartidasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartidasCountAggregateInputType | true
    }

  export interface PartidasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Partidas'], meta: { name: 'Partidas' } }
    /**
     * Find zero or one Partidas that matches the filter.
     * @param {PartidasFindUniqueArgs} args - Arguments to find a Partidas
     * @example
     * // Get one Partidas
     * const partidas = await prisma.partidas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartidasFindUniqueArgs>(args: SelectSubset<T, PartidasFindUniqueArgs<ExtArgs>>): Prisma__PartidasClient<$Result.GetResult<Prisma.$PartidasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Partidas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartidasFindUniqueOrThrowArgs} args - Arguments to find a Partidas
     * @example
     * // Get one Partidas
     * const partidas = await prisma.partidas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartidasFindUniqueOrThrowArgs>(args: SelectSubset<T, PartidasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartidasClient<$Result.GetResult<Prisma.$PartidasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidasFindFirstArgs} args - Arguments to find a Partidas
     * @example
     * // Get one Partidas
     * const partidas = await prisma.partidas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartidasFindFirstArgs>(args?: SelectSubset<T, PartidasFindFirstArgs<ExtArgs>>): Prisma__PartidasClient<$Result.GetResult<Prisma.$PartidasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partidas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidasFindFirstOrThrowArgs} args - Arguments to find a Partidas
     * @example
     * // Get one Partidas
     * const partidas = await prisma.partidas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartidasFindFirstOrThrowArgs>(args?: SelectSubset<T, PartidasFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartidasClient<$Result.GetResult<Prisma.$PartidasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Partidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Partidas
     * const partidas = await prisma.partidas.findMany()
     * 
     * // Get first 10 Partidas
     * const partidas = await prisma.partidas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partidasWithIdOnly = await prisma.partidas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartidasFindManyArgs>(args?: SelectSubset<T, PartidasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Partidas.
     * @param {PartidasCreateArgs} args - Arguments to create a Partidas.
     * @example
     * // Create one Partidas
     * const Partidas = await prisma.partidas.create({
     *   data: {
     *     // ... data to create a Partidas
     *   }
     * })
     * 
     */
    create<T extends PartidasCreateArgs>(args: SelectSubset<T, PartidasCreateArgs<ExtArgs>>): Prisma__PartidasClient<$Result.GetResult<Prisma.$PartidasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Partidas.
     * @param {PartidasCreateManyArgs} args - Arguments to create many Partidas.
     * @example
     * // Create many Partidas
     * const partidas = await prisma.partidas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartidasCreateManyArgs>(args?: SelectSubset<T, PartidasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Partidas.
     * @param {PartidasDeleteArgs} args - Arguments to delete one Partidas.
     * @example
     * // Delete one Partidas
     * const Partidas = await prisma.partidas.delete({
     *   where: {
     *     // ... filter to delete one Partidas
     *   }
     * })
     * 
     */
    delete<T extends PartidasDeleteArgs>(args: SelectSubset<T, PartidasDeleteArgs<ExtArgs>>): Prisma__PartidasClient<$Result.GetResult<Prisma.$PartidasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Partidas.
     * @param {PartidasUpdateArgs} args - Arguments to update one Partidas.
     * @example
     * // Update one Partidas
     * const partidas = await prisma.partidas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartidasUpdateArgs>(args: SelectSubset<T, PartidasUpdateArgs<ExtArgs>>): Prisma__PartidasClient<$Result.GetResult<Prisma.$PartidasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Partidas.
     * @param {PartidasDeleteManyArgs} args - Arguments to filter Partidas to delete.
     * @example
     * // Delete a few Partidas
     * const { count } = await prisma.partidas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartidasDeleteManyArgs>(args?: SelectSubset<T, PartidasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Partidas
     * const partidas = await prisma.partidas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartidasUpdateManyArgs>(args: SelectSubset<T, PartidasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Partidas.
     * @param {PartidasUpsertArgs} args - Arguments to update or create a Partidas.
     * @example
     * // Update or create a Partidas
     * const partidas = await prisma.partidas.upsert({
     *   create: {
     *     // ... data to create a Partidas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Partidas we want to update
     *   }
     * })
     */
    upsert<T extends PartidasUpsertArgs>(args: SelectSubset<T, PartidasUpsertArgs<ExtArgs>>): Prisma__PartidasClient<$Result.GetResult<Prisma.$PartidasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Partidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidasCountArgs} args - Arguments to filter Partidas to count.
     * @example
     * // Count the number of Partidas
     * const count = await prisma.partidas.count({
     *   where: {
     *     // ... the filter for the Partidas we want to count
     *   }
     * })
    **/
    count<T extends PartidasCountArgs>(
      args?: Subset<T, PartidasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartidasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Partidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartidasAggregateArgs>(args: Subset<T, PartidasAggregateArgs>): Prisma.PrismaPromise<GetPartidasAggregateType<T>>

    /**
     * Group by Partidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartidasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartidasGroupByArgs['orderBy'] }
        : { orderBy?: PartidasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartidasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartidasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Partidas model
   */
  readonly fields: PartidasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Partidas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartidasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guild<T extends GuildDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildDefaultArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    juego<T extends JuegosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JuegosDefaultArgs<ExtArgs>>): Prisma__JuegosClient<$Result.GetResult<Prisma.$JuegosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jugadores<T extends Partidas$jugadoresArgs<ExtArgs> = {}>(args?: Subset<T, Partidas$jugadoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JugadoresEnPartidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Partidas model
   */
  interface PartidasFieldRefs {
    readonly id: FieldRef<"Partidas", 'Int'>
    readonly guild_id: FieldRef<"Partidas", 'String'>
    readonly juego_id: FieldRef<"Partidas", 'Int'>
    readonly estado_partida: FieldRef<"Partidas", 'String'>
    readonly created_at: FieldRef<"Partidas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Partidas findUnique
   */
  export type PartidasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partidas
     */
    select?: PartidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partidas
     */
    omit?: PartidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidasInclude<ExtArgs> | null
    /**
     * Filter, which Partidas to fetch.
     */
    where: PartidasWhereUniqueInput
  }

  /**
   * Partidas findUniqueOrThrow
   */
  export type PartidasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partidas
     */
    select?: PartidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partidas
     */
    omit?: PartidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidasInclude<ExtArgs> | null
    /**
     * Filter, which Partidas to fetch.
     */
    where: PartidasWhereUniqueInput
  }

  /**
   * Partidas findFirst
   */
  export type PartidasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partidas
     */
    select?: PartidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partidas
     */
    omit?: PartidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidasInclude<ExtArgs> | null
    /**
     * Filter, which Partidas to fetch.
     */
    where?: PartidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidas to fetch.
     */
    orderBy?: PartidasOrderByWithRelationInput | PartidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partidas.
     */
    cursor?: PartidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partidas.
     */
    distinct?: PartidasScalarFieldEnum | PartidasScalarFieldEnum[]
  }

  /**
   * Partidas findFirstOrThrow
   */
  export type PartidasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partidas
     */
    select?: PartidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partidas
     */
    omit?: PartidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidasInclude<ExtArgs> | null
    /**
     * Filter, which Partidas to fetch.
     */
    where?: PartidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidas to fetch.
     */
    orderBy?: PartidasOrderByWithRelationInput | PartidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partidas.
     */
    cursor?: PartidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partidas.
     */
    distinct?: PartidasScalarFieldEnum | PartidasScalarFieldEnum[]
  }

  /**
   * Partidas findMany
   */
  export type PartidasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partidas
     */
    select?: PartidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partidas
     */
    omit?: PartidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidasInclude<ExtArgs> | null
    /**
     * Filter, which Partidas to fetch.
     */
    where?: PartidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidas to fetch.
     */
    orderBy?: PartidasOrderByWithRelationInput | PartidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Partidas.
     */
    cursor?: PartidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidas.
     */
    skip?: number
    distinct?: PartidasScalarFieldEnum | PartidasScalarFieldEnum[]
  }

  /**
   * Partidas create
   */
  export type PartidasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partidas
     */
    select?: PartidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partidas
     */
    omit?: PartidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidasInclude<ExtArgs> | null
    /**
     * The data needed to create a Partidas.
     */
    data: XOR<PartidasCreateInput, PartidasUncheckedCreateInput>
  }

  /**
   * Partidas createMany
   */
  export type PartidasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Partidas.
     */
    data: PartidasCreateManyInput | PartidasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Partidas update
   */
  export type PartidasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partidas
     */
    select?: PartidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partidas
     */
    omit?: PartidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidasInclude<ExtArgs> | null
    /**
     * The data needed to update a Partidas.
     */
    data: XOR<PartidasUpdateInput, PartidasUncheckedUpdateInput>
    /**
     * Choose, which Partidas to update.
     */
    where: PartidasWhereUniqueInput
  }

  /**
   * Partidas updateMany
   */
  export type PartidasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Partidas.
     */
    data: XOR<PartidasUpdateManyMutationInput, PartidasUncheckedUpdateManyInput>
    /**
     * Filter which Partidas to update
     */
    where?: PartidasWhereInput
    /**
     * Limit how many Partidas to update.
     */
    limit?: number
  }

  /**
   * Partidas upsert
   */
  export type PartidasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partidas
     */
    select?: PartidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partidas
     */
    omit?: PartidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidasInclude<ExtArgs> | null
    /**
     * The filter to search for the Partidas to update in case it exists.
     */
    where: PartidasWhereUniqueInput
    /**
     * In case the Partidas found by the `where` argument doesn't exist, create a new Partidas with this data.
     */
    create: XOR<PartidasCreateInput, PartidasUncheckedCreateInput>
    /**
     * In case the Partidas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartidasUpdateInput, PartidasUncheckedUpdateInput>
  }

  /**
   * Partidas delete
   */
  export type PartidasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partidas
     */
    select?: PartidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partidas
     */
    omit?: PartidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidasInclude<ExtArgs> | null
    /**
     * Filter which Partidas to delete.
     */
    where: PartidasWhereUniqueInput
  }

  /**
   * Partidas deleteMany
   */
  export type PartidasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partidas to delete
     */
    where?: PartidasWhereInput
    /**
     * Limit how many Partidas to delete.
     */
    limit?: number
  }

  /**
   * Partidas.jugadores
   */
  export type Partidas$jugadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JugadoresEnPartida
     */
    select?: JugadoresEnPartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JugadoresEnPartida
     */
    omit?: JugadoresEnPartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JugadoresEnPartidaInclude<ExtArgs> | null
    where?: JugadoresEnPartidaWhereInput
    orderBy?: JugadoresEnPartidaOrderByWithRelationInput | JugadoresEnPartidaOrderByWithRelationInput[]
    cursor?: JugadoresEnPartidaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JugadoresEnPartidaScalarFieldEnum | JugadoresEnPartidaScalarFieldEnum[]
  }

  /**
   * Partidas without action
   */
  export type PartidasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partidas
     */
    select?: PartidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partidas
     */
    omit?: PartidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidasInclude<ExtArgs> | null
  }


  /**
   * Model JugadoresEnPartida
   */

  export type AggregateJugadoresEnPartida = {
    _count: JugadoresEnPartidaCountAggregateOutputType | null
    _avg: JugadoresEnPartidaAvgAggregateOutputType | null
    _sum: JugadoresEnPartidaSumAggregateOutputType | null
    _min: JugadoresEnPartidaMinAggregateOutputType | null
    _max: JugadoresEnPartidaMaxAggregateOutputType | null
  }

  export type JugadoresEnPartidaAvgAggregateOutputType = {
    id: number | null
    partida_id: number | null
  }

  export type JugadoresEnPartidaSumAggregateOutputType = {
    id: number | null
    partida_id: number | null
  }

  export type JugadoresEnPartidaMinAggregateOutputType = {
    id: number | null
    partida_id: number | null
    user_id: string | null
  }

  export type JugadoresEnPartidaMaxAggregateOutputType = {
    id: number | null
    partida_id: number | null
    user_id: string | null
  }

  export type JugadoresEnPartidaCountAggregateOutputType = {
    id: number
    partida_id: number
    user_id: number
    _all: number
  }


  export type JugadoresEnPartidaAvgAggregateInputType = {
    id?: true
    partida_id?: true
  }

  export type JugadoresEnPartidaSumAggregateInputType = {
    id?: true
    partida_id?: true
  }

  export type JugadoresEnPartidaMinAggregateInputType = {
    id?: true
    partida_id?: true
    user_id?: true
  }

  export type JugadoresEnPartidaMaxAggregateInputType = {
    id?: true
    partida_id?: true
    user_id?: true
  }

  export type JugadoresEnPartidaCountAggregateInputType = {
    id?: true
    partida_id?: true
    user_id?: true
    _all?: true
  }

  export type JugadoresEnPartidaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JugadoresEnPartida to aggregate.
     */
    where?: JugadoresEnPartidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JugadoresEnPartidas to fetch.
     */
    orderBy?: JugadoresEnPartidaOrderByWithRelationInput | JugadoresEnPartidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JugadoresEnPartidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JugadoresEnPartidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JugadoresEnPartidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JugadoresEnPartidas
    **/
    _count?: true | JugadoresEnPartidaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JugadoresEnPartidaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JugadoresEnPartidaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JugadoresEnPartidaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JugadoresEnPartidaMaxAggregateInputType
  }

  export type GetJugadoresEnPartidaAggregateType<T extends JugadoresEnPartidaAggregateArgs> = {
        [P in keyof T & keyof AggregateJugadoresEnPartida]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJugadoresEnPartida[P]>
      : GetScalarType<T[P], AggregateJugadoresEnPartida[P]>
  }




  export type JugadoresEnPartidaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JugadoresEnPartidaWhereInput
    orderBy?: JugadoresEnPartidaOrderByWithAggregationInput | JugadoresEnPartidaOrderByWithAggregationInput[]
    by: JugadoresEnPartidaScalarFieldEnum[] | JugadoresEnPartidaScalarFieldEnum
    having?: JugadoresEnPartidaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JugadoresEnPartidaCountAggregateInputType | true
    _avg?: JugadoresEnPartidaAvgAggregateInputType
    _sum?: JugadoresEnPartidaSumAggregateInputType
    _min?: JugadoresEnPartidaMinAggregateInputType
    _max?: JugadoresEnPartidaMaxAggregateInputType
  }

  export type JugadoresEnPartidaGroupByOutputType = {
    id: number
    partida_id: number
    user_id: string
    _count: JugadoresEnPartidaCountAggregateOutputType | null
    _avg: JugadoresEnPartidaAvgAggregateOutputType | null
    _sum: JugadoresEnPartidaSumAggregateOutputType | null
    _min: JugadoresEnPartidaMinAggregateOutputType | null
    _max: JugadoresEnPartidaMaxAggregateOutputType | null
  }

  type GetJugadoresEnPartidaGroupByPayload<T extends JugadoresEnPartidaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JugadoresEnPartidaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JugadoresEnPartidaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JugadoresEnPartidaGroupByOutputType[P]>
            : GetScalarType<T[P], JugadoresEnPartidaGroupByOutputType[P]>
        }
      >
    >


  export type JugadoresEnPartidaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partida_id?: boolean
    user_id?: boolean
    partida?: boolean | PartidasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jugadoresEnPartida"]>



  export type JugadoresEnPartidaSelectScalar = {
    id?: boolean
    partida_id?: boolean
    user_id?: boolean
  }

  export type JugadoresEnPartidaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "partida_id" | "user_id", ExtArgs["result"]["jugadoresEnPartida"]>
  export type JugadoresEnPartidaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partida?: boolean | PartidasDefaultArgs<ExtArgs>
  }

  export type $JugadoresEnPartidaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JugadoresEnPartida"
    objects: {
      partida: Prisma.$PartidasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      partida_id: number
      user_id: string
    }, ExtArgs["result"]["jugadoresEnPartida"]>
    composites: {}
  }

  type JugadoresEnPartidaGetPayload<S extends boolean | null | undefined | JugadoresEnPartidaDefaultArgs> = $Result.GetResult<Prisma.$JugadoresEnPartidaPayload, S>

  type JugadoresEnPartidaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JugadoresEnPartidaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JugadoresEnPartidaCountAggregateInputType | true
    }

  export interface JugadoresEnPartidaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JugadoresEnPartida'], meta: { name: 'JugadoresEnPartida' } }
    /**
     * Find zero or one JugadoresEnPartida that matches the filter.
     * @param {JugadoresEnPartidaFindUniqueArgs} args - Arguments to find a JugadoresEnPartida
     * @example
     * // Get one JugadoresEnPartida
     * const jugadoresEnPartida = await prisma.jugadoresEnPartida.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JugadoresEnPartidaFindUniqueArgs>(args: SelectSubset<T, JugadoresEnPartidaFindUniqueArgs<ExtArgs>>): Prisma__JugadoresEnPartidaClient<$Result.GetResult<Prisma.$JugadoresEnPartidaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JugadoresEnPartida that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JugadoresEnPartidaFindUniqueOrThrowArgs} args - Arguments to find a JugadoresEnPartida
     * @example
     * // Get one JugadoresEnPartida
     * const jugadoresEnPartida = await prisma.jugadoresEnPartida.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JugadoresEnPartidaFindUniqueOrThrowArgs>(args: SelectSubset<T, JugadoresEnPartidaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JugadoresEnPartidaClient<$Result.GetResult<Prisma.$JugadoresEnPartidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JugadoresEnPartida that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JugadoresEnPartidaFindFirstArgs} args - Arguments to find a JugadoresEnPartida
     * @example
     * // Get one JugadoresEnPartida
     * const jugadoresEnPartida = await prisma.jugadoresEnPartida.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JugadoresEnPartidaFindFirstArgs>(args?: SelectSubset<T, JugadoresEnPartidaFindFirstArgs<ExtArgs>>): Prisma__JugadoresEnPartidaClient<$Result.GetResult<Prisma.$JugadoresEnPartidaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JugadoresEnPartida that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JugadoresEnPartidaFindFirstOrThrowArgs} args - Arguments to find a JugadoresEnPartida
     * @example
     * // Get one JugadoresEnPartida
     * const jugadoresEnPartida = await prisma.jugadoresEnPartida.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JugadoresEnPartidaFindFirstOrThrowArgs>(args?: SelectSubset<T, JugadoresEnPartidaFindFirstOrThrowArgs<ExtArgs>>): Prisma__JugadoresEnPartidaClient<$Result.GetResult<Prisma.$JugadoresEnPartidaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JugadoresEnPartidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JugadoresEnPartidaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JugadoresEnPartidas
     * const jugadoresEnPartidas = await prisma.jugadoresEnPartida.findMany()
     * 
     * // Get first 10 JugadoresEnPartidas
     * const jugadoresEnPartidas = await prisma.jugadoresEnPartida.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jugadoresEnPartidaWithIdOnly = await prisma.jugadoresEnPartida.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JugadoresEnPartidaFindManyArgs>(args?: SelectSubset<T, JugadoresEnPartidaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JugadoresEnPartidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JugadoresEnPartida.
     * @param {JugadoresEnPartidaCreateArgs} args - Arguments to create a JugadoresEnPartida.
     * @example
     * // Create one JugadoresEnPartida
     * const JugadoresEnPartida = await prisma.jugadoresEnPartida.create({
     *   data: {
     *     // ... data to create a JugadoresEnPartida
     *   }
     * })
     * 
     */
    create<T extends JugadoresEnPartidaCreateArgs>(args: SelectSubset<T, JugadoresEnPartidaCreateArgs<ExtArgs>>): Prisma__JugadoresEnPartidaClient<$Result.GetResult<Prisma.$JugadoresEnPartidaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JugadoresEnPartidas.
     * @param {JugadoresEnPartidaCreateManyArgs} args - Arguments to create many JugadoresEnPartidas.
     * @example
     * // Create many JugadoresEnPartidas
     * const jugadoresEnPartida = await prisma.jugadoresEnPartida.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JugadoresEnPartidaCreateManyArgs>(args?: SelectSubset<T, JugadoresEnPartidaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JugadoresEnPartida.
     * @param {JugadoresEnPartidaDeleteArgs} args - Arguments to delete one JugadoresEnPartida.
     * @example
     * // Delete one JugadoresEnPartida
     * const JugadoresEnPartida = await prisma.jugadoresEnPartida.delete({
     *   where: {
     *     // ... filter to delete one JugadoresEnPartida
     *   }
     * })
     * 
     */
    delete<T extends JugadoresEnPartidaDeleteArgs>(args: SelectSubset<T, JugadoresEnPartidaDeleteArgs<ExtArgs>>): Prisma__JugadoresEnPartidaClient<$Result.GetResult<Prisma.$JugadoresEnPartidaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JugadoresEnPartida.
     * @param {JugadoresEnPartidaUpdateArgs} args - Arguments to update one JugadoresEnPartida.
     * @example
     * // Update one JugadoresEnPartida
     * const jugadoresEnPartida = await prisma.jugadoresEnPartida.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JugadoresEnPartidaUpdateArgs>(args: SelectSubset<T, JugadoresEnPartidaUpdateArgs<ExtArgs>>): Prisma__JugadoresEnPartidaClient<$Result.GetResult<Prisma.$JugadoresEnPartidaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JugadoresEnPartidas.
     * @param {JugadoresEnPartidaDeleteManyArgs} args - Arguments to filter JugadoresEnPartidas to delete.
     * @example
     * // Delete a few JugadoresEnPartidas
     * const { count } = await prisma.jugadoresEnPartida.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JugadoresEnPartidaDeleteManyArgs>(args?: SelectSubset<T, JugadoresEnPartidaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JugadoresEnPartidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JugadoresEnPartidaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JugadoresEnPartidas
     * const jugadoresEnPartida = await prisma.jugadoresEnPartida.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JugadoresEnPartidaUpdateManyArgs>(args: SelectSubset<T, JugadoresEnPartidaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JugadoresEnPartida.
     * @param {JugadoresEnPartidaUpsertArgs} args - Arguments to update or create a JugadoresEnPartida.
     * @example
     * // Update or create a JugadoresEnPartida
     * const jugadoresEnPartida = await prisma.jugadoresEnPartida.upsert({
     *   create: {
     *     // ... data to create a JugadoresEnPartida
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JugadoresEnPartida we want to update
     *   }
     * })
     */
    upsert<T extends JugadoresEnPartidaUpsertArgs>(args: SelectSubset<T, JugadoresEnPartidaUpsertArgs<ExtArgs>>): Prisma__JugadoresEnPartidaClient<$Result.GetResult<Prisma.$JugadoresEnPartidaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JugadoresEnPartidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JugadoresEnPartidaCountArgs} args - Arguments to filter JugadoresEnPartidas to count.
     * @example
     * // Count the number of JugadoresEnPartidas
     * const count = await prisma.jugadoresEnPartida.count({
     *   where: {
     *     // ... the filter for the JugadoresEnPartidas we want to count
     *   }
     * })
    **/
    count<T extends JugadoresEnPartidaCountArgs>(
      args?: Subset<T, JugadoresEnPartidaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JugadoresEnPartidaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JugadoresEnPartida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JugadoresEnPartidaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JugadoresEnPartidaAggregateArgs>(args: Subset<T, JugadoresEnPartidaAggregateArgs>): Prisma.PrismaPromise<GetJugadoresEnPartidaAggregateType<T>>

    /**
     * Group by JugadoresEnPartida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JugadoresEnPartidaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JugadoresEnPartidaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JugadoresEnPartidaGroupByArgs['orderBy'] }
        : { orderBy?: JugadoresEnPartidaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JugadoresEnPartidaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJugadoresEnPartidaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JugadoresEnPartida model
   */
  readonly fields: JugadoresEnPartidaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JugadoresEnPartida.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JugadoresEnPartidaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    partida<T extends PartidasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartidasDefaultArgs<ExtArgs>>): Prisma__PartidasClient<$Result.GetResult<Prisma.$PartidasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JugadoresEnPartida model
   */
  interface JugadoresEnPartidaFieldRefs {
    readonly id: FieldRef<"JugadoresEnPartida", 'Int'>
    readonly partida_id: FieldRef<"JugadoresEnPartida", 'Int'>
    readonly user_id: FieldRef<"JugadoresEnPartida", 'String'>
  }
    

  // Custom InputTypes
  /**
   * JugadoresEnPartida findUnique
   */
  export type JugadoresEnPartidaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JugadoresEnPartida
     */
    select?: JugadoresEnPartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JugadoresEnPartida
     */
    omit?: JugadoresEnPartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JugadoresEnPartidaInclude<ExtArgs> | null
    /**
     * Filter, which JugadoresEnPartida to fetch.
     */
    where: JugadoresEnPartidaWhereUniqueInput
  }

  /**
   * JugadoresEnPartida findUniqueOrThrow
   */
  export type JugadoresEnPartidaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JugadoresEnPartida
     */
    select?: JugadoresEnPartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JugadoresEnPartida
     */
    omit?: JugadoresEnPartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JugadoresEnPartidaInclude<ExtArgs> | null
    /**
     * Filter, which JugadoresEnPartida to fetch.
     */
    where: JugadoresEnPartidaWhereUniqueInput
  }

  /**
   * JugadoresEnPartida findFirst
   */
  export type JugadoresEnPartidaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JugadoresEnPartida
     */
    select?: JugadoresEnPartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JugadoresEnPartida
     */
    omit?: JugadoresEnPartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JugadoresEnPartidaInclude<ExtArgs> | null
    /**
     * Filter, which JugadoresEnPartida to fetch.
     */
    where?: JugadoresEnPartidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JugadoresEnPartidas to fetch.
     */
    orderBy?: JugadoresEnPartidaOrderByWithRelationInput | JugadoresEnPartidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JugadoresEnPartidas.
     */
    cursor?: JugadoresEnPartidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JugadoresEnPartidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JugadoresEnPartidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JugadoresEnPartidas.
     */
    distinct?: JugadoresEnPartidaScalarFieldEnum | JugadoresEnPartidaScalarFieldEnum[]
  }

  /**
   * JugadoresEnPartida findFirstOrThrow
   */
  export type JugadoresEnPartidaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JugadoresEnPartida
     */
    select?: JugadoresEnPartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JugadoresEnPartida
     */
    omit?: JugadoresEnPartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JugadoresEnPartidaInclude<ExtArgs> | null
    /**
     * Filter, which JugadoresEnPartida to fetch.
     */
    where?: JugadoresEnPartidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JugadoresEnPartidas to fetch.
     */
    orderBy?: JugadoresEnPartidaOrderByWithRelationInput | JugadoresEnPartidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JugadoresEnPartidas.
     */
    cursor?: JugadoresEnPartidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JugadoresEnPartidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JugadoresEnPartidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JugadoresEnPartidas.
     */
    distinct?: JugadoresEnPartidaScalarFieldEnum | JugadoresEnPartidaScalarFieldEnum[]
  }

  /**
   * JugadoresEnPartida findMany
   */
  export type JugadoresEnPartidaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JugadoresEnPartida
     */
    select?: JugadoresEnPartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JugadoresEnPartida
     */
    omit?: JugadoresEnPartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JugadoresEnPartidaInclude<ExtArgs> | null
    /**
     * Filter, which JugadoresEnPartidas to fetch.
     */
    where?: JugadoresEnPartidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JugadoresEnPartidas to fetch.
     */
    orderBy?: JugadoresEnPartidaOrderByWithRelationInput | JugadoresEnPartidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JugadoresEnPartidas.
     */
    cursor?: JugadoresEnPartidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JugadoresEnPartidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JugadoresEnPartidas.
     */
    skip?: number
    distinct?: JugadoresEnPartidaScalarFieldEnum | JugadoresEnPartidaScalarFieldEnum[]
  }

  /**
   * JugadoresEnPartida create
   */
  export type JugadoresEnPartidaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JugadoresEnPartida
     */
    select?: JugadoresEnPartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JugadoresEnPartida
     */
    omit?: JugadoresEnPartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JugadoresEnPartidaInclude<ExtArgs> | null
    /**
     * The data needed to create a JugadoresEnPartida.
     */
    data: XOR<JugadoresEnPartidaCreateInput, JugadoresEnPartidaUncheckedCreateInput>
  }

  /**
   * JugadoresEnPartida createMany
   */
  export type JugadoresEnPartidaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JugadoresEnPartidas.
     */
    data: JugadoresEnPartidaCreateManyInput | JugadoresEnPartidaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JugadoresEnPartida update
   */
  export type JugadoresEnPartidaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JugadoresEnPartida
     */
    select?: JugadoresEnPartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JugadoresEnPartida
     */
    omit?: JugadoresEnPartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JugadoresEnPartidaInclude<ExtArgs> | null
    /**
     * The data needed to update a JugadoresEnPartida.
     */
    data: XOR<JugadoresEnPartidaUpdateInput, JugadoresEnPartidaUncheckedUpdateInput>
    /**
     * Choose, which JugadoresEnPartida to update.
     */
    where: JugadoresEnPartidaWhereUniqueInput
  }

  /**
   * JugadoresEnPartida updateMany
   */
  export type JugadoresEnPartidaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JugadoresEnPartidas.
     */
    data: XOR<JugadoresEnPartidaUpdateManyMutationInput, JugadoresEnPartidaUncheckedUpdateManyInput>
    /**
     * Filter which JugadoresEnPartidas to update
     */
    where?: JugadoresEnPartidaWhereInput
    /**
     * Limit how many JugadoresEnPartidas to update.
     */
    limit?: number
  }

  /**
   * JugadoresEnPartida upsert
   */
  export type JugadoresEnPartidaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JugadoresEnPartida
     */
    select?: JugadoresEnPartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JugadoresEnPartida
     */
    omit?: JugadoresEnPartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JugadoresEnPartidaInclude<ExtArgs> | null
    /**
     * The filter to search for the JugadoresEnPartida to update in case it exists.
     */
    where: JugadoresEnPartidaWhereUniqueInput
    /**
     * In case the JugadoresEnPartida found by the `where` argument doesn't exist, create a new JugadoresEnPartida with this data.
     */
    create: XOR<JugadoresEnPartidaCreateInput, JugadoresEnPartidaUncheckedCreateInput>
    /**
     * In case the JugadoresEnPartida was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JugadoresEnPartidaUpdateInput, JugadoresEnPartidaUncheckedUpdateInput>
  }

  /**
   * JugadoresEnPartida delete
   */
  export type JugadoresEnPartidaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JugadoresEnPartida
     */
    select?: JugadoresEnPartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JugadoresEnPartida
     */
    omit?: JugadoresEnPartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JugadoresEnPartidaInclude<ExtArgs> | null
    /**
     * Filter which JugadoresEnPartida to delete.
     */
    where: JugadoresEnPartidaWhereUniqueInput
  }

  /**
   * JugadoresEnPartida deleteMany
   */
  export type JugadoresEnPartidaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JugadoresEnPartidas to delete
     */
    where?: JugadoresEnPartidaWhereInput
    /**
     * Limit how many JugadoresEnPartidas to delete.
     */
    limit?: number
  }

  /**
   * JugadoresEnPartida without action
   */
  export type JugadoresEnPartidaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JugadoresEnPartida
     */
    select?: JugadoresEnPartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JugadoresEnPartida
     */
    omit?: JugadoresEnPartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JugadoresEnPartidaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    discord_id: 'discord_id'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const GuildScalarFieldEnum: {
    id: 'id',
    discord_id: 'discord_id'
  };

  export type GuildScalarFieldEnum = (typeof GuildScalarFieldEnum)[keyof typeof GuildScalarFieldEnum]


  export const UserInGuildScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    guild_id: 'guild_id'
  };

  export type UserInGuildScalarFieldEnum = (typeof UserInGuildScalarFieldEnum)[keyof typeof UserInGuildScalarFieldEnum]


  export const JuegosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    veces_jugado: 'veces_jugado'
  };

  export type JuegosScalarFieldEnum = (typeof JuegosScalarFieldEnum)[keyof typeof JuegosScalarFieldEnum]


  export const PartidasScalarFieldEnum: {
    id: 'id',
    guild_id: 'guild_id',
    juego_id: 'juego_id',
    estado_partida: 'estado_partida',
    created_at: 'created_at'
  };

  export type PartidasScalarFieldEnum = (typeof PartidasScalarFieldEnum)[keyof typeof PartidasScalarFieldEnum]


  export const JugadoresEnPartidaScalarFieldEnum: {
    id: 'id',
    partida_id: 'partida_id',
    user_id: 'user_id'
  };

  export type JugadoresEnPartidaScalarFieldEnum = (typeof JugadoresEnPartidaScalarFieldEnum)[keyof typeof JugadoresEnPartidaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UsuarioOrderByRelevanceFieldEnum: {
    discord_id: 'discord_id'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const GuildOrderByRelevanceFieldEnum: {
    discord_id: 'discord_id'
  };

  export type GuildOrderByRelevanceFieldEnum = (typeof GuildOrderByRelevanceFieldEnum)[keyof typeof GuildOrderByRelevanceFieldEnum]


  export const UserInGuildOrderByRelevanceFieldEnum: {
    usuario_id: 'usuario_id',
    guild_id: 'guild_id'
  };

  export type UserInGuildOrderByRelevanceFieldEnum = (typeof UserInGuildOrderByRelevanceFieldEnum)[keyof typeof UserInGuildOrderByRelevanceFieldEnum]


  export const JuegosOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type JuegosOrderByRelevanceFieldEnum = (typeof JuegosOrderByRelevanceFieldEnum)[keyof typeof JuegosOrderByRelevanceFieldEnum]


  export const PartidasOrderByRelevanceFieldEnum: {
    guild_id: 'guild_id',
    estado_partida: 'estado_partida'
  };

  export type PartidasOrderByRelevanceFieldEnum = (typeof PartidasOrderByRelevanceFieldEnum)[keyof typeof PartidasOrderByRelevanceFieldEnum]


  export const JugadoresEnPartidaOrderByRelevanceFieldEnum: {
    user_id: 'user_id'
  };

  export type JugadoresEnPartidaOrderByRelevanceFieldEnum = (typeof JugadoresEnPartidaOrderByRelevanceFieldEnum)[keyof typeof JugadoresEnPartidaOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    discord_id?: StringFilter<"Usuario"> | string
    guilds?: UserInGuildListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    discord_id?: SortOrder
    guilds?: UserInGuildOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    discord_id?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    guilds?: UserInGuildListRelationFilter
  }, "id" | "discord_id">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    discord_id?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    discord_id?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type GuildWhereInput = {
    AND?: GuildWhereInput | GuildWhereInput[]
    OR?: GuildWhereInput[]
    NOT?: GuildWhereInput | GuildWhereInput[]
    id?: IntFilter<"Guild"> | number
    discord_id?: StringFilter<"Guild"> | string
    partidas?: PartidasListRelationFilter
    usuarios_en_guild?: UserInGuildListRelationFilter
  }

  export type GuildOrderByWithRelationInput = {
    id?: SortOrder
    discord_id?: SortOrder
    partidas?: PartidasOrderByRelationAggregateInput
    usuarios_en_guild?: UserInGuildOrderByRelationAggregateInput
    _relevance?: GuildOrderByRelevanceInput
  }

  export type GuildWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    discord_id?: string
    AND?: GuildWhereInput | GuildWhereInput[]
    OR?: GuildWhereInput[]
    NOT?: GuildWhereInput | GuildWhereInput[]
    partidas?: PartidasListRelationFilter
    usuarios_en_guild?: UserInGuildListRelationFilter
  }, "id" | "discord_id">

  export type GuildOrderByWithAggregationInput = {
    id?: SortOrder
    discord_id?: SortOrder
    _count?: GuildCountOrderByAggregateInput
    _avg?: GuildAvgOrderByAggregateInput
    _max?: GuildMaxOrderByAggregateInput
    _min?: GuildMinOrderByAggregateInput
    _sum?: GuildSumOrderByAggregateInput
  }

  export type GuildScalarWhereWithAggregatesInput = {
    AND?: GuildScalarWhereWithAggregatesInput | GuildScalarWhereWithAggregatesInput[]
    OR?: GuildScalarWhereWithAggregatesInput[]
    NOT?: GuildScalarWhereWithAggregatesInput | GuildScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Guild"> | number
    discord_id?: StringWithAggregatesFilter<"Guild"> | string
  }

  export type UserInGuildWhereInput = {
    AND?: UserInGuildWhereInput | UserInGuildWhereInput[]
    OR?: UserInGuildWhereInput[]
    NOT?: UserInGuildWhereInput | UserInGuildWhereInput[]
    id?: IntFilter<"UserInGuild"> | number
    usuario_id?: StringFilter<"UserInGuild"> | string
    guild_id?: StringFilter<"UserInGuild"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    guild?: XOR<GuildScalarRelationFilter, GuildWhereInput>
  }

  export type UserInGuildOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    guild_id?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    guild?: GuildOrderByWithRelationInput
    _relevance?: UserInGuildOrderByRelevanceInput
  }

  export type UserInGuildWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserInGuildWhereInput | UserInGuildWhereInput[]
    OR?: UserInGuildWhereInput[]
    NOT?: UserInGuildWhereInput | UserInGuildWhereInput[]
    usuario_id?: StringFilter<"UserInGuild"> | string
    guild_id?: StringFilter<"UserInGuild"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    guild?: XOR<GuildScalarRelationFilter, GuildWhereInput>
  }, "id">

  export type UserInGuildOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    guild_id?: SortOrder
    _count?: UserInGuildCountOrderByAggregateInput
    _avg?: UserInGuildAvgOrderByAggregateInput
    _max?: UserInGuildMaxOrderByAggregateInput
    _min?: UserInGuildMinOrderByAggregateInput
    _sum?: UserInGuildSumOrderByAggregateInput
  }

  export type UserInGuildScalarWhereWithAggregatesInput = {
    AND?: UserInGuildScalarWhereWithAggregatesInput | UserInGuildScalarWhereWithAggregatesInput[]
    OR?: UserInGuildScalarWhereWithAggregatesInput[]
    NOT?: UserInGuildScalarWhereWithAggregatesInput | UserInGuildScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserInGuild"> | number
    usuario_id?: StringWithAggregatesFilter<"UserInGuild"> | string
    guild_id?: StringWithAggregatesFilter<"UserInGuild"> | string
  }

  export type JuegosWhereInput = {
    AND?: JuegosWhereInput | JuegosWhereInput[]
    OR?: JuegosWhereInput[]
    NOT?: JuegosWhereInput | JuegosWhereInput[]
    id?: IntFilter<"Juegos"> | number
    nombre?: StringFilter<"Juegos"> | string
    veces_jugado?: IntFilter<"Juegos"> | number
    partidas?: PartidasListRelationFilter
  }

  export type JuegosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    veces_jugado?: SortOrder
    partidas?: PartidasOrderByRelationAggregateInput
    _relevance?: JuegosOrderByRelevanceInput
  }

  export type JuegosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JuegosWhereInput | JuegosWhereInput[]
    OR?: JuegosWhereInput[]
    NOT?: JuegosWhereInput | JuegosWhereInput[]
    nombre?: StringFilter<"Juegos"> | string
    veces_jugado?: IntFilter<"Juegos"> | number
    partidas?: PartidasListRelationFilter
  }, "id">

  export type JuegosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    veces_jugado?: SortOrder
    _count?: JuegosCountOrderByAggregateInput
    _avg?: JuegosAvgOrderByAggregateInput
    _max?: JuegosMaxOrderByAggregateInput
    _min?: JuegosMinOrderByAggregateInput
    _sum?: JuegosSumOrderByAggregateInput
  }

  export type JuegosScalarWhereWithAggregatesInput = {
    AND?: JuegosScalarWhereWithAggregatesInput | JuegosScalarWhereWithAggregatesInput[]
    OR?: JuegosScalarWhereWithAggregatesInput[]
    NOT?: JuegosScalarWhereWithAggregatesInput | JuegosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Juegos"> | number
    nombre?: StringWithAggregatesFilter<"Juegos"> | string
    veces_jugado?: IntWithAggregatesFilter<"Juegos"> | number
  }

  export type PartidasWhereInput = {
    AND?: PartidasWhereInput | PartidasWhereInput[]
    OR?: PartidasWhereInput[]
    NOT?: PartidasWhereInput | PartidasWhereInput[]
    id?: IntFilter<"Partidas"> | number
    guild_id?: StringFilter<"Partidas"> | string
    juego_id?: IntFilter<"Partidas"> | number
    estado_partida?: StringFilter<"Partidas"> | string
    created_at?: DateTimeFilter<"Partidas"> | Date | string
    guild?: XOR<GuildScalarRelationFilter, GuildWhereInput>
    juego?: XOR<JuegosScalarRelationFilter, JuegosWhereInput>
    jugadores?: JugadoresEnPartidaListRelationFilter
  }

  export type PartidasOrderByWithRelationInput = {
    id?: SortOrder
    guild_id?: SortOrder
    juego_id?: SortOrder
    estado_partida?: SortOrder
    created_at?: SortOrder
    guild?: GuildOrderByWithRelationInput
    juego?: JuegosOrderByWithRelationInput
    jugadores?: JugadoresEnPartidaOrderByRelationAggregateInput
    _relevance?: PartidasOrderByRelevanceInput
  }

  export type PartidasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PartidasWhereInput | PartidasWhereInput[]
    OR?: PartidasWhereInput[]
    NOT?: PartidasWhereInput | PartidasWhereInput[]
    guild_id?: StringFilter<"Partidas"> | string
    juego_id?: IntFilter<"Partidas"> | number
    estado_partida?: StringFilter<"Partidas"> | string
    created_at?: DateTimeFilter<"Partidas"> | Date | string
    guild?: XOR<GuildScalarRelationFilter, GuildWhereInput>
    juego?: XOR<JuegosScalarRelationFilter, JuegosWhereInput>
    jugadores?: JugadoresEnPartidaListRelationFilter
  }, "id">

  export type PartidasOrderByWithAggregationInput = {
    id?: SortOrder
    guild_id?: SortOrder
    juego_id?: SortOrder
    estado_partida?: SortOrder
    created_at?: SortOrder
    _count?: PartidasCountOrderByAggregateInput
    _avg?: PartidasAvgOrderByAggregateInput
    _max?: PartidasMaxOrderByAggregateInput
    _min?: PartidasMinOrderByAggregateInput
    _sum?: PartidasSumOrderByAggregateInput
  }

  export type PartidasScalarWhereWithAggregatesInput = {
    AND?: PartidasScalarWhereWithAggregatesInput | PartidasScalarWhereWithAggregatesInput[]
    OR?: PartidasScalarWhereWithAggregatesInput[]
    NOT?: PartidasScalarWhereWithAggregatesInput | PartidasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Partidas"> | number
    guild_id?: StringWithAggregatesFilter<"Partidas"> | string
    juego_id?: IntWithAggregatesFilter<"Partidas"> | number
    estado_partida?: StringWithAggregatesFilter<"Partidas"> | string
    created_at?: DateTimeWithAggregatesFilter<"Partidas"> | Date | string
  }

  export type JugadoresEnPartidaWhereInput = {
    AND?: JugadoresEnPartidaWhereInput | JugadoresEnPartidaWhereInput[]
    OR?: JugadoresEnPartidaWhereInput[]
    NOT?: JugadoresEnPartidaWhereInput | JugadoresEnPartidaWhereInput[]
    id?: IntFilter<"JugadoresEnPartida"> | number
    partida_id?: IntFilter<"JugadoresEnPartida"> | number
    user_id?: StringFilter<"JugadoresEnPartida"> | string
    partida?: XOR<PartidasScalarRelationFilter, PartidasWhereInput>
  }

  export type JugadoresEnPartidaOrderByWithRelationInput = {
    id?: SortOrder
    partida_id?: SortOrder
    user_id?: SortOrder
    partida?: PartidasOrderByWithRelationInput
    _relevance?: JugadoresEnPartidaOrderByRelevanceInput
  }

  export type JugadoresEnPartidaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    partida_id_user_id?: JugadoresEnPartidaPartida_idUser_idCompoundUniqueInput
    AND?: JugadoresEnPartidaWhereInput | JugadoresEnPartidaWhereInput[]
    OR?: JugadoresEnPartidaWhereInput[]
    NOT?: JugadoresEnPartidaWhereInput | JugadoresEnPartidaWhereInput[]
    partida_id?: IntFilter<"JugadoresEnPartida"> | number
    user_id?: StringFilter<"JugadoresEnPartida"> | string
    partida?: XOR<PartidasScalarRelationFilter, PartidasWhereInput>
  }, "id" | "partida_id_user_id">

  export type JugadoresEnPartidaOrderByWithAggregationInput = {
    id?: SortOrder
    partida_id?: SortOrder
    user_id?: SortOrder
    _count?: JugadoresEnPartidaCountOrderByAggregateInput
    _avg?: JugadoresEnPartidaAvgOrderByAggregateInput
    _max?: JugadoresEnPartidaMaxOrderByAggregateInput
    _min?: JugadoresEnPartidaMinOrderByAggregateInput
    _sum?: JugadoresEnPartidaSumOrderByAggregateInput
  }

  export type JugadoresEnPartidaScalarWhereWithAggregatesInput = {
    AND?: JugadoresEnPartidaScalarWhereWithAggregatesInput | JugadoresEnPartidaScalarWhereWithAggregatesInput[]
    OR?: JugadoresEnPartidaScalarWhereWithAggregatesInput[]
    NOT?: JugadoresEnPartidaScalarWhereWithAggregatesInput | JugadoresEnPartidaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JugadoresEnPartida"> | number
    partida_id?: IntWithAggregatesFilter<"JugadoresEnPartida"> | number
    user_id?: StringWithAggregatesFilter<"JugadoresEnPartida"> | string
  }

  export type UsuarioCreateInput = {
    discord_id: string
    guilds?: UserInGuildCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    discord_id: string
    guilds?: UserInGuildUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    discord_id?: StringFieldUpdateOperationsInput | string
    guilds?: UserInGuildUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    discord_id?: StringFieldUpdateOperationsInput | string
    guilds?: UserInGuildUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    discord_id: string
  }

  export type UsuarioUpdateManyMutationInput = {
    discord_id?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    discord_id?: StringFieldUpdateOperationsInput | string
  }

  export type GuildCreateInput = {
    discord_id: string
    partidas?: PartidasCreateNestedManyWithoutGuildInput
    usuarios_en_guild?: UserInGuildCreateNestedManyWithoutGuildInput
  }

  export type GuildUncheckedCreateInput = {
    id?: number
    discord_id: string
    partidas?: PartidasUncheckedCreateNestedManyWithoutGuildInput
    usuarios_en_guild?: UserInGuildUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildUpdateInput = {
    discord_id?: StringFieldUpdateOperationsInput | string
    partidas?: PartidasUpdateManyWithoutGuildNestedInput
    usuarios_en_guild?: UserInGuildUpdateManyWithoutGuildNestedInput
  }

  export type GuildUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    discord_id?: StringFieldUpdateOperationsInput | string
    partidas?: PartidasUncheckedUpdateManyWithoutGuildNestedInput
    usuarios_en_guild?: UserInGuildUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type GuildCreateManyInput = {
    id?: number
    discord_id: string
  }

  export type GuildUpdateManyMutationInput = {
    discord_id?: StringFieldUpdateOperationsInput | string
  }

  export type GuildUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    discord_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserInGuildCreateInput = {
    usuario: UsuarioCreateNestedOneWithoutGuildsInput
    guild: GuildCreateNestedOneWithoutUsuarios_en_guildInput
  }

  export type UserInGuildUncheckedCreateInput = {
    id?: number
    usuario_id: string
    guild_id: string
  }

  export type UserInGuildUpdateInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutGuildsNestedInput
    guild?: GuildUpdateOneRequiredWithoutUsuarios_en_guildNestedInput
  }

  export type UserInGuildUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: StringFieldUpdateOperationsInput | string
    guild_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserInGuildCreateManyInput = {
    id?: number
    usuario_id: string
    guild_id: string
  }

  export type UserInGuildUpdateManyMutationInput = {

  }

  export type UserInGuildUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: StringFieldUpdateOperationsInput | string
    guild_id?: StringFieldUpdateOperationsInput | string
  }

  export type JuegosCreateInput = {
    nombre: string
    veces_jugado?: number
    partidas?: PartidasCreateNestedManyWithoutJuegoInput
  }

  export type JuegosUncheckedCreateInput = {
    id?: number
    nombre: string
    veces_jugado?: number
    partidas?: PartidasUncheckedCreateNestedManyWithoutJuegoInput
  }

  export type JuegosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    veces_jugado?: IntFieldUpdateOperationsInput | number
    partidas?: PartidasUpdateManyWithoutJuegoNestedInput
  }

  export type JuegosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    veces_jugado?: IntFieldUpdateOperationsInput | number
    partidas?: PartidasUncheckedUpdateManyWithoutJuegoNestedInput
  }

  export type JuegosCreateManyInput = {
    id?: number
    nombre: string
    veces_jugado?: number
  }

  export type JuegosUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    veces_jugado?: IntFieldUpdateOperationsInput | number
  }

  export type JuegosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    veces_jugado?: IntFieldUpdateOperationsInput | number
  }

  export type PartidasCreateInput = {
    estado_partida?: string
    created_at?: Date | string
    guild: GuildCreateNestedOneWithoutPartidasInput
    juego: JuegosCreateNestedOneWithoutPartidasInput
    jugadores?: JugadoresEnPartidaCreateNestedManyWithoutPartidaInput
  }

  export type PartidasUncheckedCreateInput = {
    id?: number
    guild_id: string
    juego_id: number
    estado_partida?: string
    created_at?: Date | string
    jugadores?: JugadoresEnPartidaUncheckedCreateNestedManyWithoutPartidaInput
  }

  export type PartidasUpdateInput = {
    estado_partida?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildUpdateOneRequiredWithoutPartidasNestedInput
    juego?: JuegosUpdateOneRequiredWithoutPartidasNestedInput
    jugadores?: JugadoresEnPartidaUpdateManyWithoutPartidaNestedInput
  }

  export type PartidasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guild_id?: StringFieldUpdateOperationsInput | string
    juego_id?: IntFieldUpdateOperationsInput | number
    estado_partida?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    jugadores?: JugadoresEnPartidaUncheckedUpdateManyWithoutPartidaNestedInput
  }

  export type PartidasCreateManyInput = {
    id?: number
    guild_id: string
    juego_id: number
    estado_partida?: string
    created_at?: Date | string
  }

  export type PartidasUpdateManyMutationInput = {
    estado_partida?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guild_id?: StringFieldUpdateOperationsInput | string
    juego_id?: IntFieldUpdateOperationsInput | number
    estado_partida?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JugadoresEnPartidaCreateInput = {
    user_id: string
    partida: PartidasCreateNestedOneWithoutJugadoresInput
  }

  export type JugadoresEnPartidaUncheckedCreateInput = {
    id?: number
    partida_id: number
    user_id: string
  }

  export type JugadoresEnPartidaUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    partida?: PartidasUpdateOneRequiredWithoutJugadoresNestedInput
  }

  export type JugadoresEnPartidaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    partida_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type JugadoresEnPartidaCreateManyInput = {
    id?: number
    partida_id: number
    user_id: string
  }

  export type JugadoresEnPartidaUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type JugadoresEnPartidaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    partida_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserInGuildListRelationFilter = {
    every?: UserInGuildWhereInput
    some?: UserInGuildWhereInput
    none?: UserInGuildWhereInput
  }

  export type UserInGuildOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    discord_id?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    discord_id?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    discord_id?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type PartidasListRelationFilter = {
    every?: PartidasWhereInput
    some?: PartidasWhereInput
    none?: PartidasWhereInput
  }

  export type PartidasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuildOrderByRelevanceInput = {
    fields: GuildOrderByRelevanceFieldEnum | GuildOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GuildCountOrderByAggregateInput = {
    id?: SortOrder
    discord_id?: SortOrder
  }

  export type GuildAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GuildMaxOrderByAggregateInput = {
    id?: SortOrder
    discord_id?: SortOrder
  }

  export type GuildMinOrderByAggregateInput = {
    id?: SortOrder
    discord_id?: SortOrder
  }

  export type GuildSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type GuildScalarRelationFilter = {
    is?: GuildWhereInput
    isNot?: GuildWhereInput
  }

  export type UserInGuildOrderByRelevanceInput = {
    fields: UserInGuildOrderByRelevanceFieldEnum | UserInGuildOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserInGuildCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    guild_id?: SortOrder
  }

  export type UserInGuildAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserInGuildMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    guild_id?: SortOrder
  }

  export type UserInGuildMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    guild_id?: SortOrder
  }

  export type UserInGuildSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JuegosOrderByRelevanceInput = {
    fields: JuegosOrderByRelevanceFieldEnum | JuegosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JuegosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    veces_jugado?: SortOrder
  }

  export type JuegosAvgOrderByAggregateInput = {
    id?: SortOrder
    veces_jugado?: SortOrder
  }

  export type JuegosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    veces_jugado?: SortOrder
  }

  export type JuegosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    veces_jugado?: SortOrder
  }

  export type JuegosSumOrderByAggregateInput = {
    id?: SortOrder
    veces_jugado?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type JuegosScalarRelationFilter = {
    is?: JuegosWhereInput
    isNot?: JuegosWhereInput
  }

  export type JugadoresEnPartidaListRelationFilter = {
    every?: JugadoresEnPartidaWhereInput
    some?: JugadoresEnPartidaWhereInput
    none?: JugadoresEnPartidaWhereInput
  }

  export type JugadoresEnPartidaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartidasOrderByRelevanceInput = {
    fields: PartidasOrderByRelevanceFieldEnum | PartidasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PartidasCountOrderByAggregateInput = {
    id?: SortOrder
    guild_id?: SortOrder
    juego_id?: SortOrder
    estado_partida?: SortOrder
    created_at?: SortOrder
  }

  export type PartidasAvgOrderByAggregateInput = {
    id?: SortOrder
    juego_id?: SortOrder
  }

  export type PartidasMaxOrderByAggregateInput = {
    id?: SortOrder
    guild_id?: SortOrder
    juego_id?: SortOrder
    estado_partida?: SortOrder
    created_at?: SortOrder
  }

  export type PartidasMinOrderByAggregateInput = {
    id?: SortOrder
    guild_id?: SortOrder
    juego_id?: SortOrder
    estado_partida?: SortOrder
    created_at?: SortOrder
  }

  export type PartidasSumOrderByAggregateInput = {
    id?: SortOrder
    juego_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PartidasScalarRelationFilter = {
    is?: PartidasWhereInput
    isNot?: PartidasWhereInput
  }

  export type JugadoresEnPartidaOrderByRelevanceInput = {
    fields: JugadoresEnPartidaOrderByRelevanceFieldEnum | JugadoresEnPartidaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JugadoresEnPartidaPartida_idUser_idCompoundUniqueInput = {
    partida_id: number
    user_id: string
  }

  export type JugadoresEnPartidaCountOrderByAggregateInput = {
    id?: SortOrder
    partida_id?: SortOrder
    user_id?: SortOrder
  }

  export type JugadoresEnPartidaAvgOrderByAggregateInput = {
    id?: SortOrder
    partida_id?: SortOrder
  }

  export type JugadoresEnPartidaMaxOrderByAggregateInput = {
    id?: SortOrder
    partida_id?: SortOrder
    user_id?: SortOrder
  }

  export type JugadoresEnPartidaMinOrderByAggregateInput = {
    id?: SortOrder
    partida_id?: SortOrder
    user_id?: SortOrder
  }

  export type JugadoresEnPartidaSumOrderByAggregateInput = {
    id?: SortOrder
    partida_id?: SortOrder
  }

  export type UserInGuildCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UserInGuildCreateWithoutUsuarioInput, UserInGuildUncheckedCreateWithoutUsuarioInput> | UserInGuildCreateWithoutUsuarioInput[] | UserInGuildUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UserInGuildCreateOrConnectWithoutUsuarioInput | UserInGuildCreateOrConnectWithoutUsuarioInput[]
    createMany?: UserInGuildCreateManyUsuarioInputEnvelope
    connect?: UserInGuildWhereUniqueInput | UserInGuildWhereUniqueInput[]
  }

  export type UserInGuildUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UserInGuildCreateWithoutUsuarioInput, UserInGuildUncheckedCreateWithoutUsuarioInput> | UserInGuildCreateWithoutUsuarioInput[] | UserInGuildUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UserInGuildCreateOrConnectWithoutUsuarioInput | UserInGuildCreateOrConnectWithoutUsuarioInput[]
    createMany?: UserInGuildCreateManyUsuarioInputEnvelope
    connect?: UserInGuildWhereUniqueInput | UserInGuildWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserInGuildUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UserInGuildCreateWithoutUsuarioInput, UserInGuildUncheckedCreateWithoutUsuarioInput> | UserInGuildCreateWithoutUsuarioInput[] | UserInGuildUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UserInGuildCreateOrConnectWithoutUsuarioInput | UserInGuildCreateOrConnectWithoutUsuarioInput[]
    upsert?: UserInGuildUpsertWithWhereUniqueWithoutUsuarioInput | UserInGuildUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UserInGuildCreateManyUsuarioInputEnvelope
    set?: UserInGuildWhereUniqueInput | UserInGuildWhereUniqueInput[]
    disconnect?: UserInGuildWhereUniqueInput | UserInGuildWhereUniqueInput[]
    delete?: UserInGuildWhereUniqueInput | UserInGuildWhereUniqueInput[]
    connect?: UserInGuildWhereUniqueInput | UserInGuildWhereUniqueInput[]
    update?: UserInGuildUpdateWithWhereUniqueWithoutUsuarioInput | UserInGuildUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UserInGuildUpdateManyWithWhereWithoutUsuarioInput | UserInGuildUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UserInGuildScalarWhereInput | UserInGuildScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserInGuildUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UserInGuildCreateWithoutUsuarioInput, UserInGuildUncheckedCreateWithoutUsuarioInput> | UserInGuildCreateWithoutUsuarioInput[] | UserInGuildUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UserInGuildCreateOrConnectWithoutUsuarioInput | UserInGuildCreateOrConnectWithoutUsuarioInput[]
    upsert?: UserInGuildUpsertWithWhereUniqueWithoutUsuarioInput | UserInGuildUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UserInGuildCreateManyUsuarioInputEnvelope
    set?: UserInGuildWhereUniqueInput | UserInGuildWhereUniqueInput[]
    disconnect?: UserInGuildWhereUniqueInput | UserInGuildWhereUniqueInput[]
    delete?: UserInGuildWhereUniqueInput | UserInGuildWhereUniqueInput[]
    connect?: UserInGuildWhereUniqueInput | UserInGuildWhereUniqueInput[]
    update?: UserInGuildUpdateWithWhereUniqueWithoutUsuarioInput | UserInGuildUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UserInGuildUpdateManyWithWhereWithoutUsuarioInput | UserInGuildUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UserInGuildScalarWhereInput | UserInGuildScalarWhereInput[]
  }

  export type PartidasCreateNestedManyWithoutGuildInput = {
    create?: XOR<PartidasCreateWithoutGuildInput, PartidasUncheckedCreateWithoutGuildInput> | PartidasCreateWithoutGuildInput[] | PartidasUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: PartidasCreateOrConnectWithoutGuildInput | PartidasCreateOrConnectWithoutGuildInput[]
    createMany?: PartidasCreateManyGuildInputEnvelope
    connect?: PartidasWhereUniqueInput | PartidasWhereUniqueInput[]
  }

  export type UserInGuildCreateNestedManyWithoutGuildInput = {
    create?: XOR<UserInGuildCreateWithoutGuildInput, UserInGuildUncheckedCreateWithoutGuildInput> | UserInGuildCreateWithoutGuildInput[] | UserInGuildUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: UserInGuildCreateOrConnectWithoutGuildInput | UserInGuildCreateOrConnectWithoutGuildInput[]
    createMany?: UserInGuildCreateManyGuildInputEnvelope
    connect?: UserInGuildWhereUniqueInput | UserInGuildWhereUniqueInput[]
  }

  export type PartidasUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<PartidasCreateWithoutGuildInput, PartidasUncheckedCreateWithoutGuildInput> | PartidasCreateWithoutGuildInput[] | PartidasUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: PartidasCreateOrConnectWithoutGuildInput | PartidasCreateOrConnectWithoutGuildInput[]
    createMany?: PartidasCreateManyGuildInputEnvelope
    connect?: PartidasWhereUniqueInput | PartidasWhereUniqueInput[]
  }

  export type UserInGuildUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<UserInGuildCreateWithoutGuildInput, UserInGuildUncheckedCreateWithoutGuildInput> | UserInGuildCreateWithoutGuildInput[] | UserInGuildUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: UserInGuildCreateOrConnectWithoutGuildInput | UserInGuildCreateOrConnectWithoutGuildInput[]
    createMany?: UserInGuildCreateManyGuildInputEnvelope
    connect?: UserInGuildWhereUniqueInput | UserInGuildWhereUniqueInput[]
  }

  export type PartidasUpdateManyWithoutGuildNestedInput = {
    create?: XOR<PartidasCreateWithoutGuildInput, PartidasUncheckedCreateWithoutGuildInput> | PartidasCreateWithoutGuildInput[] | PartidasUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: PartidasCreateOrConnectWithoutGuildInput | PartidasCreateOrConnectWithoutGuildInput[]
    upsert?: PartidasUpsertWithWhereUniqueWithoutGuildInput | PartidasUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: PartidasCreateManyGuildInputEnvelope
    set?: PartidasWhereUniqueInput | PartidasWhereUniqueInput[]
    disconnect?: PartidasWhereUniqueInput | PartidasWhereUniqueInput[]
    delete?: PartidasWhereUniqueInput | PartidasWhereUniqueInput[]
    connect?: PartidasWhereUniqueInput | PartidasWhereUniqueInput[]
    update?: PartidasUpdateWithWhereUniqueWithoutGuildInput | PartidasUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: PartidasUpdateManyWithWhereWithoutGuildInput | PartidasUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: PartidasScalarWhereInput | PartidasScalarWhereInput[]
  }

  export type UserInGuildUpdateManyWithoutGuildNestedInput = {
    create?: XOR<UserInGuildCreateWithoutGuildInput, UserInGuildUncheckedCreateWithoutGuildInput> | UserInGuildCreateWithoutGuildInput[] | UserInGuildUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: UserInGuildCreateOrConnectWithoutGuildInput | UserInGuildCreateOrConnectWithoutGuildInput[]
    upsert?: UserInGuildUpsertWithWhereUniqueWithoutGuildInput | UserInGuildUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: UserInGuildCreateManyGuildInputEnvelope
    set?: UserInGuildWhereUniqueInput | UserInGuildWhereUniqueInput[]
    disconnect?: UserInGuildWhereUniqueInput | UserInGuildWhereUniqueInput[]
    delete?: UserInGuildWhereUniqueInput | UserInGuildWhereUniqueInput[]
    connect?: UserInGuildWhereUniqueInput | UserInGuildWhereUniqueInput[]
    update?: UserInGuildUpdateWithWhereUniqueWithoutGuildInput | UserInGuildUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: UserInGuildUpdateManyWithWhereWithoutGuildInput | UserInGuildUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: UserInGuildScalarWhereInput | UserInGuildScalarWhereInput[]
  }

  export type PartidasUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<PartidasCreateWithoutGuildInput, PartidasUncheckedCreateWithoutGuildInput> | PartidasCreateWithoutGuildInput[] | PartidasUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: PartidasCreateOrConnectWithoutGuildInput | PartidasCreateOrConnectWithoutGuildInput[]
    upsert?: PartidasUpsertWithWhereUniqueWithoutGuildInput | PartidasUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: PartidasCreateManyGuildInputEnvelope
    set?: PartidasWhereUniqueInput | PartidasWhereUniqueInput[]
    disconnect?: PartidasWhereUniqueInput | PartidasWhereUniqueInput[]
    delete?: PartidasWhereUniqueInput | PartidasWhereUniqueInput[]
    connect?: PartidasWhereUniqueInput | PartidasWhereUniqueInput[]
    update?: PartidasUpdateWithWhereUniqueWithoutGuildInput | PartidasUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: PartidasUpdateManyWithWhereWithoutGuildInput | PartidasUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: PartidasScalarWhereInput | PartidasScalarWhereInput[]
  }

  export type UserInGuildUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<UserInGuildCreateWithoutGuildInput, UserInGuildUncheckedCreateWithoutGuildInput> | UserInGuildCreateWithoutGuildInput[] | UserInGuildUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: UserInGuildCreateOrConnectWithoutGuildInput | UserInGuildCreateOrConnectWithoutGuildInput[]
    upsert?: UserInGuildUpsertWithWhereUniqueWithoutGuildInput | UserInGuildUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: UserInGuildCreateManyGuildInputEnvelope
    set?: UserInGuildWhereUniqueInput | UserInGuildWhereUniqueInput[]
    disconnect?: UserInGuildWhereUniqueInput | UserInGuildWhereUniqueInput[]
    delete?: UserInGuildWhereUniqueInput | UserInGuildWhereUniqueInput[]
    connect?: UserInGuildWhereUniqueInput | UserInGuildWhereUniqueInput[]
    update?: UserInGuildUpdateWithWhereUniqueWithoutGuildInput | UserInGuildUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: UserInGuildUpdateManyWithWhereWithoutGuildInput | UserInGuildUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: UserInGuildScalarWhereInput | UserInGuildScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutGuildsInput = {
    create?: XOR<UsuarioCreateWithoutGuildsInput, UsuarioUncheckedCreateWithoutGuildsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutGuildsInput
    connect?: UsuarioWhereUniqueInput
  }

  export type GuildCreateNestedOneWithoutUsuarios_en_guildInput = {
    create?: XOR<GuildCreateWithoutUsuarios_en_guildInput, GuildUncheckedCreateWithoutUsuarios_en_guildInput>
    connectOrCreate?: GuildCreateOrConnectWithoutUsuarios_en_guildInput
    connect?: GuildWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutGuildsNestedInput = {
    create?: XOR<UsuarioCreateWithoutGuildsInput, UsuarioUncheckedCreateWithoutGuildsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutGuildsInput
    upsert?: UsuarioUpsertWithoutGuildsInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutGuildsInput, UsuarioUpdateWithoutGuildsInput>, UsuarioUncheckedUpdateWithoutGuildsInput>
  }

  export type GuildUpdateOneRequiredWithoutUsuarios_en_guildNestedInput = {
    create?: XOR<GuildCreateWithoutUsuarios_en_guildInput, GuildUncheckedCreateWithoutUsuarios_en_guildInput>
    connectOrCreate?: GuildCreateOrConnectWithoutUsuarios_en_guildInput
    upsert?: GuildUpsertWithoutUsuarios_en_guildInput
    connect?: GuildWhereUniqueInput
    update?: XOR<XOR<GuildUpdateToOneWithWhereWithoutUsuarios_en_guildInput, GuildUpdateWithoutUsuarios_en_guildInput>, GuildUncheckedUpdateWithoutUsuarios_en_guildInput>
  }

  export type PartidasCreateNestedManyWithoutJuegoInput = {
    create?: XOR<PartidasCreateWithoutJuegoInput, PartidasUncheckedCreateWithoutJuegoInput> | PartidasCreateWithoutJuegoInput[] | PartidasUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: PartidasCreateOrConnectWithoutJuegoInput | PartidasCreateOrConnectWithoutJuegoInput[]
    createMany?: PartidasCreateManyJuegoInputEnvelope
    connect?: PartidasWhereUniqueInput | PartidasWhereUniqueInput[]
  }

  export type PartidasUncheckedCreateNestedManyWithoutJuegoInput = {
    create?: XOR<PartidasCreateWithoutJuegoInput, PartidasUncheckedCreateWithoutJuegoInput> | PartidasCreateWithoutJuegoInput[] | PartidasUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: PartidasCreateOrConnectWithoutJuegoInput | PartidasCreateOrConnectWithoutJuegoInput[]
    createMany?: PartidasCreateManyJuegoInputEnvelope
    connect?: PartidasWhereUniqueInput | PartidasWhereUniqueInput[]
  }

  export type PartidasUpdateManyWithoutJuegoNestedInput = {
    create?: XOR<PartidasCreateWithoutJuegoInput, PartidasUncheckedCreateWithoutJuegoInput> | PartidasCreateWithoutJuegoInput[] | PartidasUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: PartidasCreateOrConnectWithoutJuegoInput | PartidasCreateOrConnectWithoutJuegoInput[]
    upsert?: PartidasUpsertWithWhereUniqueWithoutJuegoInput | PartidasUpsertWithWhereUniqueWithoutJuegoInput[]
    createMany?: PartidasCreateManyJuegoInputEnvelope
    set?: PartidasWhereUniqueInput | PartidasWhereUniqueInput[]
    disconnect?: PartidasWhereUniqueInput | PartidasWhereUniqueInput[]
    delete?: PartidasWhereUniqueInput | PartidasWhereUniqueInput[]
    connect?: PartidasWhereUniqueInput | PartidasWhereUniqueInput[]
    update?: PartidasUpdateWithWhereUniqueWithoutJuegoInput | PartidasUpdateWithWhereUniqueWithoutJuegoInput[]
    updateMany?: PartidasUpdateManyWithWhereWithoutJuegoInput | PartidasUpdateManyWithWhereWithoutJuegoInput[]
    deleteMany?: PartidasScalarWhereInput | PartidasScalarWhereInput[]
  }

  export type PartidasUncheckedUpdateManyWithoutJuegoNestedInput = {
    create?: XOR<PartidasCreateWithoutJuegoInput, PartidasUncheckedCreateWithoutJuegoInput> | PartidasCreateWithoutJuegoInput[] | PartidasUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: PartidasCreateOrConnectWithoutJuegoInput | PartidasCreateOrConnectWithoutJuegoInput[]
    upsert?: PartidasUpsertWithWhereUniqueWithoutJuegoInput | PartidasUpsertWithWhereUniqueWithoutJuegoInput[]
    createMany?: PartidasCreateManyJuegoInputEnvelope
    set?: PartidasWhereUniqueInput | PartidasWhereUniqueInput[]
    disconnect?: PartidasWhereUniqueInput | PartidasWhereUniqueInput[]
    delete?: PartidasWhereUniqueInput | PartidasWhereUniqueInput[]
    connect?: PartidasWhereUniqueInput | PartidasWhereUniqueInput[]
    update?: PartidasUpdateWithWhereUniqueWithoutJuegoInput | PartidasUpdateWithWhereUniqueWithoutJuegoInput[]
    updateMany?: PartidasUpdateManyWithWhereWithoutJuegoInput | PartidasUpdateManyWithWhereWithoutJuegoInput[]
    deleteMany?: PartidasScalarWhereInput | PartidasScalarWhereInput[]
  }

  export type GuildCreateNestedOneWithoutPartidasInput = {
    create?: XOR<GuildCreateWithoutPartidasInput, GuildUncheckedCreateWithoutPartidasInput>
    connectOrCreate?: GuildCreateOrConnectWithoutPartidasInput
    connect?: GuildWhereUniqueInput
  }

  export type JuegosCreateNestedOneWithoutPartidasInput = {
    create?: XOR<JuegosCreateWithoutPartidasInput, JuegosUncheckedCreateWithoutPartidasInput>
    connectOrCreate?: JuegosCreateOrConnectWithoutPartidasInput
    connect?: JuegosWhereUniqueInput
  }

  export type JugadoresEnPartidaCreateNestedManyWithoutPartidaInput = {
    create?: XOR<JugadoresEnPartidaCreateWithoutPartidaInput, JugadoresEnPartidaUncheckedCreateWithoutPartidaInput> | JugadoresEnPartidaCreateWithoutPartidaInput[] | JugadoresEnPartidaUncheckedCreateWithoutPartidaInput[]
    connectOrCreate?: JugadoresEnPartidaCreateOrConnectWithoutPartidaInput | JugadoresEnPartidaCreateOrConnectWithoutPartidaInput[]
    createMany?: JugadoresEnPartidaCreateManyPartidaInputEnvelope
    connect?: JugadoresEnPartidaWhereUniqueInput | JugadoresEnPartidaWhereUniqueInput[]
  }

  export type JugadoresEnPartidaUncheckedCreateNestedManyWithoutPartidaInput = {
    create?: XOR<JugadoresEnPartidaCreateWithoutPartidaInput, JugadoresEnPartidaUncheckedCreateWithoutPartidaInput> | JugadoresEnPartidaCreateWithoutPartidaInput[] | JugadoresEnPartidaUncheckedCreateWithoutPartidaInput[]
    connectOrCreate?: JugadoresEnPartidaCreateOrConnectWithoutPartidaInput | JugadoresEnPartidaCreateOrConnectWithoutPartidaInput[]
    createMany?: JugadoresEnPartidaCreateManyPartidaInputEnvelope
    connect?: JugadoresEnPartidaWhereUniqueInput | JugadoresEnPartidaWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GuildUpdateOneRequiredWithoutPartidasNestedInput = {
    create?: XOR<GuildCreateWithoutPartidasInput, GuildUncheckedCreateWithoutPartidasInput>
    connectOrCreate?: GuildCreateOrConnectWithoutPartidasInput
    upsert?: GuildUpsertWithoutPartidasInput
    connect?: GuildWhereUniqueInput
    update?: XOR<XOR<GuildUpdateToOneWithWhereWithoutPartidasInput, GuildUpdateWithoutPartidasInput>, GuildUncheckedUpdateWithoutPartidasInput>
  }

  export type JuegosUpdateOneRequiredWithoutPartidasNestedInput = {
    create?: XOR<JuegosCreateWithoutPartidasInput, JuegosUncheckedCreateWithoutPartidasInput>
    connectOrCreate?: JuegosCreateOrConnectWithoutPartidasInput
    upsert?: JuegosUpsertWithoutPartidasInput
    connect?: JuegosWhereUniqueInput
    update?: XOR<XOR<JuegosUpdateToOneWithWhereWithoutPartidasInput, JuegosUpdateWithoutPartidasInput>, JuegosUncheckedUpdateWithoutPartidasInput>
  }

  export type JugadoresEnPartidaUpdateManyWithoutPartidaNestedInput = {
    create?: XOR<JugadoresEnPartidaCreateWithoutPartidaInput, JugadoresEnPartidaUncheckedCreateWithoutPartidaInput> | JugadoresEnPartidaCreateWithoutPartidaInput[] | JugadoresEnPartidaUncheckedCreateWithoutPartidaInput[]
    connectOrCreate?: JugadoresEnPartidaCreateOrConnectWithoutPartidaInput | JugadoresEnPartidaCreateOrConnectWithoutPartidaInput[]
    upsert?: JugadoresEnPartidaUpsertWithWhereUniqueWithoutPartidaInput | JugadoresEnPartidaUpsertWithWhereUniqueWithoutPartidaInput[]
    createMany?: JugadoresEnPartidaCreateManyPartidaInputEnvelope
    set?: JugadoresEnPartidaWhereUniqueInput | JugadoresEnPartidaWhereUniqueInput[]
    disconnect?: JugadoresEnPartidaWhereUniqueInput | JugadoresEnPartidaWhereUniqueInput[]
    delete?: JugadoresEnPartidaWhereUniqueInput | JugadoresEnPartidaWhereUniqueInput[]
    connect?: JugadoresEnPartidaWhereUniqueInput | JugadoresEnPartidaWhereUniqueInput[]
    update?: JugadoresEnPartidaUpdateWithWhereUniqueWithoutPartidaInput | JugadoresEnPartidaUpdateWithWhereUniqueWithoutPartidaInput[]
    updateMany?: JugadoresEnPartidaUpdateManyWithWhereWithoutPartidaInput | JugadoresEnPartidaUpdateManyWithWhereWithoutPartidaInput[]
    deleteMany?: JugadoresEnPartidaScalarWhereInput | JugadoresEnPartidaScalarWhereInput[]
  }

  export type JugadoresEnPartidaUncheckedUpdateManyWithoutPartidaNestedInput = {
    create?: XOR<JugadoresEnPartidaCreateWithoutPartidaInput, JugadoresEnPartidaUncheckedCreateWithoutPartidaInput> | JugadoresEnPartidaCreateWithoutPartidaInput[] | JugadoresEnPartidaUncheckedCreateWithoutPartidaInput[]
    connectOrCreate?: JugadoresEnPartidaCreateOrConnectWithoutPartidaInput | JugadoresEnPartidaCreateOrConnectWithoutPartidaInput[]
    upsert?: JugadoresEnPartidaUpsertWithWhereUniqueWithoutPartidaInput | JugadoresEnPartidaUpsertWithWhereUniqueWithoutPartidaInput[]
    createMany?: JugadoresEnPartidaCreateManyPartidaInputEnvelope
    set?: JugadoresEnPartidaWhereUniqueInput | JugadoresEnPartidaWhereUniqueInput[]
    disconnect?: JugadoresEnPartidaWhereUniqueInput | JugadoresEnPartidaWhereUniqueInput[]
    delete?: JugadoresEnPartidaWhereUniqueInput | JugadoresEnPartidaWhereUniqueInput[]
    connect?: JugadoresEnPartidaWhereUniqueInput | JugadoresEnPartidaWhereUniqueInput[]
    update?: JugadoresEnPartidaUpdateWithWhereUniqueWithoutPartidaInput | JugadoresEnPartidaUpdateWithWhereUniqueWithoutPartidaInput[]
    updateMany?: JugadoresEnPartidaUpdateManyWithWhereWithoutPartidaInput | JugadoresEnPartidaUpdateManyWithWhereWithoutPartidaInput[]
    deleteMany?: JugadoresEnPartidaScalarWhereInput | JugadoresEnPartidaScalarWhereInput[]
  }

  export type PartidasCreateNestedOneWithoutJugadoresInput = {
    create?: XOR<PartidasCreateWithoutJugadoresInput, PartidasUncheckedCreateWithoutJugadoresInput>
    connectOrCreate?: PartidasCreateOrConnectWithoutJugadoresInput
    connect?: PartidasWhereUniqueInput
  }

  export type PartidasUpdateOneRequiredWithoutJugadoresNestedInput = {
    create?: XOR<PartidasCreateWithoutJugadoresInput, PartidasUncheckedCreateWithoutJugadoresInput>
    connectOrCreate?: PartidasCreateOrConnectWithoutJugadoresInput
    upsert?: PartidasUpsertWithoutJugadoresInput
    connect?: PartidasWhereUniqueInput
    update?: XOR<XOR<PartidasUpdateToOneWithWhereWithoutJugadoresInput, PartidasUpdateWithoutJugadoresInput>, PartidasUncheckedUpdateWithoutJugadoresInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserInGuildCreateWithoutUsuarioInput = {
    guild: GuildCreateNestedOneWithoutUsuarios_en_guildInput
  }

  export type UserInGuildUncheckedCreateWithoutUsuarioInput = {
    id?: number
    guild_id: string
  }

  export type UserInGuildCreateOrConnectWithoutUsuarioInput = {
    where: UserInGuildWhereUniqueInput
    create: XOR<UserInGuildCreateWithoutUsuarioInput, UserInGuildUncheckedCreateWithoutUsuarioInput>
  }

  export type UserInGuildCreateManyUsuarioInputEnvelope = {
    data: UserInGuildCreateManyUsuarioInput | UserInGuildCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type UserInGuildUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: UserInGuildWhereUniqueInput
    update: XOR<UserInGuildUpdateWithoutUsuarioInput, UserInGuildUncheckedUpdateWithoutUsuarioInput>
    create: XOR<UserInGuildCreateWithoutUsuarioInput, UserInGuildUncheckedCreateWithoutUsuarioInput>
  }

  export type UserInGuildUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: UserInGuildWhereUniqueInput
    data: XOR<UserInGuildUpdateWithoutUsuarioInput, UserInGuildUncheckedUpdateWithoutUsuarioInput>
  }

  export type UserInGuildUpdateManyWithWhereWithoutUsuarioInput = {
    where: UserInGuildScalarWhereInput
    data: XOR<UserInGuildUpdateManyMutationInput, UserInGuildUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type UserInGuildScalarWhereInput = {
    AND?: UserInGuildScalarWhereInput | UserInGuildScalarWhereInput[]
    OR?: UserInGuildScalarWhereInput[]
    NOT?: UserInGuildScalarWhereInput | UserInGuildScalarWhereInput[]
    id?: IntFilter<"UserInGuild"> | number
    usuario_id?: StringFilter<"UserInGuild"> | string
    guild_id?: StringFilter<"UserInGuild"> | string
  }

  export type PartidasCreateWithoutGuildInput = {
    estado_partida?: string
    created_at?: Date | string
    juego: JuegosCreateNestedOneWithoutPartidasInput
    jugadores?: JugadoresEnPartidaCreateNestedManyWithoutPartidaInput
  }

  export type PartidasUncheckedCreateWithoutGuildInput = {
    id?: number
    juego_id: number
    estado_partida?: string
    created_at?: Date | string
    jugadores?: JugadoresEnPartidaUncheckedCreateNestedManyWithoutPartidaInput
  }

  export type PartidasCreateOrConnectWithoutGuildInput = {
    where: PartidasWhereUniqueInput
    create: XOR<PartidasCreateWithoutGuildInput, PartidasUncheckedCreateWithoutGuildInput>
  }

  export type PartidasCreateManyGuildInputEnvelope = {
    data: PartidasCreateManyGuildInput | PartidasCreateManyGuildInput[]
    skipDuplicates?: boolean
  }

  export type UserInGuildCreateWithoutGuildInput = {
    usuario: UsuarioCreateNestedOneWithoutGuildsInput
  }

  export type UserInGuildUncheckedCreateWithoutGuildInput = {
    id?: number
    usuario_id: string
  }

  export type UserInGuildCreateOrConnectWithoutGuildInput = {
    where: UserInGuildWhereUniqueInput
    create: XOR<UserInGuildCreateWithoutGuildInput, UserInGuildUncheckedCreateWithoutGuildInput>
  }

  export type UserInGuildCreateManyGuildInputEnvelope = {
    data: UserInGuildCreateManyGuildInput | UserInGuildCreateManyGuildInput[]
    skipDuplicates?: boolean
  }

  export type PartidasUpsertWithWhereUniqueWithoutGuildInput = {
    where: PartidasWhereUniqueInput
    update: XOR<PartidasUpdateWithoutGuildInput, PartidasUncheckedUpdateWithoutGuildInput>
    create: XOR<PartidasCreateWithoutGuildInput, PartidasUncheckedCreateWithoutGuildInput>
  }

  export type PartidasUpdateWithWhereUniqueWithoutGuildInput = {
    where: PartidasWhereUniqueInput
    data: XOR<PartidasUpdateWithoutGuildInput, PartidasUncheckedUpdateWithoutGuildInput>
  }

  export type PartidasUpdateManyWithWhereWithoutGuildInput = {
    where: PartidasScalarWhereInput
    data: XOR<PartidasUpdateManyMutationInput, PartidasUncheckedUpdateManyWithoutGuildInput>
  }

  export type PartidasScalarWhereInput = {
    AND?: PartidasScalarWhereInput | PartidasScalarWhereInput[]
    OR?: PartidasScalarWhereInput[]
    NOT?: PartidasScalarWhereInput | PartidasScalarWhereInput[]
    id?: IntFilter<"Partidas"> | number
    guild_id?: StringFilter<"Partidas"> | string
    juego_id?: IntFilter<"Partidas"> | number
    estado_partida?: StringFilter<"Partidas"> | string
    created_at?: DateTimeFilter<"Partidas"> | Date | string
  }

  export type UserInGuildUpsertWithWhereUniqueWithoutGuildInput = {
    where: UserInGuildWhereUniqueInput
    update: XOR<UserInGuildUpdateWithoutGuildInput, UserInGuildUncheckedUpdateWithoutGuildInput>
    create: XOR<UserInGuildCreateWithoutGuildInput, UserInGuildUncheckedCreateWithoutGuildInput>
  }

  export type UserInGuildUpdateWithWhereUniqueWithoutGuildInput = {
    where: UserInGuildWhereUniqueInput
    data: XOR<UserInGuildUpdateWithoutGuildInput, UserInGuildUncheckedUpdateWithoutGuildInput>
  }

  export type UserInGuildUpdateManyWithWhereWithoutGuildInput = {
    where: UserInGuildScalarWhereInput
    data: XOR<UserInGuildUpdateManyMutationInput, UserInGuildUncheckedUpdateManyWithoutGuildInput>
  }

  export type UsuarioCreateWithoutGuildsInput = {
    discord_id: string
  }

  export type UsuarioUncheckedCreateWithoutGuildsInput = {
    id?: number
    discord_id: string
  }

  export type UsuarioCreateOrConnectWithoutGuildsInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutGuildsInput, UsuarioUncheckedCreateWithoutGuildsInput>
  }

  export type GuildCreateWithoutUsuarios_en_guildInput = {
    discord_id: string
    partidas?: PartidasCreateNestedManyWithoutGuildInput
  }

  export type GuildUncheckedCreateWithoutUsuarios_en_guildInput = {
    id?: number
    discord_id: string
    partidas?: PartidasUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildCreateOrConnectWithoutUsuarios_en_guildInput = {
    where: GuildWhereUniqueInput
    create: XOR<GuildCreateWithoutUsuarios_en_guildInput, GuildUncheckedCreateWithoutUsuarios_en_guildInput>
  }

  export type UsuarioUpsertWithoutGuildsInput = {
    update: XOR<UsuarioUpdateWithoutGuildsInput, UsuarioUncheckedUpdateWithoutGuildsInput>
    create: XOR<UsuarioCreateWithoutGuildsInput, UsuarioUncheckedCreateWithoutGuildsInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutGuildsInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutGuildsInput, UsuarioUncheckedUpdateWithoutGuildsInput>
  }

  export type UsuarioUpdateWithoutGuildsInput = {
    discord_id?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateWithoutGuildsInput = {
    id?: IntFieldUpdateOperationsInput | number
    discord_id?: StringFieldUpdateOperationsInput | string
  }

  export type GuildUpsertWithoutUsuarios_en_guildInput = {
    update: XOR<GuildUpdateWithoutUsuarios_en_guildInput, GuildUncheckedUpdateWithoutUsuarios_en_guildInput>
    create: XOR<GuildCreateWithoutUsuarios_en_guildInput, GuildUncheckedCreateWithoutUsuarios_en_guildInput>
    where?: GuildWhereInput
  }

  export type GuildUpdateToOneWithWhereWithoutUsuarios_en_guildInput = {
    where?: GuildWhereInput
    data: XOR<GuildUpdateWithoutUsuarios_en_guildInput, GuildUncheckedUpdateWithoutUsuarios_en_guildInput>
  }

  export type GuildUpdateWithoutUsuarios_en_guildInput = {
    discord_id?: StringFieldUpdateOperationsInput | string
    partidas?: PartidasUpdateManyWithoutGuildNestedInput
  }

  export type GuildUncheckedUpdateWithoutUsuarios_en_guildInput = {
    id?: IntFieldUpdateOperationsInput | number
    discord_id?: StringFieldUpdateOperationsInput | string
    partidas?: PartidasUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type PartidasCreateWithoutJuegoInput = {
    estado_partida?: string
    created_at?: Date | string
    guild: GuildCreateNestedOneWithoutPartidasInput
    jugadores?: JugadoresEnPartidaCreateNestedManyWithoutPartidaInput
  }

  export type PartidasUncheckedCreateWithoutJuegoInput = {
    id?: number
    guild_id: string
    estado_partida?: string
    created_at?: Date | string
    jugadores?: JugadoresEnPartidaUncheckedCreateNestedManyWithoutPartidaInput
  }

  export type PartidasCreateOrConnectWithoutJuegoInput = {
    where: PartidasWhereUniqueInput
    create: XOR<PartidasCreateWithoutJuegoInput, PartidasUncheckedCreateWithoutJuegoInput>
  }

  export type PartidasCreateManyJuegoInputEnvelope = {
    data: PartidasCreateManyJuegoInput | PartidasCreateManyJuegoInput[]
    skipDuplicates?: boolean
  }

  export type PartidasUpsertWithWhereUniqueWithoutJuegoInput = {
    where: PartidasWhereUniqueInput
    update: XOR<PartidasUpdateWithoutJuegoInput, PartidasUncheckedUpdateWithoutJuegoInput>
    create: XOR<PartidasCreateWithoutJuegoInput, PartidasUncheckedCreateWithoutJuegoInput>
  }

  export type PartidasUpdateWithWhereUniqueWithoutJuegoInput = {
    where: PartidasWhereUniqueInput
    data: XOR<PartidasUpdateWithoutJuegoInput, PartidasUncheckedUpdateWithoutJuegoInput>
  }

  export type PartidasUpdateManyWithWhereWithoutJuegoInput = {
    where: PartidasScalarWhereInput
    data: XOR<PartidasUpdateManyMutationInput, PartidasUncheckedUpdateManyWithoutJuegoInput>
  }

  export type GuildCreateWithoutPartidasInput = {
    discord_id: string
    usuarios_en_guild?: UserInGuildCreateNestedManyWithoutGuildInput
  }

  export type GuildUncheckedCreateWithoutPartidasInput = {
    id?: number
    discord_id: string
    usuarios_en_guild?: UserInGuildUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildCreateOrConnectWithoutPartidasInput = {
    where: GuildWhereUniqueInput
    create: XOR<GuildCreateWithoutPartidasInput, GuildUncheckedCreateWithoutPartidasInput>
  }

  export type JuegosCreateWithoutPartidasInput = {
    nombre: string
    veces_jugado?: number
  }

  export type JuegosUncheckedCreateWithoutPartidasInput = {
    id?: number
    nombre: string
    veces_jugado?: number
  }

  export type JuegosCreateOrConnectWithoutPartidasInput = {
    where: JuegosWhereUniqueInput
    create: XOR<JuegosCreateWithoutPartidasInput, JuegosUncheckedCreateWithoutPartidasInput>
  }

  export type JugadoresEnPartidaCreateWithoutPartidaInput = {
    user_id: string
  }

  export type JugadoresEnPartidaUncheckedCreateWithoutPartidaInput = {
    id?: number
    user_id: string
  }

  export type JugadoresEnPartidaCreateOrConnectWithoutPartidaInput = {
    where: JugadoresEnPartidaWhereUniqueInput
    create: XOR<JugadoresEnPartidaCreateWithoutPartidaInput, JugadoresEnPartidaUncheckedCreateWithoutPartidaInput>
  }

  export type JugadoresEnPartidaCreateManyPartidaInputEnvelope = {
    data: JugadoresEnPartidaCreateManyPartidaInput | JugadoresEnPartidaCreateManyPartidaInput[]
    skipDuplicates?: boolean
  }

  export type GuildUpsertWithoutPartidasInput = {
    update: XOR<GuildUpdateWithoutPartidasInput, GuildUncheckedUpdateWithoutPartidasInput>
    create: XOR<GuildCreateWithoutPartidasInput, GuildUncheckedCreateWithoutPartidasInput>
    where?: GuildWhereInput
  }

  export type GuildUpdateToOneWithWhereWithoutPartidasInput = {
    where?: GuildWhereInput
    data: XOR<GuildUpdateWithoutPartidasInput, GuildUncheckedUpdateWithoutPartidasInput>
  }

  export type GuildUpdateWithoutPartidasInput = {
    discord_id?: StringFieldUpdateOperationsInput | string
    usuarios_en_guild?: UserInGuildUpdateManyWithoutGuildNestedInput
  }

  export type GuildUncheckedUpdateWithoutPartidasInput = {
    id?: IntFieldUpdateOperationsInput | number
    discord_id?: StringFieldUpdateOperationsInput | string
    usuarios_en_guild?: UserInGuildUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type JuegosUpsertWithoutPartidasInput = {
    update: XOR<JuegosUpdateWithoutPartidasInput, JuegosUncheckedUpdateWithoutPartidasInput>
    create: XOR<JuegosCreateWithoutPartidasInput, JuegosUncheckedCreateWithoutPartidasInput>
    where?: JuegosWhereInput
  }

  export type JuegosUpdateToOneWithWhereWithoutPartidasInput = {
    where?: JuegosWhereInput
    data: XOR<JuegosUpdateWithoutPartidasInput, JuegosUncheckedUpdateWithoutPartidasInput>
  }

  export type JuegosUpdateWithoutPartidasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    veces_jugado?: IntFieldUpdateOperationsInput | number
  }

  export type JuegosUncheckedUpdateWithoutPartidasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    veces_jugado?: IntFieldUpdateOperationsInput | number
  }

  export type JugadoresEnPartidaUpsertWithWhereUniqueWithoutPartidaInput = {
    where: JugadoresEnPartidaWhereUniqueInput
    update: XOR<JugadoresEnPartidaUpdateWithoutPartidaInput, JugadoresEnPartidaUncheckedUpdateWithoutPartidaInput>
    create: XOR<JugadoresEnPartidaCreateWithoutPartidaInput, JugadoresEnPartidaUncheckedCreateWithoutPartidaInput>
  }

  export type JugadoresEnPartidaUpdateWithWhereUniqueWithoutPartidaInput = {
    where: JugadoresEnPartidaWhereUniqueInput
    data: XOR<JugadoresEnPartidaUpdateWithoutPartidaInput, JugadoresEnPartidaUncheckedUpdateWithoutPartidaInput>
  }

  export type JugadoresEnPartidaUpdateManyWithWhereWithoutPartidaInput = {
    where: JugadoresEnPartidaScalarWhereInput
    data: XOR<JugadoresEnPartidaUpdateManyMutationInput, JugadoresEnPartidaUncheckedUpdateManyWithoutPartidaInput>
  }

  export type JugadoresEnPartidaScalarWhereInput = {
    AND?: JugadoresEnPartidaScalarWhereInput | JugadoresEnPartidaScalarWhereInput[]
    OR?: JugadoresEnPartidaScalarWhereInput[]
    NOT?: JugadoresEnPartidaScalarWhereInput | JugadoresEnPartidaScalarWhereInput[]
    id?: IntFilter<"JugadoresEnPartida"> | number
    partida_id?: IntFilter<"JugadoresEnPartida"> | number
    user_id?: StringFilter<"JugadoresEnPartida"> | string
  }

  export type PartidasCreateWithoutJugadoresInput = {
    estado_partida?: string
    created_at?: Date | string
    guild: GuildCreateNestedOneWithoutPartidasInput
    juego: JuegosCreateNestedOneWithoutPartidasInput
  }

  export type PartidasUncheckedCreateWithoutJugadoresInput = {
    id?: number
    guild_id: string
    juego_id: number
    estado_partida?: string
    created_at?: Date | string
  }

  export type PartidasCreateOrConnectWithoutJugadoresInput = {
    where: PartidasWhereUniqueInput
    create: XOR<PartidasCreateWithoutJugadoresInput, PartidasUncheckedCreateWithoutJugadoresInput>
  }

  export type PartidasUpsertWithoutJugadoresInput = {
    update: XOR<PartidasUpdateWithoutJugadoresInput, PartidasUncheckedUpdateWithoutJugadoresInput>
    create: XOR<PartidasCreateWithoutJugadoresInput, PartidasUncheckedCreateWithoutJugadoresInput>
    where?: PartidasWhereInput
  }

  export type PartidasUpdateToOneWithWhereWithoutJugadoresInput = {
    where?: PartidasWhereInput
    data: XOR<PartidasUpdateWithoutJugadoresInput, PartidasUncheckedUpdateWithoutJugadoresInput>
  }

  export type PartidasUpdateWithoutJugadoresInput = {
    estado_partida?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildUpdateOneRequiredWithoutPartidasNestedInput
    juego?: JuegosUpdateOneRequiredWithoutPartidasNestedInput
  }

  export type PartidasUncheckedUpdateWithoutJugadoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    guild_id?: StringFieldUpdateOperationsInput | string
    juego_id?: IntFieldUpdateOperationsInput | number
    estado_partida?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInGuildCreateManyUsuarioInput = {
    id?: number
    guild_id: string
  }

  export type UserInGuildUpdateWithoutUsuarioInput = {
    guild?: GuildUpdateOneRequiredWithoutUsuarios_en_guildNestedInput
  }

  export type UserInGuildUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    guild_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserInGuildUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    guild_id?: StringFieldUpdateOperationsInput | string
  }

  export type PartidasCreateManyGuildInput = {
    id?: number
    juego_id: number
    estado_partida?: string
    created_at?: Date | string
  }

  export type UserInGuildCreateManyGuildInput = {
    id?: number
    usuario_id: string
  }

  export type PartidasUpdateWithoutGuildInput = {
    estado_partida?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    juego?: JuegosUpdateOneRequiredWithoutPartidasNestedInput
    jugadores?: JugadoresEnPartidaUpdateManyWithoutPartidaNestedInput
  }

  export type PartidasUncheckedUpdateWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    juego_id?: IntFieldUpdateOperationsInput | number
    estado_partida?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    jugadores?: JugadoresEnPartidaUncheckedUpdateManyWithoutPartidaNestedInput
  }

  export type PartidasUncheckedUpdateManyWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    juego_id?: IntFieldUpdateOperationsInput | number
    estado_partida?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInGuildUpdateWithoutGuildInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutGuildsNestedInput
  }

  export type UserInGuildUncheckedUpdateWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserInGuildUncheckedUpdateManyWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: StringFieldUpdateOperationsInput | string
  }

  export type PartidasCreateManyJuegoInput = {
    id?: number
    guild_id: string
    estado_partida?: string
    created_at?: Date | string
  }

  export type PartidasUpdateWithoutJuegoInput = {
    estado_partida?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildUpdateOneRequiredWithoutPartidasNestedInput
    jugadores?: JugadoresEnPartidaUpdateManyWithoutPartidaNestedInput
  }

  export type PartidasUncheckedUpdateWithoutJuegoInput = {
    id?: IntFieldUpdateOperationsInput | number
    guild_id?: StringFieldUpdateOperationsInput | string
    estado_partida?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    jugadores?: JugadoresEnPartidaUncheckedUpdateManyWithoutPartidaNestedInput
  }

  export type PartidasUncheckedUpdateManyWithoutJuegoInput = {
    id?: IntFieldUpdateOperationsInput | number
    guild_id?: StringFieldUpdateOperationsInput | string
    estado_partida?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JugadoresEnPartidaCreateManyPartidaInput = {
    id?: number
    user_id: string
  }

  export type JugadoresEnPartidaUpdateWithoutPartidaInput = {
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type JugadoresEnPartidaUncheckedUpdateWithoutPartidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type JugadoresEnPartidaUncheckedUpdateManyWithoutPartidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}