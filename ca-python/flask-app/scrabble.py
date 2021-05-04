letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
points = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 4, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10]


letter_to_points = {key:value for key, value in zip(letters, points)} # Must use a list comprehension to create this dictionary
letter_to_points[" "] = 0

def score_word(word):
    point_total = 0

    for letter in word:
        point_total += letter_to_points.get(letter, 0) # Need to use get() with the KEY in order to get the value, if no key avail, return 0.
    
    return point_total

brownie_points = score_word("BROWNIE")
print(brownie_points)


player_to_words = {
    "player1": ["BLUE","TENNIS","EXIT"],
    "wordNerd": ["EARTH","EYES","MACHINE"],
    "Lexi Con": ["ERASER","BELLY","HUSKY"],
    "Prod Reader": ["ZAP","COMA","PERIOD"]
}

player_to_points = {}

for player in player_to_words:
    player_points = 0
    for word in words:
        player_points += score_word(word)
    player_to_points[player]: player_points

print(player_points)

