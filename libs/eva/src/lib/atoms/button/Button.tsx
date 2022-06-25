import React from "react"

type Props = React.HTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = (props) => {
  const { children } = props;

  return <button>{children}</button>;
}
