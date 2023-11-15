
import MaterialIcon from 'material-icons-react';
import './index.css'
import Card from './Card'


function Group(props){

  const list = props.list === undefined?[]:props.list
  const icon = props.icons[props.Key][props.id] ? props.icons[props.Key][props.id] : { name : 'radio_button_unchecked', color :'' }
  return(
    <> 
      <div className="group">
        <div className='header'>
          <MaterialIcon icon = {icon.name?icon.name:"add"} color={icon.color?icon.color:""} size ={18}  />
          <p className='title'>{props.title}</p>
          <p className='count'> {list.length} </p>
          <div className='header-right'>
             <MaterialIcon icon="add" size={18}/>
             <MaterialIcon icon ="more_horiz" size={18}/>
          </div>
        </div>
        <div className='card-list'>
          { list.map((val)=>
              <div key= {val.id} >
                <Card data = {val}/>
              </div>
          )}
        </div>

      </div>
    </>
   )
}

export default Group
