interface DataTableColumn {
  key: string;
  header: string;
  highlight?: 'primary' | 'accent';
  hideOnMobile?: boolean;
}

interface DataTableProps {
  columns: DataTableColumn[];
  rows: Record<string, string>[];
  title?: string;
}

export function DataTable({ columns, rows, title }: DataTableProps) {
  return (
    <div className="data-table-wrapper">
      {title && (
        <div className="data-table-header">
          <span className="data-table-title">{title}</span>
        </div>
      )}
      <div className="data-table-body">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} className={col.hideOnMobile ? 'data-col-hide-mobile' : undefined}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={[
                    col.highlight === 'primary' ? 'data-cell-primary' : col.highlight === 'accent' ? 'data-cell-accent' : '',
                    col.hideOnMobile ? 'data-col-hide-mobile' : '',
                  ].filter(Boolean).join(' ') || undefined}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
