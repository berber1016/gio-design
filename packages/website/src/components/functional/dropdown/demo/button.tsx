import React from 'react';
import { Button, Dropdown, List } from '@gio-design/components';

const options = [
  { value: 'a', label: '功能名称' },
  { value: 'b', label: '功能名称', tooltip: 'test', disabled: true },
  { value: 'c', label: '功能名称' },
  { value: 'd', label: '功能名称', disabled: true },
];

export default () => (
  <Dropdown overlay={<List dataSource={options} width={144} height={176} />}>
    <Button type="secondary">更多操作</Button>
  </Dropdown>
);
