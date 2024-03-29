def end_other(a:str, b:str):
  a=a.lower()
  b=b.lower()
  if(len(a)>len(b)):
    return a[len(a)-len(b):]==b
  else:
    return b[len(b)-len(a):]==a
  
