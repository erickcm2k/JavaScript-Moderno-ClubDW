#include <stdio.h>
int squareNumbers(int *num);

int main()
{
    int num[6] = {1, 2, 3, 4, 5, 6};

    printf("Arreglo original \n");
    for (int i = 0; i < 6; i++)
    {
        printf("%d \n", num[i]);
    }

    squareNumbers(num);

    printf("Arreglo modificado \n");
    for (int i = 0; i < 6; i++)
    {
        printf("%d \n", num[i]);
    }

    return 0;
}

int squareNumbers(int *num)
{
    int sum = 0.0;

    for (int i = 0; i < 6; ++i)
    {
        num[i] = num[i] * num[i];
    }

    return sum;
}