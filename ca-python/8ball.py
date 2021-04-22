import random

name = "Dom"
question = "Will I finish this?"
answer = ""
random_number = random.randint(1,9)

if random_number == 1:
    answer = "Yes - definitely."
elif random_number == 2:
    answer = "It is decidedly so."
elif random_number == 3:
    answer = "Without a doubt."
elif random_number == 4:
    answer = "Reply hazy, try again."
elif random_number == 5:
    answer = "Ask again later."
elif random_number == 6:
    answer = "Better not tell you now."
elif random_number == 7:
    answer = "YMy sources say no."
elif random_number == 8:
    answer = "Outlook not so good."
elif random_number == 9:
    answer = "Very doubtful."
else:
    answer = "Error"

if name != "" and question != "":
    print(name + " asks: " + question)
elif name == "" and question != "":
    print(question)
else:
    print("You need to provide a question.")

    
print("Magic 8-Ball's answer: " + answer)