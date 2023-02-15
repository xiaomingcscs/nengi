import { Schema } from './binary/schema/Schema';
declare class Context {
    /**
     * user-defined network schemas
     */
    schemas: Map<number, Schema>;
    /**
     * schemas internal to nengi
     */
    engineSchemas: Map<number, Schema>;
    constructor();
    register(ntype: number, schema: Schema): void;
    getSchema(ntype: number): Schema | undefined;
    getEngineSchema(ntype: number): Schema | undefined;
}
export { Context };