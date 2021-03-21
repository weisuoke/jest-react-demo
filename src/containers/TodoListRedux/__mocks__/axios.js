const mockUndoList = {
  data: [{
    status: 'div',
    value: 'dell lee'
  }],
  success: true
}

export default {
  get(url) {
    console.log('🧵', url)
    if (url === '/undolist.json') {
      return new Promise((resolve, reject) => {
        resolve(mockUndoList)
      })
    }
  }
}
