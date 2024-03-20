#include <stdio.h>

int main(void) {
  int num, qtd, sum, min, max;
  num = qtd = sum = min = max = 0;
  while (1) {
    printf("Enter a number (0 = exit): ");
    scanf("%d", &num);
    if (num == 0)
      break;
    if (qtd == 0)
      min = max = num;
    qtd++;
    sum += num;
    if (num > max)
      max = num;
    if (num < min)
      min = num;
  }
  printf("Max: %d\nMin: %d\nAverage: %.2f\n", max, min, (float)sum / qtd);
}
