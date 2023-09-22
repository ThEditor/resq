import clsxm from '@/lib/clsxm';

export interface MessageBoxProps extends React.HTMLProps<HTMLParagraphElement> {
  children?: React.ReactNode;
  className?: string;
}

export default function MessageBox({
  className,
  children,
  ...props
}: MessageBoxProps) {
  return (
    <p
      {...props}
      className={clsxm(
        className,
        'focus:border-primary-100 rounded-lg border border-gray-700 bg-transparent px-3 py-2 text-gray-400 focus:outline-none'
      )}
    >
      {children}
    </p>
  );
}
