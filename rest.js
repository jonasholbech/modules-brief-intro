export async function get(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

export async function post(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}
export async function put(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}
