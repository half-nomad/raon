import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-image';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = 'edge';

export default async function Image() {
  return generateOGImage({
    title: 'Motor',
    description: '대형 Motor 부품 및 방폭인증서비스',
    subtitle: 'LDW · NIDEC',
  });
}
