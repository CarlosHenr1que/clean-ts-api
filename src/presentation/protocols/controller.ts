import { HttpRequest, HttpResponse } from './http'

export interface Controller {
  hadle (httpRequest: HttpRequest): HttpResponse
}
