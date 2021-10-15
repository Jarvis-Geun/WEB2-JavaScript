# 2021.10.15(FRI) 생활코딩 WEB2-JavaScript 강의

## WEB2 JavaScript - 34. 파일로 쪼개서 정리 정돈하기

- 내 홈페이지에 여러 개의 링크가 연결되어 있고, 이 연결된 링크의 웹페이지 모두 부분적으로 동일한 JavaScript 코드로 구현되어 있다면(예를 들어 다크모드, 스크롤 등) 각 html 파일마다 중복된 코드를 입력해주어야 하는 불편함이 있다. 이는 비용이나 가독성의 측면에서 효율을 매우 크게 떨어지게 하기 때문에, 이를 해결할 방법이 필요하다.

- 이러한 문제를 해결할 수 있는 방법은, 중복된 JavaScript 코드를 파일로 만들어 필요한 웹페이지가 있을 때마다 불러오는 것이다. 이는 이전에 공부한 CSS에서 배운 내용과 유사하다. CSS 경우, 확장자를 `.css`로 설정하였으며 JavaScript의 경우, 확장자를 `.js`로 설정해주면 된다.

### 전체 코드(비효율적인 코드)
```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>WEB2 - JavaScript</title>
        <script>
            function setColor(color) {
                var alist = document.querySelectorAll('a');
                var i = 0;
                while(i < alist.length) {
                    alist[i].style.color = color;
                    i += 1;
            }
            }

            function NightDayHandler(parameter) {
                var target = document.querySelector('body');
            if(parameter.value === 'night')  {
                target.style.backgroundColor = 'black';
                target.style.color = 'white';
                parameter.value = 'day';
                
                setColor('powderblue');
            }
            else  {
                target.style.backgroundColor = 'white';
                target.style.color = 'black';
                parameter.value = 'night';

                setColor('blue');
            }
            }
        </script>
    </head>

    <body>
        <a href="WEB2-JavaScript_파일로쪼개서정리정돈하기.html"><h1>WEB</h1></a>
        
        <input type="button" value="night" onclick="
            NightDayHandler(this);
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
<br>

위의 코드에서, 내용만 다르고 구조가 같은 코드가 1억 개가 있다고 한다면 파일의 용량, 가독성과 비용 등의 측면에서 매우 큰 손해를 얻게 된다. 이를 해결하기 위해 아래의 코드처럼 `<scipt> 태그`에 `<script src="필요한 파일의 이름.js">`처럼 js 파일을 지정해주면 된다.
<br>

### 전체 코드(효율적인 코드, .js 파일 사용)
```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>WEB2 - JavaScript</title>
        <script src="colors.js">
        </script>
    </head>

    <body>
        <a href="WEB2-JavaScript_파일로쪼개서정리정돈하기.html"><h1>WEB</h1></a>
        
        <input type="button" value="night" onclick="
            NightDayHandler(this);
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

### Reference
> https://opentutorials.org/course/3085/18856

<br>

## WEB2 JavaScript - 35. 라이브러리와 프레임워크

- jQuery : 가장 유명한 JavaScript 프레임워크
- 프레임워크를 사용하면 복잡한 코드(예를 들어 반복문 등)를 훨씬 간결한 코드로 작성할 수 있다.

<br>

```HTML
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
```
위의 코드는 많은 jQuery 프레임워크 중 Google jQuery 버전 중 하나인데, 위의 코드 한줄만 적어주면 아래의 주석처리된 `반복문`을 `훨씬 간결`하게 바꾸어줄 수 있다.

```HTML
function setColor(color) {
//     var alist = document.querySelectorAll('a');
//     var i = 0;
//     while(i < alist.length) {
//         alist[i].style.color = color;
//         i += 1;
// }
        $('a').css('color', color);
}
```
- 복잡하고 길었던 코드가, 단 한줄로 표현되는 것이 정말 놀랍다! 갓 프레임워크! 이렇게 편리함에도 불구하고, 어떻게 동작하는지에 대해서는 정확하게 알고 있어야 한다는 것을 명심한다.

### Reference
> https://opentutorials.org/course/3085/18886

<br>

## WEB2 JavaScript - 36. UI vs API

- UI : User Interface
- API : Application Programming Interface, 애플리케이션을 만들기 위해서 프로그래밍을 할 때 사용하는 조작장치
  Ex. 버튼을 누르면 경고창을 띄워주는 alert 함수 등

### Reference
> https://opentutorials.org/course/3085/18887

<br>

## WEB2 JavaScript - 37. 수업을 마치며

- 프로젝트를 만들어본다.

- document 객체 : 웹페이지에 있는 어떤 태그를 삭제하고 싶거나, 어떤 태그에 자식 태그를 추가하고 싶을 때 검색

- DOM(=Document Object Model) 객체 : document 객체만으로는 부족할 때 검색

- window 객체 : 웹페이지가 아닌 웹브라우저 자체를 제어해야 할 때 검색

- ajax : 웹페이지를 reload 하지 않고 정보를 변경하고 싶을 때 검색, 현대적인 웹앱을 만드는데 필수적인 테크닉

- cookie : 웹페이지가 reload 되어도 현재 상태를 유지하고 싶을 때 검색, 사용자를 위한 개인화된 서비스 제공가능

- offline web application : 인터넷이 끊겨도 동작하는 웹페이지를 만들고 싶을 때 검색

- webRTC : 화상 통신 웹앱을 만들고 싶을 때 검색

- speech API : 사용자의 음성을 인식하고 음성으로 정보를 전달하고 싶을 때 사용

- webGL : 3차원 그래픽으로 게임과 같은 것을 만들고 싶을 때 검색

- webVR : 가상현실을 구현해보고 싶을 때 검색

### Reference
> https://opentutorials.org/course/3085/18888