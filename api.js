const fetch = require("node-fetch")
const owoo = require('owofy');
module.exports = {
    npm: async function (req, res) { 
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