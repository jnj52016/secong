import React, { useState } from 'react';

const App: React.FC = () => {
    const [form, setForm] = useState({ name: '', age: '' });
    const [submittedData, setSubmittedData] = useState([]);
    const [filterAge, setFilterAge] = useState(''); // 用于存储筛选的年龄

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        // 提交数据到列表
        setSubmittedData((prevData) => [
            ...prevData,
            { name: form.name, age: form.age },
        ]);

        // 提交后清空表单
        setForm({ name: '', age: '' });
    };

    const handleFilterChange = (event) => {
        setFilterAge(event.target.value); // 更新筛选的年龄
    };

    // 过滤数据，根据筛选的年龄显示姓名
    const filteredData = submittedData.filter((data) =>
        filterAge ? data.age === filterAge : true
    );

    return (
        <div>
            <label>
                姓名:
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                年龄:
                <input
                    type="number"
                    name="age"
                    value={form.age}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <button onClick={handleSubmit}>提交</button>
            <br />
            <br />

            {/* 筛选年龄的输入框 */}
            <label>
                筛选年龄:
                <input
                    type="number"
                    value={filterAge}
                    onChange={handleFilterChange}
                    placeholder="输入年龄筛选"
                />
            </label>
            <br />
            <br />

            {/* 显示提交的数据 */}
            <div>
                <h3>提交的数据:</h3>
                {filteredData.map((data, index) => (
                    <div key={index}>
                        <p>姓名: {data.name}</p>
                        <p>年龄: {data.age}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
