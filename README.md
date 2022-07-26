# Quiz

H5P set of quiz from https://daeu-sonate.fr

## Quick start

1. Add "quiz" to your INSTALLED_APPS setting like this :

```python
INSTALLED_APPS = [
    ...
    'quiz',
]
```

2. Include the polls URLconf in your project urls.py like this :

```python
path('quiz/', include('quiz.urls')),
```

3. Start the development server.

4. Visit http://127.0.0.1:8000/quiz/

## Build

1. Move into django-quiz

2. Run `python setup.py sdist`

3. Move back into the project directory

4. Install the app `pip install django-quiz/dist/django-quiz-1.0.tar.gz`
