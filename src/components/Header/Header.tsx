import { FC } from "react";

interface Props {}
export const Header: FC<Props> = () => {
  return (
    <>
      <header classname="header">
        <h1>todos</h1>
        <input
          classname="new-todo"
          placeholder="What needs to be done?"
          autofocus
        />
        123
      </header>
    </>
  );
};
