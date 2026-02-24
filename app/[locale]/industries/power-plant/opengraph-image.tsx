import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-image';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = 'edge';

export default async function Image() {
  return generateOGImage({
    title: '발전소',
    description: '터빈, 압축기, 베어링 등 발전 설비용 부품 공급',
    subtitle: 'Power Plant',
  });
}
