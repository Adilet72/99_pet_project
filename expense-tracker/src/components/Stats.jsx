import "../styles/Stats.scss";

const Stats = ({ expenses }) => {
    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

    const categories = expenses.reduce((acc, exp) => {
        acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
        return acc;
    }, {});

    return (
        <div className="stats">
            <h2>📊 Статистика</h2>
            <p>Общая сумма: {total} сом</p>
            <ul>
                {Object.entries(categories).map(([cat, sum]) => (
                    <li key={cat}>
                        {cat}: {sum} сом
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Stats;
