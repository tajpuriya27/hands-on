
def decorate_greet(fx):
    def wrapper():
        print("Decorating greet")
        fx()
        print("Decorating greet done")
    return wrapper

## Here, I am decorating the function. When this file is executed; at first this @decorate_greet will executed even if the greet function is not called.
## This is why we need wrapper and return the wrapper in decorate_greet function.
@decorate_greet
def greet():
    print("Hello world")


greet()