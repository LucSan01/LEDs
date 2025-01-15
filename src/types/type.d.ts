export interface InputProps {
  label?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
  required?: boolean;
  size: number;
}

export interface ButtonProps {
  title: string;
  className: string;
}
