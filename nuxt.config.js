export default {
  ssr : true,
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/tailwindcss', 'nuxt-webfontloader'],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-i18n'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  webfontloader: {
    google: {
      families: [
        'Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap'
      ]
    }
  },
  server: {
    port: 8000,
  },
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome',
          title: 'Rock Paper Scissors',
          subtitle: 'With Artificial Intelligence',

          gameStart: 'Start Game',
          youWin: 'You Win',
          youLose: 'You Lose',
          draw: 'Draw',

          score: 'Score',
          human: 'Human',
          ai: 'AI',
          rock: 'Rock',
          paper: 'Paper',
          scissors: 'Scissors',
          reset: 'Reset',
          gameCount: 'Game count',

          what: 'What is this?',
          thisIs:
            'This is a paper scissors rock game created using artificial intelligence.',
          thisGame:
            "This game can read the players' patterns to determine the next steps for 'AI' will take in order to win.",
          builtWith: 'Built with Nuxt JS & Tailwind CSS framework.',

          how: 'How to play',
          step1: 'You can start the game by selecting "rock", "scissors" or "paper".',
          step2: 'Choose continuously until you create a pattern.',
          step3: 'Examples of patterns:',
          pattern1: 'Rock, rock, rock, rock, etc.',
          pattern2: 'Rock, scissors, rock, scissors, etc.',
          pattern3: 'Rock, scissors, paper, rock, scissors, paper, etc.',
          pattern4: 'Paper, paper, paper, paper, etc.',
          step4: 'See that you will lose.',

          source: 'Source code',
          brainjs: 'Built with library',
          github: 'Get this code in'
        },
        id: {
          welcome: 'Selamat datang',
          title: 'Batu Gunting Kertas',
          subtitle: 'Dengan Kecerdasan Buatan',

          gameStart: 'Mulai Permainan',
          youWin: 'Anda Menang',
          youLose: 'Anda Kalah',
          draw: 'Seri',

          score: 'Skor',
          human: 'Manusia',
          ai: 'AI',
          rock: 'Batu',
          paper: 'Kertas',
          scissors: 'Gunting',
          reset: 'Ulangi dari awal',
          gameCount: 'Game ke',

          what: 'Apa ini?',
          thisIs:
            'Ini adalah permainan batu gunting kertas yang dibuat dengan menggunakan kecerdasan buatan.',
          thisGame:
            "Game ini dapat membaca pola pemainnya untuk menentukan langkah yang akan diambil oleh AI agar bisa menang.",
          builtWith: 'Dibuat dengan framework Nuxt JS & Tailwind CSS.',

          how: 'Cara bermain',
          step1: 'Anda bisa memulai permainan dengan memilih "batu", "gunting" atau "kertas".',
          step2: 'Pilihlah secara terus menerus sampai membuat pola.',
          step3: 'Contoh pola:',
          pattern1: 'Batu, batu, batu, batu, dst.',
          pattern2: 'Batu, gunting, batu, gunting, dst.',
          pattern3: 'Batu, gunting, kertas, batu, gunting, kertas, dst.',
          pattern4: 'Kertas, kertas, kertas, kertas, dst.',
          step4: 'Lihatlah bahwa Anda akan kalah.',

          source: 'Kode Sumber',
          brainjs: 'Dibuat dengan library',
          github: 'Dapatkan kode game ini di'
        }
      }
    }
  }
}
