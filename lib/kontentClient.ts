// Kontent.ai Delivery API


import { createDeliveryClient, camelCasePropertyNameResolver } from '@kontent-ai/delivery-sdk'
import { HeroUnit } from '../models';

const sourceTrackingHeaderName = 'X-KC-SOURCE'

const client = createDeliveryClient({
  projectId: process.env.KONTENT_PROJECT_ID || "975bf280-fd91-488c-994c-2f04416e5ee3",
  globalHeaders: (_queryConfig) => [
    {
      header: sourceTrackingHeaderName,
      value: `${process.env.APP_NAME || "n/a"};${process.env.APP_VERSION || "n/a"}`,
    },
  ],
  propertyNameResolver: camelCasePropertyNameResolver
});

export async function getHeroUnit() : Promise<HeroUnit> {
  const response = await client
    .item<HeroUnit>('home_page_hero_unit')
    .toPromise()

  return (response.data.item);
}

