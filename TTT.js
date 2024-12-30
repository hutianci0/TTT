// array[0-8]
// 三轮, 每次都会记录index
// 收集index
// 与胜利结果比较

(function TTT() {
  // const arr = [...Array(9).keys()]
  const winning = [[0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Columns
  [0, 4, 8],
  [2, 4, 6]]// Diagonals

  // const Player1 = {
  //   player_mark: "X",
  //   arr: []


  // }
  // const Player2 = {
  //   player_mark: "O",
  //   arr: []

  // }

  const Player = (mark) => {
    return {
      mark: mark,
      arr: [],
      move(num) {
        this.arr.push(num - 1)
      },
      isWinning() {
        return this.arr.length >= 3 && winning.some(subItem => subItem.every(ele => this.arr.includes(ele)))

      }

    }

  }

  const Player1 = Player("X")
  const Player2 = Player("O")


  let currentPlayer = Player1
  let count = 0
  let GameOver = false

  // click event
  document.querySelectorAll('.container .item').forEach(ele => ele.addEventListener('click', (e) => {
    // if (GameOver) return

    // // prevent click again
    // if (e.target.textContent !== '') return

    if (GameOver || e.target.textContent !== '') return

    e.target.textContent = currentPlayer.mark
    currentPlayer.move(e.target.dataset.id)

    if (currentPlayer.isWinning()) {
      console.log(currentPlayer.mark + "wins")
      GameOver = true
      return
    }



    count++



    // draw
    if (count === 9) {
      console.log('draw')
      GameOver = true
      return
    }

    // switch Player
    currentPlayer = currentPlayer === Player1 ? Player2 : Player1




  }))

})()

