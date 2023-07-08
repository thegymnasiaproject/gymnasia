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
        key: 'tags',
        dataIndex: 'tags',
        render: (text) => <a>{text}</a>,
    },
];

const Page = () => {
    const [data, setData] = useState<DataType[]>([]);

    const [form] = Form.useForm();

    const onFinish = (formData: { habitName: string, percentPerDay: number }) => {
        console.log('data: ', formData); // eslint-disable-line


        const totalDays = 66; // Total days to maintain the habit
        const calculatedData: DataType[] = [];

        for (let i = 0; i < totalDays; i++) {
            calculatedData.push({
                key: Math.random() + '',
                isDone: false,
                day: i + 1,
                minutes: 10, // TODO
            });
        }

        console.log('calculatedData: ', calculatedData); // eslint-disable-line

        setData(calculatedData);

        message.success('Submit success!');
    };

    const onFinishFailed = (formError: {}) => {
        console.log('error: ', formError); // eslint-disable-line
        message.error('Submit failed!');
    };

    const onChange = (value: number | null) => {
        console.log('changed', value);
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
                                    label="Привычка для практики"
                                    rules={[
                                        { required: true },
                                        { type: 'string', warningOnly: true },
                                        { type: 'string', min: 2 },
                                    ]}
                            >
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Form.Item
                                    name="percentPerDay"
                                    label="На сколько процентов в день увеличивать время практики?"
                                    rules={[
                                        { required: true },
                                        { type: 'number' },
                                    ]}
                            >
                                <InputNumber min={1} max={10} onChange={onChange} />
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
                        <Table columns={columns} dataSource={data} />
                    </Col>
                </Row>
            </div>
    );
};

export default Page;
