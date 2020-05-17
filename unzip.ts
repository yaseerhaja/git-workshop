const unzip = (arr) =>
  arr.reduce(
    (acc, c) => (c.forEach((v, i) => acc[i].push(v)), acc),
    Array.from({ length: Math.max(...arr.map((a) => a.length)) }, (_) => [])
  );
