#include <stdio.h>

#define CTRL_ASCII_CHARS 31
#define ASCII_CHARS 255

int main(void) {
  char array[ASCII_CHARS + 1];

  for (int i = CTRL_ASCII_CHARS + 1; i <= ASCII_CHARS; ++i)
    array[i] = 0;

  int c;
  while ((c = getchar()) != EOF)
    array[c] += 1;

  printf("CODE ▏CHAR ▏FREQUENCY\n");
  for (int i = CTRL_ASCII_CHARS + 1; i <= ASCII_CHARS; ++i) {
    if (array[i] > 0) {
      printf("%4d ▏%4c ▏", i, i);
      for (int j = 0; j < array[i]; ++j)
        printf("▇");
      printf(" %d\n", array[i]);
    }
  }

  return 0;
}
