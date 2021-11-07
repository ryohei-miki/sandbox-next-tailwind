import React from "react";
import { Alert } from "../../atoms/Alert";

type Props = {
  inputProps: React.ComponentProps<"input">;
  errorMessage?: string;
};

export const TextboxWithAlert = ({
  inputProps: { type, ...inputArgs },
  errorMessage,
}: Props) => {
  return (
    <div>
      <input type="text" {...inputArgs} />
      <Alert message={errorMessage} />
    </div>
  );
};
