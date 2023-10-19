import tcss from './transaction.module.css';

export const Transactions = ({ dataTransactions }) => {
  return (
    <table className={tcss.transaction_history}>
      <thead>
        <tr>
          <th className={tcss.header}>Type</th>
          <th className={tcss.header}>Amount</th>
          <th className={tcss.header}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {dataTransactions.map(({ id, type, amount, currency }, index) => (
          <tr
            key={id}
            className={index % 2 === 0 ? tcss.table_row_even : tcss.table_row}
          >
            <td className={tcss.table_cell}>{type}</td>
            <td className={tcss.table_cell}>{amount}</td>
            <td className={tcss.table_cell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
