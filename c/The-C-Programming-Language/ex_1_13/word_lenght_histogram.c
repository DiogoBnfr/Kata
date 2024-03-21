#include <linux/limits.h>
#include <stdio.h>

#define BUFFER 100

int main(void) {
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

  int max_frequency = 0;
  for (int i = 0; i < BUFFER; ++i) {
    if (histogram[i] > max_frequency) {
      max_frequency = histogram[i];
    }
  }

  // print horizontal histogram
  printf("LEN  WORDS\n");
  for (int i = 0; i < BUFFER; ++i) {
    if (histogram[i] != 0) {
      printf("%3d  ", i);
      for (int j = 0; j < histogram[i]; ++j)
        printf("▆");
      printf(" %d\n", histogram[i]);
    }
  }
  printf("\n");

  // Print vertical histogram
  for (int i = max_frequency; i > 0; --i) {
    printf("%3d  ", i);
    for (int j = 0; j < BUFFER; ++j) {
      if (histogram[j] >= i)
        printf("  █");
    }
    printf("\n");
  }
  printf("     ");
  for (int i = 0; i < BUFFER; ++i) {
    if (histogram[i] != 0) {
      printf("%3d", i);
    }
  }
  printf("\n");

  return 0;
}
