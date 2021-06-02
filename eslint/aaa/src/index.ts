function testFn () {
  return new Promise(resolve => {
    const name = 'XXX'
    setTimeout(() => {
      resolve(name)
    }, 3000);
  })
}