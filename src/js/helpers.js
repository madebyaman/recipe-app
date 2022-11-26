import { TIMEOUT_SECS } from './config';

export async function getJSON(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
}

export function timeout(s) {
  return new Promise((_, reject) => {
    setTimeout(function () {
      reject(new Error(`Request took too long. Timeout after ${s} seconds`));
    }, s * 1000);
  });
}
