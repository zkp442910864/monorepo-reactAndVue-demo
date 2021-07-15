import React, {useState} from 'react';
import MyCheckbox from '@/componentsNew/MyCheckbox';

const Main = () => {

    const [checkboxVal, setCheckboxVal] = useState(1);

    return (
        <div>
            <MyCheckbox
                checked={checkboxVal}
                onChange={(e) => {
                    setCheckboxVal(e);
                }}
                trueValue={1}
                falseValue={2}
            >
                {checkboxVal}
            </MyCheckbox>
        </div>
    );
}

export default Main;
