import request from "@/utils/request"

export function fetchLogin(data) {
  return request({
    url: "/backend/sso/login",
    method: "POST",
    data
  })
}