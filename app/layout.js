import fs from 'node:fs';
import path from 'node:path';
import './globals.css';

export const metadata = {
  title: 'WEARCOOL',
};

export default function RootLayout({ children }) {
  const source = fs.readFileSync(path.join(process.cwd(), 'index.html'), 'utf8');
  const tailwindConfig = source.match(/<script id="tailwind-config">([\s\S]*?)<\/script>/i)?.[1] ?? '';

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@600;700;800&family=Manrope:wght@400;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com" />
        <script dangerouslySetInnerHTML={{ __html: tailwindConfig }} />
      </head>
      <body className="bg-surface font-body-md text-on-surface flex flex-col min-h-screen">{children}</body>
    </html>
  );
}
