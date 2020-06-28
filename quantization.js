// Quantization (양자화, 동적 계획법)

// 수열의 각 숫자별 오차 제곱의 합을 최소화 하는 양자화 결과를 구하라.

/**
 * 테스트 케이스 : 2
 *
 * 수열의 길이, 사용할 숫자의 수 : 10, 3
 * 수열의 숫자 : 3 3 3 1 2 3 2 2 2 1
 *
 * 수열의 길이, 사용할 숫자의 수: 9, 3
 * 수열의 숫자 : 1 744 755 4 897 890 6 777
 *
 * 예제 출력
 * 0
 * 651
 */

function Answer(n, s, A) {
  const INF = 987654321;

  // A[]: 양자화해야 할 수열, 정렬한 상태
  // pSum[] : A[]의 부분합을 저장한다. pSum[i]는 A[0] .. A[i]의 합
  // pSqSum[] : A[]제곱의 부분합을 저장한다. pSqSum[i]는 A[0]^2 .. A[i]^2의 합
  let pSum = Array(101);
  let pSqSum = Array(101);

  let B = A;

  // A를 정렬하고 각 부분합을 계산한다.
  function precalc() {
    A.sort();
    pSum[0] = A[0];
    pSqSum[0] = A[0] * A[0];
    for (let i = 1; i < n; i++) {
      pSum[i] = pSum[i - 1] + A[i];
      pSqSum[i] = pSqSum[i - 1] + A[i] * A[i];
    }
  }
  precalc();
  console.log(pSqSum);

  // A[lo] .. A[hi] 구간을 하나의 숫자로 표현할 때 최소 오차 합을 계산한다.
  function minError(lo, hi) {
    // 부분합을 이용해 A[lo] ~ A[hi]까지의 합을 구한다.
    const sum = pSum[hi] - (lo === 0 ? 0 : pSum[lo - 1]);
    const sqSum = pSqSum[hi] - (lo === 0 ? 0 : pSqSum[lo - 1]);
    // 평균을 반올림한 값으로 이 수들을 표현한다.
    const m = Math.round(0.5 + sum / (hi - lo + 1));
    // sum(A[i]-m)^2를 전개한 결과를 부분 합으로 표현
    const ret = sqSum - 2 * m * sum + m * m * (hi - lo + 1);
    return ret;
  }

  const cache = Array.from(Array(101), () => new Array(11));

  function quantize(from, parts) {
    // 기저 사례: 모든 숫자를 다 양자화했을 때
    if (from === n) return 0;
    // 기저 사례: 숫자는 아직 남았는데 더 묶을 수 없을 때 아주 큰 값을 반환한다.
    if (parts === 0) return INF;
    let ret = cache[from][parts];
    if (ret || ret === 0) return ret;
    ret = INF;
    // 조각의 길이를 변화시켜 가며 최소치를 찾는다.
    for (let partSize = 1; from + partSize <= n; ++partSize) {
      ret = Math.min(
        ret,
        minError(from, from + partSize - 1) +
          quantize(from + partSize, parts - 1)
      );
    }

    return ret;
  }

  return quantize(0, s);
}

console.log(Answer(10, 3, [3, 3, 3, 1, 2, 3, 2, 2, 2, 1]));
