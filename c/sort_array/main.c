#include <stdio.h>

void sort_array(int arr[], int n) {
  int min, temp, i, j;

  for (i = 0; i < n - 1; i++) {
    min = i;
    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
}

void print_array(int arr[], int n) {
  for (int i = 0; i < n; i++) {
    if (i == n - 1) {
      printf("%ld", arr[i]);
      break;
    }
    printf("%ld -> ", arr[i]);
  }
}

int main() {
  int arr[] = {300, 4, 5, 6, 100, 222};
  int n = sizeof(arr) / sizeof(arr[0]);

  sort_array(arr, n);
  print_array(arr, n);

  return 0;
}