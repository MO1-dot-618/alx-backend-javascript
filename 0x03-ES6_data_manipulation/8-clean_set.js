export default function cleanSet(set, startString) {
  const seto = new Set();
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      seto.add(value.slice(startString.length));
    }
  });
  return Array.from(seto).join('-');
}
