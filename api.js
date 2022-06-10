const fetch = require("node-fetch")
const wiki = require('wikipedia');
const falsis = require("falsisdb");
const db = new falsis()
const translate = require('@vitalets/google-translate-api');
const path = require("path");
const color = require("color")
const lyricsFinder = require("@jeve/lyrics-finder");
var json = require(path.join(process.cwd(), "index.json"))
module.exports = {
  color: async function(req, res){
    if(!req.query.hex) {
      if(!req.query.rgb){
      res.json({error: json.color.error,
               queries: json.color.queries.join(", ")})
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
      res.json({error: json.color.error2,
      queries: json.color.queries.join(", ")})
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
res.json({
  error: "ERROR CODE 503 - Service Unavailable"
})
},
    wiki: async function(req, res) {
        if(!req.query.wiki){
            res.json({error: json.wiki.error,
             queries: json.wiki.queries.join(", ")})
        }
        const page = await wiki.page(req.query.wiki);
        const summary = await page.summary();
        const kaynak = await wiki.setLang(req.query.lang || "tr");
        res.json({kaynak, page, summary})
},
translate: async function(req, res) {
     if(db.includes(`${req.query.key}`) === true){
    if(!req.query.text){
        res.json({error: json.translate.error,
             queries: json.translate.queries.join(", ")})
    }else if(!req.query.lang) {
        res.json({error: json.translate.error3,
             queries: json.translate.queries.join(", ")})
    }
    if(!req.query.from) {
    res.json({error: json.translate.error2,
             queries: json.translate.queries.join(", ")})
    }
   await translate(req.query.text, { from: req.query.from, to: req.query.lang }).then(c => {
   res.json({translated: c.text})
})
}else{
    res.json({error: json.key,
queries: json.translate.queries.join(", ")})
}
},
    npm: async function (req, res) {
        if(db.includes(`${req.query.key}`) === true){
        if(!req.query.name) {
            res.json({error: json.npm.error,
queries: json.npm.queries.join(", ")})
        }

        fetch(`http://registry.npmjs.com/${req.query.name}`).then(x => x.json()).then(z => {
            if(z.error === "not found") {
                res.json({error: json.npm.error2,
queries: json.npm.queries.join(", ")})
            }
          res.json({
            name: z.name,
            description: z.description,
            version: z["dist-tags"].latest,
            owner: z.maintainers[0].name,
            license: z.license,
            keywords: z.keywords.join(", "),
            url: 'https://npmjs.org/package/' + z.name,
            readme:{
                text: z.readme,
                file: z.readmeFilename,
                homepage: z.homepage
            }
        })
        })
    }else{
        res.json({error: json.key,
            queries: json.npm.queries.join(", ")})
    }
      },
      owofy: async function (req, res) {
        if(!req.query.message) return(res.json({
            error: json.owofy.error,
queries: json.owofy.queries.join(", ")
          }))
          var a = req.query.message
          var owo = a.split("r").join("w").split("l").join("w")
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
             error: json.lyrics.error,
queries: json.lyrics.queries.join(", ")
            }))
            try {
            lyricsFinder.LyricsFinder(req.query.title).then((data) => {
              if(!data) {
                res.json({
                error: "Cannot find lyrics matched with '" + req.query.title + "'"
              })
            }else{
              res.json({
                lyrics: data
              })
            }
          })
        }catch(err) {
            res.json({
              error: "Cannot find lyrics matched with '" + req.query.title + "'"
            })
          }
          },
            cat: async function (req, res) {
            fetch(`https://some-random-api.ml/img/cat`).then(x => x.json()).then(z => {
              res.json({link: z.link})
            })
          }
}
