import { request } from '@/api/api'

export function getCommodityCount() {
    return request({
        method: 'post',
        url:    '/commodity/get_commodity_count',
        param: {},
        data: {}
    })
}
export function getCommodityList(pageNum, pageSize, withDeleted) {
    return request({
        method: 'post',
        url:    '/commodity/get_commodity_from_category',
        param: {},
        data: {
            category_id: "0",
            page_num: pageNum,
            page_size: pageSize,
            with_deleted: withDeleted
        }
    })
}
export function getCommodityFromID(commodityId) {
    return request({
        method: 'post',
        url:    '/commodity/get_commodity_from_id',
        param: {},
        data: {
            commodity_id: commodityId
        }
    })
}

export function updateCommodity(commodity) {
    console.log("req:",  {
        commodity_id: commodity.commodity_id,
        commodity_name: commodity.commodity_name,
        price: commodity.price.toString(),
        category_id: commodity.category_id,
        is_deleted: Boolean(commodity.is_deleted)
    })
    return request({
        method: 'post',
        url:    '/commodity/update_commodity',
        param: {},
        data: {
            commodity_id: commodity.commodity_id,
            commodity_name: commodity.commodity_name,
            price: commodity.price.toString(),
            category_id: commodity.category_id,
            is_deleted: Boolean(commodity.is_deleted)
        }
    })
}
