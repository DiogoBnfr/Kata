#include <stdbool.h>
#include <stdio.h>

#define FILENAME_SIZE 1024
#define MAX_LINE 2048

int main(int argc, char const *argv[]) {
  FILE *file;

  char filename[FILENAME_SIZE];
  char buffer[MAX_LINE];

  int readline = 0;

  printf("File: ");
  scanf("%s", &filename);

  printf("Readline: ");
  scanf("%d", &readline);

  file = fopen(filename, "r");
  if (file == NULL) {
    printf("Error: Couldn't open file.\n");
    return 1;
  }

  bool keep_reading = true;
  int current_line = 1;
  do {
    fgets(buffer, MAX_LINE, file);

    if (feof(file)) {
      keep_reading = false;
      printf("File %d lines.\n", current_line);
      printf("Couldn't find line %d.\n", readline);
    } else if (current_line == readline) {
      keep_reading = false;
      printf("Line:\n%s", buffer);
    }

    current_line++;

  } while (keep_reading == true);

  fclose(file);

  return 0;
}
