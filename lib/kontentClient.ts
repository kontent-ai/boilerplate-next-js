// Kentico Kontent Delivery API


import { DeliveryClient } from '@kentico/kontent-delivery'
import { name, version } from '../package.json'

const sourceTrackingHeaderName = 'X-KC-SOURCE'

const client = new DeliveryClient({
  projectId: process.env.KONTENT_PROJECT_ID,
  globalHeaders: (_queryConfig) => [
    {
      header: sourceTrackingHeaderName,
      value: `${name};${version}`,
    },
  ],
});

function parseHeroUnit(item) {
  return {
    headline: item.title.value,
    summary: item.marketing_message.value
  }
}

export async function getHeroUnit() {
  const heroResponse = await client
    .item('home_page_hero_unit')
    .toPromise()

  return parseHeroUnit(heroResponse.item);
}

