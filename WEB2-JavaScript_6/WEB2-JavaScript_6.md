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

<br>

## WEB2 JavaScript - 23. 배열과 반복문의 활용

```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>WEB2 - JavaScript</title>
    </head>

    <body>
        <h1>WEB</h1>
        
        <input type="button" value="night" onclick="
            var target = document.querySelector('body');
            if(this.value === 'night')  {
                target.style.backgroundColor = 'black';
                target.style.color = 'white';
                this.value = 'day';
                
                var alist = document.querySelectorAll('a');
                var i = 0;
                while(i < alist.length) {
                    alist[i].style.color = 'powderblue';
                    i += 1;
                }
            }
            else  {
                target.style.backgroundColor = 'white';
                target.style.color = 'black';
                this.value = 'night';

                var alist = document.querySelectorAll('a');
                var i = 0;
                while(i < alist.length) {
                    alist[i].style.color = 'blue';
                    i += 1;
                }
            }
        ">
        
        <ol>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>
        </ol>

        <h2>JavaScript</h2>
        <p>
            JavaScript (/ˈdʒɑːvəˌskrɪpt/[6]), often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming technologies of World Wide Web content production. It is used to make webpages interactive and provide online programs, including video games. The majority of websites employ it, and all modern web browsers support it without the need for plug-ins by means of a built-in JavaScript engine. Each of the many JavaScript engines represent a different implementation of JavaScript, all based on the ECMAScript specification, with some engines not supporting the spec fully, and with many 
            engines supporting additional features beyond ECMA.
        </p>
    </body>
</html>
```
- 반복문을 사용하여, 버튼을 클릭(주간모드 <-> 야간모드)하면 a 태그의 글자색이 변하게 된다.

### Reference
> https://opentutorials.org/course/3085/18850