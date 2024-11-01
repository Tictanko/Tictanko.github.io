const ap = new APlayer({
    container: document.getElementById('aplayer'), //播放器容器元素
    autoplay: true,
    fixed: true,
    volume: 0.7,
    listFolded: true,
    mini: true,
    audio: [ //音频信息,包含以下
        {
            name: '山脚', //音频名称
            artist: 'Jony J', //音频艺术家
            url: 'http://music.163.com/song/media/outer/url?id=1886366521.mp3', //音频外链
            cover: 'http://p1.music.126.net/JMdgOVaMn2myYZy1TIKPNA==/109951169213952419.jpg?param=130y130', //音频封面
            lrc: 'lrc1.lrc', //音频歌词，配合上面的lrcType使用
            theme: '#ffffff' //切换到此音频时的主题色，比上面的 theme 优先级高
        },
    ]
});