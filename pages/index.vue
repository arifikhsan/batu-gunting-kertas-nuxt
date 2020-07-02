<template>
  <div class="max-w-5xl mx-auto">
    <div class="flex items-center justify-center flex-col text-center">
      <div class="p-4">
        <h1 class="text-3xl font-bold text-indigo-500">Batu Gunting Kertas</h1>
        <h2 class="text-base  text-indigo-500">Dengan Kecerdasan Buatan</h2>
      </div>
      <div class="p-4">
        <h2 class="text-2xl font-semibold text-indigo-500">Skor</h2>
        <div class="mt-4 flex items-row items-center justify-evenly">
          <div class="w-1/2 border-r border-indigo-500">
            <p class="text-3xl text-indigo-500">{{ scoreHuman }}</p>
            <p class="mt-4 text-xl">Manusia</p>
            <p class="mt-4">{{ showChosenByHuman }}</p>
          </div>
          <div class="w-1/2">
            <p class="text-3xl text-indigo-500">{{ scoreAI }}</p>
            <p class="mt-4 text-xl">AI</p>
            <p class="mt-4">{{ showChosenByAI }}</p>
          </div>
        </div>
        <div class="my-6 text-2xl font-bold">
          <p class="text-indigo-500" v-if="this.winner === 'human'">Anda menang</p>
          <p class="text-red-500" v-else-if="this.winner === 'AI'">Anda kalah</p>
          <p class="text-blue-500" v-else-if="this.winner === 'draw'">Seri</p>
          <p class="text-gray-700" v-else>Mulai Permainan</p>
        </div>
        <div class="mt-4">
          <div class="flex flex-row items-center justify-center">
            <button
              @click="humanInput(1)"
              class="py-2 m-2 px-4 text-white bg-indigo-500 rounded hover:bg-indigo-600 duration-500"
            >
              Batu
            </button>
            <button
              @click="humanInput(2)"
              class="py-2 m-2 px-4 text-white bg-indigo-500 rounded hover:bg-indigo-600 duration-500"
            >
              Gunting
            </button>
            <button
              @click="humanInput(3)"
              class="py-2 m-2 px-4 text-white bg-indigo-500 rounded hover:bg-indigo-600 duration-500"
            >
              Kertas
            </button>
          </div>
          <div>
            <button
              @click="resetScore"
              class="py-2 m-2 px-4 text-indigo-500 rounded border"
            >
              Reset
            </button>
          </div>
          <div class="mt-8">
            <p>Game ke: {{ gameCount }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    script: [{ src: '//unpkg.com/brain.js' }]
  },
  data() {
    return {
      pattern: [],
      scoreHuman: 0,
      scoreAI: 0,
      chosenByHuman: 0,
      chosenByAI: 0,
      winner: '', // human or AI or draw
      gameCount: 0,
      patternLength: 10
    }
  },
  computed: {
    showWinner() {
      // return this.winner
      if (this.winner === 'human') {
        return 'Anda Menang'
      } else if (this.winner === 'AI') {
        return 'Anda Kalah'
      } else if (this.winner === 'draw') {
        return 'Seri'
      } else {
        return 'Mulai Permainan'
      }
    },
    showChosenByHuman() {
      return this.stringOf(this.chosenByHuman)
    },
    showChosenByAI() {
      return this.stringOf(this.chosenByAI)
    }
  },
  methods: {
    humanInput(rockOrPaperOrScissors) {
      this.chosenByHuman = rockOrPaperOrScissors
      this.gameCount++
      this.whatShouldAIAnswer()
      this.whoIsTheWinner()
    },
    prepareData() {
      if (this.pattern.length < 1) {
        for (let index = 1; index <= this.patternLength; index++) {
          this.pattern.push(Math.floor(Math.random() * 3) + 1)
        }
      }
      console.table(this.pattern)
    },
    updatePattern() {
      if (this.gameCount !== 0) {
        this.pattern.shift()
        this.pattern.push(this.chosenByHuman)
      }
    },
    whatShouldAIAnswer() {
      this.prepareData()
      const net = new brain.recurrent.LSTMTimeStep()
      net.train([this.pattern], { iterations: 100, log: false })
      const humanWillChose = net.run(this.pattern)
      this.updatePattern()

      const roundedHumanWillChose = Math.round(humanWillChose)
      // console.log(humanWillChose)
      console.log('human will chose: ' + roundedHumanWillChose)
      switch (roundedHumanWillChose) {
        case 1:
          this.chosenByAI = 3
          break
        case 2:
          this.chosenByAI = 1
          break
        case 3:
          this.chosenByAI = 2
          break

        default:
          this.chosenByAI = 2
          break
      }
      console.log('AI chose: ' + this.chosenByAI)
    },
    whoIsTheWinner() {
      if (this.chosenByHuman === this.chosenByAI) {
        this.winner = 'draw'
      } else if (
        (this.chosenByHuman === 1 && this.chosenByAI === 3) ||
        (this.chosenByHuman === 3 && this.chosenByAI === 2) ||
        (this.chosenByHuman === 2 && this.chosenByAI === 1)
      ) {
        this.winner = 'AI'
        this.scoreAI++
      } else {
        this.winner = 'human'
        this.scoreHuman++
      }
    },
    resetScore() {
      this.pattern = []
      this.scoreHuman = 0
      this.scoreAI = 0
      this.chosenByHuman = 0
      this.chosenByAI = 0
      this.winner = ''
      this.gameCount = 0
    },
    stringOf(integer) {
      switch (integer) {
        case 1:
          return 'Batu'
          break
        case 2:
          return 'Gunting'
          break
        case 3:
          return 'Kertas'
          break

        default:
          return ''
          break
      }
    }
  }
}
</script>
