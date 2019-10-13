from django.shortcuts import render

# Create your views here.
# import request
from django.views.decorators.csrf import csrf_exempt
import requests
import json
from django.http import HttpResponse

# @csrf_exempt
def get_commits(request):
    url = 'https://api.github.com/repos/nodejs/node-v0.x-archive/commits'
    response = requests.get(url)
    commits = json.loads(response.content)
    for commit in commits:
        print(commit)
    return HttpResponse(json.dumps(commits))
