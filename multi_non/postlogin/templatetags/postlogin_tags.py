from django import template
import re

register = template.Library()

@register.filter
def replace_underscore(string):
    return string.replace('_', ' ')
