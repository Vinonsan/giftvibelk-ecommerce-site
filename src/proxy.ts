import type { NextRequest } from 'next/server'

import { proxyRequest } from '@/lib/proxy'

export function proxy(request: NextRequest) {
  return proxyRequest(request)
}

export const config = {
  matcher: ['/api/:path*'],
}
