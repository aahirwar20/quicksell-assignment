import MaterialIcon, {colorPalette} from 'material-icons-react';
import './index.css'

function Card(props){
    return (
        <>
          <div className='card'>
             <p className='card-id'>{props.data.id}</p>
             
             <p className='card-topic'> <MaterialIcon icon="check_circle" size={10}  /> {props.data.title}</p>
             
             <p className='card-feature'><MaterialIcon icon="circle" size={10}  color='#9E9E9E' /> Feature Request</p>
          </div>
        </>
    )
}

export default Card;
