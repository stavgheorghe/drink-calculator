export function mergePath(path: Array<string>) {
  let merged = '';

  for (let i = 0; i < path.length; i++) {
    merged += '/' + path[i];
  }

  return merged;
}
