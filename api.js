const fetch = require("node-fetch")
const owoo = require('owofy');
const wiki = require('wikipedia');
const falsis = require("falsisdb");
const db = new falsis()
const translate = require('@vitalets/google-translate-api');
module.exports = {
    wiki: async function(req, res) {
        if(!req.query.wiki){
            res.json({error: "Lütfen bir wiki araması girin.: /wiki?wiki=Batman"})
        }
        const page = await wiki.page(req.query.wiki);
        const summary = await page.summary();
        const kaynak = await wiki.setLang("tr");
        res.json({kaynak, page, summary})
},
translate: async function(req, res) {
     if(db.includes(`${req.query.key}`) === true){
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
        if(db.includes(`${req.query.key}`) === true){
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
              hata: "Please enter a song name. Example: /api/lyrics?title=daisy"
            }))
            fetch(`https://some-random-api.ml/lyrics?title=${res.query.title}`).then(x => x.json()).then(z => {
              res.json({lyrics: z.lyrics})
            })
          },
            cat: async function (req, res) { 
            fetch(`https://some-random-api.ml/img/cat`).then(x => x.json()).then(z => {
              res.json({link: z.link})
            })
          }
}
