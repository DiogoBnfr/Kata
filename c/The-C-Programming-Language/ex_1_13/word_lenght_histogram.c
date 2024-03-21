#include <linux/limits.h>
#include <stdio.h>
#include <string.h>

#define BUFFER 100

int main(int argc, char *argv[]) {
  int histogram[BUFFER];

  for (int i = 0; i < BUFFER; ++i) {
    histogram[i] = 0;
  }

  char c;
  int word_lenght = 0;
  while ((c = getchar()) != EOF) {
    if (c == ' ' || c == '\t' || c == '\n' || c == EOF) {
      if (word_lenght > 0 && word_lenght < BUFFER)
        ++histogram[word_lenght];
      word_lenght = 0;
    } else
      ++word_lenght;
  }

  if (argc < 2) {
    // Print vertical histogram
    int max_frequency = 0;
    for (int i = 0; i < BUFFER; ++i) {
      if (histogram[i] > max_frequency) {
        max_frequency = histogram[i];
      }
    }
    for (int i = max_frequency; i > 0; --i) {
      printf("\n%3d  ", i);
      for (int j = 0; j < BUFFER; ++j) {
        if (histogram[j] >= i)
          printf("  █");
      }
    }
    printf("\n     ");
    for (int i = 0; i < BUFFER; ++i) {
      if (histogram[i] != 0) {
        printf("%3d", i);
      }
    }
    printf("\n");
  } else {
    if (strcmp(argv[1], "-h") == 0) {
      // print horizontal histogram
      for (int i = 0; i < BUFFER; ++i) {
        if (histogram[i] != 0) {
          printf("\n%3d  ", i);
          for (int j = 0; j < histogram[i]; ++j)
            printf("▆");
          printf(" %d", histogram[i]);
        }
      }
      printf("\n");
    }
  }

  return 0;
}
