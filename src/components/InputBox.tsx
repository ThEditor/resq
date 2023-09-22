import clsxm from '@/lib/clsxm';

export interface InputBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  className?: string;
}

export default function InputBox({
  className,
  children,
  ...props
}: InputBoxProps) {
  return (
    <input
      {...props}
      className={clsxm(
        className,
        'focus:border-primary-200 rounded-lg border border-gray-500 bg-transparent px-3 py-2 text-white focus:outline-none'
      )}
    >
      {children}
    </input>
  );
}
