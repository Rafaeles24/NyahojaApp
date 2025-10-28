
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
 * Model GuildMember
 * 
 */
export type GuildMember = $Result.DefaultSelection<Prisma.$GuildMemberPayload>
/**
 * Model Juegos
 * 
 */
export type Juegos = $Result.DefaultSelection<Prisma.$JuegosPayload>
/**
 * Model Partida
 * 
 */
export type Partida = $Result.DefaultSelection<Prisma.$PartidaPayload>

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
   * `prisma.guildMember`: Exposes CRUD operations for the **GuildMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuildMembers
    * const guildMembers = await prisma.guildMember.findMany()
    * ```
    */
  get guildMember(): Prisma.GuildMemberDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.partida`: Exposes CRUD operations for the **Partida** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Partidas
    * const partidas = await prisma.partida.findMany()
    * ```
    */
  get partida(): Prisma.PartidaDelegate<ExtArgs, ClientOptions>;
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
    GuildMember: 'GuildMember',
    Juegos: 'Juegos',
    Partida: 'Partida'
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
      modelProps: "usuario" | "guild" | "guildMember" | "juegos" | "partida"
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
      GuildMember: {
        payload: Prisma.$GuildMemberPayload<ExtArgs>
        fields: Prisma.GuildMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuildMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuildMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildMemberPayload>
          }
          findFirst: {
            args: Prisma.GuildMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuildMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildMemberPayload>
          }
          findMany: {
            args: Prisma.GuildMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildMemberPayload>[]
          }
          create: {
            args: Prisma.GuildMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildMemberPayload>
          }
          createMany: {
            args: Prisma.GuildMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GuildMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildMemberPayload>
          }
          update: {
            args: Prisma.GuildMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildMemberPayload>
          }
          deleteMany: {
            args: Prisma.GuildMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuildMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GuildMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildMemberPayload>
          }
          aggregate: {
            args: Prisma.GuildMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuildMember>
          }
          groupBy: {
            args: Prisma.GuildMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuildMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuildMemberCountArgs<ExtArgs>
            result: $Utils.Optional<GuildMemberCountAggregateOutputType> | number
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
      Partida: {
        payload: Prisma.$PartidaPayload<ExtArgs>
        fields: Prisma.PartidaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartidaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartidaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>
          }
          findFirst: {
            args: Prisma.PartidaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartidaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>
          }
          findMany: {
            args: Prisma.PartidaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>[]
          }
          create: {
            args: Prisma.PartidaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>
          }
          createMany: {
            args: Prisma.PartidaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PartidaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>
          }
          update: {
            args: Prisma.PartidaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>
          }
          deleteMany: {
            args: Prisma.PartidaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartidaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PartidaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>
          }
          aggregate: {
            args: Prisma.PartidaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartida>
          }
          groupBy: {
            args: Prisma.PartidaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartidaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartidaCountArgs<ExtArgs>
            result: $Utils.Optional<PartidaCountAggregateOutputType> | number
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
    guildMember?: GuildMemberOmit
    juegos?: JuegosOmit
    partida?: PartidaOmit
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
    where?: GuildMemberWhereInput
  }


  /**
   * Count Type GuildCountOutputType
   */

  export type GuildCountOutputType = {
    partidas: number
    miembros: number
  }

  export type GuildCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partidas?: boolean | GuildCountOutputTypeCountPartidasArgs
    miembros?: boolean | GuildCountOutputTypeCountMiembrosArgs
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
    where?: PartidaWhereInput
  }

  /**
   * GuildCountOutputType without action
   */
  export type GuildCountOutputTypeCountMiembrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildMemberWhereInput
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
    where?: PartidaWhereInput
  }


  /**
   * Count Type PartidaCountOutputType
   */

  export type PartidaCountOutputType = {
    miembros: number
  }

  export type PartidaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    miembros?: boolean | PartidaCountOutputTypeCountMiembrosArgs
  }

  // Custom InputTypes
  /**
   * PartidaCountOutputType without action
   */
  export type PartidaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartidaCountOutputType
     */
    select?: PartidaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PartidaCountOutputType without action
   */
  export type PartidaCountOutputTypeCountMiembrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildMemberWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    discord_id: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    discord_id: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    discord_id: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    discord_id?: true
  }

  export type UsuarioMaxAggregateInputType = {
    discord_id?: true
  }

  export type UsuarioCountAggregateInputType = {
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
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    discord_id: string
    _count: UsuarioCountAggregateOutputType | null
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
    discord_id?: boolean
    guilds?: boolean | Usuario$guildsArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    discord_id?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"discord_id", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guilds?: boolean | Usuario$guildsArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      guilds: Prisma.$GuildMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
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
     * // Only select the `discord_id`
     * const usuarioWithDiscord_idOnly = await prisma.usuario.findMany({ select: { discord_id: true } })
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
    guilds<T extends Usuario$guildsArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$guildsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
     * Select specific fields to fetch from the GuildMember
     */
    select?: GuildMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMember
     */
    omit?: GuildMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMemberInclude<ExtArgs> | null
    where?: GuildMemberWhereInput
    orderBy?: GuildMemberOrderByWithRelationInput | GuildMemberOrderByWithRelationInput[]
    cursor?: GuildMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuildMemberScalarFieldEnum | GuildMemberScalarFieldEnum[]
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
    _min: GuildMinAggregateOutputType | null
    _max: GuildMaxAggregateOutputType | null
  }

  export type GuildMinAggregateOutputType = {
    discord_id: string | null
  }

  export type GuildMaxAggregateOutputType = {
    discord_id: string | null
  }

  export type GuildCountAggregateOutputType = {
    discord_id: number
    _all: number
  }


  export type GuildMinAggregateInputType = {
    discord_id?: true
  }

  export type GuildMaxAggregateInputType = {
    discord_id?: true
  }

  export type GuildCountAggregateInputType = {
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
    _min?: GuildMinAggregateInputType
    _max?: GuildMaxAggregateInputType
  }

  export type GuildGroupByOutputType = {
    discord_id: string
    _count: GuildCountAggregateOutputType | null
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
    discord_id?: boolean
    partidas?: boolean | Guild$partidasArgs<ExtArgs>
    miembros?: boolean | Guild$miembrosArgs<ExtArgs>
    _count?: boolean | GuildCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guild"]>



  export type GuildSelectScalar = {
    discord_id?: boolean
  }

  export type GuildOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"discord_id", ExtArgs["result"]["guild"]>
  export type GuildInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partidas?: boolean | Guild$partidasArgs<ExtArgs>
    miembros?: boolean | Guild$miembrosArgs<ExtArgs>
    _count?: boolean | GuildCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GuildPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guild"
    objects: {
      partidas: Prisma.$PartidaPayload<ExtArgs>[]
      miembros: Prisma.$GuildMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
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
     * // Only select the `discord_id`
     * const guildWithDiscord_idOnly = await prisma.guild.findMany({ select: { discord_id: true } })
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
    partidas<T extends Guild$partidasArgs<ExtArgs> = {}>(args?: Subset<T, Guild$partidasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    miembros<T extends Guild$miembrosArgs<ExtArgs> = {}>(args?: Subset<T, Guild$miembrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    where?: PartidaWhereInput
    orderBy?: PartidaOrderByWithRelationInput | PartidaOrderByWithRelationInput[]
    cursor?: PartidaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartidaScalarFieldEnum | PartidaScalarFieldEnum[]
  }

  /**
   * Guild.miembros
   */
  export type Guild$miembrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMember
     */
    select?: GuildMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMember
     */
    omit?: GuildMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMemberInclude<ExtArgs> | null
    where?: GuildMemberWhereInput
    orderBy?: GuildMemberOrderByWithRelationInput | GuildMemberOrderByWithRelationInput[]
    cursor?: GuildMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuildMemberScalarFieldEnum | GuildMemberScalarFieldEnum[]
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
   * Model GuildMember
   */

  export type AggregateGuildMember = {
    _count: GuildMemberCountAggregateOutputType | null
    _avg: GuildMemberAvgAggregateOutputType | null
    _sum: GuildMemberSumAggregateOutputType | null
    _min: GuildMemberMinAggregateOutputType | null
    _max: GuildMemberMaxAggregateOutputType | null
  }

  export type GuildMemberAvgAggregateOutputType = {
    partida_id: number | null
  }

  export type GuildMemberSumAggregateOutputType = {
    partida_id: number | null
  }

  export type GuildMemberMinAggregateOutputType = {
    guild_id: string | null
    usuario_id: string | null
    partida_id: number | null
    created_at: Date | null
  }

  export type GuildMemberMaxAggregateOutputType = {
    guild_id: string | null
    usuario_id: string | null
    partida_id: number | null
    created_at: Date | null
  }

  export type GuildMemberCountAggregateOutputType = {
    guild_id: number
    usuario_id: number
    partida_id: number
    created_at: number
    _all: number
  }


  export type GuildMemberAvgAggregateInputType = {
    partida_id?: true
  }

  export type GuildMemberSumAggregateInputType = {
    partida_id?: true
  }

  export type GuildMemberMinAggregateInputType = {
    guild_id?: true
    usuario_id?: true
    partida_id?: true
    created_at?: true
  }

  export type GuildMemberMaxAggregateInputType = {
    guild_id?: true
    usuario_id?: true
    partida_id?: true
    created_at?: true
  }

  export type GuildMemberCountAggregateInputType = {
    guild_id?: true
    usuario_id?: true
    partida_id?: true
    created_at?: true
    _all?: true
  }

  export type GuildMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuildMember to aggregate.
     */
    where?: GuildMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildMembers to fetch.
     */
    orderBy?: GuildMemberOrderByWithRelationInput | GuildMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuildMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuildMembers
    **/
    _count?: true | GuildMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuildMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuildMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuildMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuildMemberMaxAggregateInputType
  }

  export type GetGuildMemberAggregateType<T extends GuildMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateGuildMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuildMember[P]>
      : GetScalarType<T[P], AggregateGuildMember[P]>
  }




  export type GuildMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildMemberWhereInput
    orderBy?: GuildMemberOrderByWithAggregationInput | GuildMemberOrderByWithAggregationInput[]
    by: GuildMemberScalarFieldEnum[] | GuildMemberScalarFieldEnum
    having?: GuildMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuildMemberCountAggregateInputType | true
    _avg?: GuildMemberAvgAggregateInputType
    _sum?: GuildMemberSumAggregateInputType
    _min?: GuildMemberMinAggregateInputType
    _max?: GuildMemberMaxAggregateInputType
  }

  export type GuildMemberGroupByOutputType = {
    guild_id: string
    usuario_id: string
    partida_id: number | null
    created_at: Date
    _count: GuildMemberCountAggregateOutputType | null
    _avg: GuildMemberAvgAggregateOutputType | null
    _sum: GuildMemberSumAggregateOutputType | null
    _min: GuildMemberMinAggregateOutputType | null
    _max: GuildMemberMaxAggregateOutputType | null
  }

  type GetGuildMemberGroupByPayload<T extends GuildMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuildMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuildMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuildMemberGroupByOutputType[P]>
            : GetScalarType<T[P], GuildMemberGroupByOutputType[P]>
        }
      >
    >


  export type GuildMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guild_id?: boolean
    usuario_id?: boolean
    partida_id?: boolean
    created_at?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    partida?: boolean | GuildMember$partidaArgs<ExtArgs>
  }, ExtArgs["result"]["guildMember"]>



  export type GuildMemberSelectScalar = {
    guild_id?: boolean
    usuario_id?: boolean
    partida_id?: boolean
    created_at?: boolean
  }

  export type GuildMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"guild_id" | "usuario_id" | "partida_id" | "created_at", ExtArgs["result"]["guildMember"]>
  export type GuildMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    partida?: boolean | GuildMember$partidaArgs<ExtArgs>
  }

  export type $GuildMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuildMember"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      guild: Prisma.$GuildPayload<ExtArgs>
      partida: Prisma.$PartidaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      guild_id: string
      usuario_id: string
      partida_id: number | null
      created_at: Date
    }, ExtArgs["result"]["guildMember"]>
    composites: {}
  }

  type GuildMemberGetPayload<S extends boolean | null | undefined | GuildMemberDefaultArgs> = $Result.GetResult<Prisma.$GuildMemberPayload, S>

  type GuildMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuildMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuildMemberCountAggregateInputType | true
    }

  export interface GuildMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuildMember'], meta: { name: 'GuildMember' } }
    /**
     * Find zero or one GuildMember that matches the filter.
     * @param {GuildMemberFindUniqueArgs} args - Arguments to find a GuildMember
     * @example
     * // Get one GuildMember
     * const guildMember = await prisma.guildMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuildMemberFindUniqueArgs>(args: SelectSubset<T, GuildMemberFindUniqueArgs<ExtArgs>>): Prisma__GuildMemberClient<$Result.GetResult<Prisma.$GuildMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuildMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuildMemberFindUniqueOrThrowArgs} args - Arguments to find a GuildMember
     * @example
     * // Get one GuildMember
     * const guildMember = await prisma.guildMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuildMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, GuildMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuildMemberClient<$Result.GetResult<Prisma.$GuildMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuildMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildMemberFindFirstArgs} args - Arguments to find a GuildMember
     * @example
     * // Get one GuildMember
     * const guildMember = await prisma.guildMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuildMemberFindFirstArgs>(args?: SelectSubset<T, GuildMemberFindFirstArgs<ExtArgs>>): Prisma__GuildMemberClient<$Result.GetResult<Prisma.$GuildMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuildMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildMemberFindFirstOrThrowArgs} args - Arguments to find a GuildMember
     * @example
     * // Get one GuildMember
     * const guildMember = await prisma.guildMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuildMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, GuildMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuildMemberClient<$Result.GetResult<Prisma.$GuildMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuildMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuildMembers
     * const guildMembers = await prisma.guildMember.findMany()
     * 
     * // Get first 10 GuildMembers
     * const guildMembers = await prisma.guildMember.findMany({ take: 10 })
     * 
     * // Only select the `guild_id`
     * const guildMemberWithGuild_idOnly = await prisma.guildMember.findMany({ select: { guild_id: true } })
     * 
     */
    findMany<T extends GuildMemberFindManyArgs>(args?: SelectSubset<T, GuildMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuildMember.
     * @param {GuildMemberCreateArgs} args - Arguments to create a GuildMember.
     * @example
     * // Create one GuildMember
     * const GuildMember = await prisma.guildMember.create({
     *   data: {
     *     // ... data to create a GuildMember
     *   }
     * })
     * 
     */
    create<T extends GuildMemberCreateArgs>(args: SelectSubset<T, GuildMemberCreateArgs<ExtArgs>>): Prisma__GuildMemberClient<$Result.GetResult<Prisma.$GuildMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuildMembers.
     * @param {GuildMemberCreateManyArgs} args - Arguments to create many GuildMembers.
     * @example
     * // Create many GuildMembers
     * const guildMember = await prisma.guildMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuildMemberCreateManyArgs>(args?: SelectSubset<T, GuildMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GuildMember.
     * @param {GuildMemberDeleteArgs} args - Arguments to delete one GuildMember.
     * @example
     * // Delete one GuildMember
     * const GuildMember = await prisma.guildMember.delete({
     *   where: {
     *     // ... filter to delete one GuildMember
     *   }
     * })
     * 
     */
    delete<T extends GuildMemberDeleteArgs>(args: SelectSubset<T, GuildMemberDeleteArgs<ExtArgs>>): Prisma__GuildMemberClient<$Result.GetResult<Prisma.$GuildMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuildMember.
     * @param {GuildMemberUpdateArgs} args - Arguments to update one GuildMember.
     * @example
     * // Update one GuildMember
     * const guildMember = await prisma.guildMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuildMemberUpdateArgs>(args: SelectSubset<T, GuildMemberUpdateArgs<ExtArgs>>): Prisma__GuildMemberClient<$Result.GetResult<Prisma.$GuildMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuildMembers.
     * @param {GuildMemberDeleteManyArgs} args - Arguments to filter GuildMembers to delete.
     * @example
     * // Delete a few GuildMembers
     * const { count } = await prisma.guildMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuildMemberDeleteManyArgs>(args?: SelectSubset<T, GuildMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuildMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuildMembers
     * const guildMember = await prisma.guildMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuildMemberUpdateManyArgs>(args: SelectSubset<T, GuildMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GuildMember.
     * @param {GuildMemberUpsertArgs} args - Arguments to update or create a GuildMember.
     * @example
     * // Update or create a GuildMember
     * const guildMember = await prisma.guildMember.upsert({
     *   create: {
     *     // ... data to create a GuildMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuildMember we want to update
     *   }
     * })
     */
    upsert<T extends GuildMemberUpsertArgs>(args: SelectSubset<T, GuildMemberUpsertArgs<ExtArgs>>): Prisma__GuildMemberClient<$Result.GetResult<Prisma.$GuildMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuildMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildMemberCountArgs} args - Arguments to filter GuildMembers to count.
     * @example
     * // Count the number of GuildMembers
     * const count = await prisma.guildMember.count({
     *   where: {
     *     // ... the filter for the GuildMembers we want to count
     *   }
     * })
    **/
    count<T extends GuildMemberCountArgs>(
      args?: Subset<T, GuildMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuildMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuildMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuildMemberAggregateArgs>(args: Subset<T, GuildMemberAggregateArgs>): Prisma.PrismaPromise<GetGuildMemberAggregateType<T>>

    /**
     * Group by GuildMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildMemberGroupByArgs} args - Group by arguments.
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
      T extends GuildMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuildMemberGroupByArgs['orderBy'] }
        : { orderBy?: GuildMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuildMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuildMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuildMember model
   */
  readonly fields: GuildMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuildMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuildMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    guild<T extends GuildDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildDefaultArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    partida<T extends GuildMember$partidaArgs<ExtArgs> = {}>(args?: Subset<T, GuildMember$partidaArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GuildMember model
   */
  interface GuildMemberFieldRefs {
    readonly guild_id: FieldRef<"GuildMember", 'String'>
    readonly usuario_id: FieldRef<"GuildMember", 'String'>
    readonly partida_id: FieldRef<"GuildMember", 'Int'>
    readonly created_at: FieldRef<"GuildMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GuildMember findUnique
   */
  export type GuildMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMember
     */
    select?: GuildMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMember
     */
    omit?: GuildMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMemberInclude<ExtArgs> | null
    /**
     * Filter, which GuildMember to fetch.
     */
    where: GuildMemberWhereUniqueInput
  }

  /**
   * GuildMember findUniqueOrThrow
   */
  export type GuildMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMember
     */
    select?: GuildMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMember
     */
    omit?: GuildMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMemberInclude<ExtArgs> | null
    /**
     * Filter, which GuildMember to fetch.
     */
    where: GuildMemberWhereUniqueInput
  }

  /**
   * GuildMember findFirst
   */
  export type GuildMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMember
     */
    select?: GuildMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMember
     */
    omit?: GuildMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMemberInclude<ExtArgs> | null
    /**
     * Filter, which GuildMember to fetch.
     */
    where?: GuildMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildMembers to fetch.
     */
    orderBy?: GuildMemberOrderByWithRelationInput | GuildMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuildMembers.
     */
    cursor?: GuildMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuildMembers.
     */
    distinct?: GuildMemberScalarFieldEnum | GuildMemberScalarFieldEnum[]
  }

  /**
   * GuildMember findFirstOrThrow
   */
  export type GuildMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMember
     */
    select?: GuildMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMember
     */
    omit?: GuildMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMemberInclude<ExtArgs> | null
    /**
     * Filter, which GuildMember to fetch.
     */
    where?: GuildMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildMembers to fetch.
     */
    orderBy?: GuildMemberOrderByWithRelationInput | GuildMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuildMembers.
     */
    cursor?: GuildMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuildMembers.
     */
    distinct?: GuildMemberScalarFieldEnum | GuildMemberScalarFieldEnum[]
  }

  /**
   * GuildMember findMany
   */
  export type GuildMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMember
     */
    select?: GuildMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMember
     */
    omit?: GuildMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMemberInclude<ExtArgs> | null
    /**
     * Filter, which GuildMembers to fetch.
     */
    where?: GuildMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildMembers to fetch.
     */
    orderBy?: GuildMemberOrderByWithRelationInput | GuildMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuildMembers.
     */
    cursor?: GuildMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildMembers.
     */
    skip?: number
    distinct?: GuildMemberScalarFieldEnum | GuildMemberScalarFieldEnum[]
  }

  /**
   * GuildMember create
   */
  export type GuildMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMember
     */
    select?: GuildMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMember
     */
    omit?: GuildMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a GuildMember.
     */
    data: XOR<GuildMemberCreateInput, GuildMemberUncheckedCreateInput>
  }

  /**
   * GuildMember createMany
   */
  export type GuildMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuildMembers.
     */
    data: GuildMemberCreateManyInput | GuildMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuildMember update
   */
  export type GuildMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMember
     */
    select?: GuildMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMember
     */
    omit?: GuildMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a GuildMember.
     */
    data: XOR<GuildMemberUpdateInput, GuildMemberUncheckedUpdateInput>
    /**
     * Choose, which GuildMember to update.
     */
    where: GuildMemberWhereUniqueInput
  }

  /**
   * GuildMember updateMany
   */
  export type GuildMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuildMembers.
     */
    data: XOR<GuildMemberUpdateManyMutationInput, GuildMemberUncheckedUpdateManyInput>
    /**
     * Filter which GuildMembers to update
     */
    where?: GuildMemberWhereInput
    /**
     * Limit how many GuildMembers to update.
     */
    limit?: number
  }

  /**
   * GuildMember upsert
   */
  export type GuildMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMember
     */
    select?: GuildMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMember
     */
    omit?: GuildMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the GuildMember to update in case it exists.
     */
    where: GuildMemberWhereUniqueInput
    /**
     * In case the GuildMember found by the `where` argument doesn't exist, create a new GuildMember with this data.
     */
    create: XOR<GuildMemberCreateInput, GuildMemberUncheckedCreateInput>
    /**
     * In case the GuildMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuildMemberUpdateInput, GuildMemberUncheckedUpdateInput>
  }

  /**
   * GuildMember delete
   */
  export type GuildMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMember
     */
    select?: GuildMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMember
     */
    omit?: GuildMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMemberInclude<ExtArgs> | null
    /**
     * Filter which GuildMember to delete.
     */
    where: GuildMemberWhereUniqueInput
  }

  /**
   * GuildMember deleteMany
   */
  export type GuildMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuildMembers to delete
     */
    where?: GuildMemberWhereInput
    /**
     * Limit how many GuildMembers to delete.
     */
    limit?: number
  }

  /**
   * GuildMember.partida
   */
  export type GuildMember$partidaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    where?: PartidaWhereInput
  }

  /**
   * GuildMember without action
   */
  export type GuildMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMember
     */
    select?: GuildMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMember
     */
    omit?: GuildMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMemberInclude<ExtArgs> | null
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
      partidas: Prisma.$PartidaPayload<ExtArgs>[]
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
    partidas<T extends Juegos$partidasArgs<ExtArgs> = {}>(args?: Subset<T, Juegos$partidasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    where?: PartidaWhereInput
    orderBy?: PartidaOrderByWithRelationInput | PartidaOrderByWithRelationInput[]
    cursor?: PartidaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartidaScalarFieldEnum | PartidaScalarFieldEnum[]
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
   * Model Partida
   */

  export type AggregatePartida = {
    _count: PartidaCountAggregateOutputType | null
    _avg: PartidaAvgAggregateOutputType | null
    _sum: PartidaSumAggregateOutputType | null
    _min: PartidaMinAggregateOutputType | null
    _max: PartidaMaxAggregateOutputType | null
  }

  export type PartidaAvgAggregateOutputType = {
    id: number | null
    juego_id: number | null
  }

  export type PartidaSumAggregateOutputType = {
    id: number | null
    juego_id: number | null
  }

  export type PartidaMinAggregateOutputType = {
    id: number | null
    guild_id: string | null
    juego_id: number | null
    estado_partida: string | null
    created_at: Date | null
  }

  export type PartidaMaxAggregateOutputType = {
    id: number | null
    guild_id: string | null
    juego_id: number | null
    estado_partida: string | null
    created_at: Date | null
  }

  export type PartidaCountAggregateOutputType = {
    id: number
    guild_id: number
    juego_id: number
    estado_partida: number
    created_at: number
    _all: number
  }


  export type PartidaAvgAggregateInputType = {
    id?: true
    juego_id?: true
  }

  export type PartidaSumAggregateInputType = {
    id?: true
    juego_id?: true
  }

  export type PartidaMinAggregateInputType = {
    id?: true
    guild_id?: true
    juego_id?: true
    estado_partida?: true
    created_at?: true
  }

  export type PartidaMaxAggregateInputType = {
    id?: true
    guild_id?: true
    juego_id?: true
    estado_partida?: true
    created_at?: true
  }

  export type PartidaCountAggregateInputType = {
    id?: true
    guild_id?: true
    juego_id?: true
    estado_partida?: true
    created_at?: true
    _all?: true
  }

  export type PartidaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partida to aggregate.
     */
    where?: PartidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidas to fetch.
     */
    orderBy?: PartidaOrderByWithRelationInput | PartidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartidaWhereUniqueInput
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
    _count?: true | PartidaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartidaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartidaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartidaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartidaMaxAggregateInputType
  }

  export type GetPartidaAggregateType<T extends PartidaAggregateArgs> = {
        [P in keyof T & keyof AggregatePartida]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartida[P]>
      : GetScalarType<T[P], AggregatePartida[P]>
  }




  export type PartidaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartidaWhereInput
    orderBy?: PartidaOrderByWithAggregationInput | PartidaOrderByWithAggregationInput[]
    by: PartidaScalarFieldEnum[] | PartidaScalarFieldEnum
    having?: PartidaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartidaCountAggregateInputType | true
    _avg?: PartidaAvgAggregateInputType
    _sum?: PartidaSumAggregateInputType
    _min?: PartidaMinAggregateInputType
    _max?: PartidaMaxAggregateInputType
  }

  export type PartidaGroupByOutputType = {
    id: number
    guild_id: string
    juego_id: number
    estado_partida: string
    created_at: Date
    _count: PartidaCountAggregateOutputType | null
    _avg: PartidaAvgAggregateOutputType | null
    _sum: PartidaSumAggregateOutputType | null
    _min: PartidaMinAggregateOutputType | null
    _max: PartidaMaxAggregateOutputType | null
  }

  type GetPartidaGroupByPayload<T extends PartidaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartidaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartidaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartidaGroupByOutputType[P]>
            : GetScalarType<T[P], PartidaGroupByOutputType[P]>
        }
      >
    >


  export type PartidaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guild_id?: boolean
    juego_id?: boolean
    estado_partida?: boolean
    created_at?: boolean
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    juego?: boolean | JuegosDefaultArgs<ExtArgs>
    miembros?: boolean | Partida$miembrosArgs<ExtArgs>
    _count?: boolean | PartidaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partida"]>



  export type PartidaSelectScalar = {
    id?: boolean
    guild_id?: boolean
    juego_id?: boolean
    estado_partida?: boolean
    created_at?: boolean
  }

  export type PartidaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guild_id" | "juego_id" | "estado_partida" | "created_at", ExtArgs["result"]["partida"]>
  export type PartidaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    juego?: boolean | JuegosDefaultArgs<ExtArgs>
    miembros?: boolean | Partida$miembrosArgs<ExtArgs>
    _count?: boolean | PartidaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PartidaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Partida"
    objects: {
      guild: Prisma.$GuildPayload<ExtArgs>
      juego: Prisma.$JuegosPayload<ExtArgs>
      miembros: Prisma.$GuildMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guild_id: string
      juego_id: number
      estado_partida: string
      created_at: Date
    }, ExtArgs["result"]["partida"]>
    composites: {}
  }

  type PartidaGetPayload<S extends boolean | null | undefined | PartidaDefaultArgs> = $Result.GetResult<Prisma.$PartidaPayload, S>

  type PartidaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartidaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartidaCountAggregateInputType | true
    }

  export interface PartidaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Partida'], meta: { name: 'Partida' } }
    /**
     * Find zero or one Partida that matches the filter.
     * @param {PartidaFindUniqueArgs} args - Arguments to find a Partida
     * @example
     * // Get one Partida
     * const partida = await prisma.partida.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartidaFindUniqueArgs>(args: SelectSubset<T, PartidaFindUniqueArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Partida that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartidaFindUniqueOrThrowArgs} args - Arguments to find a Partida
     * @example
     * // Get one Partida
     * const partida = await prisma.partida.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartidaFindUniqueOrThrowArgs>(args: SelectSubset<T, PartidaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partida that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaFindFirstArgs} args - Arguments to find a Partida
     * @example
     * // Get one Partida
     * const partida = await prisma.partida.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartidaFindFirstArgs>(args?: SelectSubset<T, PartidaFindFirstArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partida that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaFindFirstOrThrowArgs} args - Arguments to find a Partida
     * @example
     * // Get one Partida
     * const partida = await prisma.partida.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartidaFindFirstOrThrowArgs>(args?: SelectSubset<T, PartidaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Partidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Partidas
     * const partidas = await prisma.partida.findMany()
     * 
     * // Get first 10 Partidas
     * const partidas = await prisma.partida.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partidaWithIdOnly = await prisma.partida.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartidaFindManyArgs>(args?: SelectSubset<T, PartidaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Partida.
     * @param {PartidaCreateArgs} args - Arguments to create a Partida.
     * @example
     * // Create one Partida
     * const Partida = await prisma.partida.create({
     *   data: {
     *     // ... data to create a Partida
     *   }
     * })
     * 
     */
    create<T extends PartidaCreateArgs>(args: SelectSubset<T, PartidaCreateArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Partidas.
     * @param {PartidaCreateManyArgs} args - Arguments to create many Partidas.
     * @example
     * // Create many Partidas
     * const partida = await prisma.partida.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartidaCreateManyArgs>(args?: SelectSubset<T, PartidaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Partida.
     * @param {PartidaDeleteArgs} args - Arguments to delete one Partida.
     * @example
     * // Delete one Partida
     * const Partida = await prisma.partida.delete({
     *   where: {
     *     // ... filter to delete one Partida
     *   }
     * })
     * 
     */
    delete<T extends PartidaDeleteArgs>(args: SelectSubset<T, PartidaDeleteArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Partida.
     * @param {PartidaUpdateArgs} args - Arguments to update one Partida.
     * @example
     * // Update one Partida
     * const partida = await prisma.partida.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartidaUpdateArgs>(args: SelectSubset<T, PartidaUpdateArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Partidas.
     * @param {PartidaDeleteManyArgs} args - Arguments to filter Partidas to delete.
     * @example
     * // Delete a few Partidas
     * const { count } = await prisma.partida.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartidaDeleteManyArgs>(args?: SelectSubset<T, PartidaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Partidas
     * const partida = await prisma.partida.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartidaUpdateManyArgs>(args: SelectSubset<T, PartidaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Partida.
     * @param {PartidaUpsertArgs} args - Arguments to update or create a Partida.
     * @example
     * // Update or create a Partida
     * const partida = await prisma.partida.upsert({
     *   create: {
     *     // ... data to create a Partida
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Partida we want to update
     *   }
     * })
     */
    upsert<T extends PartidaUpsertArgs>(args: SelectSubset<T, PartidaUpsertArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Partidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaCountArgs} args - Arguments to filter Partidas to count.
     * @example
     * // Count the number of Partidas
     * const count = await prisma.partida.count({
     *   where: {
     *     // ... the filter for the Partidas we want to count
     *   }
     * })
    **/
    count<T extends PartidaCountArgs>(
      args?: Subset<T, PartidaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartidaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Partida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PartidaAggregateArgs>(args: Subset<T, PartidaAggregateArgs>): Prisma.PrismaPromise<GetPartidaAggregateType<T>>

    /**
     * Group by Partida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaGroupByArgs} args - Group by arguments.
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
      T extends PartidaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartidaGroupByArgs['orderBy'] }
        : { orderBy?: PartidaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PartidaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartidaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Partida model
   */
  readonly fields: PartidaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Partida.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartidaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guild<T extends GuildDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildDefaultArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    juego<T extends JuegosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JuegosDefaultArgs<ExtArgs>>): Prisma__JuegosClient<$Result.GetResult<Prisma.$JuegosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    miembros<T extends Partida$miembrosArgs<ExtArgs> = {}>(args?: Subset<T, Partida$miembrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Partida model
   */
  interface PartidaFieldRefs {
    readonly id: FieldRef<"Partida", 'Int'>
    readonly guild_id: FieldRef<"Partida", 'String'>
    readonly juego_id: FieldRef<"Partida", 'Int'>
    readonly estado_partida: FieldRef<"Partida", 'String'>
    readonly created_at: FieldRef<"Partida", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Partida findUnique
   */
  export type PartidaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * Filter, which Partida to fetch.
     */
    where: PartidaWhereUniqueInput
  }

  /**
   * Partida findUniqueOrThrow
   */
  export type PartidaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * Filter, which Partida to fetch.
     */
    where: PartidaWhereUniqueInput
  }

  /**
   * Partida findFirst
   */
  export type PartidaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * Filter, which Partida to fetch.
     */
    where?: PartidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidas to fetch.
     */
    orderBy?: PartidaOrderByWithRelationInput | PartidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partidas.
     */
    cursor?: PartidaWhereUniqueInput
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
    distinct?: PartidaScalarFieldEnum | PartidaScalarFieldEnum[]
  }

  /**
   * Partida findFirstOrThrow
   */
  export type PartidaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * Filter, which Partida to fetch.
     */
    where?: PartidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidas to fetch.
     */
    orderBy?: PartidaOrderByWithRelationInput | PartidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partidas.
     */
    cursor?: PartidaWhereUniqueInput
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
    distinct?: PartidaScalarFieldEnum | PartidaScalarFieldEnum[]
  }

  /**
   * Partida findMany
   */
  export type PartidaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * Filter, which Partidas to fetch.
     */
    where?: PartidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidas to fetch.
     */
    orderBy?: PartidaOrderByWithRelationInput | PartidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Partidas.
     */
    cursor?: PartidaWhereUniqueInput
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
    distinct?: PartidaScalarFieldEnum | PartidaScalarFieldEnum[]
  }

  /**
   * Partida create
   */
  export type PartidaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * The data needed to create a Partida.
     */
    data: XOR<PartidaCreateInput, PartidaUncheckedCreateInput>
  }

  /**
   * Partida createMany
   */
  export type PartidaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Partidas.
     */
    data: PartidaCreateManyInput | PartidaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Partida update
   */
  export type PartidaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * The data needed to update a Partida.
     */
    data: XOR<PartidaUpdateInput, PartidaUncheckedUpdateInput>
    /**
     * Choose, which Partida to update.
     */
    where: PartidaWhereUniqueInput
  }

  /**
   * Partida updateMany
   */
  export type PartidaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Partidas.
     */
    data: XOR<PartidaUpdateManyMutationInput, PartidaUncheckedUpdateManyInput>
    /**
     * Filter which Partidas to update
     */
    where?: PartidaWhereInput
    /**
     * Limit how many Partidas to update.
     */
    limit?: number
  }

  /**
   * Partida upsert
   */
  export type PartidaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * The filter to search for the Partida to update in case it exists.
     */
    where: PartidaWhereUniqueInput
    /**
     * In case the Partida found by the `where` argument doesn't exist, create a new Partida with this data.
     */
    create: XOR<PartidaCreateInput, PartidaUncheckedCreateInput>
    /**
     * In case the Partida was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartidaUpdateInput, PartidaUncheckedUpdateInput>
  }

  /**
   * Partida delete
   */
  export type PartidaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * Filter which Partida to delete.
     */
    where: PartidaWhereUniqueInput
  }

  /**
   * Partida deleteMany
   */
  export type PartidaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partidas to delete
     */
    where?: PartidaWhereInput
    /**
     * Limit how many Partidas to delete.
     */
    limit?: number
  }

  /**
   * Partida.miembros
   */
  export type Partida$miembrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMember
     */
    select?: GuildMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMember
     */
    omit?: GuildMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMemberInclude<ExtArgs> | null
    where?: GuildMemberWhereInput
    orderBy?: GuildMemberOrderByWithRelationInput | GuildMemberOrderByWithRelationInput[]
    cursor?: GuildMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuildMemberScalarFieldEnum | GuildMemberScalarFieldEnum[]
  }

  /**
   * Partida without action
   */
  export type PartidaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
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
    discord_id: 'discord_id'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const GuildScalarFieldEnum: {
    discord_id: 'discord_id'
  };

  export type GuildScalarFieldEnum = (typeof GuildScalarFieldEnum)[keyof typeof GuildScalarFieldEnum]


  export const GuildMemberScalarFieldEnum: {
    guild_id: 'guild_id',
    usuario_id: 'usuario_id',
    partida_id: 'partida_id',
    created_at: 'created_at'
  };

  export type GuildMemberScalarFieldEnum = (typeof GuildMemberScalarFieldEnum)[keyof typeof GuildMemberScalarFieldEnum]


  export const JuegosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    veces_jugado: 'veces_jugado'
  };

  export type JuegosScalarFieldEnum = (typeof JuegosScalarFieldEnum)[keyof typeof JuegosScalarFieldEnum]


  export const PartidaScalarFieldEnum: {
    id: 'id',
    guild_id: 'guild_id',
    juego_id: 'juego_id',
    estado_partida: 'estado_partida',
    created_at: 'created_at'
  };

  export type PartidaScalarFieldEnum = (typeof PartidaScalarFieldEnum)[keyof typeof PartidaScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const GuildMemberOrderByRelevanceFieldEnum: {
    guild_id: 'guild_id',
    usuario_id: 'usuario_id'
  };

  export type GuildMemberOrderByRelevanceFieldEnum = (typeof GuildMemberOrderByRelevanceFieldEnum)[keyof typeof GuildMemberOrderByRelevanceFieldEnum]


  export const JuegosOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type JuegosOrderByRelevanceFieldEnum = (typeof JuegosOrderByRelevanceFieldEnum)[keyof typeof JuegosOrderByRelevanceFieldEnum]


  export const PartidaOrderByRelevanceFieldEnum: {
    guild_id: 'guild_id',
    estado_partida: 'estado_partida'
  };

  export type PartidaOrderByRelevanceFieldEnum = (typeof PartidaOrderByRelevanceFieldEnum)[keyof typeof PartidaOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


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
    discord_id?: StringFilter<"Usuario"> | string
    guilds?: GuildMemberListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    discord_id?: SortOrder
    guilds?: GuildMemberOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    discord_id?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    guilds?: GuildMemberListRelationFilter
  }, "discord_id">

  export type UsuarioOrderByWithAggregationInput = {
    discord_id?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    discord_id?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type GuildWhereInput = {
    AND?: GuildWhereInput | GuildWhereInput[]
    OR?: GuildWhereInput[]
    NOT?: GuildWhereInput | GuildWhereInput[]
    discord_id?: StringFilter<"Guild"> | string
    partidas?: PartidaListRelationFilter
    miembros?: GuildMemberListRelationFilter
  }

  export type GuildOrderByWithRelationInput = {
    discord_id?: SortOrder
    partidas?: PartidaOrderByRelationAggregateInput
    miembros?: GuildMemberOrderByRelationAggregateInput
    _relevance?: GuildOrderByRelevanceInput
  }

  export type GuildWhereUniqueInput = Prisma.AtLeast<{
    discord_id?: string
    AND?: GuildWhereInput | GuildWhereInput[]
    OR?: GuildWhereInput[]
    NOT?: GuildWhereInput | GuildWhereInput[]
    partidas?: PartidaListRelationFilter
    miembros?: GuildMemberListRelationFilter
  }, "discord_id">

  export type GuildOrderByWithAggregationInput = {
    discord_id?: SortOrder
    _count?: GuildCountOrderByAggregateInput
    _max?: GuildMaxOrderByAggregateInput
    _min?: GuildMinOrderByAggregateInput
  }

  export type GuildScalarWhereWithAggregatesInput = {
    AND?: GuildScalarWhereWithAggregatesInput | GuildScalarWhereWithAggregatesInput[]
    OR?: GuildScalarWhereWithAggregatesInput[]
    NOT?: GuildScalarWhereWithAggregatesInput | GuildScalarWhereWithAggregatesInput[]
    discord_id?: StringWithAggregatesFilter<"Guild"> | string
  }

  export type GuildMemberWhereInput = {
    AND?: GuildMemberWhereInput | GuildMemberWhereInput[]
    OR?: GuildMemberWhereInput[]
    NOT?: GuildMemberWhereInput | GuildMemberWhereInput[]
    guild_id?: StringFilter<"GuildMember"> | string
    usuario_id?: StringFilter<"GuildMember"> | string
    partida_id?: IntNullableFilter<"GuildMember"> | number | null
    created_at?: DateTimeFilter<"GuildMember"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    guild?: XOR<GuildScalarRelationFilter, GuildWhereInput>
    partida?: XOR<PartidaNullableScalarRelationFilter, PartidaWhereInput> | null
  }

  export type GuildMemberOrderByWithRelationInput = {
    guild_id?: SortOrder
    usuario_id?: SortOrder
    partida_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    guild?: GuildOrderByWithRelationInput
    partida?: PartidaOrderByWithRelationInput
    _relevance?: GuildMemberOrderByRelevanceInput
  }

  export type GuildMemberWhereUniqueInput = Prisma.AtLeast<{
    usuario_id_guild_id?: GuildMemberUsuario_idGuild_idCompoundUniqueInput
    AND?: GuildMemberWhereInput | GuildMemberWhereInput[]
    OR?: GuildMemberWhereInput[]
    NOT?: GuildMemberWhereInput | GuildMemberWhereInput[]
    guild_id?: StringFilter<"GuildMember"> | string
    usuario_id?: StringFilter<"GuildMember"> | string
    partida_id?: IntNullableFilter<"GuildMember"> | number | null
    created_at?: DateTimeFilter<"GuildMember"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    guild?: XOR<GuildScalarRelationFilter, GuildWhereInput>
    partida?: XOR<PartidaNullableScalarRelationFilter, PartidaWhereInput> | null
  }, "usuario_id_guild_id">

  export type GuildMemberOrderByWithAggregationInput = {
    guild_id?: SortOrder
    usuario_id?: SortOrder
    partida_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: GuildMemberCountOrderByAggregateInput
    _avg?: GuildMemberAvgOrderByAggregateInput
    _max?: GuildMemberMaxOrderByAggregateInput
    _min?: GuildMemberMinOrderByAggregateInput
    _sum?: GuildMemberSumOrderByAggregateInput
  }

  export type GuildMemberScalarWhereWithAggregatesInput = {
    AND?: GuildMemberScalarWhereWithAggregatesInput | GuildMemberScalarWhereWithAggregatesInput[]
    OR?: GuildMemberScalarWhereWithAggregatesInput[]
    NOT?: GuildMemberScalarWhereWithAggregatesInput | GuildMemberScalarWhereWithAggregatesInput[]
    guild_id?: StringWithAggregatesFilter<"GuildMember"> | string
    usuario_id?: StringWithAggregatesFilter<"GuildMember"> | string
    partida_id?: IntNullableWithAggregatesFilter<"GuildMember"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"GuildMember"> | Date | string
  }

  export type JuegosWhereInput = {
    AND?: JuegosWhereInput | JuegosWhereInput[]
    OR?: JuegosWhereInput[]
    NOT?: JuegosWhereInput | JuegosWhereInput[]
    id?: IntFilter<"Juegos"> | number
    nombre?: StringFilter<"Juegos"> | string
    veces_jugado?: IntFilter<"Juegos"> | number
    partidas?: PartidaListRelationFilter
  }

  export type JuegosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    veces_jugado?: SortOrder
    partidas?: PartidaOrderByRelationAggregateInput
    _relevance?: JuegosOrderByRelevanceInput
  }

  export type JuegosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JuegosWhereInput | JuegosWhereInput[]
    OR?: JuegosWhereInput[]
    NOT?: JuegosWhereInput | JuegosWhereInput[]
    nombre?: StringFilter<"Juegos"> | string
    veces_jugado?: IntFilter<"Juegos"> | number
    partidas?: PartidaListRelationFilter
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

  export type PartidaWhereInput = {
    AND?: PartidaWhereInput | PartidaWhereInput[]
    OR?: PartidaWhereInput[]
    NOT?: PartidaWhereInput | PartidaWhereInput[]
    id?: IntFilter<"Partida"> | number
    guild_id?: StringFilter<"Partida"> | string
    juego_id?: IntFilter<"Partida"> | number
    estado_partida?: StringFilter<"Partida"> | string
    created_at?: DateTimeFilter<"Partida"> | Date | string
    guild?: XOR<GuildScalarRelationFilter, GuildWhereInput>
    juego?: XOR<JuegosScalarRelationFilter, JuegosWhereInput>
    miembros?: GuildMemberListRelationFilter
  }

  export type PartidaOrderByWithRelationInput = {
    id?: SortOrder
    guild_id?: SortOrder
    juego_id?: SortOrder
    estado_partida?: SortOrder
    created_at?: SortOrder
    guild?: GuildOrderByWithRelationInput
    juego?: JuegosOrderByWithRelationInput
    miembros?: GuildMemberOrderByRelationAggregateInput
    _relevance?: PartidaOrderByRelevanceInput
  }

  export type PartidaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PartidaWhereInput | PartidaWhereInput[]
    OR?: PartidaWhereInput[]
    NOT?: PartidaWhereInput | PartidaWhereInput[]
    guild_id?: StringFilter<"Partida"> | string
    juego_id?: IntFilter<"Partida"> | number
    estado_partida?: StringFilter<"Partida"> | string
    created_at?: DateTimeFilter<"Partida"> | Date | string
    guild?: XOR<GuildScalarRelationFilter, GuildWhereInput>
    juego?: XOR<JuegosScalarRelationFilter, JuegosWhereInput>
    miembros?: GuildMemberListRelationFilter
  }, "id">

  export type PartidaOrderByWithAggregationInput = {
    id?: SortOrder
    guild_id?: SortOrder
    juego_id?: SortOrder
    estado_partida?: SortOrder
    created_at?: SortOrder
    _count?: PartidaCountOrderByAggregateInput
    _avg?: PartidaAvgOrderByAggregateInput
    _max?: PartidaMaxOrderByAggregateInput
    _min?: PartidaMinOrderByAggregateInput
    _sum?: PartidaSumOrderByAggregateInput
  }

  export type PartidaScalarWhereWithAggregatesInput = {
    AND?: PartidaScalarWhereWithAggregatesInput | PartidaScalarWhereWithAggregatesInput[]
    OR?: PartidaScalarWhereWithAggregatesInput[]
    NOT?: PartidaScalarWhereWithAggregatesInput | PartidaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Partida"> | number
    guild_id?: StringWithAggregatesFilter<"Partida"> | string
    juego_id?: IntWithAggregatesFilter<"Partida"> | number
    estado_partida?: StringWithAggregatesFilter<"Partida"> | string
    created_at?: DateTimeWithAggregatesFilter<"Partida"> | Date | string
  }

  export type UsuarioCreateInput = {
    discord_id: string
    guilds?: GuildMemberCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    discord_id: string
    guilds?: GuildMemberUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    discord_id?: StringFieldUpdateOperationsInput | string
    guilds?: GuildMemberUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    discord_id?: StringFieldUpdateOperationsInput | string
    guilds?: GuildMemberUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    discord_id: string
  }

  export type UsuarioUpdateManyMutationInput = {
    discord_id?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    discord_id?: StringFieldUpdateOperationsInput | string
  }

  export type GuildCreateInput = {
    discord_id: string
    partidas?: PartidaCreateNestedManyWithoutGuildInput
    miembros?: GuildMemberCreateNestedManyWithoutGuildInput
  }

  export type GuildUncheckedCreateInput = {
    discord_id: string
    partidas?: PartidaUncheckedCreateNestedManyWithoutGuildInput
    miembros?: GuildMemberUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildUpdateInput = {
    discord_id?: StringFieldUpdateOperationsInput | string
    partidas?: PartidaUpdateManyWithoutGuildNestedInput
    miembros?: GuildMemberUpdateManyWithoutGuildNestedInput
  }

  export type GuildUncheckedUpdateInput = {
    discord_id?: StringFieldUpdateOperationsInput | string
    partidas?: PartidaUncheckedUpdateManyWithoutGuildNestedInput
    miembros?: GuildMemberUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type GuildCreateManyInput = {
    discord_id: string
  }

  export type GuildUpdateManyMutationInput = {
    discord_id?: StringFieldUpdateOperationsInput | string
  }

  export type GuildUncheckedUpdateManyInput = {
    discord_id?: StringFieldUpdateOperationsInput | string
  }

  export type GuildMemberCreateInput = {
    created_at?: Date | string
    usuario: UsuarioCreateNestedOneWithoutGuildsInput
    guild: GuildCreateNestedOneWithoutMiembrosInput
    partida?: PartidaCreateNestedOneWithoutMiembrosInput
  }

  export type GuildMemberUncheckedCreateInput = {
    guild_id: string
    usuario_id: string
    partida_id?: number | null
    created_at?: Date | string
  }

  export type GuildMemberUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutGuildsNestedInput
    guild?: GuildUpdateOneRequiredWithoutMiembrosNestedInput
    partida?: PartidaUpdateOneWithoutMiembrosNestedInput
  }

  export type GuildMemberUncheckedUpdateInput = {
    guild_id?: StringFieldUpdateOperationsInput | string
    usuario_id?: StringFieldUpdateOperationsInput | string
    partida_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildMemberCreateManyInput = {
    guild_id: string
    usuario_id: string
    partida_id?: number | null
    created_at?: Date | string
  }

  export type GuildMemberUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildMemberUncheckedUpdateManyInput = {
    guild_id?: StringFieldUpdateOperationsInput | string
    usuario_id?: StringFieldUpdateOperationsInput | string
    partida_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JuegosCreateInput = {
    nombre: string
    veces_jugado?: number
    partidas?: PartidaCreateNestedManyWithoutJuegoInput
  }

  export type JuegosUncheckedCreateInput = {
    id?: number
    nombre: string
    veces_jugado?: number
    partidas?: PartidaUncheckedCreateNestedManyWithoutJuegoInput
  }

  export type JuegosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    veces_jugado?: IntFieldUpdateOperationsInput | number
    partidas?: PartidaUpdateManyWithoutJuegoNestedInput
  }

  export type JuegosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    veces_jugado?: IntFieldUpdateOperationsInput | number
    partidas?: PartidaUncheckedUpdateManyWithoutJuegoNestedInput
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

  export type PartidaCreateInput = {
    estado_partida?: string
    created_at?: Date | string
    guild: GuildCreateNestedOneWithoutPartidasInput
    juego: JuegosCreateNestedOneWithoutPartidasInput
    miembros?: GuildMemberCreateNestedManyWithoutPartidaInput
  }

  export type PartidaUncheckedCreateInput = {
    id?: number
    guild_id: string
    juego_id: number
    estado_partida?: string
    created_at?: Date | string
    miembros?: GuildMemberUncheckedCreateNestedManyWithoutPartidaInput
  }

  export type PartidaUpdateInput = {
    estado_partida?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildUpdateOneRequiredWithoutPartidasNestedInput
    juego?: JuegosUpdateOneRequiredWithoutPartidasNestedInput
    miembros?: GuildMemberUpdateManyWithoutPartidaNestedInput
  }

  export type PartidaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guild_id?: StringFieldUpdateOperationsInput | string
    juego_id?: IntFieldUpdateOperationsInput | number
    estado_partida?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    miembros?: GuildMemberUncheckedUpdateManyWithoutPartidaNestedInput
  }

  export type PartidaCreateManyInput = {
    id?: number
    guild_id: string
    juego_id: number
    estado_partida?: string
    created_at?: Date | string
  }

  export type PartidaUpdateManyMutationInput = {
    estado_partida?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guild_id?: StringFieldUpdateOperationsInput | string
    juego_id?: IntFieldUpdateOperationsInput | number
    estado_partida?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type GuildMemberListRelationFilter = {
    every?: GuildMemberWhereInput
    some?: GuildMemberWhereInput
    none?: GuildMemberWhereInput
  }

  export type GuildMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    discord_id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    discord_id?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    discord_id?: SortOrder
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

  export type PartidaListRelationFilter = {
    every?: PartidaWhereInput
    some?: PartidaWhereInput
    none?: PartidaWhereInput
  }

  export type PartidaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuildOrderByRelevanceInput = {
    fields: GuildOrderByRelevanceFieldEnum | GuildOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GuildCountOrderByAggregateInput = {
    discord_id?: SortOrder
  }

  export type GuildMaxOrderByAggregateInput = {
    discord_id?: SortOrder
  }

  export type GuildMinOrderByAggregateInput = {
    discord_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type GuildScalarRelationFilter = {
    is?: GuildWhereInput
    isNot?: GuildWhereInput
  }

  export type PartidaNullableScalarRelationFilter = {
    is?: PartidaWhereInput | null
    isNot?: PartidaWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GuildMemberOrderByRelevanceInput = {
    fields: GuildMemberOrderByRelevanceFieldEnum | GuildMemberOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GuildMemberUsuario_idGuild_idCompoundUniqueInput = {
    usuario_id: string
    guild_id: string
  }

  export type GuildMemberCountOrderByAggregateInput = {
    guild_id?: SortOrder
    usuario_id?: SortOrder
    partida_id?: SortOrder
    created_at?: SortOrder
  }

  export type GuildMemberAvgOrderByAggregateInput = {
    partida_id?: SortOrder
  }

  export type GuildMemberMaxOrderByAggregateInput = {
    guild_id?: SortOrder
    usuario_id?: SortOrder
    partida_id?: SortOrder
    created_at?: SortOrder
  }

  export type GuildMemberMinOrderByAggregateInput = {
    guild_id?: SortOrder
    usuario_id?: SortOrder
    partida_id?: SortOrder
    created_at?: SortOrder
  }

  export type GuildMemberSumOrderByAggregateInput = {
    partida_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type JuegosScalarRelationFilter = {
    is?: JuegosWhereInput
    isNot?: JuegosWhereInput
  }

  export type PartidaOrderByRelevanceInput = {
    fields: PartidaOrderByRelevanceFieldEnum | PartidaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PartidaCountOrderByAggregateInput = {
    id?: SortOrder
    guild_id?: SortOrder
    juego_id?: SortOrder
    estado_partida?: SortOrder
    created_at?: SortOrder
  }

  export type PartidaAvgOrderByAggregateInput = {
    id?: SortOrder
    juego_id?: SortOrder
  }

  export type PartidaMaxOrderByAggregateInput = {
    id?: SortOrder
    guild_id?: SortOrder
    juego_id?: SortOrder
    estado_partida?: SortOrder
    created_at?: SortOrder
  }

  export type PartidaMinOrderByAggregateInput = {
    id?: SortOrder
    guild_id?: SortOrder
    juego_id?: SortOrder
    estado_partida?: SortOrder
    created_at?: SortOrder
  }

  export type PartidaSumOrderByAggregateInput = {
    id?: SortOrder
    juego_id?: SortOrder
  }

  export type GuildMemberCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<GuildMemberCreateWithoutUsuarioInput, GuildMemberUncheckedCreateWithoutUsuarioInput> | GuildMemberCreateWithoutUsuarioInput[] | GuildMemberUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: GuildMemberCreateOrConnectWithoutUsuarioInput | GuildMemberCreateOrConnectWithoutUsuarioInput[]
    createMany?: GuildMemberCreateManyUsuarioInputEnvelope
    connect?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
  }

  export type GuildMemberUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<GuildMemberCreateWithoutUsuarioInput, GuildMemberUncheckedCreateWithoutUsuarioInput> | GuildMemberCreateWithoutUsuarioInput[] | GuildMemberUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: GuildMemberCreateOrConnectWithoutUsuarioInput | GuildMemberCreateOrConnectWithoutUsuarioInput[]
    createMany?: GuildMemberCreateManyUsuarioInputEnvelope
    connect?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type GuildMemberUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<GuildMemberCreateWithoutUsuarioInput, GuildMemberUncheckedCreateWithoutUsuarioInput> | GuildMemberCreateWithoutUsuarioInput[] | GuildMemberUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: GuildMemberCreateOrConnectWithoutUsuarioInput | GuildMemberCreateOrConnectWithoutUsuarioInput[]
    upsert?: GuildMemberUpsertWithWhereUniqueWithoutUsuarioInput | GuildMemberUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: GuildMemberCreateManyUsuarioInputEnvelope
    set?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
    disconnect?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
    delete?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
    connect?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
    update?: GuildMemberUpdateWithWhereUniqueWithoutUsuarioInput | GuildMemberUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: GuildMemberUpdateManyWithWhereWithoutUsuarioInput | GuildMemberUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: GuildMemberScalarWhereInput | GuildMemberScalarWhereInput[]
  }

  export type GuildMemberUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<GuildMemberCreateWithoutUsuarioInput, GuildMemberUncheckedCreateWithoutUsuarioInput> | GuildMemberCreateWithoutUsuarioInput[] | GuildMemberUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: GuildMemberCreateOrConnectWithoutUsuarioInput | GuildMemberCreateOrConnectWithoutUsuarioInput[]
    upsert?: GuildMemberUpsertWithWhereUniqueWithoutUsuarioInput | GuildMemberUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: GuildMemberCreateManyUsuarioInputEnvelope
    set?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
    disconnect?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
    delete?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
    connect?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
    update?: GuildMemberUpdateWithWhereUniqueWithoutUsuarioInput | GuildMemberUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: GuildMemberUpdateManyWithWhereWithoutUsuarioInput | GuildMemberUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: GuildMemberScalarWhereInput | GuildMemberScalarWhereInput[]
  }

  export type PartidaCreateNestedManyWithoutGuildInput = {
    create?: XOR<PartidaCreateWithoutGuildInput, PartidaUncheckedCreateWithoutGuildInput> | PartidaCreateWithoutGuildInput[] | PartidaUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: PartidaCreateOrConnectWithoutGuildInput | PartidaCreateOrConnectWithoutGuildInput[]
    createMany?: PartidaCreateManyGuildInputEnvelope
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
  }

  export type GuildMemberCreateNestedManyWithoutGuildInput = {
    create?: XOR<GuildMemberCreateWithoutGuildInput, GuildMemberUncheckedCreateWithoutGuildInput> | GuildMemberCreateWithoutGuildInput[] | GuildMemberUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: GuildMemberCreateOrConnectWithoutGuildInput | GuildMemberCreateOrConnectWithoutGuildInput[]
    createMany?: GuildMemberCreateManyGuildInputEnvelope
    connect?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
  }

  export type PartidaUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<PartidaCreateWithoutGuildInput, PartidaUncheckedCreateWithoutGuildInput> | PartidaCreateWithoutGuildInput[] | PartidaUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: PartidaCreateOrConnectWithoutGuildInput | PartidaCreateOrConnectWithoutGuildInput[]
    createMany?: PartidaCreateManyGuildInputEnvelope
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
  }

  export type GuildMemberUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<GuildMemberCreateWithoutGuildInput, GuildMemberUncheckedCreateWithoutGuildInput> | GuildMemberCreateWithoutGuildInput[] | GuildMemberUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: GuildMemberCreateOrConnectWithoutGuildInput | GuildMemberCreateOrConnectWithoutGuildInput[]
    createMany?: GuildMemberCreateManyGuildInputEnvelope
    connect?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
  }

  export type PartidaUpdateManyWithoutGuildNestedInput = {
    create?: XOR<PartidaCreateWithoutGuildInput, PartidaUncheckedCreateWithoutGuildInput> | PartidaCreateWithoutGuildInput[] | PartidaUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: PartidaCreateOrConnectWithoutGuildInput | PartidaCreateOrConnectWithoutGuildInput[]
    upsert?: PartidaUpsertWithWhereUniqueWithoutGuildInput | PartidaUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: PartidaCreateManyGuildInputEnvelope
    set?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    disconnect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    delete?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    update?: PartidaUpdateWithWhereUniqueWithoutGuildInput | PartidaUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: PartidaUpdateManyWithWhereWithoutGuildInput | PartidaUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: PartidaScalarWhereInput | PartidaScalarWhereInput[]
  }

  export type GuildMemberUpdateManyWithoutGuildNestedInput = {
    create?: XOR<GuildMemberCreateWithoutGuildInput, GuildMemberUncheckedCreateWithoutGuildInput> | GuildMemberCreateWithoutGuildInput[] | GuildMemberUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: GuildMemberCreateOrConnectWithoutGuildInput | GuildMemberCreateOrConnectWithoutGuildInput[]
    upsert?: GuildMemberUpsertWithWhereUniqueWithoutGuildInput | GuildMemberUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: GuildMemberCreateManyGuildInputEnvelope
    set?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
    disconnect?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
    delete?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
    connect?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
    update?: GuildMemberUpdateWithWhereUniqueWithoutGuildInput | GuildMemberUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: GuildMemberUpdateManyWithWhereWithoutGuildInput | GuildMemberUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: GuildMemberScalarWhereInput | GuildMemberScalarWhereInput[]
  }

  export type PartidaUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<PartidaCreateWithoutGuildInput, PartidaUncheckedCreateWithoutGuildInput> | PartidaCreateWithoutGuildInput[] | PartidaUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: PartidaCreateOrConnectWithoutGuildInput | PartidaCreateOrConnectWithoutGuildInput[]
    upsert?: PartidaUpsertWithWhereUniqueWithoutGuildInput | PartidaUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: PartidaCreateManyGuildInputEnvelope
    set?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    disconnect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    delete?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    update?: PartidaUpdateWithWhereUniqueWithoutGuildInput | PartidaUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: PartidaUpdateManyWithWhereWithoutGuildInput | PartidaUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: PartidaScalarWhereInput | PartidaScalarWhereInput[]
  }

  export type GuildMemberUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<GuildMemberCreateWithoutGuildInput, GuildMemberUncheckedCreateWithoutGuildInput> | GuildMemberCreateWithoutGuildInput[] | GuildMemberUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: GuildMemberCreateOrConnectWithoutGuildInput | GuildMemberCreateOrConnectWithoutGuildInput[]
    upsert?: GuildMemberUpsertWithWhereUniqueWithoutGuildInput | GuildMemberUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: GuildMemberCreateManyGuildInputEnvelope
    set?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
    disconnect?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
    delete?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
    connect?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
    update?: GuildMemberUpdateWithWhereUniqueWithoutGuildInput | GuildMemberUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: GuildMemberUpdateManyWithWhereWithoutGuildInput | GuildMemberUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: GuildMemberScalarWhereInput | GuildMemberScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutGuildsInput = {
    create?: XOR<UsuarioCreateWithoutGuildsInput, UsuarioUncheckedCreateWithoutGuildsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutGuildsInput
    connect?: UsuarioWhereUniqueInput
  }

  export type GuildCreateNestedOneWithoutMiembrosInput = {
    create?: XOR<GuildCreateWithoutMiembrosInput, GuildUncheckedCreateWithoutMiembrosInput>
    connectOrCreate?: GuildCreateOrConnectWithoutMiembrosInput
    connect?: GuildWhereUniqueInput
  }

  export type PartidaCreateNestedOneWithoutMiembrosInput = {
    create?: XOR<PartidaCreateWithoutMiembrosInput, PartidaUncheckedCreateWithoutMiembrosInput>
    connectOrCreate?: PartidaCreateOrConnectWithoutMiembrosInput
    connect?: PartidaWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuarioUpdateOneRequiredWithoutGuildsNestedInput = {
    create?: XOR<UsuarioCreateWithoutGuildsInput, UsuarioUncheckedCreateWithoutGuildsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutGuildsInput
    upsert?: UsuarioUpsertWithoutGuildsInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutGuildsInput, UsuarioUpdateWithoutGuildsInput>, UsuarioUncheckedUpdateWithoutGuildsInput>
  }

  export type GuildUpdateOneRequiredWithoutMiembrosNestedInput = {
    create?: XOR<GuildCreateWithoutMiembrosInput, GuildUncheckedCreateWithoutMiembrosInput>
    connectOrCreate?: GuildCreateOrConnectWithoutMiembrosInput
    upsert?: GuildUpsertWithoutMiembrosInput
    connect?: GuildWhereUniqueInput
    update?: XOR<XOR<GuildUpdateToOneWithWhereWithoutMiembrosInput, GuildUpdateWithoutMiembrosInput>, GuildUncheckedUpdateWithoutMiembrosInput>
  }

  export type PartidaUpdateOneWithoutMiembrosNestedInput = {
    create?: XOR<PartidaCreateWithoutMiembrosInput, PartidaUncheckedCreateWithoutMiembrosInput>
    connectOrCreate?: PartidaCreateOrConnectWithoutMiembrosInput
    upsert?: PartidaUpsertWithoutMiembrosInput
    disconnect?: PartidaWhereInput | boolean
    delete?: PartidaWhereInput | boolean
    connect?: PartidaWhereUniqueInput
    update?: XOR<XOR<PartidaUpdateToOneWithWhereWithoutMiembrosInput, PartidaUpdateWithoutMiembrosInput>, PartidaUncheckedUpdateWithoutMiembrosInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PartidaCreateNestedManyWithoutJuegoInput = {
    create?: XOR<PartidaCreateWithoutJuegoInput, PartidaUncheckedCreateWithoutJuegoInput> | PartidaCreateWithoutJuegoInput[] | PartidaUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: PartidaCreateOrConnectWithoutJuegoInput | PartidaCreateOrConnectWithoutJuegoInput[]
    createMany?: PartidaCreateManyJuegoInputEnvelope
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
  }

  export type PartidaUncheckedCreateNestedManyWithoutJuegoInput = {
    create?: XOR<PartidaCreateWithoutJuegoInput, PartidaUncheckedCreateWithoutJuegoInput> | PartidaCreateWithoutJuegoInput[] | PartidaUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: PartidaCreateOrConnectWithoutJuegoInput | PartidaCreateOrConnectWithoutJuegoInput[]
    createMany?: PartidaCreateManyJuegoInputEnvelope
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PartidaUpdateManyWithoutJuegoNestedInput = {
    create?: XOR<PartidaCreateWithoutJuegoInput, PartidaUncheckedCreateWithoutJuegoInput> | PartidaCreateWithoutJuegoInput[] | PartidaUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: PartidaCreateOrConnectWithoutJuegoInput | PartidaCreateOrConnectWithoutJuegoInput[]
    upsert?: PartidaUpsertWithWhereUniqueWithoutJuegoInput | PartidaUpsertWithWhereUniqueWithoutJuegoInput[]
    createMany?: PartidaCreateManyJuegoInputEnvelope
    set?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    disconnect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    delete?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    update?: PartidaUpdateWithWhereUniqueWithoutJuegoInput | PartidaUpdateWithWhereUniqueWithoutJuegoInput[]
    updateMany?: PartidaUpdateManyWithWhereWithoutJuegoInput | PartidaUpdateManyWithWhereWithoutJuegoInput[]
    deleteMany?: PartidaScalarWhereInput | PartidaScalarWhereInput[]
  }

  export type PartidaUncheckedUpdateManyWithoutJuegoNestedInput = {
    create?: XOR<PartidaCreateWithoutJuegoInput, PartidaUncheckedCreateWithoutJuegoInput> | PartidaCreateWithoutJuegoInput[] | PartidaUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: PartidaCreateOrConnectWithoutJuegoInput | PartidaCreateOrConnectWithoutJuegoInput[]
    upsert?: PartidaUpsertWithWhereUniqueWithoutJuegoInput | PartidaUpsertWithWhereUniqueWithoutJuegoInput[]
    createMany?: PartidaCreateManyJuegoInputEnvelope
    set?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    disconnect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    delete?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    update?: PartidaUpdateWithWhereUniqueWithoutJuegoInput | PartidaUpdateWithWhereUniqueWithoutJuegoInput[]
    updateMany?: PartidaUpdateManyWithWhereWithoutJuegoInput | PartidaUpdateManyWithWhereWithoutJuegoInput[]
    deleteMany?: PartidaScalarWhereInput | PartidaScalarWhereInput[]
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

  export type GuildMemberCreateNestedManyWithoutPartidaInput = {
    create?: XOR<GuildMemberCreateWithoutPartidaInput, GuildMemberUncheckedCreateWithoutPartidaInput> | GuildMemberCreateWithoutPartidaInput[] | GuildMemberUncheckedCreateWithoutPartidaInput[]
    connectOrCreate?: GuildMemberCreateOrConnectWithoutPartidaInput | GuildMemberCreateOrConnectWithoutPartidaInput[]
    createMany?: GuildMemberCreateManyPartidaInputEnvelope
    connect?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
  }

  export type GuildMemberUncheckedCreateNestedManyWithoutPartidaInput = {
    create?: XOR<GuildMemberCreateWithoutPartidaInput, GuildMemberUncheckedCreateWithoutPartidaInput> | GuildMemberCreateWithoutPartidaInput[] | GuildMemberUncheckedCreateWithoutPartidaInput[]
    connectOrCreate?: GuildMemberCreateOrConnectWithoutPartidaInput | GuildMemberCreateOrConnectWithoutPartidaInput[]
    createMany?: GuildMemberCreateManyPartidaInputEnvelope
    connect?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
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

  export type GuildMemberUpdateManyWithoutPartidaNestedInput = {
    create?: XOR<GuildMemberCreateWithoutPartidaInput, GuildMemberUncheckedCreateWithoutPartidaInput> | GuildMemberCreateWithoutPartidaInput[] | GuildMemberUncheckedCreateWithoutPartidaInput[]
    connectOrCreate?: GuildMemberCreateOrConnectWithoutPartidaInput | GuildMemberCreateOrConnectWithoutPartidaInput[]
    upsert?: GuildMemberUpsertWithWhereUniqueWithoutPartidaInput | GuildMemberUpsertWithWhereUniqueWithoutPartidaInput[]
    createMany?: GuildMemberCreateManyPartidaInputEnvelope
    set?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
    disconnect?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
    delete?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
    connect?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
    update?: GuildMemberUpdateWithWhereUniqueWithoutPartidaInput | GuildMemberUpdateWithWhereUniqueWithoutPartidaInput[]
    updateMany?: GuildMemberUpdateManyWithWhereWithoutPartidaInput | GuildMemberUpdateManyWithWhereWithoutPartidaInput[]
    deleteMany?: GuildMemberScalarWhereInput | GuildMemberScalarWhereInput[]
  }

  export type GuildMemberUncheckedUpdateManyWithoutPartidaNestedInput = {
    create?: XOR<GuildMemberCreateWithoutPartidaInput, GuildMemberUncheckedCreateWithoutPartidaInput> | GuildMemberCreateWithoutPartidaInput[] | GuildMemberUncheckedCreateWithoutPartidaInput[]
    connectOrCreate?: GuildMemberCreateOrConnectWithoutPartidaInput | GuildMemberCreateOrConnectWithoutPartidaInput[]
    upsert?: GuildMemberUpsertWithWhereUniqueWithoutPartidaInput | GuildMemberUpsertWithWhereUniqueWithoutPartidaInput[]
    createMany?: GuildMemberCreateManyPartidaInputEnvelope
    set?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
    disconnect?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
    delete?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
    connect?: GuildMemberWhereUniqueInput | GuildMemberWhereUniqueInput[]
    update?: GuildMemberUpdateWithWhereUniqueWithoutPartidaInput | GuildMemberUpdateWithWhereUniqueWithoutPartidaInput[]
    updateMany?: GuildMemberUpdateManyWithWhereWithoutPartidaInput | GuildMemberUpdateManyWithWhereWithoutPartidaInput[]
    deleteMany?: GuildMemberScalarWhereInput | GuildMemberScalarWhereInput[]
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type GuildMemberCreateWithoutUsuarioInput = {
    created_at?: Date | string
    guild: GuildCreateNestedOneWithoutMiembrosInput
    partida?: PartidaCreateNestedOneWithoutMiembrosInput
  }

  export type GuildMemberUncheckedCreateWithoutUsuarioInput = {
    guild_id: string
    partida_id?: number | null
    created_at?: Date | string
  }

  export type GuildMemberCreateOrConnectWithoutUsuarioInput = {
    where: GuildMemberWhereUniqueInput
    create: XOR<GuildMemberCreateWithoutUsuarioInput, GuildMemberUncheckedCreateWithoutUsuarioInput>
  }

  export type GuildMemberCreateManyUsuarioInputEnvelope = {
    data: GuildMemberCreateManyUsuarioInput | GuildMemberCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type GuildMemberUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: GuildMemberWhereUniqueInput
    update: XOR<GuildMemberUpdateWithoutUsuarioInput, GuildMemberUncheckedUpdateWithoutUsuarioInput>
    create: XOR<GuildMemberCreateWithoutUsuarioInput, GuildMemberUncheckedCreateWithoutUsuarioInput>
  }

  export type GuildMemberUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: GuildMemberWhereUniqueInput
    data: XOR<GuildMemberUpdateWithoutUsuarioInput, GuildMemberUncheckedUpdateWithoutUsuarioInput>
  }

  export type GuildMemberUpdateManyWithWhereWithoutUsuarioInput = {
    where: GuildMemberScalarWhereInput
    data: XOR<GuildMemberUpdateManyMutationInput, GuildMemberUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type GuildMemberScalarWhereInput = {
    AND?: GuildMemberScalarWhereInput | GuildMemberScalarWhereInput[]
    OR?: GuildMemberScalarWhereInput[]
    NOT?: GuildMemberScalarWhereInput | GuildMemberScalarWhereInput[]
    guild_id?: StringFilter<"GuildMember"> | string
    usuario_id?: StringFilter<"GuildMember"> | string
    partida_id?: IntNullableFilter<"GuildMember"> | number | null
    created_at?: DateTimeFilter<"GuildMember"> | Date | string
  }

  export type PartidaCreateWithoutGuildInput = {
    estado_partida?: string
    created_at?: Date | string
    juego: JuegosCreateNestedOneWithoutPartidasInput
    miembros?: GuildMemberCreateNestedManyWithoutPartidaInput
  }

  export type PartidaUncheckedCreateWithoutGuildInput = {
    id?: number
    juego_id: number
    estado_partida?: string
    created_at?: Date | string
    miembros?: GuildMemberUncheckedCreateNestedManyWithoutPartidaInput
  }

  export type PartidaCreateOrConnectWithoutGuildInput = {
    where: PartidaWhereUniqueInput
    create: XOR<PartidaCreateWithoutGuildInput, PartidaUncheckedCreateWithoutGuildInput>
  }

  export type PartidaCreateManyGuildInputEnvelope = {
    data: PartidaCreateManyGuildInput | PartidaCreateManyGuildInput[]
    skipDuplicates?: boolean
  }

  export type GuildMemberCreateWithoutGuildInput = {
    created_at?: Date | string
    usuario: UsuarioCreateNestedOneWithoutGuildsInput
    partida?: PartidaCreateNestedOneWithoutMiembrosInput
  }

  export type GuildMemberUncheckedCreateWithoutGuildInput = {
    usuario_id: string
    partida_id?: number | null
    created_at?: Date | string
  }

  export type GuildMemberCreateOrConnectWithoutGuildInput = {
    where: GuildMemberWhereUniqueInput
    create: XOR<GuildMemberCreateWithoutGuildInput, GuildMemberUncheckedCreateWithoutGuildInput>
  }

  export type GuildMemberCreateManyGuildInputEnvelope = {
    data: GuildMemberCreateManyGuildInput | GuildMemberCreateManyGuildInput[]
    skipDuplicates?: boolean
  }

  export type PartidaUpsertWithWhereUniqueWithoutGuildInput = {
    where: PartidaWhereUniqueInput
    update: XOR<PartidaUpdateWithoutGuildInput, PartidaUncheckedUpdateWithoutGuildInput>
    create: XOR<PartidaCreateWithoutGuildInput, PartidaUncheckedCreateWithoutGuildInput>
  }

  export type PartidaUpdateWithWhereUniqueWithoutGuildInput = {
    where: PartidaWhereUniqueInput
    data: XOR<PartidaUpdateWithoutGuildInput, PartidaUncheckedUpdateWithoutGuildInput>
  }

  export type PartidaUpdateManyWithWhereWithoutGuildInput = {
    where: PartidaScalarWhereInput
    data: XOR<PartidaUpdateManyMutationInput, PartidaUncheckedUpdateManyWithoutGuildInput>
  }

  export type PartidaScalarWhereInput = {
    AND?: PartidaScalarWhereInput | PartidaScalarWhereInput[]
    OR?: PartidaScalarWhereInput[]
    NOT?: PartidaScalarWhereInput | PartidaScalarWhereInput[]
    id?: IntFilter<"Partida"> | number
    guild_id?: StringFilter<"Partida"> | string
    juego_id?: IntFilter<"Partida"> | number
    estado_partida?: StringFilter<"Partida"> | string
    created_at?: DateTimeFilter<"Partida"> | Date | string
  }

  export type GuildMemberUpsertWithWhereUniqueWithoutGuildInput = {
    where: GuildMemberWhereUniqueInput
    update: XOR<GuildMemberUpdateWithoutGuildInput, GuildMemberUncheckedUpdateWithoutGuildInput>
    create: XOR<GuildMemberCreateWithoutGuildInput, GuildMemberUncheckedCreateWithoutGuildInput>
  }

  export type GuildMemberUpdateWithWhereUniqueWithoutGuildInput = {
    where: GuildMemberWhereUniqueInput
    data: XOR<GuildMemberUpdateWithoutGuildInput, GuildMemberUncheckedUpdateWithoutGuildInput>
  }

  export type GuildMemberUpdateManyWithWhereWithoutGuildInput = {
    where: GuildMemberScalarWhereInput
    data: XOR<GuildMemberUpdateManyMutationInput, GuildMemberUncheckedUpdateManyWithoutGuildInput>
  }

  export type UsuarioCreateWithoutGuildsInput = {
    discord_id: string
  }

  export type UsuarioUncheckedCreateWithoutGuildsInput = {
    discord_id: string
  }

  export type UsuarioCreateOrConnectWithoutGuildsInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutGuildsInput, UsuarioUncheckedCreateWithoutGuildsInput>
  }

  export type GuildCreateWithoutMiembrosInput = {
    discord_id: string
    partidas?: PartidaCreateNestedManyWithoutGuildInput
  }

  export type GuildUncheckedCreateWithoutMiembrosInput = {
    discord_id: string
    partidas?: PartidaUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildCreateOrConnectWithoutMiembrosInput = {
    where: GuildWhereUniqueInput
    create: XOR<GuildCreateWithoutMiembrosInput, GuildUncheckedCreateWithoutMiembrosInput>
  }

  export type PartidaCreateWithoutMiembrosInput = {
    estado_partida?: string
    created_at?: Date | string
    guild: GuildCreateNestedOneWithoutPartidasInput
    juego: JuegosCreateNestedOneWithoutPartidasInput
  }

  export type PartidaUncheckedCreateWithoutMiembrosInput = {
    id?: number
    guild_id: string
    juego_id: number
    estado_partida?: string
    created_at?: Date | string
  }

  export type PartidaCreateOrConnectWithoutMiembrosInput = {
    where: PartidaWhereUniqueInput
    create: XOR<PartidaCreateWithoutMiembrosInput, PartidaUncheckedCreateWithoutMiembrosInput>
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
    discord_id?: StringFieldUpdateOperationsInput | string
  }

  export type GuildUpsertWithoutMiembrosInput = {
    update: XOR<GuildUpdateWithoutMiembrosInput, GuildUncheckedUpdateWithoutMiembrosInput>
    create: XOR<GuildCreateWithoutMiembrosInput, GuildUncheckedCreateWithoutMiembrosInput>
    where?: GuildWhereInput
  }

  export type GuildUpdateToOneWithWhereWithoutMiembrosInput = {
    where?: GuildWhereInput
    data: XOR<GuildUpdateWithoutMiembrosInput, GuildUncheckedUpdateWithoutMiembrosInput>
  }

  export type GuildUpdateWithoutMiembrosInput = {
    discord_id?: StringFieldUpdateOperationsInput | string
    partidas?: PartidaUpdateManyWithoutGuildNestedInput
  }

  export type GuildUncheckedUpdateWithoutMiembrosInput = {
    discord_id?: StringFieldUpdateOperationsInput | string
    partidas?: PartidaUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type PartidaUpsertWithoutMiembrosInput = {
    update: XOR<PartidaUpdateWithoutMiembrosInput, PartidaUncheckedUpdateWithoutMiembrosInput>
    create: XOR<PartidaCreateWithoutMiembrosInput, PartidaUncheckedCreateWithoutMiembrosInput>
    where?: PartidaWhereInput
  }

  export type PartidaUpdateToOneWithWhereWithoutMiembrosInput = {
    where?: PartidaWhereInput
    data: XOR<PartidaUpdateWithoutMiembrosInput, PartidaUncheckedUpdateWithoutMiembrosInput>
  }

  export type PartidaUpdateWithoutMiembrosInput = {
    estado_partida?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildUpdateOneRequiredWithoutPartidasNestedInput
    juego?: JuegosUpdateOneRequiredWithoutPartidasNestedInput
  }

  export type PartidaUncheckedUpdateWithoutMiembrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    guild_id?: StringFieldUpdateOperationsInput | string
    juego_id?: IntFieldUpdateOperationsInput | number
    estado_partida?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidaCreateWithoutJuegoInput = {
    estado_partida?: string
    created_at?: Date | string
    guild: GuildCreateNestedOneWithoutPartidasInput
    miembros?: GuildMemberCreateNestedManyWithoutPartidaInput
  }

  export type PartidaUncheckedCreateWithoutJuegoInput = {
    id?: number
    guild_id: string
    estado_partida?: string
    created_at?: Date | string
    miembros?: GuildMemberUncheckedCreateNestedManyWithoutPartidaInput
  }

  export type PartidaCreateOrConnectWithoutJuegoInput = {
    where: PartidaWhereUniqueInput
    create: XOR<PartidaCreateWithoutJuegoInput, PartidaUncheckedCreateWithoutJuegoInput>
  }

  export type PartidaCreateManyJuegoInputEnvelope = {
    data: PartidaCreateManyJuegoInput | PartidaCreateManyJuegoInput[]
    skipDuplicates?: boolean
  }

  export type PartidaUpsertWithWhereUniqueWithoutJuegoInput = {
    where: PartidaWhereUniqueInput
    update: XOR<PartidaUpdateWithoutJuegoInput, PartidaUncheckedUpdateWithoutJuegoInput>
    create: XOR<PartidaCreateWithoutJuegoInput, PartidaUncheckedCreateWithoutJuegoInput>
  }

  export type PartidaUpdateWithWhereUniqueWithoutJuegoInput = {
    where: PartidaWhereUniqueInput
    data: XOR<PartidaUpdateWithoutJuegoInput, PartidaUncheckedUpdateWithoutJuegoInput>
  }

  export type PartidaUpdateManyWithWhereWithoutJuegoInput = {
    where: PartidaScalarWhereInput
    data: XOR<PartidaUpdateManyMutationInput, PartidaUncheckedUpdateManyWithoutJuegoInput>
  }

  export type GuildCreateWithoutPartidasInput = {
    discord_id: string
    miembros?: GuildMemberCreateNestedManyWithoutGuildInput
  }

  export type GuildUncheckedCreateWithoutPartidasInput = {
    discord_id: string
    miembros?: GuildMemberUncheckedCreateNestedManyWithoutGuildInput
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

  export type GuildMemberCreateWithoutPartidaInput = {
    created_at?: Date | string
    usuario: UsuarioCreateNestedOneWithoutGuildsInput
    guild: GuildCreateNestedOneWithoutMiembrosInput
  }

  export type GuildMemberUncheckedCreateWithoutPartidaInput = {
    guild_id: string
    usuario_id: string
    created_at?: Date | string
  }

  export type GuildMemberCreateOrConnectWithoutPartidaInput = {
    where: GuildMemberWhereUniqueInput
    create: XOR<GuildMemberCreateWithoutPartidaInput, GuildMemberUncheckedCreateWithoutPartidaInput>
  }

  export type GuildMemberCreateManyPartidaInputEnvelope = {
    data: GuildMemberCreateManyPartidaInput | GuildMemberCreateManyPartidaInput[]
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
    miembros?: GuildMemberUpdateManyWithoutGuildNestedInput
  }

  export type GuildUncheckedUpdateWithoutPartidasInput = {
    discord_id?: StringFieldUpdateOperationsInput | string
    miembros?: GuildMemberUncheckedUpdateManyWithoutGuildNestedInput
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

  export type GuildMemberUpsertWithWhereUniqueWithoutPartidaInput = {
    where: GuildMemberWhereUniqueInput
    update: XOR<GuildMemberUpdateWithoutPartidaInput, GuildMemberUncheckedUpdateWithoutPartidaInput>
    create: XOR<GuildMemberCreateWithoutPartidaInput, GuildMemberUncheckedCreateWithoutPartidaInput>
  }

  export type GuildMemberUpdateWithWhereUniqueWithoutPartidaInput = {
    where: GuildMemberWhereUniqueInput
    data: XOR<GuildMemberUpdateWithoutPartidaInput, GuildMemberUncheckedUpdateWithoutPartidaInput>
  }

  export type GuildMemberUpdateManyWithWhereWithoutPartidaInput = {
    where: GuildMemberScalarWhereInput
    data: XOR<GuildMemberUpdateManyMutationInput, GuildMemberUncheckedUpdateManyWithoutPartidaInput>
  }

  export type GuildMemberCreateManyUsuarioInput = {
    guild_id: string
    partida_id?: number | null
    created_at?: Date | string
  }

  export type GuildMemberUpdateWithoutUsuarioInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildUpdateOneRequiredWithoutMiembrosNestedInput
    partida?: PartidaUpdateOneWithoutMiembrosNestedInput
  }

  export type GuildMemberUncheckedUpdateWithoutUsuarioInput = {
    guild_id?: StringFieldUpdateOperationsInput | string
    partida_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildMemberUncheckedUpdateManyWithoutUsuarioInput = {
    guild_id?: StringFieldUpdateOperationsInput | string
    partida_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidaCreateManyGuildInput = {
    id?: number
    juego_id: number
    estado_partida?: string
    created_at?: Date | string
  }

  export type GuildMemberCreateManyGuildInput = {
    usuario_id: string
    partida_id?: number | null
    created_at?: Date | string
  }

  export type PartidaUpdateWithoutGuildInput = {
    estado_partida?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    juego?: JuegosUpdateOneRequiredWithoutPartidasNestedInput
    miembros?: GuildMemberUpdateManyWithoutPartidaNestedInput
  }

  export type PartidaUncheckedUpdateWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    juego_id?: IntFieldUpdateOperationsInput | number
    estado_partida?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    miembros?: GuildMemberUncheckedUpdateManyWithoutPartidaNestedInput
  }

  export type PartidaUncheckedUpdateManyWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    juego_id?: IntFieldUpdateOperationsInput | number
    estado_partida?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildMemberUpdateWithoutGuildInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutGuildsNestedInput
    partida?: PartidaUpdateOneWithoutMiembrosNestedInput
  }

  export type GuildMemberUncheckedUpdateWithoutGuildInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    partida_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildMemberUncheckedUpdateManyWithoutGuildInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    partida_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidaCreateManyJuegoInput = {
    id?: number
    guild_id: string
    estado_partida?: string
    created_at?: Date | string
  }

  export type PartidaUpdateWithoutJuegoInput = {
    estado_partida?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildUpdateOneRequiredWithoutPartidasNestedInput
    miembros?: GuildMemberUpdateManyWithoutPartidaNestedInput
  }

  export type PartidaUncheckedUpdateWithoutJuegoInput = {
    id?: IntFieldUpdateOperationsInput | number
    guild_id?: StringFieldUpdateOperationsInput | string
    estado_partida?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    miembros?: GuildMemberUncheckedUpdateManyWithoutPartidaNestedInput
  }

  export type PartidaUncheckedUpdateManyWithoutJuegoInput = {
    id?: IntFieldUpdateOperationsInput | number
    guild_id?: StringFieldUpdateOperationsInput | string
    estado_partida?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildMemberCreateManyPartidaInput = {
    guild_id: string
    usuario_id: string
    created_at?: Date | string
  }

  export type GuildMemberUpdateWithoutPartidaInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutGuildsNestedInput
    guild?: GuildUpdateOneRequiredWithoutMiembrosNestedInput
  }

  export type GuildMemberUncheckedUpdateWithoutPartidaInput = {
    guild_id?: StringFieldUpdateOperationsInput | string
    usuario_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildMemberUncheckedUpdateManyWithoutPartidaInput = {
    guild_id?: StringFieldUpdateOperationsInput | string
    usuario_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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