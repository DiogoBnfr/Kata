#include <stdio.h>

const double TICKET = 30.5;
const int MIN_AGE = 10, MAX_AGE = 65;

int selection();
void clean();
int int_prompt();
double buy_tickets();

int main() {
  int opt;
  double price;

  char *movies[] = {"Missão Impossível: Acerto de Contas", "Barbie",
                    "Besouro Azul", "Oppenheimer"};

  opt = selection(4, movies);

  price = buy_tickets();

  printf("Filme: %s\nPreço Final: %.2f\n", movies[opt - 1], price);

  return 0;
}

int selection(int num_strings, char *strings[]) {
  int opt;

  printf("Que filme deseja assistir?\n");
  for (int i = 0; i < num_strings; i++)
    printf("[ %d ] : %s\n", i + 1, strings[i]);

  opt = int_prompt(num_strings);

  return opt;
}

double buy_tickets() {
  int num_tickets;
  double final_price = 0.0;
  int age = 0;

  printf("Quantos ingressos deseja? ");
  scanf("%d", &num_tickets);
  clean();
  for (int i = 0; i < num_tickets; i++) {
    do {
      if (age != 0)
        printf(
            "Erro! A idade inserida não pode ser superior a 150 ou inferior a "
            "0.\n");
      printf("Insira a idade do comprador do %do ingresso: ", i + 1);
      scanf("%d", &age);
      clean();
    } while (age < 0 || age > 150);

    if (age < MIN_AGE || age > MAX_AGE)
      final_price += TICKET / 2;
    else
      final_price += TICKET;

    age = 0;
  }
  return final_price;
}

int int_prompt(int num_opts) {
  int opt = 0;

  do {
    if (opt != 0) printf("Erro! Insira uma opção válida!\n");
    printf("Insira sua opção aqui: ");
    scanf("%d", &opt);
    clean();
  } while (opt <= 0 || opt > num_opts);

  return opt;
}
