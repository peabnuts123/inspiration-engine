import { computed } from '@ember/object';
import { get } from '@ember/object';

export default function foldArray(key_array, key_rows, key_columns) {
  return computed(key_array, key_columns, function () {
    const collection = get(this, key_array);
    const numRows = get(this, key_rows);
    const numColumns = get(this, key_columns);

    let rows = [];

    for (let i = 0; i < numRows; i++) {
      let row = collection.slice(i * numColumns, (i + 1) * numColumns);

      if (row.length > 0) {
        rows.push(row);
      }
    }

    return rows;
  });
}
