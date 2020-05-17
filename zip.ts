const zip = (...arr) =>
  Array.from({ length: Math.max(...arr.map((a) => a.length)) }, (_, i) =>
    arr.map((a) => a[i])
  );
