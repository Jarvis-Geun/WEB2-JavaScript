# 2021.10.12(TUE) 생활코딩 WEB2-JavaScript 강의

## WEB2 JavaScript - 29. 객체 예고

- 이미 아는 내용
- 객체 : 서로 연관된 함수와 서로 연관된 변수들을 grouping 해서 정리정돈 하기 위한 수납상자

### Reference
> https://opentutorials.org/course/3085/18884

<br>

## WEB2 JavaScript - 30. 객체 쓰기와 읽기

- 객체 : 이름이 있는 정리정돈 상자
- 객체 생성법, 객체의 데이터를 가져오는 법, 객체에 데이터를 넣는 법
<br>

```HTML
<body>
    <h1>Object</h1>
    <h2>Create</h2>
    <script>
        var coworkers = {
            "programmer" : "egoing",
            "designer" : "leezche"
        };
        document.write("programmer : "+coworkers.programmer+"<br>");
        document.write("designer : "+coworkers.designer+"<br>");
        coworkers.bookkeeper = "duru";
        document.write("bookkeeper : "+coworkers.bookkeeper+"<br>");
        coworkers["data scientist"] = "taeho";
        document.write("data scientist : "+coworkers["data scientist"]+"<br>");
    </script>
</body>
```
- 객체에 데이터를 넣는 방법은 두가지가 있다. 첫번째는 객체를 정의해줄 때 미리 정의하는 방법, 두번째는 이미 정의된 객체에 데이터를 추가하는 방법이다. 아래의 코드가 바로 그것이다.
```HTML
객체에 데이터 추가하기 1
<script>
    var coworkers = {
        "programmer" : "egoing",
        "designer" : "leezche"
    };
</script>
```
```HTML
객체에 데이터 추가하기 2

<script>
    coworkers.bookkeepr = "duru";
</script>
```

<br>

객체의 이름에 공백(띄어쓰기)가 있을 경우, 기존의 방법으로는 정의할 수 없다. 따라서 아래의 코드처럼 새로운 방법(배열 사용)을 사용해야 한다. 불러올 때도 마찬가지의 방법을 사용해야한다.
```HTML
<script>
    coworkers["data scientist"] = "taeho";
    document.write(coworkers["data scientist"]);
</script>
```

### Reference
> https://opentutorials.org/course/3085/18853