import React, {useState, useEffect, FC} from 'react';
import {Checkbox} from 'antd';
import {CheckboxProps} from 'antd/lib/checkbox';

export interface NewCheckboxProps {
    /**
     * 选中时候的值
     */
    trueValue?: boolean | number | string;
    /**
     * 取消时候的值
     */
    falseValue?: boolean | number | string;
    /**
     * 值改变
     */
    onChange?: (val: boolean | number | string) => void;
    /**
     * 当前值
     */
    checked?: boolean | number | string;
}

const MyCheckbox: FC<NewCheckboxProps & CheckboxProps> = ({checked, onChange, trueValue = true, falseValue = false, ...props}) => {

    const [curValue, setCurValue] = useState(checked);

    const curChange = (val) => {
        onChange && onChange(val.target.checked ? trueValue : falseValue);
    }

    useEffect(() => {
        setCurValue(checked === trueValue);
    }, [checked]);

    return (
        <Checkbox
            {...props}
            checked={curValue}
            onChange={curChange}
        />
    );
}

export default MyCheckbox;
