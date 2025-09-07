import { useState } from "react";
import "../styles/ExpenseForm.scss";

const ExpenseForm = ({ onAdd }) => {
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Еда");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!amount || !date) return;

        const newExpense = {
            id: Date.now(),
            amount: parseFloat(amount),
            category,
            date,
            description,
        };

        onAdd(newExpense);

        setAmount("");
        setCategory("Еда");
        setDate("");
        setDescription("");
    };

    return (
        <form className="expense-form" onSubmit={handleSubmit}>
            <input
                type="number"
                placeholder="Сумма"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>Еда</option>
                <option>Транспорт</option>
                <option>Развлечения</option>
                <option>Другое</option>
            </select>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <input
                type="text"
                placeholder="Описание"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Добавить</button>
        </form>
    );
};

export default ExpenseForm;
