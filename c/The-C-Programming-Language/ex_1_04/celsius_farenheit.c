#include <stdio.h>

int main() {
  float celsius, fahr;
  int lower, step, upper;

  lower = 0;
  step = 20;
  upper = 300;

  celsius = lower;

  printf("%s", "Celsius->Farenheit\n");

  while (celsius <= upper) {
    fahr = celsius * 9.0 / 5.0 + 32.0;
    printf("%5.1f C\t%5.0f F\n", celsius, fahr);
    celsius += step;
  }
  return 0;
}
