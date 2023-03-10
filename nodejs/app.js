//RESTful API oluşturmak için
const express = require('express')
const morgan = require('morgan')



const app = express()
const PORT = 8080


app.set('view engine', 'ejs')


app.listen(PORT)


/*
-- gelen istekler
-- send html kodu geri döndürür
-- req --> gelen istek
-- res --> dönderilen cevap
-- app.get('/about', (req, res) => { res.sendFile('<h1>Hakkımızda</h1>') })

-- sendFile .html dosyası geri döndürü
-- app.get('/about', (req, res) => { res.sendFile('./views/about.html', { root: __dirname }) })

-- render .ejs (görüntü motoru geri döndürü)
-- app.get('/about', (req, res) => { res.sendFile('about') })

*/

app.get('/', (req, res) => { res.render('index', { title: 'Anasayfa' }) })
app.get('/about', (req, res) => { res.render('about', { title: 'Hakkımızda' }) })

/*
-- saufa yönlendirme
-- about-us url sine istek gelir ise about sayfasına yönlendirir
*/
app.get('/about-us', (req, res) => { res.redirect('/about') })


/*
 404 sayfsı ıcın
-- senkron olarka calısır
-- arkasından gelen kodları engeller
*/
app.use(express.static('public'))
app.use(morgan('tiny')) /* consol ekranında raporlama yapar */
app.use((req, res) => { res.status(404).render('404', { title: '404' }) })
