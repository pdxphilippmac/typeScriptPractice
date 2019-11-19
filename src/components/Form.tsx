import React, { FC } from "react";
import { ListItemDivProps} from "../interfaces/ListItemsDivProps";

interface FormProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd?: (event: React.FormEvent<HTMLFormElement>) => void;
  onClick?: (e: React.MouseEvent) => void
  task: ListItemDivProps;

}

function handleClick(){
  console.log("test")
}
export const Form: FC<FormProps> = ({
  onChange,
  onAdd,
  task,
  onClick
}) => (
  <form onSubmit={onAdd}>
    <input onChange={onChange} value={task.name} placeholder="test" />
    <button onClick={handleClick}type="submit">Log something</button>
  </form>
);


export default Form;