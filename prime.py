def prime(n); # return True if n is prime
    for i in range(2, n):
        if n % i == 0:
            return False
    return True
```
The `# Path: prime.py` comment is a special comment that tells the `import` statement which file to load.  The `prime` function is then loaded into the global namespace.  Note that all functions defined in the file are loaded, so if you have a `main` function in the file, it will be loaded as well.  If you want to prevent this, you can use the `__all__` variable:
```
# Path: prime.py
__all__ = ['prime']