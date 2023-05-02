'use client'

import React from 'react'
import ReactPlayer from 'react-player/soundcloud'
import { Tabs, Checkbox, Input, Select } from 'antd'
import type { TabsProps } from 'antd'

const onChange = (key: string) => {
  console.log(key)
}

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Tab 1`,
    children: <Checkbox.Group options={options} defaultValue={['Pear']} />,
  },
  {
    key: '2',
    label: `Tab 2`,
    children:  <Input.TextArea rows={4} />,
  },
  {
    key: '3',
    label: `Tab 3`,
    children: `Content of Tab Pane 3`,
  },
  {
    key: '4',
    label: `Tab 4`,
    children: <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />,
  },
]

const Page = () => {
  return (
    <main className={''}>page
      <ReactPlayer
        url="https://soundcloud.com/alex-baumgertner/engpodmusic?si=f4cce54da095477e86442386ec79d1ef&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </main>
  )
}

export default Page
