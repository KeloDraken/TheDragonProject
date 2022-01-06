# Biltong - Python (Django) Backend

## Running as Development

1. Create a virtual environment
2. Install dependencies with `pip install -r requirements.txt`
3. Sync migrations `python manage.py migrate`
4. Create a superuser `python manage.py createsuperuser`
5. Run biltong `python manage.py runserver`

## Formatting

Please autoformat code using black `pip install black`

## General style guide

Code that does not follow guidelines will be rejected.

General conventions:

- Leave two lines before each function declaration.
- Type annotate variables and function parameters.
- `snake_case` for function and variable names, `PascalCase` for class names.
- Never use globals.
- Functions should have return types.
- Never use catch-all `except`. Always catch specific errors e.g. `except IndexError` 
