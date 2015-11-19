## To Reproduce

1. Install Elm 0.16
2. `elm make src/Main.elm`
3. open index.html

**Expected:** You see the text "Yay! I didn't crash!"
**Actual:** Runtime exception!

This is not reproducible in 0.15.1.
