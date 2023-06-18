'use client'

import React from 'react'
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
  Tag,
  Typography,
  Table,
} from 'antd'

import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import type { ColumnsType } from 'antd/es/table'

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
]

const data: DataType[] = [
  {
    key: '1',
    isDone: true,
    day: 1,
    minutes: 3,
  },
]

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`)
}

const Page = () => {
  const [form] = Form.useForm()

  const onFinish = () => {
    message.success('Submit success!')
  }

  const onFinishFailed = () => {
    message.error('Submit failed!')
  }

  const onChange = (value: number | null) => {
    console.log('changed', value)
  }

  return (
    <div>
      <h2>HABIT BUILDER</h2>

      <Row>
        <Col span={6}>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="habit"
              label="Привычка для практики"
              rules={[
                { required: true },
                { type: 'string', warningOnly: true },
                { type: 'string', min: 6 },
              ]}
            >
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item
              name="hours"
              label="На сколько процентов в день увеличивать время практики?"
              rules={[
                { required: true },
                { type: 'number' },
              ]}
            >
              <InputNumber min={1} max={10} defaultValue={5} onChange={onChange} />
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
        <Col span={18}>
          <Table columns={columns} dataSource={data} />
        </Col>
      </Row>
    </div>
  )
}

export default Page
