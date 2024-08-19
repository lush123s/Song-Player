let arr = [
    { name: 'JUJALARIM FUNK', url: './songs/Juljirm.mp3', image: 'https://static.vecteezy.com/system/resources/thumbnails/040/572/385/small_2x/ai-generated-skeleton-gangster-in-black-suit-and-hat-on-background-of-money-generative-ai-photo.jpg' },
    { name: 'Koi Si', url: './songs/koi si.mp3', image: 'https://i.ytimg.com/vi/-SbXcBG67Oo/maxresdefault.jpg' },
    { name: 'MONTAGEM CORAL', url: './songs/montagem.mp3', image: 'https://qph.cf2.quoracdn.net/main-qimg-3be2088e92c69897cb5328e2f0587c80-pjlq' },
]

let songs = document.getElementById('songs');
let audio = new Audio();
let selectedsong = 0;
let leftscreen = document.getElementById('left');
let forword = document.getElementById('forword')
let play = document.getElementById('play')
let backword = document.getElementById('back')


function main() {

    let clutter = '';
    arr.forEach(function (value, index) {
        clutter += `<div class="song-card" id="${index}">
        <div class="part-1">
        <img src="${value.image}" alt="">
        <h3 id="${index}">${value.name}</h3>
        </div>
        <h6>${audio.duration}</h6>
        </div>`
    })
    audio.src = arr[selectedsong].url;

    leftscreen.style.backgroundImage = `url(${arr[selectedsong].image})`
    songs.innerHTML = clutter;
    audio.addEventListener("timeupdate", function () {
        document.querySelector('.circle').style.left = (audio.currentTime / audio.duration) * 100 + '%'
    })
    document.querySelector('.seekbar').addEventListener('click', function (e) {
        let percant = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector('.circle').style.left = percant + '%';
        audio.currentTime = ((audio.duration) * percant) / 100
    })
}
main()

songs.addEventListener('click', function (dets) {
    selectedsong = dets.target.id;
    play.innerHTML = '<i class="ri-pause-line"></i>';
    flag = 1;
    main()
    audio.play()
})

let flag = 0;
play.addEventListener('click', function () {
    if (flag === 0) {
        play.innerHTML = '<i class="ri-pause-line"></i>';
        flag = 1;
        main()
        audio.play()
    }
    else {
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        flag = 0;
        main()
        audio.pause()
    }
})

forword.addEventListener('click', function () {
    if (selectedsong < arr.length - 1) {
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        flag = 0;
        selectedsong++;
        main();
        audio.play
    }
    else {
        forword.style.opacity = 0.5;
        forword.style.pointerEvents = 'none'
    }
})
backword.addEventListener('click', function () {
    if (selectedsong > 0) {
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        flag = 0;
        selectedsong--;
        main();
        audio.play
    }
    else {
        backword.style.opacity = 0.5;
        backword.style.pointerEvents = 'none'
    }
})