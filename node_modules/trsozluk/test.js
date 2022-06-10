const tdk = require('trsozluk') // Modül Tanımlaması

/*
Modülü Kullanmanın İki Yolu Var:

1: .then funcitonu içerisinde kullanabilirsiniz.

2: async functionu içerisinde await ile kullanabilirsiniz.

İsterseniz ikisinin de örneklerine bakalım
*/

//.then

tdk('Gergedan').then(anlam => { 
/*
tdk('İstediğiniz Kelime').then(veriAdı => {

})

Şeklinde yapabilirsiniz
*/
console.log(anlam)

/* SONUÇ
{
  anlam: 'Gergedangillerden, sıcak ülkelerde yaşayan, burnunun üstünde bir veya iki boynuzu bulunan, kalın derili, saldırgan bir hayvan (Rhinoceros inducus)',
  anlam2: 'Anlamı yok',
  anlam3: 'Anlamı yok',
  anlam4: 'Anlamı yok',
  anlam5: 'Anlamı yok',
  lisan: 'Lisan yok',
  ornek: 'Örnek yok',
  atasozu: 'Atasözü yok',
  cogul: 'Çoğul',
  ozel: 'Cins Bir Kelime',
  boolean_ozel: false,
  boolean_cogul: false,
  telaffuz: 'Telaffuzu Bulunamadı'
}
*/
})

// async - await Yöntemi

async function Rhino() {
    const anlam = await tdk('Gergedan') //Gergedan Yerine aranacak sözcüğü de yapabilirsiniz.
    console.log(anlam)
}
Rhino()

/* SONUÇ
{
  anlam: 'Gergedangillerden, sıcak ülkelerde yaşayan, burnunun üstünde bir veya iki boynuzu bulunan, kalın derili, saldırgan bir hayvan (Rhinoceros inducus)',
  anlam2: 'Anlamı yok',
  anlam3: 'Anlamı yok',
  anlam4: 'Anlamı yok',
  anlam5: 'Anlamı yok',
  lisan: 'Lisan yok',
  ornek: 'Örnek yok',
  atasozu: 'Atasözü yok',
  cogul: 'Çoğul',
  ozel: 'Cins Bir Kelime',
  boolean_ozel: false,
  boolean_cogul: false,
  telaffuz: 'Telaffuzu Bulunamadı'
}
*/


