import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDoAction } from '../../redux/actions';
import {v4 as uuidv4} from 'uuid' 
import { toDoListSelctor } from '../../redux/seclertor';

export default function TodoList() {
  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const [prioriry, setPrioriry] = useState('High')

  const toDoList = useSelector(toDoListSelctor)
  const hanldeAdd = () => {
    dispatch(addToDoAction(
      {
        id: uuidv4(),
        name:name,
        prioriry:prioriry,
        complated:false
      }
      ))
    setName('')
    setPrioriry('High')
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        {toDoList.map(x => <Todo key={x.id} name={x.name} prioriry={x.prioriry} completed={x.completed} />)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={name} onChange={e => setName(e.target.value)}/>
          <Select defaultValue={prioriry} value={prioriry} onChange={value => setPrioriry(value)}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button onClick={hanldeAdd} type='primary'>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
