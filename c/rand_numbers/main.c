#include <stdio.h>
#include <stdlib.h>

int main(int argc, char const *argv[]) {
  int num;

  for (int i = 0; i < 100; i++) {
    num = rand() % 100 + 1;
    printf("%d ", num);
  }

  return 0;
}
