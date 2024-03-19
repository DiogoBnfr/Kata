#include <stdio.h>

int main() {
  printf("value of expression: %d", getchar() != EOF);
  return 0;
}

// Unix ctrl+d = EOF
// Windows ctrl+z = EOF
