# Decorator

```python
def decorate_initial(fx):
    # print('Running decorate_inital function')
    def wrapper():
        print("Hello there!")
        fx()
    return wrapper

def decorate_after(fx):
    # print('Running decorate_after function')
    def wrapper():
        fx()
        print("Function Execution Completed!")
    return wrapper


## Here, I am decorating the function. When this file is executed; at first this @decorate_greet will executed even if the greet function is not called.
## This is why we need wrapper and return the wrapper in decorate_greet function.
@decorate_after
@decorate_initial
def real_function():
    print("My Real function Exectuion....")


real_function()

```
