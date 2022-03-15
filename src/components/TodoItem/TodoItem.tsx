import { FC } from "react";

interface Props {}
export const TodoItem: FC<Props> = () => {
  return (
    // has completed class --> line-through
    <li className="completed">
      <div className="view">
        <input className="toggle" type="checkbox" defaultChecked />
        <label>Taste JavaScript</label>
        <button className="destroy" />
      </div>
      <input className="edit" defaultValue="Create a TodoMVC template" />
    </li>
  );
};
