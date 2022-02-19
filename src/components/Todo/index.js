import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusFilter } from '../../redux/actions'
const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ name, prioriry, completed }) {
  const dispatch = useDispatch();
  
  const [checked, setChecked] = useState(completed);

  const toggleCheckbox = (e) => {
    setChecked(!checked);
    dispatch(statusFilter(e.target.value));
  };

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox value={completed} checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}
