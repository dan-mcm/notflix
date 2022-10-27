import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

// values obtained via redux store
function RemoveFavourite(props) {
  //Use for all the dispatch actions
  const dispatch = useDispatch();

  return (
    <div>
      <Button type="danger" icon={<DeleteOutlined />} shape="circle" onClick={() => dispatch({type: 'removeFavourites', payload: props.id})}/>
    </div>
  )
}

export default RemoveFavourite;
