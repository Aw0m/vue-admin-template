import { request } from '@/api/api'

export function getCategoryList() {
    return request({
        method: 'post',
        url:    '/category/get_category_list',
        param: {},
        data: {}
    })
}

export function addCategory(data) {
    return request({
        method: 'post',
        url:    '/category/add_category',
        param: {},
        data: data
    })
}

export function deleteCategory(categoryId) {
    return request({
        method: 'post',
        url:    '/category/delete_category',
        param: {},
        data: {
            category_id: categoryId
        }
    })
}
