import React from 'react';

const Table = ({ columns, data }) => {
  const skipCells = {}; // rowSpan과 colSpan을 처리하기 위한 skip 정보 저장

  return (
    <table>
      <colgroup>
        {columns.map((col, index) => (
          <col key={index} style={{ width: col.width }} />
        ))}
      </colgroup>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th
              key={index}
              colSpan={col.colSpan || 1}
              style={{ display: col.display || undefined }}
            >
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col) => {
              const cellData = row[col.key];

              if (cellData?.rowSpan || cellData?.colSpan) {
                const spanKey = `${col.key}-${rowIndex}`;

                if (skipCells[spanKey]) return null;

                if (cellData.rowSpan) {
                  for (let i = 1; i < cellData.rowSpan; i++) {
                    skipCells[`${col.key}-${rowIndex + i}`] = true;
                  }
                }

                if (cellData.colSpan) {
                  for (let i = 1; i < cellData.colSpan; i++) {
                    skipCells[`${columns[columns.indexOf(col) + i].key}-${rowIndex}`] = true;
                  }
                }

                return (
                  <td
                    key={col.key}
                    rowSpan={cellData.rowSpan}
                    colSpan={cellData.colSpan}
                    style={{ textAlign: cellData.align || col.align || 'left' }}
                  >
                    {cellData.value}
                  </td>
                );
              }

              if (!skipCells[`${col.key}-${rowIndex}`]) {
                return (
                  <td
                    key={col.key}
                    style={{ textAlign: cellData.align || col.align || 'left' }}
                  >
                    {cellData}
                  </td>
                );
              }

              return null;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
