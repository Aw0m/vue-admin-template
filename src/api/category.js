import { request } from '@/api/api'

export function getCategoryList() {
    return request({
        method: 'post',
        url:    '/category/get_category_list',
    })
}
