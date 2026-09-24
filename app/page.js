import fs from 'node:fs';
import path from 'node:path';
import StoreClient from './StoreClient';

export default function Page() {
  const source = fs.readFileSync(path.join(process.cwd(), 'index.html'), 'utf8');
  const bodyMatch = source.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const body = bodyMatch?.[1].replace(/\s*<script>[\s\S]*?<\/script>\s*$/i, '') ?? '';

  return <StoreClient body={body} />;
}
