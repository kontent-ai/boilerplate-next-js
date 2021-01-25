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

function parseHeroItem(item) {
  return {
    headline: item.headline.value,
    summary: item.summary.value,
    cta_label: item.cta_label.value,
    cta_url: item.cta_url.value,
  }
}

export async function getHeroItem() {
  const heroResponse = await client
    .item('hero')
    .toPromise()

  return parseHeroItem(heroResponse.item);
}

