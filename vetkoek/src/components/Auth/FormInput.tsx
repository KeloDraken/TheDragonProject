import { CSSProperties, FC, HTMLInputTypeAttribute } from "react";

interface InputProps {
  type: HTMLInputTypeAttribute;
  placeholder: string | undefined;
  value?: string | undefined;
  onChange?: (event: any) => void;
  style?: CSSProperties | undefined;
  className?: string | undefined;
  autoFocus?: boolean | undefined;
  required?: boolean | undefined;
}

export const Input: FC<InputProps> = ({
  className,
  placeholder,
  type,
  value,
  onChange,
  style,
  autoFocus,
  required,
}): JSX.Element => {
  autoFocus = false;
  if (required === undefined) {
    required = false;
  }

  return (
    <input
      type={type}
      autoFocus={autoFocus}
      required={required}
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
