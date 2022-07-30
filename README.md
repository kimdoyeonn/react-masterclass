#  REACT_MASTERCLASS

## Recoil

### atom

### selector 

### framer-motion
애니메이션을 쉽게 구현할 수 있도록 해주는 라이브러리


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