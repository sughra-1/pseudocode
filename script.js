//=================SPLIT THE NOTA================//
//=================UPPGIFT G=====================//


/*  START 

FUNCTION SplittingBills

SET TotalAmount from INPUT = 1000
SET TotalFriends from INPUT = 4
SET Drick from INPUT = 0.10

SET FinalAmount
SET OnePersonAmount

IF Drick = 0 THEN
CALCULATE FinalAmount = TotalAmount

ELSE
CALCULATE FinalAmount = TotalAmount + (TotalAmount * Drick)

ENDIF

CALCULATE  OnePersonAmount = FinalAmount / TotalFriends

IF OnePersonAmount > 300 THEN

Print "Bill Amount is High "

ELSE

PRINT "Correct Estimate of per person bill Amount"
ENDIF


ENDFUNCTION*/




/*====================UPPGIFT VG==================
=================================================*/

/* START

SET firstword = "EYE"
SET lastword = "LID"

SET user_input = firstword

WHILE  user_input != lastword

DO

   PRINT "write another word:"

   INPUT new_word

    IF new_word  NOT IN  dictionary  THEN

    PRINT "could not find this word in dictionary"

    ELSE IF  wordlength(new_word)  !=  wordlength(user_input)  THEN
    PRINT  "Wrong word, the word length should be the same"

    ELSE IF  numberof_change_words(user_input, new_word)  != 1  THEN
    PRINT  "You can change just one letter"

    ELSE
    user_input= new_word
   PRINT  "Goal achieved"

 ENFIF

ENDWHILE

PRINT  "GOOD JOB!"

ENDFUNCTION
*/