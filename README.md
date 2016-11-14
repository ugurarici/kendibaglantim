# Kendi Güvenli Bağlantınızı Oluşturma Rehberi
Herkes için "Kendi Güvenli Bağlantınızı Oluşturma Rehberi", kendibaglantim.com web sitesi. DigitalOcean'dan sunucu kiralama, OpenVPN kurulumu ve kullanımı anlatılır.

* Web sitesinde inceleyin: https://kendibaglantim.com
* Facebook'ta Takip Edin: https://facebook.com/kendibaglantim
* Twitter'da Takip Edin: https://twitter.com/kendibaglantim

[![Kendi Güvenli VPN Bağlantınızı Kurun - kendibaglantim.com](https://kendibaglantim.com/assets/img/kendibaglantim-mutlu-adam-facebook.jpg)](https://kendibaglantim.com)

## Katkıda Bulunun

kendibaglantim.com için öneri, içerik ve teknoloji anlamında yardımlarınıza açığız.

Şu anda video olarak sunulan anlatım adımlarının metin karşılıklarına ihtiyacımız var, ayrıca Linux cihazlarda kurulum için videolarımız da bulunmuyor.

Web sitesi tarafındaki düzenleme önerileriniz için Pull Request oluşturabilirsiniz.

## Geliştirme Ortamı

Sistemin geliştirilmesinde gulp ve eklentileri kullanılmıştır. Geliştirme yapılacak ortamda nodejs ve npm kurulu olması gerekmektedir.

Projeyi yerelinize kopyaladıktan sonra terminalinizi açın, proje dizinine gelin ve öncelikle ```npm install``` ile gerekli gulp paketlerinin yüklenmesini sağlayın.

Ardından (şu an yok ama eklenmiş olma ihtimaline karşın) bower paketlerinin de indirilmesi için ```bower install``` komutunu çalıştırın.

Bu kurulumlar tamamlandıktan sonra ```gulp``` komutunu çalıştırarak /dev dizini içerisindeki geliştirme dosyalarının derlenip, yayına uygun şekilde /public dizinine yerleştirilmesini sağlayabilirsiniz.
Bu komut aynı zamanda geliştirme ortamındaki değişiklikleri takip eder. Yani o dinliyorken /dev dizini içinde geliştirme anlamında yaptığınız her değişiklik doğrudan işleme konulur, gerekli gulp görevleri çalıştırılarak /public içindeki ilgili alanlar güncellenir.

Tüm geliştirme işlemleri /dev dizini altında yapılır, /public dizini altındaki dosyalar yayına gönderilir.
