"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postgres_1 = __importDefault(require("postgres"));
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error('DATABASE_URL is not set in environment variables');
}
const sql = (0, postgres_1.default)(connectionString, {
    ssl: { rejectUnauthorized: false } // Важно для Supabase!
});
exports.default = sql;
