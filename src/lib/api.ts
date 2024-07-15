import axiosBase from "axios"

export const ip = "localhost:8080"
const url = `http://${ip}/api/v2`

type LoginParam = {
  username: string;
  password: string;
}

const axios = axiosBase.create({
  baseURL: url
})

export async function login({ username, password }: LoginParam) {
  const response = await axios.post(`/auth/login`,
    new URLSearchParams({
      username,
      password,
    })
  )

  return response.data
}

export async function getTorrents() {
  const response = await axios.get(`/torrents/info`)

  return response
}

