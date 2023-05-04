a=int(input('Ingrese número 1: '))
b=int(input('Ingrese número 2: '))
def division(a,b):
    if(b == 0):
        return print('No se puede dividir entre 0')
    return print(int(a/b))
division(a,b)