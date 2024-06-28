import streamlit as st

st.header("FLAMES GAME")
st.write("Enter your name and your crush's name to find out your relationship status")

name1 = list(st.text_input("Enter first name"))
name2 = list(st.text_input("Enter second name"))

if st.button("SUBMIT"):
    string = []
    for i in name1:
        if i not in name2:
            string += i
        else:
            name2.remove(i)

    c = len(string) + len(name2)
    d = ['F', 'L', 'A', 'M', 'E', 'S']
    
    while len(d) > 1:
        a = c % len(d) - 1
        if a < 0:
            d = d[:len(d)-1]
        else:
            d = d[a+1:] + d[:a]

    result = ""
    if d[0] == "F":
        result = "It's a Friendship"
    elif d[0] == "L":
        result = "It's Love"
    elif d[0] == "A":
        result = "It's Affection"
    elif d[0] == "M":
        result = "It's Marriage"
    elif d[0] == "E":
        result = "It's Enemy"
    else:
        result = "It's Siblings"

    st.success(f"Your Result is: {result}")