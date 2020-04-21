<template>
  <div class="geme">
    <div class="game-board">
      <Board :squares="history[this.stepNumber].squares" @click="handleClick"></Board>
    </div>
    <div class="game-info">
      <div>{{ status }}</div>
      <ol>
          <li v-for="(squares,index) in history" :key="index" :class="{'move-on': index === stepNumber}">
              <button @click="jumpTo(index)">{{0 === index ? 'Go to game start': 'Go to game #'+ index}}</button>
          </li>
      </ol>
    </div>
  </div>
</template>

<script>
import Board from "../components/Board.vue";
let nextLabel = "Winner:";
// 判断胜者
function calculateWinner(squares) {
    const lints = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i =0;i<lints.length;i++){
        const [a,b,c] = lints[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null;
}
export default {
  data() {
    return {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true,
      status: `${nextLabel}X`
    };
  },
  methods: {
    handleClick(i) {
      const history = this.history.slice(0, this.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (squares[i]) {
        alert("此处已落子！");
        return;
      }
      // 轮流落子
      squares[i] = this.xIsNext ? 'X' : 'O';
      this.history = history.concat([{
        squares: squares
      }]);
      this.stepNumber = history.length;
      this.squares = squares;
    //   判断获胜者
      const winner = calculateWinner(squares);
      if (winner) {
        this.status = '获胜者：' + winner;
        alert(winner+'获胜！')
        return;
      }
    //   提示交换回合
      this.xIsNext = !this.xIsNext;
      this.status = `${nextLabel}${this.xIsNext ? 'X' : 'O'}`;
    },
    // 悔棋
    jumpTo(step){
        this.stepNumber = step;
        this.xIsNext = (step % 2) === 0;
        this.status = `${nextLabel}${this.xIsNext ? "X" : "O"}`;
    }
  },
  components: {
    Board
  }
};
</script>

<style lang="scss">
@import "../common/css/main.css";
</style>