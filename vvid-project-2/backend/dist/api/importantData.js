"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateImportantData = exports.getImportantData = void 0;
const db_1 = __importDefault(require("../config/db"));
/**
 * Получает текущее значение year_data из таблицы importantdata.
 * Если таблицы или записи нет — создаёт запись со значением 2025.
 */
const getImportantData = async (req, res) => {
    try {
        // Получаем текущее значение year_data
        const rows = await (0, db_1.default) `
      SELECT year_data FROM importantdata LIMIT 1
    `;
        if (rows.length === 0) {
            const newRows = await (0, db_1.default) `
        INSERT INTO importantdata (year_data)
        VALUES (2025)
        RETURNING year_data
      `;
            return res.json({ year_data: newRows[0].year_data });
        }
        res.json({ year_data: rows[0].year_data });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            error: 'Database error',
            details: error instanceof Error ? error.message : String(error),
        });
    }
};
exports.getImportantData = getImportantData;
/**
 * Обновляет значение year_data в таблице importantdata.
 * Поддерживает транзакции.
 */
const updateImportantData = async (req, res) => {
    try {
        // Начинаем транзакцию
        await db_1.default.begin(async (sql) => {
            const { year_data } = req.body;
            const yearToUpdate = year_data ?? 2025;
            // Получаем текущую запись с блокировкой для обновления
            const current = await sql `
        SELECT year_data FROM importantdata LIMIT 1 FOR UPDATE
      `;
            let result;
            if (current.length === 0) {
                // Если записей нет — создаём новую
                result = await sql `
          INSERT INTO importantdata (year_data)
          VALUES (${yearToUpdate})
          RETURNING year_data
        `;
            }
            else {
                // Иначе — обновляем существующую
                result = await sql `
          UPDATE importantdata
          SET year_data = ${yearToUpdate}
          WHERE ctid IN (
            SELECT ctid FROM importantdata LIMIT 1
          )
          RETURNING year_data
        `;
            }
            res.json({ year_data: result[0].year_data });
        });
    }
    catch (error) {
        console.error('Update error:', error);
        res.status(500).json({
            error: 'Database error',
            details: error instanceof Error ? error.message : String(error),
        });
    }
};
exports.updateImportantData = updateImportantData;
