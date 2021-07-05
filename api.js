const fetch = require("node-fetch")
const owoo = require('owofy');
const wiki = require('wikipedia');
const falsis = require("falsisdb");
const db = new falsis()
const translate = require('@vitalets/google-translate-api');
module.exports = {
    youtube: async function(req, res) {
if(!req.query.title) {
    res.json({error: "Lütfen bir arama girin. Örnek: /youtube?title=nabim"})
}else{
    fetch(`https://api.leref.ga/yt-search?search=${req.query.title}`).then(a => a.json()).then(video => {
        if(video.statusCode === 400){
            res.json({error: "Böyle bir video bulunamadı."})
        }
        res.json({video})
    })
} /*     title: video.videos.0.title,
         description: video.videos.0.description,
         link: video.videos.0.url,
         id: video.videos.0.videoId,
         thumbnail: video.videos.0.image,
         seconds: video.videos.0.seconds,
         timestamp: video.videos.0.timestamp,
         date: video.videos.0.ago,
         views: video.videos.0.views,
         publisher: video.videos.0.author.name,
         publisherURL: video.videos.0.author.url*/
    },
    wiki: async function(req, res) {
        if(!req.query.wiki){
            res.json({error: "Lütfen bir wiki araması girin.: /wiki?wiki=Batman"})
        }
        const page = await wiki.page(req.query.wiki);
        const summary = await page.summary();
        const kaynak = await wiki.setLang("tr");
        res.json({kaynak, page, summary})
},
color: async function(req, res) {
if(!req.query.hex) {
    res.json({error: "Lütfen bir hex kodu girin. Örnek: /color?hex=BDAAF9"})
}else{
    fetch(`https://www.thecolorapi.com/id?hex=${req.query.hex}&format=png`).then(a => a.json()).then(x => {
        res.json({
            name: x.name.value,
            hex: x.hex.value,
            image: "https://some-random-api.ml/canvas/colorviewer?hex=" + req.query.hex,
            rgb: {
            r: x.rgvideo.r, 
            g: x.rgvideo.g, 
            b: x.rgvideo.b, 
            rgb: x.rgvideo.value
        },
            hsl: {
            h: x.hsl.h, 
            s: x.hsl.s, 
            l: x.hsl.l, 
            hsl: x.hsl.value
        }
        })
    })
}
},
translate: async function(req, res) {
     if(dvideo.includes(`${req.query.key}`) === true){
    if(!req.query.text){
        res.json({error: "Lütfen çevirilecek yazıyı giriniz. /translate?text=Hello"})
    }else if(!req.query.lang) {
        res.json({error: "Lütfen çevirilecek dili giriniz. /translate?text=Hello&lang=tr"})
    }
    if(!req.query.from) {
    res.json({error: "Lütfen hangi dilden çevirileceğini yazın. /translate?text=Hello&lang=tr&from=en"})
    }
   await translate(req.query.text, { from: req.query.from, to: req.query.lang }).then(c => {
   res.json({translated: c.text})
})
}else{
    res.json({error: "Üzgünüm, bu apiyi kullanabilmek için bir api key'e ihtiyacın var. ?key=KEY"})
}
},
    npm: async function (req, res) { 
        if(dvideo.includes(`${req.query.key}`) === true){
        if(!req.query.name) {
            return("Lütfen bir npm adı belirtin. Örnek: /api/npm?name=falsisdb")
        }
        
        fetch(`https://api.leref.ga/npm?search=${req.query.name}`).then(x => x.json()).then(z => {
            if(z.statusCode === 400) {
                res.json({error: "No such NPM Package was found."})
            }
          res.json({name: z.name,
            description: z.description,
            version: z.version,
            owner: z.publisher,
            link: z.npm,
            downloads: z.downloads})
        })
    }else{
        res.json({hata: "Üzgünüm, bu apiyi kullanabilmek için bir api key'e ihtiyacın var.  ?key=KEY"})
    }
      },
      owofy: async function (req, res) {
        if(!req.query.message) return(res.json({
            hata: "Please specify a message. Example: /api/owofy?message=Falsis"
          }))
          var owo = owoo(req.query.message)
          res.json({
            owo
          })
        },
        dog: async function (req, res) { 
            fetch(`https://dog.ceo/api/breeds/image/random`).then(x => x.json()).then(z => {
              res.json({link: z.message})
            })
          },
            lyrics: async function (req, res) { 
                       if(!req.query.title) return(res.json({
              hata: "Lütfen bir şarkı adı gir Örnek: /api/lyrics?title=daisy"
            }))
            fetch(`https://api.leref.ga/lyrics?song=${req.query.title}`).then(x => x.json()).then(z => {
              res.json({lyrics: z.lyrics})
            })
          },
            cat: async function (req, res) { 
            fetch(`https://some-random-api.ml/img/cat`).then(x => x.json()).then(z => {
              res.json({link: z.link})
            })
          }
}
