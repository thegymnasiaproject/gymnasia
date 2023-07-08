'use client';

import React, { useState } from 'react';
import {
    Button,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    message,
    Row,
    Space,
    Table,
} from 'antd';

import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: string;
    isDone: boolean;
    day: number;
    minutes: number;
    percent: number;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Я молодец',
        dataIndex: 'isDone',
        key: 'isDone',
        render: (isDone) => <> <Checkbox checked={isDone}></Checkbox></>,
    },
    {
        title: 'День',
        dataIndex: 'day',
        key: 'day',
    },
    {
        title: 'Сколько минут практиковал(а)',
        dataIndex: 'minutes',
        key: 'minutes',
    },
    {
        title: 'Процент',
        key: 'percent',
        dataIndex: 'percent',
        render: (text) => text + '%',
    },
];

const totalDays = 66; // Total days to maintain the habit
const maxPercent = 100;

const Page = () => {
    const [data, setData] = useState<DataType[]>([]);

    const [form] = Form.useForm();

    const onFinish = (formData: { habitName: string, percentPerDay: number, goalInMinutes: number }) => {
        const calculatedData: DataType[] = [];
        let percentPerDay = formData.percentPerDay;

        for (let i = 0; i < totalDays; i++) {
            let incrementInMinutes = Math.ceil((formData.percentPerDay / maxPercent) * formData.goalInMinutes);

            calculatedData.push({
                key: i + '_key',
                isDone: false,
                day: i + 1,
                minutes: Math.min(incrementInMinutes * i, formData.goalInMinutes),
                percent: Math.min(percentPerDay * i, maxPercent),
            });
        }

        setData(calculatedData);
        message.success('Submit success!');
    };

    const onFinishFailed = (formError: {}) => {
        console.log('error: ', formError); // eslint-disable-line
        message.error('Submit failed!');
    };

    return (
            <div>
                <h2>HABIT BUILDER</h2>

                <Row>
                    <Col span={24}>
                        <Form
                                form={form}
                                layout="vertical"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                                initialValues={data}
                        >
                            <Form.Item
                                    name="habitName"
                                    label="Название привычки для практики"
                                    rules={[
                                        { required: true },
                                        { type: 'string', min: 2 },
                                    ]}
                            >
                                <Input placeholder="введите название привычки" />
                            </Form.Item>
                            <Form.Item
                                    name="goalInMinutes"
                                    label="Цель: сколько минут в день практиковать?"
                                    rules={[
                                        { required: true },
                                        { type: 'number' },
                                    ]}
                            >
                                <InputNumber placeholder="число" />
                            </Form.Item>
                            <Form.Item
                                    name="percentPerDay"
                                    label="На сколько процентов в день увеличивать время практики?"
                                    rules={[
                                        { required: true },
                                        { type: 'number', min: 1, max: 10 },
                                    ]}
                            >
                                <InputNumber min={1} max={10} placeholder="число" />
                            </Form.Item>
                            <Form.Item>
                                <Space>
                                    <Button type="primary" htmlType="submit">
                                        Добавить
                                    </Button>
                                </Space>
                            </Form.Item>
                        </Form>
                    </Col>

                </Row>
                <Row>
                    <Col span={24}>
                        <Table columns={columns} dataSource={data} pagination={{ pageSize: totalDays }} />
                    </Col>
                </Row>
            </div>
    );
};

export default Page;
