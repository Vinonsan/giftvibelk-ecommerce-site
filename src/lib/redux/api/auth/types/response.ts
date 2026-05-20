export interface ILoginApiResponse {
  message: string
  data: {
    token: string
    role: string
  }
}
