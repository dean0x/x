interface Command {
  cmd: string;
  desc: string;
}

interface CommandTableProps {
  commands: Command[];
}

export function CommandTable({ commands }: CommandTableProps) {
  return (
    <div className="command-table-wrapper">
      <table className="command-table">
        <thead>
          <tr>
            <th>Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {commands.map((c) => (
            <tr key={c.cmd}>
              <td className="command-table-cmd">{c.cmd}</td>
              <td className="command-table-desc">{c.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
