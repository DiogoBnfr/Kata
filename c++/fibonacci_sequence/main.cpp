#include <iostream>

using namespace std;

int main(void) {
  int n, t1 = 0, t2 = 1, nextTerm = 0;

  cout << "Enter the number of terms: ";
  cin >> n;
  cout << "The first " << n << " terms of the Fibonacci sequence are: ";
  for (int i = 0; i < n; i++) {
    if (i == 1) {
      cout << t1 << ", " << endl;
      continue;
    }
    if (i == 2) {
      cout << t2 << ", " << endl;
      continue;
    }
    nextTerm = t1 + t2;
    t1 = t2;
    t2 = nextTerm;

    cout << nextTerm << ", " << endl;
  }
  return 0;
}
