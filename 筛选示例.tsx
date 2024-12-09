import React, { useState } from 'react';

// 定义一个函数组件 App
const App: React.FC = () => {
    // 使用 useState Hook 创建表单状态及提交数据状态
    const [form, setForm] = useState({ name: '', age: '' }); // 表单字段：姓名和年龄
    const [submittedData, setSubmittedData] = useState([]); // 存储提交的数据
    const [filterAge, setFilterAge] = useState(''); // 用于存储筛选的年龄

    // 处理输入框变化的函数
    const handleInputChange = (event) => {
        const { name, value } = event.target; // 获取输入框的 name 和 value
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value, // 更新对应的表单字段
        }));
    };

    // 处理提交的函数
    const handleSubmit = () => {
        // 提交数据到列表
        setSubmittedData((prevData) => [
            ...prevData,
            { name: form.name, age: form.age }, // 添加新的提交数据
        ]);

        // 提交后清空表单
        setForm({ name: '', age: '' });
    };

    // 处理筛选输入框变化的函数
    const handleFilterChange = (event) => {
        setFilterAge(event.target.value); // 更新筛选的年龄
    };

    // 过滤数据，根据筛选的年龄显示姓名
    const filteredData = submittedData.filter((data) =>
        filterAge ? data.age === filterAge : true // 如果有筛选年龄，则进行比较
    );

    return (
        <div>
            <label>
                姓名:
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange} // 输入变化时调用 handleInputChange
                />
            </label>
            <br />
            <label>
                年龄:
                <input
                    type="number"
                    name="age"
                    value={form.age}
                    onChange={handleInputChange} // 输入变化时调用 handleInputChange
                />
            </label>
            <br />
            <button onClick={handleSubmit}>提交</button> {/* 提交数据 */}
            <br />
            <br />

            {/* 筛选年龄的输入框 */}
            <label>
                筛选年龄:
                <input
                    type="number"
                    value={filterAge}
                    onChange={handleFilterChange} // 输入变化时调用 handleFilterChange
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
                        <p>姓名: {data.name}</p> {/* 显示姓名 */}
                        <p>年龄: {data.age}</p> {/* 显示年龄 */}
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App; // 导出 App 组件
