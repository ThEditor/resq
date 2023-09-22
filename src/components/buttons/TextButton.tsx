import clsxm from '@/lib/clsxm';

export interface TextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export default function TextButton({
  className,
  children,
  ...props
}: TextButtonProps) {
  return (
    <button
      {...props}
      className={clsxm(
        className,
        'hover:border-primary-100 focus:border-primary-200 bg-secondary-50 rounded-lg border border-gray-500 px-3 py-2 text-white focus:outline-none'
      )}
    >
      {children}
    </button>
  );
}
