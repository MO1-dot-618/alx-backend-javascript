export default function updateUniqueItems(mappa) {
  if (!(mappa instanceof Map)) {
    throw new Error('Cannot process');
  }
  mappa.forEach((value, key) => {
    if (value === 1) mappa.set(key, 100);
  });
  return mappa;
}
