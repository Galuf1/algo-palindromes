def palindrome(word):
    # clean the word from spaces and puctuation and lowercase it
    word_low = str(word).lower()
    word_cleaned = "".join(x for x in word_low if x.isalnum())

    # we keep 2 pointers moving in opposite directions during the length of the string, if any of them are not equal it is not a palindrome 
    left = 0
    right = -1
    for i in range(len(word_cleaned)):
        if word_cleaned[left] == word_cleaned[right]:
            left +=1
            right -=1
        else:
            return False
    return True