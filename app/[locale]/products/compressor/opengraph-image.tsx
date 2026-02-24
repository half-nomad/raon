import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-image';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = 'edge';

export default async function Image() {
  return generateOGImage({
    title: 'Compressor & Parts',
    description: '왕복동 압축기 부품 및 터보 컴프레서 솔루션',
    subtitle: 'NEUMAN & ESSER · FIMA · CASTANET',
  });
}
