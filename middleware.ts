import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// let requestCount = 0;
// export function middleware(request: NextRequest) {
//   requestCount++;
//   console.log("number of requests is " + requestCount);
//   return  NextResponse.next()
// }

 
export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname);
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about-2', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  
}