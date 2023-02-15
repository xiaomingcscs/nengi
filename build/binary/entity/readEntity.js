"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryExt_1 = __importDefault(require("../../common/binary/BinaryExt"));
function readEntity(reader, context) {
    //console.log('entered readEntity')
    const ntype = reader.readUInt8();
    //console.log('type was', ntype)
    const nschema = context.getSchema(ntype);
    const entity = {};
    entity.ntype = ntype;
    for (let i = 1; i < nschema.keys.length; i++) {
        const propData = nschema.keys[i];
        const binaryUtil = (0, BinaryExt_1.default)(propData.type);
        const readerFnStr = binaryUtil.read;
        // @ts-ignore
        const value = reader[readerFnStr]();
        // @ts-ignore
        entity[propData.prop] = value;
        //console.log('value was', value, { propData})
    }
    return entity;
}
exports.default = readEntity;