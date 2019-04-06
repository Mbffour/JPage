import request from '@/utils/request'

export function getSupplierList(data) {
  return request({
    url: '/user/get/supplier',
    method: 'post',
    data
  })
}

export function getSupplierType() {
  return request({
    url: '/user/get/supplierType',
    method: 'post'
  })
}

export function deleteSupplier(uuid) {
  var data = { uuid: uuid.toString() }
  return request({
    url: '/user/delete/supplier',
    method: 'post',
    data
  })
}

export function createSupplier(data) {
  return request({
    url: '/user/create/supplier',
    method: 'post',
    data
  })
}

export function login(username, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get'
  // params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
