// Kontent.ai Delivery API


import { createDeliveryClient, camelCasePropertyNameResolver } from '@kontent-ai/delivery-sdk'
import { HeroUnit } from '../models';
import * as packageInfo from '../package.json'

const sourceTrackingHeaderName = 'X-KC-SOURCE'

const client = createDeliveryClient({
  projectId: process.env.KONTENT_PROJECT_ID,
  globalHeaders: (_queryConfig) => [
    {
      header: sourceTrackingHeaderName,
      value: `${packageInfo?.name};${packageInfo?.version}`,
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

