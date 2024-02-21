#include <stdio.h>

int main() {
  int nl = 0, tab = 0, bl = 0;
  char c;
  while ((c = getchar()) != -1) {
    if (c == '\n') ++nl;
    if (c == '\t') ++tab;
    if (c == ' ') ++bl;
  }
  printf("new line: %d tab: %d blank: %d\n", nl, tab, bl);
  return 0;
}
