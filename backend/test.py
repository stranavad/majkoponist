values = {
    1: 1,
    2: 0,
    3: 0,
    4: 0
}

percentage = 0
num_of_nums = 0

for value in values:
    pers = value * values[value]
    percentage += pers
    num_of_nums += value

print(percentage / num_of_nums)