import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='flex items-center justify-between p-6'>
      <Logo />
      <Navlinks />
    </div>
  );
}

export function Navlinks() {
  const links: [string, string][] = [
    ['Home', '/'],
    ['About', '/about'],
    ['Pricing', '/pricing'],
    ['Contact', '/contact'],
  ];

  return (
    <ul className='flex space-x-4'>
      {links.map((v) => (
        <li key={v[1]}>
          <Link href={v[1]}>{v[0]}</Link>
        </li>
      ))}
    </ul>
  );
}

export function Logo() {
  return (
    <div>
      <Image
        src='/favicon/android-chrome-256x256.png'
        width={256}
        height={256}
        className='h-8 w-auto'
        alt='Logo'
      />
    </div>
  );
}
