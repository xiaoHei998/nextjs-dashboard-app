
type UnwrapArray<T> = T extends Array<infer U> ? U : T


export type { UnwrapArray }
export enum EFunnelPage {
  OnePageCheckout = 'one-page-checkout',
  TwoPageCheckout = 'two-page-checkout',
  AmazonCheckout = 'amazon-checkout',
  ChargeCheckout = 'charge-checkout',
  OfferLiteCheckout = 'offer-lite-checkout'
}

interface IShop {
  id: string
  name: string
}
export interface IWindowFunnel {
  id: string
  page: string
  refid: string
  token: string
  domain: string
  currency: string
  region: string
  language: string
  shop: IShop
}
