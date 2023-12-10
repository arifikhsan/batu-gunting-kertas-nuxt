export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'Welcome',
      title: 'Rock Paper Scissors',
      subtitle: 'With Artificial Intellegence',

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
}))
