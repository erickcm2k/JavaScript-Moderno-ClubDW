#include <stdio.h>
int modifyNumbers(int *num);

void swapValues(int a, int b);
void swapValuesPtr(int *a, int *b);

int main()
{
    int n1 = 100, n2 = 200;

    // Sin usar apuntadores
    // printf("Sin usar apuntadores.\n");
    // printf("%d %d \n", n1, n2);
    // swapValues(n1, n2);
    // printf("%d %d \n", n1, n2);

    //Usando apuntadores
    printf("Usando apuntadores.\n");
    printf("%d %d \n", n1, n2);
    swapValuesPtr(&n1, &n2);
    printf("%d %d \n", n1, n2);
}

void swapValues(int a, int b)
{
    int temp = a;
    a = b;
    b = temp;
};

void swapValuesPtr(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
};
