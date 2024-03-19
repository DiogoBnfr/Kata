#include <stdio.h>

int main() {
  /* print farenheit and celsius table */
  float fahr, celsius;
  int lower, step, upper;

  lower = 0;
  step = 20;
  upper = 300;
  fahr = lower;

  printf("%s", "Farenheit->Celsius\n");

  while (fahr <= upper) {
    celsius = 5.0 * (fahr - 32.0) / 9.0;
    // or : celsius = (5.0/9.0) * (fahr - 32.0)
    printf("%3.0f F\t%6.1f C\n", fahr, celsius);
    fahr += step;
  }
  return 0;
}