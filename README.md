#  REACT_MASTERCLASS

## Recoil

### atom

### selector 

## framer-motion
애니메이션을 쉽게 구현할 수 있도록 해주는 라이브러리
애니메이션으로 인해 element가 변경되어도 모든 element가 재랜더링되지 않음

### #7.12 Slider part One

`AnimatePresence`으로 간단하게 슬라이드 만들기

- variants 객체를 만들고 그 안에 initial, animate, exit에 사용할 애니메이션을 정의해 준 다음 사용할 요소에 적용해줌

```js
  const boxVariants = {
    initial: {
      x: 500,
      opacity: 0,
      scale: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      }
    },
    exit: {
      opacity: 0,
      scale: 0,
      x: -500,
      transition: {
        duration: 1,
      }
    },
  };

  <AnimatePresence>
  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
    i === visible ? (
      <Box
        key={i}
        variants={boxVariants}
        initial='initial'
        animate='visible'
        exit='exit'
      >
        {i}
      </Box>
    ) : null
  )}
</AnimatePresence>
```

### #7.13 Slider part Two

앞에서 했던 슬라이드는 한쪽으로만 움직이는 슬라이더
반대로 넘어가는 슬라이더 버튼을 만들어도 애니메이션은 똑같은 쪽으로만 움직임
이번에 한건 반대로 넘어가는 애니메이션을 만들어주는 것

```js
  const boxVariants = {
    entry: (back: boolean) => ({
      x: back ? -500 : 500,
      opacity: 0,
      scale: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
    exit: (back: boolean) => ({
      opacity: 0,
      scale: 0,
      x: back ? 500 : -500,
      transition: {
        duration: 1,
      },
    }),
  };

  <AnimatePresence exitBeforeEnter custom={back}>
    <Box
      custom={back}
      key={visible}
      variants={boxVariants}
      initial='entry'
      animate='center'
      exit='exit'
    >
      {visible}
    </Box>
  </AnimatePresence>
```

variants를 커스텀해서 사용할 수 있음
custom을 사용하면 객체를 가진 객체인 variants가 함수를 사용하여 객체에 함수를 사용할 수 있게 됨
이를 사용하여 이 전 코드에서 슬라이드를 반대로 움직이게할 수 없었던 문제를 해결함

+ 추가로 `AnimationPresence`에 `exitBeforeEnter`를 true로 하면 exit이 완전히 끝난 이후에 다음 애니메이션이 실행되게 할 수 있음
+ 기본은 exit과 다음 등장애니메이션이 동시에 실행되는 것
