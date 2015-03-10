#coding: utf-8
import datetime
import workflow

now = datetime.date.today()
action_out = datetime.date(now.year, now.month, now.day).isocalendar()[1]+1

workflow.set_output(str(action_out))
