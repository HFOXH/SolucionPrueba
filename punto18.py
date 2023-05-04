x = int(input("Ingrese el número a convertir, que esta en base 10: "))
k = int(input("Ingrese la base en la que quiere representar el número: "))
def convert_base(x,k):
    digitos = []
    while x > 0:
        digitos.append(str(x % k))
        x //= k
    if not digitos:
        digitos.append('0')
    return ''.join(reversed(digitos))
print(convert_base(x,k))