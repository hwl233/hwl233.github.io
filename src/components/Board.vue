<template>
  <div id="box">
    <div class="board-row" v-for="(row,index) in board" :key="index">
      <Square
        v-for="square in row"
        :key="square"
        :value="squares[square]"
        @click="handleClick(square)"
      ></Square>
    </div>
  </div>
</template>

<script>
import Square from "../components/Square.vue";
// let nextLabel = "下一个选手：";
// 判断胜者
// function calculateWinner(squares) {
//     const lints = [
//         [0,1,2],
//         [3,4,5],
//         [6,7,8],
//         [0,3,6],
//         [1,4,7],
//         [2,5,8],
//         [0,4,8],
//         [2,4,6]
//     ];
//     for(let i =0;i<lints.length;i++){
//         const [a,b,c] = lints[i];
//         if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
//             return squares[a];
//         }
//     }
//     return null;
// }
export default {
  props:['squares'],
  data() {
    return {
    //   status: `${nextLabel}X`,
      board: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
      ],
    //   squares: Array(9).fill(null),
    //   xIsNext: true
    };
  },
  methods: {
    handleClick(i) {
    //   const squares = this.squares.slice();
    //   if (squares[i]) {
    //     alert("此处已落子！");
    //     return;
    //   }
    //   // 轮流落子
    //   squares[i] = this.xIsNext ? "X" : "O";
    //   this.squares = squares;
    // //   判断获胜者
    //   const winner = calculateWinner(squares);
    //   if(winner){
    //       this.status = '获胜者: ' + winner;
    //       return;
    //   }
    //   this.xIsNext = !this.xIsNext;
    //   // 选手提示信息
    //   this.status = `${nextLabel}${this.xIsNext ? "X" : "O"}`;
    // }
    this.$emit('click',i);
    }
  },
  components: {
    Square
  }
};
</script>

<style lang="scss">
@import "../common/css/main.css";
</style>