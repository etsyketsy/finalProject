import random


def generate_numbering(length=4):
    # generate random code for numbering
    characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return ''.join(random.choice(characters) for i in range(length))
