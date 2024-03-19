#include <stdio.h>

int main(void) {
  int blank_count = 0;
  int tab_count = 0;
  int newline_count = 0;

  char c;
  while ((c = getchar()) != EOF) {
    if (c == ' ')
      ++blank_count;
    if (c == '\t')
      ++tab_count;
    if (c == '\n')
      ++newline_count;
  }

  printf("\nBlank: %d\nTab: %d\nNew Line: %d\n", blank_count, tab_count,
         newline_count);

  return 0;
}
