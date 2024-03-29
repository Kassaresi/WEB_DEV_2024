def date_fashion(you, date):
  if min(you,date)<=2:
    return 0
  elif max(you,date)>=8:
    return 2
  else:
    return 1