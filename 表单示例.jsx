import React, { useState } from 'react';
import { Form, Input, InputNumber, DatePicker, Select, Button, Typography, Card } from 'antd';
import dayjs from 'dayjs';

const { Title } = Typography;

const App = () => {
    // 表单数据的状态
    const [formData, setFormData] = useState({
        amount: 0,
        date: null,
        category: '',
        remark: '',
    });

    // 提交的数据列表
    const [records, setRecords] = useState([]);

    // 表单变化时更新数据
    const handleInputChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value,
        });
    };

    // 提交表单
    const handleSubmit = () => {
        if (!formData.amount || !formData.date || !formData.category) {
            alert('请完整填写所有必填信息！');
            return;
        }
        setRecords([
            ...records,
            {
                ...formData,
                date: formData.date.format('YYYY-MM-DD'),
            },
        ]);
        // 重置表单
        setFormData({
            amount: 0,
            date: null,
            category: '',
            remark: '',
        });
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <Title level={2}>记账表单</Title>
            <Form layout="vertical">
                {/* 金额输入 */}
                <Form.Item label="金额" required>
                    <InputNumber
                        value={formData.amount}
                        onChange={(value) => handleInputChange('amount', value)}
                        style={{ width: '100%' }}
                        placeholder="请输入金额"
                    />
                </Form.Item>
                {/* 日期选择 */}
                <Form.Item label="日期" required>
                    <DatePicker
                        value={formData.date}
                        onChange={(value) => handleInputChange('date', value)}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                {/* 类别选择 */}
                <Form.Item label="类别" required>
                    <Select
                        value={formData.category}
                        onChange={(value) => handleInputChange('category', value)}
                        placeholder="请选择类别"
                        options={[
                            { value: '收入', label: '收入' },
                            { value: '支出', label: '支出' },
                        ]}
                    />
                </Form.Item>
                {/* 备注输入 */}
                <Form.Item label="备注">
                    <Input
                        value={formData.remark}
                        onChange={(e) => handleInputChange('remark', e.target.value)}
                        placeholder="备注信息（可选）"
                    />
                </Form.Item>
                {/* 提交按钮 */}
                <Button type="primary" onClick={handleSubmit} style={{ width: '100%' }}>
                    提交
                </Button>
            </Form>

            <div style={{ marginTop: '30px' }}>
                <Title level={3}>记录</Title>
                {records.map((record, index) => (
                    <Card key={index} style={{ marginBottom: '10px' }}>
                        <p>金额: {record.amount}</p>
                        <p>日期: {record.date}</p>
                        <p>类别: {record.category}</p>
                        <p>备注: {record.remark || '无'}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default App;