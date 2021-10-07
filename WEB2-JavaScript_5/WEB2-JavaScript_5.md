# 2021.10.07(THU) 생활코딩 WEB2-JavaScript 강의

## WEB2 JavaScript - 16. 조건문

- Boolean형을 이용하여 조건문을 만들 수 있다.
- 이미 알고있는 내용이라 따로 정리하지 않는다.

### Reference
> https://opentutorials.org/course/3085/18800

<br>

## WEB2 JavaScript - 17. 조건문의 활용

```HTML
<input id="night_day" type="button" value="night" onclick="
    if(document.querySelector('#night_day').value === 'night')  {
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('body').style.color = 'white';
        document.querySelector('#night_day').value = 'day';
    }
    else  {
        document.querySelector('body').style.backgroundColor = 'white';
        document.querySelector('body').style.color = 'black';
        document.querySelector('#night_day').value = 'night';
    }
">
```
위의 코드를 입력하면 한 개의 버튼으로 주간모드, 야간모드를 변경할 수 있다. 조건문을 사용하였다.

### Reference
> https://opentutorials.org/course/3085/18878

<br>

## WEB2 JavaScript - 18. 리팩토링 중복의 제거

- 결과의 변경 없이 코드의 구조를 재조정하는데, 이는 주로 가독성을 높이고 유지보수를 편하게 하는 것에 목적을 둔다. 따라서 복잡한 코드를 더 간결하게 바꾸어주면 가독성과 유지보수 측면에서 유리하다.

```HTML
<input id="night_day" type="button" value="night" onclick="
            if(document.querySelector('#night_day').value === 'night')  {
                document.querySelector('body').style.backgroundColor = 'black';
                document.querySelector('body').style.color = 'white';
                document.querySelector('#night_day').value = 'day';
            }
            else  {
                document.querySelector('body').style.backgroundColor = 'white';
                document.querySelector('body').style.color = 'black';
                document.querySelector('#night_day').value = 'night';
            }
        ">
```
- 위의 코드에서 `document.querySelector('#night_day')`은 사실상 자기 자신을 가리키고 있다. 따라서 이 코드를 간결하게 작성할 필요가 있는데, 이 때 사용할 수 있는 방법이 `this`이다. 아래를 참고한다.

```HTML
<input type="button" value="night" onclick="
            if(this.value === 'night')  {
                document.querySelector('body').style.backgroundColor = 'black';
                document.querySelector('body').style.color = 'white';
                this.value = 'day';
            }
            else  {
                document.querySelector('body').style.backgroundColor = 'white';
                document.querySelector('body').style.color = 'black';
                this.value = 'night';
            }
        ">
```
- `this`를 사용하면 결국 자기 자신을 의미하는 것이기 때문에, input 태그의 id 속성을 제거해주어도 된다.

<br>

> 효율적인 코딩을 하고싶다면 중복을 끝까지 쫓아가서 없애주면 된다. 위의 코드 또한 마찬가지이다.

<br>

```HTML
var target라는 변수를 선언하여 중복되는 부분을 제거할 수 있다. 이전보다 더 간결하다.

<input type="button" value="night" onclick="
    var target = document.querySelector('body');
    if(this.value === 'night')  {
        target.style.backgroundColor = 'black';
        target.style.color = 'white';
        this.value = 'day';
    }
    else  {
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        this.value = 'night';
    }
">
```
- `var target = document.querySelector('body')` : target이라는 변수에 중복되는 값인 document.querySelector('body')를 선언해주었다.

<br>

### Reference
> https://opentutorials.org/course/3085/18801