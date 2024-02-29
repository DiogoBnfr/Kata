#include <math.h>
#include <stdbool.h>

int size_num(int num) {
  int size = 0;
  while (num > 0) {
    num /= 10;
    size++;
  }
  return size;
}

bool narcissistic(int num) {
  int fnum = num;
  int digit = 0;
  int sum = 0;
  int size = size_num(num);
  int power = size;

  while (size > 0) {
    digit = num % 10;
    sum += pow(digit, power);
    num /= 10;
    size--;
  }

  if (sum == fnum)
    return true;
  return false;
}

int main(void) {
  narcissistic(7);
  return 0;
}
