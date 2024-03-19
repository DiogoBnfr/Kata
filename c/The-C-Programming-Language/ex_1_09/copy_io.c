#include <stdio.h>

int main(void) {
  char last_c = '\0';
  char c;
  while ((c = getchar()) != EOF) {
    if (c != ' ' || last_c != ' ')
      putchar(c);
    last_c = c;
  }
  return 0;
}
