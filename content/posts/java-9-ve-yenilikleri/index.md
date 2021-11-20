---
title: JAVA 9 ve Yenilikleri
cover: ./java-9-ve-yenilikleri.jpg
date: 2017-11-14
description: Java 9 ile gelen önemli yenilikleri ve geliştirmeleri örnekler de sunarak özetleyeceğim..
tags: ['post','java']
---

Uzun süredir beklenen Java 9 eylül ayı sonunda resmi olarak duyuruldu. Bu yazıda Java 9 ile gelen önemli yenilikleri ve geliştirmeleri örnekler de sunarak özetleyeceğim.

**Çalışma Özeti:**

1.  Java 9 REPL JSHELL (Java Shell)
2.  Java 9 Module System
3.  Process API Değişiklikleri
4.  Factory Metotlar: Immutable List, Set, Map
5.  Try with resource
6.  Reactive Stream
7.  Anounymous inner Class’lar için Diamond Operator
8.  Optional üzerinde yapılan geliştirmeler
9.  Stream Apı’ındaki geliştirmeler
10.  @Deprecated Anatosyonundaki Geliştirmeler
11.  Http 2.0 Client

İlk olarak, Java 9’u [buradan](https://web.archive.org/web/20200222065537/http://www.oracle.com/technetwork/java/javase/downloads/jdk9-downloads-3848520.html) indirebilirsiniz.

Bu yeni sürüm ile birlikte hangi yenilikler geldiği sorusunu, önemli olduğunu düşündüğüm yenilikleri içeren liste üzerinden yola çıkarak cevaplayalım.


### Java REPL — JSHELL (Java Shell)

Java 9 ile birlikte yeni bir REPL (Read-Eval-Print-Loop) aracı olan **_Jshell_** resmi olarak yayınlandı.

‘**Repl** nedir?’ sorusuna yanıtlamak gerekirse; bir Shell arayüzüdür ve bu arayüz üzerinden girilen her kod, satırları okunarak çalıştırılır ve sonuçlar ekrana yazdırılır. Bir nevi komut satırı istemcisidir.

Java’nın REPL’i ise **_Jshell_** adıyla resmi olarak yayınlanmıştır. Böylece komut ekranı üzerinden kod parçaları yazılabilir ve direkt olarak yine burada çalıştırılabilir hale geldi. Artık özellikle küçük kod parçaları çalıştırmak istediğinizde dosyalar oluşturup derleyip çalıştırmaya ihtiyaç kalmadı.

Ek olarak noktalı virgülsüz de çalıştırabileceğiniz bir komut ekranı geldi. Burada istediğiniz kodları doğrudan çalıştırabilirsiniz. Oracle bu araç ile birlikte özellikle yeni başlayanlar ve pratik yapmak isteyenler için bire bir ortam sağlamış oldu.

Jshell’in kullanımını aşağıdaki örnekte bulabilirsiniz;

![](https://cdn-images-1.medium.com/max/800/0*0wvCbfFUneLe5_5R)

Örnekte görüldüğü gibi doğrudan kodlamaya başlayabilirsiniz. Java’da yapabileceğiniz her şeyi bu araç üzerinden de gerçekleştirebileceğinizi unutmayın.

Vereceğim örnekleri de sizlere **jshell** üzerinden sunacağım.

### Yeni Modül Sistemi

Java 9’un yeniliklerinden biri de Modül sistemindeki değişimler. Bu değişimler **_Jigsaw_** **Projesinin bir parçası olarak geliyor.**

-   Modüler JDK
-   Modüler Java Source Code
-   Modüler Run-time Images
-   Encapsulate Java Internal APIs
-   Java Platform Modül Sistemi

Java 9’dan önceki sürümlerde monolitik paketler (jarlar) ile Java tabanlı uygulamalar geliştiriyorduk. Yani bir Java projesi geliştirirken jar paketinin tamamını eklemek zorunluluğu projedeki dosya sayısını da artırıyordu.

Burada iki önemli sorun var. Bunlardan birisi kodu encapsulate etmek ve farklı modüller ile olan bağımlılıkları kontrol etmek. Diğeri ise dosya yollarını düzenlemenin zorluğu, tekrar eden dosyaların varlığına yol açmasıdır. Bunlara çözüm olarak Java 9 ile birlikte yeni bir Modül Sistemi geldi.

Artık her modül kendine ait bir tanımlayıcı içeriyor. “**requires**” kısmı bağlı olan modüler belirtilebiliyor. Buna ek olarak “**exports**” kısmında paketler arası erişilebilirlik yönetilebiliyor.

Aşağıda küçük bir örnek bulabilirsiniz;

```jsx
//module-info.java
module blog {
    exports com.netas.blog;
    requires modules;
}
```

Bu modüle descriptor sayesinde java modül yönetimi sağlayarak daha önce bahsettiğim iki sorunu da çözüyor.

### Process API Değişiklikleri

Process Api, işletim sistemi içerisinde bazı proseslerin yönetimi için kullanılır ve Java Sanal Makinesini kullanarak bu işlevi yürütür. Bu API’yi kullanarak prosesi çalıştırabilir, duraklatabilir, kapatabilirsiniz.

**_Peki, bu Api’da ne gibi değişiklikler oldu?_**

Yeni sınıflar ile birlikte yeni metotlar eklenerek, işletim sistemleri üzerindeki işlemlerin yönetim ve kontrolünü kolaylaştırılmayı amaçlayan geliştirmeler yapıldı.

Yeni değişiklikler, Proccess sınıfında child veya daha alt prosesleri tanımlamanıza, bu proseslerin PID’sini (process id) öğrenmenize, bu prosesler hakkında bilgileri anlık olarak izleyebilmenize ve daha fazlasına daha esnek ve kolay bir şekilde olanak sağlamaktadır. Merak edenler için eklenen sınıflar şunlar:
```jsx
java.lang.ProcessHandle
java.lang.ProcessHandle.Info
```
Küçük bir örnek ile gösterelim;

![](https://cdn-images-1.medium.com/max/800/0*a2O-AO5VmiSUU7Ud)

Örnekte ProcessHandle sınıfını kullanarak kullanılan prosesin bir objesini oluşturmuş olduk ve bu objenin bilgilerini info() metoduyla öğrendik.

### Factory Methods for Immutable List, Set, Map and Map.Entry

Java 9 ile birlikte gelen yenilik değiştirilemez collection nesnelerini sadece tek kod satırı ile oluşturmamızı sağlıyor.

Önceden değiştirilemez collection oluşturmak için aşağıdaki gibi bir kod bloğu yazmamız gerekiyordu.
```jsx
Set<Integer> set = new HashSet<>();

set.add(1);
set.add(2);
set.add(3);

set = Collections.unmodifiableSet(set);
```

Java 9 ile birlikte bunu kolayca tek satırda yapabiliyoruz.

```jsx
Set<Integer> ints = Set.of(1, 2, 3);

List<String> strings = List.of(“netas”, “blog”);
```

Factory metotlarla immutable List, Set ve Map objelerini daha kolay yaratmaya olanak sağlandı. Bu yenilik metotların kullanırken boş ve boş olmayan objeler yaratmamızı sağlıyor.

### Try with resource

Java 7 ile birlikte gelmiş olan exception handler yapısı kaynakları otomatik olarak yönetebiliyordu. Java 9’da bu konuda da bazı geliştirmeler yapıldı.

Örnek olarak aşağıdaki gibi bir okuma bloğumuz olduğunu varsayalım.

```jsx
BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
```

Java 7 ve 8’de try bloğunu aşağıdaki şekilde tanımlayabiliyorduk;
```jsx
try (BufferedReader r1 = reader) {
// do something
} catch (IOException e)
{
// do something
}
```

Java 9 ile birlikte daha kısa ve okunaklı bir şekilde ifade edebiliriz;

```jsx
try (reader) {
    // do something
} catch (IOException e){
// do something
}
```

Bu yenilik ile birlikte yazılan kod gereksiz parçalardan arınmış ve kod okunurluğu da artmış oluyor. Diğer bir artısı ise eskiden oluşabilecek kaynak sızıntılarından (resource leak) da kurtulmuş oluyoruz çünkü yeni bir obje tanımı yapmaya gerek duymuyoruz.

### Reactive Streams

Reactive Streams asenkron stream işlemleri için non-blocking kullanılan bir yapıdır. Scala ve Akka’da oldukça popüler olan reactive programlama Oracle’ın kararıyla reactive stream api adı altında Java 9 ile birlikte Java’ya entegre edildi.

Publish/Subscribe Freamwork’üne implement edilen bu yapı asenkron olarak işlev görebilmektedir. Yeni arayüzler aşağıda belirtildiği şekildedir.

-   Processor
-   Publisher
-   Subscriber
-   Subscription

### Anounymous inner Class’lar için Diamond Operator

Diamand Operator basitçe generic sınıflar için bir kurulum olarak tanımlanabilir. Java 9 ile birlikte artık inner sınıflar içinde kullanabilir hale geldik.

```jsx
List<Map<Integer,Set<String>>> netasList = new ArrayList<Map<Integer,Set<String>>>();
```
Burada new ile tanımladığımız yapının içine hangi objeyi içereceğini tekrar vermemiz gerekmemektedir. Çünkü tanımlama aşamasında List içinde zaten tanımlamış oluyoruz.
```jsx

List<Map<Integer,Set<String>>> netasList = new ArrayList<>();
```
Diamond operator’ü kısaca tanımladık. Konumuza dönecek olursak, Java 7 ile gelmiş olan diamond operatör yeniliğinde Java 8’de anounymous inner class’ların kullanımında kısıtlamalar göze çarpıyordu. Oracle da bunun farkına varmış olmalı ki, Java 9 ile bu sorunu ortadan kaldırdı.

### Optional üzerinde yapılan geliştirmeler

Java 9 ile birlikte birkaç tane kullanışlı metot daha Optional Api üzerine eklenmiş oldu. En önemli etkilerinden birisi ise direkt olarak stream özelliğini optional ifadesiyle birlikte kullanabilir hale geldik. Yeniliklerden önemli olanları aşağıda kısaca açıkladım.

**Stream:** Java 8’de stream ederken optional ile değer kontrolü yapmamız gerekmekteydi. Şimdi ise otomatik olarak bu kontrolü yapar hale gelmiştir.

```jsx
List<String> strings = streamOptional().filter(Optional::isPresent).map(Optional::get).collect(Collectors.toList());

List<String> newStrings = streamOptional().flatMap(Optional::stream).collect(Collectors.toList());
```

**ifPresentOrElse:** Bir değer var mı kontrolü yapar ve varsa değeri kullanarak istenilen işlemi gerçekleştirir. Aksi takdirde verdiğimiz diğer işlemi gerçekleştirmesini sağlayabiliriz.

**Or:** Bir değer varsa, o değer için Optional’ın değerini gönderecektir, diğer durumda or ile verdiğimiz işlemleri gerçekleştirebilir.

### Stream API’ındaki geliştirmeler

Stream içim birkaç yeni ve kullanışlı metot eklenmiş oldu.

Özellikle buradaki iki metot çok önemli, bunlardan birisi **takeWhile()** ve bir diğeri ise **dropWhile()** metotlarıdır.

**_TakeWhile():_** Kural yanlış olana kadar gelen değerleri stream eder.

**_DropWhile():_** Kural yanlış olana kadar gelen değerleri düşürecektir.

Tek örnek üzerinde gösterelim, takeWhile ile değerlerde boş olan gelene kadar yazdıralım, yine aynı örnekte dropWhile ile boşluk gelene kadarki değerleri düşürelim ve sonrasını yazdıralım.

### @Deprecated Anotasyonundaki Geliştirmeler

Java 8 ve öncesinde @Deprecated Anotasyonu sadece bir marker interface’inden ibaretti; Java 9 ile daha fazla bilgiye erişebilir hale geldi. Deprecated, açıklamaya ek olarak, gelecekte bir metodun var olup olmayacağını ve daha fazla kullanılmamasını gerektiğini anlatıyordu.

İki yeni parametre ile kullanışlılığı arttı: Bu parametrelerden birisi forRemoval ‘boolean’ değer alan ve bir metodun gelecek versiyonlarında var olup olmayacağını setlediğimiz özellik oldu; diğeri ise since parametresi hangi sürümden itibaren gerçekleşeceğini bildirmek için kullanılabilmektedir.

@Deprecated (forRemoval=true , since=”9")

### HTTP 2.0 Client

HTTP 2.0 implementasyonu Java 9 ile birlikte Java’da var olmaya başladı ve HTTPURLConnection’ın yerini aldı. HTTP 2.0 ile Websocket de Java9 ile birlikte desteklenmeye başlandı. Bu yeni API’nin önemli noktalarından biri Java’daki ilk Incubator modül olmasıdır.

Incubator modül kavramı ise temelde Java’nın bir sonraki sürümlerinde de benimsenebileceğini ve üzerinde geliştirmelerin olabileceğini gösteriyor. Aksi durumda ise silinmesi söz konusu olabilir.

-   HttpClient isteklerin oluşturulmasını ve gönderilmesini yönetir.
-   HttpRequest, HttpClient aracılığıyla gönderilecek bir istek oluşturmak için kullanılır.
-   HttpResponse, gönderilen isteğin yanıtını tutar.

HTTP 2.0 ile birlikte iki yönlü iletişim, tek bir TCP bağlantısı ile çoğullama, uzun sürebilen bağlantılar, durum bilgisi içeren bağlantılar yapılabiliyor.

___

Benim önemli olarak gördüğüm yenilik ve geliştirmeleri açıkladım. Ama Java 9 çok çok daha fazlasını bize sunuyor. Burada özet olarak geçtiğimiz özellikleri bile uzun uzun incelemek gerekiyor.

Hoş geldin Java 9 :)