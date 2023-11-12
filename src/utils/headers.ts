import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers';

export const getIpAddress = (headers: ReadonlyHeaders) => {
  const xRealIp = headers.get('x-real-ip');

  if (xRealIp) {
    return xRealIp;
  }

  const xForwardedFor = headers.get('x-forwarded-for')?.split(',')?.pop()?.trim();

  if (xForwardedFor && xForwardedFor !== '::1') {
    return xForwardedFor;
  }

  return undefined;
};

export const getUA = (headers: ReadonlyHeaders) => {
  const ua = headers.get('user-agent');

  if (ua) {
    return ua;
  }

  return undefined;
};
