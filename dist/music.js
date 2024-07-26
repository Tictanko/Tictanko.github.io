const ap = new APlayer({
    container: document.getElementById('aplayer'), //播放器容器元素
    autoplay: true,
    fixed: true,
    volume: 0.7,
    listFolded: true,
    mini: true,
    audio: [ //音频信息,包含以下
        {
            name: 'Happy(Prod. Hedyy)', //音频名称
            artist: '차노을', //音频艺术家
            url: 'http://music.163.com/song/media/outer/url?id=2151605096.mp3', //音频外链
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000004B0tMb4WO8Yz_3.jpg?max_age=2592000', //音频封面
            lrc: 'lrc1.lrc', //音频歌词，配合上面的lrcType使用
            theme: '#ffffff' //切换到此音频时的主题色，比上面的 theme 优先级高
        },
    ]
});