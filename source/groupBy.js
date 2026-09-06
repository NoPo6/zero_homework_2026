'use strict';

/**
 * Группирует массив объектов по значению указанного свойства
 * @param {Array<Object>} array - массив объектов
 * @param {string} key - имя свойства для группировки
 * @returns {Object.<string, Array<Object>>} объект с группами
 * @example
 * const data = [
 *   { id: 1, category: 'fruit', name: 'apple' },
 *   { id: 2, category: 'fruit', name: 'banana' },
 *   { id: 3, category: 'vegetable', name: 'carrot' }
 * ];
 * groupBy(data, 'category');
 * // Результат:
 * // {
 * //   fruit: [
 * //     { id: 1, category: 'fruit', name: 'apple' },
 * //     { id: 2, category: 'fruit', name: 'banana' }
 * //   ],
 * //   vegetable: [
 * //     { id: 3, category: 'vegetable', name: 'carrot' }
 * //   ]
 * // }
 */
function groupBy(array, key) {
    if (array.length === 0) {
        return {};
    }
    const result = {};
    for (const dict of array) {
        const groupKey = dict[key];
        if (Object.hasOwn(result, groupKey)) {
            result[groupKey].push(dict);
        } else {
            result[groupKey] = [dict];
        }
    }
    return result;
}