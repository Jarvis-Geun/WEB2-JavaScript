# 2021.10.08(FRI) 생활코딩 WEB2-JavaScript 강의

## WEB2 JavaScript - 19. 반복문 예고

### Reference
> https://opentutorials.org/course/3085/18881

<br>

## WEB2 JavaScript - 20. 배열

- 이미 아는 내용

### Reference
> https://opentutorials.org/course/3085/18825

<br>

## WEB2 JavaScript - 21. 반복문

- 이미 아는 내용

## Reference
> https://opentutorials.org/course/3085/18827

<br>

## WEB2 JavaScript - 22. 배열과 반복문

```HTML
<body>
    <h1>Loop & Array</h1>
    <script>
        var coworkers = ['egoing', 'leezche', 'duru', 'taeho', 'graphittie'];
    </script>
    <h2>Coworkers</h2>
    <ul>
        <script>
            i = 0;

            while(i < coworkers.length) {
                document.write('<li><a href="http://a.com/'+coworkers[i]+'">'+coworkers[i]+'</li>')
                i += 1;
            }
            
        </script>
    </ul>
</body>
```
- 반복문을 사용하면 배열의 값을 자유롭게 출력할 수 있다.

### Refence
> https://opentutorials.org/course/3085/18828