import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-image';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = 'edge';

export default async function Image() {
  return generateOGImage({
    title: '정유·석유화학',
    description: '압축기, 펌프, 믹서 등 회전기계 부품 공급',
    subtitle: 'Oil Refinery & Petrochemical',
  });
}
