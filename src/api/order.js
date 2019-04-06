import request from '@/utils/request'

export function getOrderDetail(data) {
  return request({
    url: '/order/getDetail/page',
    method: 'post',
    data
  })
}
export function getAllOrderDetail(data) {
  return request({
    url: '/order/getDetail/all',
    method: 'post',
    data
  })
}

export function createOrder(data) {
  data.endTime = data.timestamp.getTime()
  return request({
    url: '/order/create',
    method: 'post',
    data
  })
}

export function deleteOrder(data) {
  return request({
    url: '/order/delete',
    method: 'post',
    data
  })
}

export function updateOrder(data) {
  alert(JSON.stringify(data))
  data.endTime = data.timestamp.getTime()
  return request({
    url: '/order/buyer/update',
    method: 'post',
    data
  })
}

export function orderConfirm(data) {
  return request({
    url: '/order/supplier/confirm',
    method: 'post',
    data
  })
}

export function orderPublish(data) {
  return request({
    url: '/order/publish',
    method: 'post',
    data
  })
}

export function orderCancelPublish(data) {
  return request({
    url: '/order/cancelPublish',
    method: 'post',
    data
  })
}

export function getOrderList(data) {
  return request({
    url: '/order/get/page',
    method: 'post',
    data
  })
}

export function createOrderDetail(data) {
  return request({
    url: '/order/create/detail',
    method: 'post',
    data
  })
}

export function confirmOrderDetail(data) {
  return request({
    url: '/order/confirm/detail',
    method: 'post',
    data
  })
}
export function confirmOrderSend(data) {
  return request({
    url: '/order/confirm/send',
    method: 'post',
    data
  })
}
