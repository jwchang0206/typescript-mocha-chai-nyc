export function bar() {
  if (true) {
    return true;
  } else {
    return false;
  }
}

export async function barAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve(true);
      } else {
        resolve(false);
      }
    }, 1000);
  });
}