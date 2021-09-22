#include "iostream"
using namespace std;

int main(int argc, char const *argv[])
{
    string miCadena = "hola, mundo!";

    cout << miCadena;

    miCadena[0] = 'Y';

    cout << miCadena;

    return 0;
}
