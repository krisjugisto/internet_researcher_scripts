#coding: utf-8
import workflow
import datetime

action_out = datetime.date.today().year

workflow.set_output(str(action_out))
