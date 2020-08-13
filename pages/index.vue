<template>
  <div class="max-w-5xl mx-auto lg:flex lg:justify-evenly lg:items-start">
    <div class="flex flex-col items-center justify-center text-center lg:mt-10">
      <div class="p-4">
        <h1 class="text-3xl font-bold text-indigo-500">Batu Gunting Kertas</h1>
        <h2 class="text-base text-indigo-500">Dengan Kecerdasan Buatan</h2>
      </div>
      <div class="p-4">
        <h2 class="text-2xl font-semibold text-indigo-500">Skor</h2>
        <div class="flex items-center mt-4 items-row justify-evenly">
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
          <p v-if="this.winner === 'human'" class="text-indigo-500">
            Anda menang
          </p>
          <p v-else-if="this.winner === 'AI'" class="text-red-500">
            Anda kalah
          </p>
          <p v-else-if="this.winner === 'draw'" class="text-blue-500">Seri</p>
          <p v-else class="text-gray-700">Mulai Permainan</p>
        </div>
        <div class="mt-4">
          <div class="flex flex-row items-center justify-center">
            <button
              @click="humanInput(1)"
              class="px-4 py-2 m-2 text-white duration-500 bg-indigo-500 rounded hover:bg-indigo-600"
            >
              Batu
            </button>
            <button
              @click="humanInput(2)"
              class="px-4 py-2 m-2 text-white duration-500 bg-indigo-500 rounded hover:bg-indigo-600"
            >
              Gunting
            </button>
            <button
              @click="humanInput(3)"
              class="px-4 py-2 m-2 text-white duration-500 bg-indigo-500 rounded hover:bg-indigo-600"
            >
              Kertas
            </button>
          </div>
          <div>
            <button
              @click="resetScore"
              class="px-4 py-2 m-2 text-indigo-500 border rounded"
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
    <div class="lg:ml-16">
      <div class="p-4 mt-4 prose lg:prose-xl">
        <h2>
          Apa ini?
        </h2>
        <div>
          <p>
            Ini adalah permainan batu gunting kertas yang dibuat dengan
            menggunakan kecerdasan buatan.
          </p>
          <p>
            Game ini dapat membaca pola pemainnya untuk menentukan langkah yang
            akan diambil oleh AI agar bisa menang.
          </p>
          <p>Dibuat dengan framework Nuxt JS & Tailwind CSS.</p>
        </div>
      </div>

      <div class="p-4 mt-4 prose lg:prose-xl">
        <h2>
          Cara bermain
        </h2>
        <div>
          <ol>
            <li>
              Anda bisa memulai permainan dengan memilih "batu", "gunting" atau
              "kertas".
            </li>
            <li>
              Pilihlah secara terus menerus sampai membuat pola.
            </li>
            <li>
              Contoh pola:
              <ul>
                <li>Batu, batu, batu, batu, dst.</li>
                <li>Batu, gunting, batu, gunting, dst.</li>
                <li>Batu, gunting, kertas, batu, gunting, kertas, dst.</li>
                <li>Kertas, kertas, kertas, kertas, dst.</li>
              </ul>
            </li>
            <li>Lihatlah bahwa Anda akan kalah.</li>
          </ol>
        </div>
      </div>

      <div class="p-4 mt-4 prose lg:prose-xl">
        <h2>
          Kode Sumber
        </h2>
        <div>
          <p>
            Dibuat dengan library:
            <a href="https://github.com/BrainJS/brain.js">Brain JS</a>
          </p>
          <p>
            Dapatkan kode game ini di:
            <a href="https://github.com/arifikhsan/batu-gunting-kertas-nuxt"
              >Github</a
            >
          </p>
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
    showChosenByHuman() {
      return this.stringOf(this.chosenByHuman)
    },
    showChosenByAI() {
      return this.stringOf(this.chosenByAI)
    }
  },
  methods: {
    async humanInput(rockOrPaperOrScissors) {
      this.chosenByHuman = rockOrPaperOrScissors
      this.gameCount++
      await this.whatShouldAIAnswer()
      this.whoIsTheWinner()
    },
    prepareData() {
      if (this.pattern.length < 1) {
        for (let index = 1; index <= this.patternLength; index++) {
          this.pattern.push(Math.floor(Math.random() * 3) + 1)
        }
      }
    },
    updatePattern() {
      if (this.gameCount !== 0) {
        this.pattern.shift()
        this.pattern.push(this.chosenByHuman)
      }
    },
    async whatShouldAIAnswer() {
      this.prepareData()
      const net = new brain.recurrent.LSTMTimeStep()
      net.train([this.pattern], { iterations: 100, log: true })
      const humanWillChose = net.run(this.pattern)
      console.log(humanWillChose)
      this.updatePattern()

      const roundedHumanWillChose = Math.round(humanWillChose)
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
          this.chosenByAI = 1
          break
      }
      // console.log('AI chose: ' + this.chosenByAI)
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
