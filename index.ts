function sumFromArray(array: Array<number>): number {
  return array.reduce((sum: number, element: number) => {
    return sum += element
  }, 0)
}

sumFromArray([2, 3, 5])