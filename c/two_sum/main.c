#include <stdio.h>
#include <stdlib.h>

int *two_sum(int *nums, int numsSize, int target, int *returnSize) {
  int *result = (int *)malloc((sizeof(int) * 2));
  for (int i = 0; i < numsSize - 1; i++) {
    if (nums[i] >= target) continue;
    for (int j = 0; j < numsSize - 1; j++) {
      if (nums[i] + nums[j] == target) {
        result[0] = i;
        result[1] = j;
        break;
      }
    }
    break;
  }
  return result;
}

int main(void) {
  int nums[4] = {2, 7, 11, 15};
  int target = 9;
  int *ptr = two_sum(&nums, sizeof(nums) / sizeof(nums[0]), target, );
  printf("[ %d, %d ]\n", ptr[0], ptr[1]);
  return EXIT_FAILURE;
}
