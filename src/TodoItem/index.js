import './TodoItem.css';
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { TiDelete } from "react-icons/ti";

function TodoItem ({text, completed, onComplete, onDelete}) {
  return(
    <li>
      <span  onClick={onComplete}>{completed? 
        <MdCheckBox size="24px" color="green" /> 
        : <MdCheckBoxOutlineBlank size="24px" className="icon-complete"/>}</span>

      <p>{text}</p>

      <span className="icon-container-delete" onClick={onDelete}>
        <TiDelete size="24px" className="icon-delete" />
      </span>
    </li>
  );
}

export { TodoItem };