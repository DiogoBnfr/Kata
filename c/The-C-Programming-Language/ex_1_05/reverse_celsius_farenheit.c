#include <stdio.h>

int main() {
  float celsius, fahr;
  int lower, step, upper;

  lower = 0;
  step = 20;
  upper = 300;

  printf("%s", "Celsius->Farenheit\n");

  for (celsius = upper; celsius >= lower; celsius = celsius - 20) {
    fahr = celsius * 9.0 / 5.0 + 32.0;
    printf("%5.1f C\t%5.0f F\n", celsius, fahr);
  }
  return 0;
}
