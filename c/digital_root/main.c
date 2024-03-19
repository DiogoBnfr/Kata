#include <stdio.h>

int digital_root(int n) {
  int sum = 0;
  while (n > 0) {
    int digit = n % 10;
    sum += digit;
    n /= 10;
  }
  if (sum > 9)
    return digital_root(sum);
  else
    return sum;
}

int main(void) {
  int n = 16;
  printf("(n : dr) -> (%d : %d)\n", n, digital_root(n));
}
