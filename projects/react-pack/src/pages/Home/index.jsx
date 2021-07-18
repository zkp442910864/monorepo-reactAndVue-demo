import React, {useState} from 'react';
import {MyCheckbox} from '@mono/components-react';

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
                react-pack
            </MyCheckbox>
        </div>
    );
}

export default Main;
