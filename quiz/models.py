from django.db import models
import os


def get_quizzes():
    path = os.path.dirname(os.path.abspath(__file__))
    quizfiles = os.path.join(path, 'static', 'quiz')
    for it in os.scandir(quizfiles):
        if it.is_dir():
            name = it.path.split('/')[-1]
            yield name
