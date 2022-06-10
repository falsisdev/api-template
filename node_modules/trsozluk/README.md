# trsozluk
## Artık Türk Dil Kurumundan istediğiniz sözcüğü JavaScript'le aratmak çok kolay!

### Modülün Amacı
<code>Modül insanların herhangi bir API KEY'e ihtiyaç duymadan çok basit bir şekilde Türk Dil Kurumundan istedikleri kelimeyi aratmalarını sağlamaktadır. Bu modül sayesinde kelimenin anlamlarından, özelliklerine; telaffuzundan, örneklerine kadar birçok şeyi BASİTLEŞTİRİLMİŞ Json verisi ile alabilirsiniz.</code>

### Proje Sahipleri

**Projenin ana sahipleri: [Kayro](https://npmjs.com/~kayro) ve [Rhino](https://npmjs.com/~fleeingrhinoo)**
Kodları Yazma Hakkındaki Öneri => [Kayro](https://npmjs.com/~kayro)
Kodların Taslakları => [Kayro](https://npmjs.com/~kayro)
Lisans Dosyası => [Kayro](https://npmjs.com/~kayro)
Kodlara Eklenen Özellikler => [Rhino](https://npmjs.com/~fleeingrhinoo)
README ve gitignore dosyaları => [Rhino](https://npmjs.com/~fleeingrhinoo)
Test Dosyası => [Rhino](https://npmjs.com/~fleeingrhinoo)

Kayro Github:
https://github.com/egekayro46/

Rhino Github:
https://github.com/ardakaragoz/

### Gelelim Kodlara


## TRSOZLUK
 * [Tanımlama](#tanımlama)
 * [Örnekler](#örnekler)
 * [SSS](#sss)
 * [İletişim](#iletisim)


## Tanımlama
 Modülü Kullanmadan Önce Tanımlamamız Lazım. Bunun için şu kodu kullanmak yeter :)
 ```js
  const tdk = require('trsozluk')
  ```

## Örnekler
  Kodları Nasıl Kullanacağınızla İlgili Örnek Aşağıda Verilmiştir:

**Birinci olarak kodlar async temelli çalışmaktadır. Bu nedenle bu kodları kullanmak için .then ya da await fonksiyonlarını kullanmanız gerekmektedir. İkisinden de basit örnekler aşağıdadır.**

THEN İLE NASIL YAPILABİLİR?

```js
//.then
tdk('Gergedan').then(anlam => { 
/*
tdk('İstediğiniz Kelime').then(veriAdı => {

})

Şeklinde yapabilirsiniz
*/
console.log(anlam)
```

SONUÇ:

```js
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
```
AWAIT İLE NASIL YAPILABİLİR?

```js
//await
async function Rhino() {
    const anlam = await tdk('Gergedan') //Gergedan Yerine aranacak sözcüğü de yapabilirsiniz.
    console.log(anlam)
}
Rhino()
```

SONUÇ:

```js
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
```

**Gördüğünüz gibi kullanımı oldukça basit ve okunurluğu da oldukça güzel**

## SSS

Sıkça sorulan sorulardan bazılarının cevabı şu şekildedir:

- Ben direkt tdk('Gergedan') gibi then veya await kullanmadan yapsam çalışır mı?

> Üzgünüz, ancak bu konuda veri çekme işi async zorunluluklu bir eylem olduğu için iki yöntemden birini yapmanız gerekmektedir. Bu durum can sıkıcı olsa da uzun bir süre böyle kalacaktır.

- Mesela ben kelimenin anlamını aldırmak istiyorum o zaman ne yapacağım?

```js
async function Rhino() {
    const anlam = await tdk('Gergedan') //Gergedan Yerine aranacak sözcüğü de yapabilirsiniz.
    console.log(anlam.anlam)
}
Rhino()
```

ve bunun gibi tüm verileri .veriAdı şeklinde alabilirsiniz.

- Modüldeki kodlar bir lisansa sahip mi?

> Evet modülümüzdeki her şey MIT lisansına sahip. Bu da modülü 3. kişilerin kendi modülü gibi paylaşmasının önüne geçiyor. Bu yanlış anlaşılmasın, herkes istediği gibi bu modülü kullanabilir. Ama bu modülü kimse kendi modülüymüş gibi bir yerlere yükleyemez.

- Başka modülleriniz var mı?

> Evet, birbirinden değişik konseptli güzel modüllerimize bakmak için [Rhino NPM](https://npmjs.com/~fleeingrhinoo)

## Iletişim

İletişim için (destek, bug vb.) aşağıdaki yerlerden bana ulaşabilirsiniz.

  [E-Mail](mailto:ahmetarda2006@hotmail.com.tr)

  [GitHub](https://github.com/ardakaragoz)

  [Discord](https.//discord.gg/66qSv9W)
  
  [YouTube](https://www.youtube.com/channel/UCdJN1G13UswgVrnq0PyA5lA)

