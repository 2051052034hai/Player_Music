const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAFE_KEY = "HAI_PLAYER"

const cd = $(".cd");
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const PlayBtn = $('.btn-toggle-play');
const player = $('.player');
const progress = $('#progress');
const cdWidth = cd.offsetWidth;
const nextBtn = $('.btn-next');
const prevBtn = $('.btn-prev');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');
const playlist = $('.playlist');
const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom : false,
    isrepeat : false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAFE_KEY))|| {},
    songs : [
        {
          name: "VÀI CÂU NÓI CÓ KHIẾN NGƯỜI...",
          singer: "- GREY D",
         // path: "y2meta.com - BÔNG HOA CHẲNG THUỘC VỀ TA - NHƯ VIỆT _ OFFICIAL LYRICS VIDEO (128 kbps).mp3",
          path:"nhac/y2meta.com - VÀI CÂU NÓI CÓ KHIẾN NGƯỜI THAY ĐỔI _ - GREY D _ [ SAD Chill 🎶 ] (128 kbps).mp3",
          image:
            "https://avatar-ex-swe.nixcdn.com/playlist/2019/08/07/5/4/b/e/1565117866661.jpg"
        },
        {
          name: "BÔNG HOA CHẲNG THUỘC VỀ TA",
          singer: "NHƯ VIỆT",
          path:"nhac/y2meta.com - BÔNG HOA CHẲNG THUỘC VỀ TA - NHƯ VIỆT _ OFFICIAL LYRICS VIDEO (128 kbps).mp3",
          image: "https://i.pinimg.com/originals/0b/09/a2/0b09a2fb79dd102d74bc4ee935a5e60a.jpg"
        },

        {
          name: "KÉM DUYÊN",
          singer: "RUM X NIT X MASEW",
          path:"nhac/y2meta.com - KÉM DUYÊN _ RUM X NIT X MASEW (128 kbps).mp3",
          image: "https://i.ytimg.com/vi/cvoyUIIAdrY/maxresdefault.jpg"
        },
        {
          name: "Tình yêu đôi khi bị lỗ là thường",
          singer: "N G E R ",
          path: "nhac/y2meta.com - _Tình yêu đôi khi bị lỗ là thường_ -  N G E R (128 kbps).mp3",
          image:
            "https://i.ytimg.com/vi/62Ycffpll4I/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLAnYMGQ3JlKKJ6OBpim0wwEDZo3lw"
        },
        {
          name: "Em Đây Chẳng Phải Thúy Kiều",
          singer: "Hoàng Thùy Linh x MayDen",
          path: "nhac/y2meta.com - Em Đây Chẳng Phải Thúy Kiều (Lofi ver) - Hoàng Thùy Linh x MayDen (128 kbps).mp3",
          image:
            "https://i.ytimg.com/vi/CcKtqln3iuE/sddefault.jpg"
        },
        {
          name: "Mười Năm ",
          singer: "Đen - ft. Ngọc Linh",
          path:
            "nhac/y2meta.com - Đen - Mười Năm ft. Ngọc Linh (M_V) (Lộn Xộn 3) (128 kbps).mp3",
          image:
            "https://topwat.com/wp-content/uploads/2021/03/bai-hat-hay-nhat-cua-den-vau.jpg"
        },
        {
          name: "Chạy Về Khóc Với Anh",
          singer: "Erik x Zeaplee",
          path: "nhac/y2meta.com - Chạy Về Khóc Với Anh - Erik x Zeaplee「Lofi Version by 1 9 6 7」_ Audio Lyrics Video (128 kbps).mp3",
          image:
            "https://i.ytimg.com/vi/3Z_rvgfLCgA/maxresdefault.jpg"
        },
        {
          name: "VÔ TÌNH",
          singer: "HOAPROX x XESI",
          path: "nhac/y2meta.com - HOAPROX x XESI - VÔ TÌNH _ Official Lyric Video (128 kbps).mp3",
          image:
            "https://i.ytimg.com/vi/y3o7Dg9Ikpc/maxresdefault.jpg"
        },
        {
          name: "10 Ngàn Năm",
          singer: "Prod. Duckie",
          path: "nhac/y2meta.com - PC - 10 Ngàn Năm ( Prod. Duckie ) [Official Audio] (128 kbps).mp3",
          image:
            "https://i.ytimg.com/vi/J5SILZjWpUQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB94RccVOHGYPad8TZoS65i1d0cIQ"
        },
        {
          name: "Về Bên Anh",
          singer: "Jack x Mihle",
          path: "nhac/y2meta.com - Về Bên Anh「Lofi Ver.」- Jack x Mihle _ Audio Lyric Video (128 kbps).mp3",
          image:
            "https://i.ytimg.com/vi/OTxe_r4LAyo/maxresdefault.jpg"
        },
        {
          name: "Lời tạm biệt chưa nói",
          singer: "GREY D  ORANGE",
          path: "nhac/y2mate.com - lời tạm biệt chưa nói  GREY D  ORANGE  Hương Mùa Hè show tập 3.mp3",
          image:
            "https://i.ytimg.com/vi/B9PDYlaV84w/maxresdefault.jpg"
        },
        {
          name: "Bằng Lòng Đi Em",
          singer: "NB3 Hoài Bảo x Nguyeen",
          path: "nhac/y2mate.com - Bằng Lòng Đi Em  Lofi ver  NB3 Hoài Bảo x Nguyeen.mp3",
          image:
            "https://i.ytimg.com/vi/SDWRWZEUs0o/maxresdefault.jpg"
        }
    ],
    setConfig: function(key, value) {
      this.config[key] = value;
      localStorage.setItem(PLAYER_STORAFE_KEY, JSON.stringify(this.config));
    },
    render: function(){
      const htmls =  this.songs.map((song,index) =>{
        return ` <div class="song ${index === this.currentIndex ? 'active': ''}" data-index = ${index}>
            <div class="thumb" style="background-image: url('${song.image}')">
            </div>
            <div class="body">
            <h3 class="title">${song.name}</h3>
            <p class="author">${song.singer}</p>
            </div>
            <div class="option">
            <i class="fas fa-ellipsis-h"></i>
            </div>
      </div>`
      })
      playlist.innerHTML = htmls.join('');
    },
    defineProperties: function(){
      Object.defineProperty(this, 'currentSong', {
        get: function(){
          return this.songs[this.currentIndex];
        }
      })
    },
    handleEvents: function(){
      const _this = this;
      // xử lí CD quay/ dừng
     const animateCdthumb =  cdThumb.animate([
        {transform: 'rotate(360deg)'}
      ],{
        duration:10000, // 10 seconds
        iterations:Infinity
      })
      animateCdthumb.pause();
      // xử lí phóng to/ thu nhỏ CD
      document.onscroll = function(){
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const newWidth =cdWidth - scrollTop;
        cd.style.width = newWidth > 0 ? newWidth  + "px" :0;
        cd.style.opacity = newWidth / cdWidth;
      }
     // Xử lí khi click play 
      PlayBtn.onclick = function(){
        if(_this.isPlaying){
          audio.pause();
        }  
        else {
          audio.play();
        }
      }

      // khi song được player
      audio.onplay = function(){
        _this.isPlaying = true;
        player.classList.add('playing');
        animateCdthumb.play();
      }
      //Khi song bị pause
      audio.onpause = function(){
        _this.isPlaying = false;
        player.classList.remove("playing");
        animateCdthumb.pause();
      }
      // Khi tiến độ bài hát thay đổi
      audio.ontimeupdate = function(){
        if(audio.duration){
          const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
          progress.value = progressPercent;
        }
      }
      // Xử lí khi tua song
      progress.onchange = function(e){
        const seekTime = audio.duration / 100*e.target.value;
        audio.currentTime = seekTime;
      }
      // khi next bài hát
      nextBtn.onclick = function(){
        if(_this.isRandom)
        {
          _this.randomSong();
        }
        else{
          _this.nextSong();
        }
        audio.play();
        _this.render();
        _this.scrollToActiveSong();
      }
      // khi previous bài hát
      prevBtn.onclick = function(){
        if(_this.isRandom)
        {
          _this.randomSong();
        }
        else
        {
          _this.preSong();
        }
        audio.play();
        _this.render();
        _this.scrollToActiveSong();
      }
      // khi bật tắt nút random bài hát
      randomBtn.onclick = function(e){
        _this.isRandom = !_this.isRandom;
        _this.setConfig('isRandom', _this.isRandom);
        randomBtn.classList.toggle('active', _this.isRandom);
      }
      // xử lí khi ấn nút lập lại bài hát
      repeatBtn.onclick = function(e){
        _this.isrepeat = !_this.isrepeat;
        _this.setConfig('isrepeat', _this.isrepeat);
        repeatBtn.classList.toggle('active', _this.isrepeat);
      }
      // xử lí next song khi audio ended
      audio.onended = function(){
        if(_this.isrepeat)
        {
          audio.play();
        }else{
          nextBtn.click();
        }
      }
      // lẳng nghe hành vi click vào PlayList
      playlist.onclick = function(e){
        const songNode = e.target.closest('.song:not(.active)');
        if(songNode || e.target.closest('.option')){
          // xử lí khi click vào song  
          if(songNode)
          {
            _this.currentIndex = Number(songNode.dataset.index);
            _this.loadCurrentSong();
            _this.render();
            audio.play();
          }
        }
      }
    },
    // Khi kéo 
    scrollToActiveSong: function(){
         setTimeout(() => {
          $('.song.active').scrollIntoView({
           behavior: 'smooth',
           block: `${this.currentIndex < 1 ? 'center' : 'nearest'}`
          }) 
       },400);
    },
    // Xử lí khi load bài hát
    loadCurrentSong: function(){
      heading.textContent = this.currentSong.name;
      cdThumb.style.backgroundImage =`url('${this.currentSong.image}')`;
      audio.src = this.currentSong.path;
    },
    loadConfig: function(){
      this.isRandom = this.config.isRandom;
      this.isrepeat = this.config.isRepeat;
    },
    // xử lí khi next bài hát mới
    nextSong: function(){
      this.currentIndex++;
      if(this.currentIndex >= this.songs.length)
      {
        this.currentIndex = 0;
      }
      this.loadCurrentSong();
    },
    // xử lí khi previous bài hát mới
    preSong: function(){
      this.currentIndex--;
      if(this.currentIndex < 0)
      {
        this.currentIndex = this.songs.length-1;
      }
      this.loadCurrentSong();
    },
    // xử lí khi random bài hát
    randomSong: function(){
      let newIndex
      do {
        newIndex = Math.floor(Math.random() * this.songs.length);
      } while(newIndex === this.currentIndex);
      this.currentIndex = newIndex;
      this.loadCurrentSong();
    },
    start: function(){
      // Gán cầu hình từ config vào ứng dụng
      this.loadConfig();
      // Định nghĩa các thuộc tính cho object
      this.defineProperties();

      // lắng nghe/ xử lý các sự kiện (DOM events)
        this.handleEvents();
      // Tải thông tin bài hát đầu tiên vài UI khi chạy ứng dụng
        this.loadCurrentSong();


        //render PlayList
        this.render();
        // hiện thị trang thái ban đầu của button reapeat và random
        // randomBtn.classList.toggle('active', this.isRandom);
        // repeatBtn.classList.toggle('active', this.isrepeat);
    }
}  

app.start();
