def string_splosion(str):
  ans=''
  for i in range(len(str)+1):
    for j in range(0,i):
      ans+=str[j]
  return ans