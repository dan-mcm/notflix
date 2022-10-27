import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

// values obtained via redux store
function AddFavourite(props) {
  //Use for all the dispatch actions
  const dispatch = useDispatch();

  return (
    <div>
      <Button type="danger" icon={<HeartOutlined />} shape="circle" onClick={() => dispatch({type: 'addFavourites', payload: props})}/>
    </div>
  )
}

export default AddFavourite;
