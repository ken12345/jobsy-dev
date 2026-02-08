import type { TMerchant } from "@features/merchant/merchant.type";

export type TLoginResponse = {
    Merchant: TMerchant
} & TUser

export type TUser = {
    createdAt: string
    id: number
    merchantId: number
    updatedAt: string
    username: string
}

export type TUserState = {
    authenticated: boolean
    details?: TUser
}