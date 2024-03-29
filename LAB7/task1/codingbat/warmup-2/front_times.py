def front_times(str, n):
  star=''
  if(len(str)<=3):
    star=str
  else:
    star=str[:3]
  ans=''
  for _ in range(n):
    ans+=star
  return ans
