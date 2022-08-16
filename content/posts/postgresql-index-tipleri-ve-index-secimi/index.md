---
title: 'Postgresql Indexleme Sanatı: Index Tipleri ve Index Seçimi'
cover: ./postgresql-index-tipleri-ve-index-secimi.jpg
date: 2022-08-15
description: "Indexleme, veri sorgulamalarını hızlandırmak için kullanılan en önemli özelliklerden biridir. Indexleme yaparken indexleme tipini doğru seçmek performansı doğrudan etkilemektedir. Postgresql’de her sorgu yapısına özel bir index tipi seçilebilir..."
tags: ['post','java']
---

Indexleme, veri sorgulamalarını hızlandırmak için kullanılan en önemli özelliklerden biridir. Indexleme yaparken indexleme tipini doğru seçmek performansı doğrudan etkilemektedir. Postgresql’de her sorgu yapısına özel bir index tipi seçilebilir.


>  Indexler her zaman performansı arttırıp sorguları hızlandırmaz. Eklenecek her index sorguyu hızlandırmayacağı gibi gereksiz eklenen indexler sorgunuzu yavaşlatacaktır. 
> 
> **Not: **indexler her sorguda kullanılmaz.

Indexlerimizi oluşturmak için sorgularımızı analiz etmek ve özellikle indexler tiplerini daha rahat açıklayabilmek için birkaç kavramın üzerinden geçmemiz gerekiyor.

Sorgunun nasıl planlandığı, sorgu optimizasyonu için en önemli koşuldur. Anlatılan tüm index tiplerini kullanmadan önce sizin durumunuza uygunu seçip, kendi sorgunuz üzerinde test etmeniz gerekir. Her durum için farklı index tipi farklı performans gösterebilir.

```sql

    EXPLAIN select * from user;
```

Explain ile yazılan sorgunun planına ulaşılabilir. Bu indexleme için oldukça önemlidir. Bu ifade bir sorgunun Nasıl çalıştığının planlandığı gösterilmektedir. Explain ile sorgu çalıştırılmaz, eğer sorguyu çalıştırırsanız nasıl çalıştırılacağını anlatır, sorgunun planını çıkartır.

    QUERY PLAN
    ------------------------------------------------------------------
     Seq Scan on user (cost=0.00..666 rows=99999 width=140)
    (1 row)

**Sequence scan:** tüm tabloyu tarar.Explain'i görselleştirmek için <a href="https://explain.dalibo.com/" target="_blank">dalibo </a> adlı online siteyi kullanabilirsiniz.

**Cost:** startup cost yok ise 0.000 şeklinde gösterilebilir. Sonraki ise tahmini costu betimlemektedir. Herhangi bir birimi yoktur ancak karşılaştırma için bir ölçüt olarak kullanılabilir. <a href="https://www.postgresql.org/docs/10/runtime-config-query.html#RUNTIME-CONFIG-QUERY-CONSTANTS" target="_blank"> Detaylı bilgi için inceleyebilirsiniz.</a>

**Analyze**, explain ile birlikte çalıştırıldığında sorgu  çalıştırılır ve daha detaylı bilgi vererek sorgu planını ve cost bilgisini yönlendirici bir biçimde gerçeğe yakın sonuçlar elde etmemizi sağlar.

```jsx
    EXPLAIN ANALYZE SELECT * from users;
```
**[pgBadger](https://github.com/darold/pgbadger)** analiz ve raporlama için kullanabilecek güzel seçeneklerden biridir.

Index yaratırken indexleme türünü **“using”** anahtar kelimesi kullanarak belirtebiliriz.

```jsx
    CREATE INDEX idx_users_email ON users(email);
```
Indexlemeler performans odaklı yapılardır. Böyle bir yapıda da hangi indexin kullanılacağı çok önemli bir kriter haline gelmektedir. Doğru indexleme için index türlerine göz atmalıyız.

<hr />

# Index Tipleri

Farklı tipteki indexlemelerin en büyük nedeni farklı sorgulamalarda gösterdiği performanslardır. Index seçerken kullandığımız/kullanacağımız sorguları analiz edebilir, böylece index türümüzü daha doğru seçip, veritabanımızın sorgu performansını artırabiliriz.

![Tarafını seç :)](./postgresql-index-turleri.jpeg)

Indexleme yöntemlerinin tüm özellikleri pg_am tablosunda saklanır. Bu tablo üzerinden Postgresql’in desteklediği index listesine ulaşabilirsiniz:

```jsx
    SELECT amname FROM pg_am;
```
* **B-tree** (Balanced Tree)
* **Hash**
* **GIST** (Generalized Search Tree)
* **SP-GiST**
* **GIN** (Generalized Inverted Index)
* **BRIN** (Block Range Index)

Indexi olmayan bir tabloda “where” ifadesiyle bir sorgu çalıştırdığımızda, postgresql sequence scan yapacak yani tüm tabloyu tarayacaktır.

Birden fazla aynı index olması query planer’ı ve analyze’ı biraz yavaşlatacaktır. Çünkü sistem hangi indexi kullanacağını seçmeye çalışacaktır. Yine, insert ve update operasyonlarında bu iki index içinde ayrı ayrı işlem yapılacağından ötürü yazma operasyonlarında da performans kaybı olabilir.

Bir index yaratılırken o tablo kilitlenir/locklanır. Üretim ortamında indexleme yapılırken çok dikkatli olunmalıdır. Locklama özellikle production ortamlarında bir sorun haline gelebilir. Bu nedenle **Concurrently** anahtar kelimesi ile eşzamanla indexleme işlemi yürütülmesi sağlanabilir. Böylece locklama’nın sistemde soruna yol açmasının önüne geçilebilir. Index yaratılırken bir tablo üzerindeki değişiklikler not alınır ve değişikler işlemeye başlanır. Index ve değişiklikler aynı seviyeye geldiğinde ise indexleme işlemi çok kısa sürede hayata geçirilip tamamlanır. Böylece index oluşturma işleminden, sistem olabildiğince az etkilenmiş olur. **Concurrently** işleminin normal indexlemeye göre çok daha uzun süreceği unutulmamalıdır.

```sql
    CREATE INDEX CONCURRENTLY idx_users_email ON users(email);
```
Indexleme işlemine sıralama ifadeleri verilebilir.

```sql
    asc, desc, nulls_first, nulls_last, orderable
```

Birden fazla kolon için indexleme işlemi gerçekleştirilebilir. **Unique** indexler de yaratılabilir ancak varolan ya da eklenen değerler kesinlikle unique/benzersiz olmalı, yoksa hata alınır.

```jsx
    ERROR:  duplicate key value violates unique constraint "table"
```

DROP index ile indexler kaldırılabilir ve tablonun locklanması istenmiyorsa yine concurrently keyword'ü ile işlem gerçekleştirilebilir. Daha önce de bahsettiğimiz gibi concurrently şeklinde çalıştırılması özelikle production için çok tavsiye edilmektedir.
```sql
    DROP INDEX index_name, index_name2,... ;
```

Concurrently taratılırken iptal edilmesi/connection kopması gibi işlemin istenmeyen şekilde yarıda kalması “ınvalid index” olarak işaretlenmesine ve indexin bozulmasına neden olabilir. Uzun sürebilecek concurrently indeklsmelerde buna dikkat edilmelidir. Böyle durumlarla karşılaşılmaması için bağlantının kopmayacağına emin olmalı ya da direkt servis üzerinde çalıştırılacağı garanti edilmelidir. Yine de karşılaşılıyorsa **REINDEX **ile hem normal hem concurrent index oluşumu sağlanabilir.
```jsx

"idx_new" btree (col) INVALID
-----------
REINDEX INDEX idx_new;
```

Indexlere “where” koşulu verebiliriz. Böylece sadece istediğimiz veri kümesini indexlememizi sağlarız. Bu yapı **partial index** olarak adlandırılmaktadır. Bu index türü ile taranacak indexleri azalttığımızdan ötürü doğru kullanımı oldukça performans artışı sağlayacaktır.

```sql
    CREATE INDEX partial_salary ON employee(level) WHERE salary > 5000;
```

Örnek; normal index 26 KB yer kaplarken, where ile oluşturduğumuz partial index ise 10KB gibi çok daha az yer kaplayabilir. Çok daha az bir veri kümesinde arama yapacağı için çok daha hızlı sonuç dönebilecektir. Partial index yaratmadan önce kesinlikle sorgularınızı incelemeli ve analiz etmelisiniz, yoksa oluşturduğunuz partial küme sizin sık arattığınız veri seti içinde değilse istediğiniz performansı alamayabilirsiniz.

## BTREE Index

Bir index yaratıldığında tipi verilmez ise default olarak btree oluşturulmaktadır. Özellikle “büyüktür”, “büyük eşittir”, “küçüktür”, “küçük eşittir”, “eşittir”, “between”, “is null”, “is not null” gibi sorguların hepsinde kullanılabilir. Like’lı ifadeler ise “sabit değer%” şeklinde ise kullanılabilir. Balance tree algoritmasını kullanmaktadır.

B-tree’nin index satırları sayfalardan (page) oluşmaktadır. Her sayfa, bu index satırlarında veriyi belirli bir key ve satıra referans (**TID**: tuple identifier, row identifier) şeklinde sıralı olarak tutmaktadır.


* Çoğu sorgu türü için en performanslı seçenektir.”>, >=, <, <=, =, IN, BETWEEN” gibi gibi..
* Varsayılan/Default sorgu tipidir.
* Çoklu kolon indexlemesini yapılabilir. 
  
```sql
CREATE INDEX ix_name ON users (first_name);

CREATE INDEX ix_name ON movies USING btree (first_name);

-- birden fazla kolon için tanımlama
CREATE INDEX idx_user_names  ON people (last_name, first_name);

```

>  PostgreSQL’in 13 versiyonunda B-tree üzerinde duplicate veriler için bir iyileştirme yapıldı. Bu iyileştirme ile birlikte tutulan veri miktarında azalma dolayısıyla performansa olumlu bir katkı sağlanmış oldu.

B-Tree index genellikle PostgreSQL’de en çok tercih edilen index türüdür. Çünkü verilerin hızlı aranmasına ve sıralanmasına olanak tanır, çok az ek yüke sahiptir. 
<hr />

## Hash Index

**Hash** daha çok eşitlik anında kullanılabilen bir index türüdür. Oluşum hızı index yaratma süresi açısından Btree’ye göre çok daha fazladır. Ancak kapladığı alan bakımından Btree’ye göre çok daha az bir yer kaplar. Çünkü Btree ağaç yapısında tutulurken, hash flat bir yapıda tutulmaktadır.
```sql
    CREATE INDEX ix_thing ON movies USING HASH(year);
```
Postgresql’de Hash indexler, hash tablo veri yapısını kullanır. Daha akılda kalıcı bir örnek olması için; Hash tablosu, Python’da bir Dict, Java’da bir HashMap gibi birçok dilde ortak bir veri yapısıdır. Bu da veriyi key-value şeklinde fiziksel olarak tuttuğunu göstermektedir. 

>  **Uyarı: PostgreSQL 10**'dan önce hash indexleme pek önerilmez.

Hash index, kullanım şekli açısından genellikle B-tree ile karşılaştırılmaktadır. 

* Eşitlik operatörü ile yapılan sorgular için iyi bir seçenektir. 

* Hash index, B-Tree indexinden daha az yer kaplar.

* Tabloya satırlar eklendikçe linear olarak büyüyen B-Tree indexinin aksine, Hash indexi ani artışlarla büyür.

Bazı durumlarda B-tree’den daha iyi performans gösterebilse de, birçok sınırlaması/limitasyonu mevcuttur.

* Hash indexler ile **“unique”** constraint kullanılamaz.
```sql
CREATE UNIQUE INDEX idx_unique_key ON table USING hash(key);
--------
ERROR:  access method "hash" does not support unique indexes
```
* Hash indexler birden fazla kolon için oluşturulamazlar. 
```sql
    CREATE INDEX idx_unique_key_name ON table USING hash(key, name);
ERROR:  access method "hash" does not support multicolumn indexes
```
* Hash indexleme yapılırken sıralama ifadelerine yer verilemez. 
```sql
    CREATE INDEX idx_key ON table USING hash(key desc);
ERROR:  access method "hash" does not support ASC/DESC options
```
* Hash indexleme yaptığınız bir tablo için Cluster kullanamazsınız.

Bütün bu değerlendirmelere rağmen hash indexleme çok sık başvurulan bir indexleme türü değildir. Hash index, select ve insert operasyonlarında daha iyi performans gösterebilir. Kullanılırken dikkatli olunması gerekir, saydığımız gibi birçok kısıtlamaya tabi tutulmuştur.

## BRIN: Block range index

Postgresql verileri varsayılan olarak 8 Kb’lık bloklar halinde saklamaktadır. Brin indexlemede, indexler tutulurken bloklar içerisindeki en büyük ve en küçük değerler baz alınır. B-tree’nin aksine blok içersinde sıralanmış tüm değerler değil, sadece min ve max değerler tutulur. Eski adıyla min-max indextir.

B-tree yaratıldığında 8Kb’lık veri setlerinin tümünü saklayacak şekilde bir indexleme yapar. Ancak BRIN ındex 8Kb’lık bloklardan sadece minumum ve maximum değerleri alarak index halinde saklar.

* Btree ile karşılaştırıldığında tutalan veri boyutuna bakarsak çok çok daha az olduğunu görebiliriz.
* Doğrudan bir veri yerine bir aralık üzerinde işlem yapılıyorsa çok performanslı çalışabilir.
* Sadece belirli veriler index için tutulduğundan ötürü en az yer kaplayan index türüdür.
* Özellikle big data ve veri analizi alanlarında range işlemlerinin çokluğundan dolayı tercih edilmektedir.

```sql
CREATE INDEX idx_btree ON users USING BTREE(test); // Size of index = 20 MB
CREATE INDEX idx_hash ON users USING HASH (test);  // Size of index = 39 MB
CREATE INDEX idx_brin ON users USING BRIN (test); // Size of index = 64 KB
```
Özellikle veri analizi veya big data gibi alanlarda işleri çok daha kolaylaştırabilecek bir indeksleme çeşididir. Çünkü sorgular genellikle belli aralıkları içermektedir. Örneğin milyonlarca insan profili varken siz “7 ve 15 yaş aralığında İngilizce dilini bilen” insan grubunu aratıp o aralıktaki insanları listeliyor olabilirsiniz. Milyonlarca veri üzerinden sadece belirli bir aralık istendiği için Brin çok efektif bir çalışma sağlayıp performans artışına neden olacaktır.

Index boyutunun küçülmesi, index üzerindeki arama performansını artıracaktır.

### GIN Index

**Generalized Inverted Index** ile her kelime için bir index ve bu indexin içinde aranan ifadenin geçtiği yerlerin listesini sıkıştırılmış olarak tutar.

* Bir kolonda array gibi çoklu verinin olması durumlarında kullanılabilir. Yani metin içinde aramalarda kullanılması önerilir
* **“Full text search”** işlerinde kullanılabilir.
* JSONB üzerinde yapılan aramalarda tercih edilebilir.
* Range ve array veri tiplerinde kullanılabilir
* ILIKE ile birlikte ‘%abc%’ şeklindeki aramalarda btree verimli çalışmaz. GIN tercih edilebilir.

```sql
    CREATE INDEX idx_test on test USING GIN(data);
```

>
  En sevilen içki türlerinden biridir 🥂 :)— Gin stands for Generalized Inverted Index and should be considered as a genie, not a drink.  — [README](https://git.postgresql.org/gitweb/?p=postgresql.git;a=blob;f=src/backend/access/gin/README;hb=HEAD)

## GIST

Generalized search tree, full text search için güçlü diğer bir adaydır. Btree karşılaştırma yapıları için kullanılırken, GIST’te ağaç yapısında veri tutmasına karşın daha çok modern veritabanlarındaki geodata, text documents gibi operatorler için kullanılmaktadır.

* Aynı kolonda değerlerin başka satırlarda çakışması durumlarında kullanılabilir.
* Indexleme yöntemidir ve bu index tipinden birçok index türetilebilir.
* **“Full text search”** işlerinde kullanılabilir.
* Geometrik veri türlerini indexlemek için kullanılırlar.
```sql
    CREATE INDEX ON table_name USING GIST (column_name class_name);
```
Bir GiST indexi **“lossy”**’dir. Yani index yanlış eşleşmeler üretebilir ve bu tür yanlış eşleşmeleri ortadan kaldırmak için tablonun gerçek satırını kontrol etmesi gerekir. (Bu yanlış sonuç döneceği anlamına gelmez, kesinlikle doğru sonuçlar üretir.)
<hr />

## TLDR;

Indexlerin birbirlerinden genel üstünlükleri yoktur. Her bir uygulama ya da kullanım senaryosu için farklı bir index çok daha performanslı çalışabilir. Yani index seçiminde sorgularınızın, tablo yapınızın ve kullanım aralıklarının oldukça büyük önemi vardır. Index seçimlerinde bütün bunlarla beraber sorgularınızı analiz ederek indexlemeyi yapmanız, istediğiniz performans artışlarınıza ulaşmanızı sağlayacaktır.
> İtiraf: İstediğim derinlikte yazamadım, hem çok uzun olacaktı hem de örnek kümelerini oluşturmak inanılmaz fazla zamanımı alacaktı. O kadar uzun süre yazma ve çaba göstermeye zaman ve motivasyonum olmadığı için ve sözümü tutmak için daha özet bir versiyonunu yayınlamış oldum.

<hr />

### Kaynaklar
* [**pg-dba-egitim/Indexing.md**](https://github.com/edib/pg-dba-egitim/blob/master/Indexing.md)
* [**Indexes in PostgreSQL**](https://habr.com/en/company/postgrespro/blog/441962/)
* [**PostgreSQL Sohbetleri: PostgreSQL'de Indexler**](https://www.youtube.com/watch?v=Ct73rDtYa6U)
