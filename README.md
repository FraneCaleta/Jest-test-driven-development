### Trying out test-driven development (TDD) with simple test cases and functions by using Jest.

Test-driven development can be simply described by the following set of rules (life cycle):
1) write a "single" unit test describing an aspect of the program
2) run the test, which should fail because the program lacks that feature
3) write "just enough" code, the simplest possible, to make the test pass
4) "refactor" the code until it conforms to the simplicity criteria
5) repeat, “accumulating” unit tests over time

By running npm test, all of the test suites will be executed each time we save a change in our code.
We can also generate a code coverage page by adding ***--coverage*** command to our jest script:
***"test": "jest --watchAll --verbose --coverage"***


***Note: Test cases written in Croatian languange.***