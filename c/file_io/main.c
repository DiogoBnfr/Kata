#include <stdio.h>

int main(int argc, char const* argv[]) {
  char buffer[1024];
  FILE* file;

  file = fopen("test.txt", "w+");

  fprintf(file, "Hello, world!\n");
  fputs("This is testing for fputs...\n", file);

  rewind(file);

  while (fgets(buffer, sizeof(buffer), file) != NULL) {
    printf("%s", buffer);
  }

  fclose(file);

  return 0;
}
