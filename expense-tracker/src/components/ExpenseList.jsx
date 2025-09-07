import "../styles/ExpenseList.scss";

const ExpenseList = ({ expenses, onDelete }) => {
    if (expenses.length === 0) {
        return <p className="empty">Нет расходов</p>;
    }

    return (
        <table className="expense-list">
            <thead>
                <tr>
                    <th>Сумма</th>
                    <th>Категория</th>
                    <th>Дата</th>
                    <th>Описание</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((exp) => (
                    <tr key={exp.id}>
                        <td>{exp.amount} сом</td>
                        <td>{exp.category}</td>
                        <td>{exp.date}</td>
                        <td>{exp.description}</td>
                        <td>
                            <button onClick={() => onDelete(exp.id)}>❌</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;
