import { request } from '@/api/api'

export function getAllOrder(pageNum, pageSize, statusList) {
    return request({
        method: 'post',
        url:    '/order/get_all_order',
        param: {},
        data: {
            page_num: pageNum,
            page_size: pageSize,
            status_list: statusList
        }
    })
}

export function getOrderCount(statusList) {
    return request({
        method: 'post',
        url:    '/order/get_order_count',
        param: {},
        data: {
            status_list: statusList
        }
    })
}

export function getOrderDetail(orderID) {
    return request({
        method: 'post',
        url:    '/order/get_order_detail',
        param: {},
        data: {
            order_id: orderID
        }
    })
}

export function updateOrder(order) {
    return request({
        method: 'post',
        url:    '/order/update_order_info',
        param: {},
        data: {
            order_id: order.order_id,
            seller_name: order.seller_name,
            commodity_name: order.commodity_name,
            deliveryman_name: order.deliveryman_name,
            deliveryman_phone_num: order.deliveryman_phone_num,
            phone_num: order.phone_num,
            consignee_name: order.consignee_name,
            address_detail_info: order.address_detail_info,
            price: order.price,
            quantity: order.quantity,
            status: order.status,
            is_deleted: order.is_deleted
        }
    })
}
