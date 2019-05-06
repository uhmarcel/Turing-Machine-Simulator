
export const arithMultiply = 
`# Multiply TM program
# Outputs the multiplication of two inputs on alphabet {1}*

# For each multiplicand, copy input to end of tape
q0]r (#, q1) (1, q0)
q1]r (1/Y, q2) (#, q8)    
q2]l (#, q3)

# Copy first input at end of tape
q3]l (1/X, q4) (#, q0)   
q4]r (#, q5)        
q5]r (#, q6)
q6]r (#/1, q7)
q7]l (X/1, q3)          

# All multiplicands processed, finish 
q8]l (Y/1, q8) (#, q9)
q9]r (#, qh)`

export const binaryAddition =
`# Binary addition TM program
# Outputs the addition of all input binary numbers of the same length.

# Mark start of tape
q0]r (1, q1) (0, q1) 
q1]l (#/S, q2)

# Mark end of tape
q2]r (#, q3)
q3]r (#, q4) (1, q2) (0, q2)
q4]l (#/E, q5)
q5]l (S, q6)

# Make enough space for output
q6]r (1/X, q7) (0/Y, q7) (#/C, q10) (E/#, q14) 
	q7]r (E, q8)
	q8]r (#/A, q9) (0/A, q9)
	q9]l (X/1, q6) (Y/0, q6)

	q10]r (E, q11)
	q11]r (A/0, q11) (#/0, q12)
    q12]l (C/#, q6) 

# Set new marks for current input and end of tape
q14]r (A/0, q14) (#/E, q15)
q15]l (S/#, q16)
q16]r (#/C, q17)

# Add current input to output sum
q17]l (1/X, q18) (0/Y, q21) (#, q24)
	q18]r (X/1, q19) (Y/0, q19) (E, q19)
    q19]l (1/Y, q20) (0/X, q23)
    q20]l (1/0, q20) (0/1, q23)
    
    q21]r (X/1, q22) (Y/0, q22) (E, q22)
    q22]l (1/X, q23) (0/Y, q23)
    
    q23]l (X/1, q17) (Y/0, q17)
   
# Reset tokens and repeat sum with next input   
q24]r (C/#, q25)
q25]r (#/C, q26) (E/#, q28)
q26]r (X/1, q27) (Y/0, q27)
q27]l (C, q17)

# Move to final output position, clear unused zeroes and halt
q28]l (X/1, q29) (Y/0, q29)
q29]l (#, q30)
q30]r (1, q31) (#, qh)
q31]l (0/#, qh) (#, qh)
q32]l (0, q31)
`
 
export const copyPaste = 
`# CopyPaste TM program
# Returns an input on {1,0}* replicated.

q0]r (1/X, q1) (0/Y, q2) (#, qh)
q1]r (#/N, q6)
q2]r (#/M, q6)
q3]r (1/X, q4) (0/Y, q5) (N/1, q7) (M/0, q7)
q4]r (#/1, q6)
q5]r (#/0, q6)
q6]l (X/1, q3) (Y/0, q3) 
q7]l (#, qh)`

export const reverse = 
`# Reverse TM program
# Reverses the input string on {0,1}*.

q0]r (#, q1)
q1]l (1/X, q2) (0/Y, q4) (#, q7)
q2]r (#, q3)
q3]r (#/1, q6)
q4]r (#, q5)
q5]r (#/0, q6)
q6]l (X/1, q1) (Y/0, q1)
q7]r (#, qh)`