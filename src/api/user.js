import { request } from '@/api/api'

export function getUserCount() {
    return request({
        method: 'post',
        url:    '/user/get_user_count',
        param: {},
        data: {}
    })
}

export function getUserList(pageNum, pageSize) {
    return request({
        method: 'post',
        url:    '/user/get_user_list',
        param: {},
        data: {
            page_num: pageNum,
            page_size: pageSize,
        }
    })
}
