import React, {useState} from 'react';
// import {ComponentStory, ComponentMeta} from '@storybook/react';
import MyCheckbox from './index';

export default {
    title: 'react/MyCheckbox',
    component: MyCheckbox,
    argTypes: {
        checked: {
            table: {
                // 表格行 Description 列，对应的参数类型和详情
                type: {
                    summary: 'boolean | number | string',
                },
            },
            control: null
        },
        onChange: {
            table: {
                // 表格行 Description 列，对应的参数类型和详情
                type: {
                    summary: '(val: boolean | number | string) => void',
                },
            },
        }
    },
};

const Template = (args) => {
    const [checked, setChecked] = useState(args.falseValue);
    const onChange = (e) => {
        setChecked(e);
    }

    return <MyCheckbox {...args} checked={checked} onChange={onChange}>{checked}</MyCheckbox>;
};

export const 改变默认值 = Template.bind({});
改变默认值.args = {
    trueValue: 1,
    falseValue: 2,
    // change: action('change')
};