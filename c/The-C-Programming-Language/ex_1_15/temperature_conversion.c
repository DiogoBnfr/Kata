#include <stdio.h>

float celsius_farenheit(float c) { return c * 9.0 / 5.0 + 32.0; }

float farenheit_celsius(float f) { return 5.0 * (f - 32.0) / 9.0; }

int main(void) {
  float c;
  float f;

  printf("Enter a temperature in Celsius: ");
  scanf("%f", &c);

  f = celsius_farenheit(c);
  printf("The temperature in Farenheit is %.2f\n", f);

  f = farenheit_celsius(f);
  printf("The temperature in Celsius is %.2f\n", f);

  return 0;
}
