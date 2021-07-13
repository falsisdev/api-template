const fetch = require("node-fetch")
const owoo = require('owofy');
const wiki = require('wikipedia');
const falsis = require("falsisdb");
const db = new falsis()
const translate = require('@vitalets/google-translate-api');
const path = require("path");
const color = require("color")
module.exports = {
  color: async function(req, res){
    if(!req.query.hex) {
      if(!req.query.rgb){
      res.json({error: require(path.join(process.cwd(), "index.json")).color.error, 
               queries: require(path.join(process.cwd(), "index.json")).color.queries.join(", ")})
      }
      const colorinfo = color(req.query.rgb)
      fetch(`https://www.thecolorapi.com/id?rgb=${req.query.rgb}&format=png`).then(a => a.json()).then(x => { 
        res.json({
          name: x.name.value ,
          hexcode: colorinfo.hex(),
          rgbcode: "rgb(" + colorinfo.rgb().color.join(", ") + ")",
          hslcode: "hsl(" + colorinfo.hsl().color.join(", ") + ")",
          luminosity: colorinfo.luminosity(),
          rgb: colorinfo.rgb(),
          hsl: colorinfo.hsl(),
          isLight: colorinfo.isLight(),
          isDark: colorinfo.isDark()
        })
      })
  }
  if(!req.query.rgb){
    if(!req.query.hex){
      res.json({error: require(path.join(process.cwd(), "index.json")).color.error2, 
      queries: require(path.join(process.cwd(), "index.json")).color.queries.join(", ")})  
    }
    const colorinfo = color("#" + req.query.hex)
    fetch(`https://www.thecolorapi.com/id?hex=${req.query.hex}&format=png`).then(a => a.json()).then(x => { 
  res.json({
    name: x.name.value ,
    hexcode: colorinfo.hex(),
    rgbcode: "rgb(" + colorinfo.rgb().color.join(", ") + ")",
    hslcode: "hsl(" + colorinfo.hsl().color.join(", ") + ")",
    luminosity: colorinfo.luminosity(),
    rgb: colorinfo.rgb(),
    hsl: colorinfo.hsl(),
    isLight: colorinfo.isLight(),
    isDark: colorinfo.isDark()
  })
})
  }
  },
    youtube: async function(req, res) {
if(!req.query.title) {
    res.json({error: require(path.join(process.cwd(), "index.json")).youtube.error, 
             queries: require(path.join(process.cwd(), "index.json")).youtube.queries.join(", ")})
}else{
    fetch(`https://api.leref.ga/yt-search?search=${req.query.title}`).then(a => a.json()).then(video => {
        if(video.statusCode === 400){
            res.json({error: "No such video was found"})
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
            res.json({error: require(path.join(process.cwd(), "index.json")).wiki.error, 
             queries: require(path.join(process.cwd(), "index.json")).wiki.queries.join(", ")})
        }
        const page = await wiki.page(req.query.wiki);
        const summary = await page.summary();
        const kaynak = await wiki.setLang("tr");
        res.json({kaynak, page, summary})
},
translate: async function(req, res) {
     if(db.includes(`${req.query.key}`) === true){
    if(!req.query.text){
        res.json({error: require(path.join(process.cwd(), "index.json")).translate.error, 
             queries: require(path.join(process.cwd(), "index.json")).translate.queries.join(", ")})
    }else if(!req.query.lang) {
        res.json({error: require(path.join(process.cwd(), "index.json")).translate.error3, 
             queries: require(path.join(process.cwd(), "index.json")).translate.queries.join(", ")})
    }
    if(!req.query.from) {
    res.json({error: require(path.join(process.cwd(), "index.json")).translate.error2, 
             queries: require(path.join(process.cwd(), "index.json")).translate.queries.join(", ")})
    }
   await translate(req.query.text, { from: req.query.from, to: req.query.lang }).then(c => {
   res.json({translated: c.text})
})
}else{
    res.json({error: require(path.join(process.cwd(), "index.json")).key,
queries: require(path.join(process.cwd(), "index.json")).translate.queries.join(", ")})
}
},
    npm: async function (req, res) { 
        if(db.includes(`${req.query.key}`) === true){
        if(!req.query.name) {
            res.json({error: require(path.join(process.cwd(), "index.json")).npm.error,
queries: require(path.join(process.cwd(), "index.json")).npm.queries.join(", ")})
        }
        
        fetch(`https://api.leref.ga/npm?search=${req.query.name}`).then(x => x.json()).then(z => {
            if(z.statusCode === 400) {
                res.json({error: require(path.join(process.cwd(), "index.json")).npm.error2,
queries: require(path.join(process.cwd(), "index.json")).npm.queries.join(", ")})
            }
          res.json({name: z.name,
            description: z.description,
            version: z.version,
            owner: z.publisher,
            link: z.npm,
            downloads: z.downloads})
        })
    }else{
        res.json({error: require(path.join(process.cwd(), "index.json")).key,
            queries: require(path.join(process.cwd(), "index.json")).npm.queries.join(", ")})
    }
      },
      owofy: async function (req, res) {
        if(!req.query.message) return(res.json({
            error: require(path.join(process.cwd(), "index.json")).owofy.error,
queries: require(path.join(process.cwd(), "index.json")).owofy.queries.join(", ")
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
             error: require(path.join(process.cwd(), "index.json")).lyrics.error,
queries: require(path.join(process.cwd(), "index.json")).lyrics.queries.join(", ")
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

