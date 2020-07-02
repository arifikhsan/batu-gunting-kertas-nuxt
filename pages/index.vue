<template>
  <div class="max-w-5xl mx-auto">
    <div class="flex items-center justify-center flex-col text-center">
      <div class="p-4 mt-6">
        <h1 class="text-3xl font-bold text-indigo-500">Batu Gunting Kertas</h1>
      </div>
      <div class="p-4 mt-8">
        <h2 class="text-2xl font-semibold text-indigo-500">Skor</h2>
        <div class="mt-4 flex items-row items-center justify-evenly">
          <div class="w-1/2 border-r border-indigo-500">
            <p class="text-3xl text-indigo-500">3</p>
            <p class="mt-4 text-xl">Manusia</p>
            <p class="mt-4">Pilihan</p>
          </div>
          <div class="w-1/2">
            <p class="text-3xl text-indigo-500">3</p>
            <p class="mt-4 text-xl">AI</p>
            <p class="mt-4">Pilihan</p>
          </div>
        </div>
        <div class="my-6 text-2xl font-bold">Kalah</div>
        <div class="mt-4 flex flex-row items-center justify-center">
          <button
            @click="humanMove('rock')"
            class="py-2 m-2 px-4 text-white bg-indigo-500 rounded hover:bg-indigo-600 duration-500"
          >
            Batu
          </button>
          <button
            @click="humanMove('paper')"
            class="py-2 m-2 px-4 text-white bg-indigo-500 rounded hover:bg-indigo-600 duration-500"
          >
            Gunting
          </button>
          <button
            @click="humanMove('scissors')"
            class="py-2 m-2 px-4 text-white bg-indigo-500 rounded hover:bg-indigo-600 duration-500"
          >
            Kertas
          </button>
        </div>
      </div>
      <div v-show="loading">
        <p>Loading...</p>
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
      pattern: [1, 2, 3, 1, 2, 3, 1, 2],
      loading: true,
    }
  },
  methods: {
    humanMove(type) {
      console.log(this.loading)

      const net = new brain.recurrent.LSTMTimeStep()
      console.log(this.pattern)

      net.train([this.pattern], { iterations: 500, log: true })
      const output = net.run(this.pattern)

      const rounded = Math.round(output)
      console.log(output)
      console.log(rounded)
    },
    showOutput(typeOfNum) {
      switch (typeOfNum) {
        case 1:
          return 'batu'
          break
        case 2:
          return 'gunting'
          break
        case 3:
          return 'kertas'
          break

        default:
          break
      }
    }
  }
}
</script>
