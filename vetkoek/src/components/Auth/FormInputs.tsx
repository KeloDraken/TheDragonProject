import { CSSProperties, FC, HTMLInputTypeAttribute } from "react";

interface InputProps {
  type: HTMLInputTypeAttribute;
  placeholder: string | undefined;
  value?: string | undefined;
  onChange: (event: any) => void;
  style: CSSProperties | undefined;
  className?: string | undefined;
}

export const Input: FC<InputProps> = ({
  className,
  placeholder,
  type,
  value,
  onChange,
  style,
}): JSX.Element => {
  return (
    <input
      type={type}
      autoFocus
      required
      autoCapitalize="off"
      autoComplete="none"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      style={style}
      className={className}
    />
  );
};
