import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-image';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = 'edge';

export default async function Image() {
  return generateOGImage({
    title: 'Partners & Clients',
    description: '글로벌 파트너십과 국내 주요 고객사',
    subtitle: 'PARTNERS',
  });
}
